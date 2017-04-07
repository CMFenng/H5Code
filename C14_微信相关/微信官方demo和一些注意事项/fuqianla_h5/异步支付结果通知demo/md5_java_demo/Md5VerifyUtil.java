package la.fuqian.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.web.bind.annotation.RequestMapping;

import com.alibaba.fastjson.JSON;

public class Md5VerifyUtil {
	/**
	 * 接收付钱拉通知入口
	 * @param request
	 * @param response
	 * @throws IOException
	 */
	@RequestMapping("/notify")
	public void handleNotify(HttpServletRequest request,HttpServletResponse response) throws IOException{
		
		String msg = request.getParameter("msg");
		String resMsg = "fail";
		if(!"".equals(msg) && msg !=null){
			//logger.info(String.format("接收付钱拉通知内容 msg\n%s", msg));
			// 随机返回成功失败、测试使用
			String[] str = { "SUCCESS", "SUCCESS", "SUCCESS", "FAIL", "SUCCESS" };
			int random = (int) (Math.random() * 5);
			resMsg =  str[random];
		}else{
			String requestStr = readReqStr(request);
			//logger.info(String.format("接收付钱拉通知内容\n%s", requestStr));
			try {
				@SuppressWarnings("unchecked")
				Map<String,Object> objMap = (Map<String, Object>) JSON.parse(requestStr);
				boolean flag = verify(objMap);
				if(flag){
					//logger.info("签名验证通过");
					resMsg = "success";
				}
			} catch (Exception e) {
				//logger.error("通知报文不合法，解析请求报文error!"+e);
			}
		}
		//logger.info("接收付钱拉通知后响应信息,"+resMsg);
		response.setContentType("text/html");
		response.getWriter().write(resMsg);
		
	}
	/**
	 * 请求转成string
	 * @param request
	 * @return
	 */
	public static String readReqStr(HttpServletRequest request){
		BufferedReader reader = null;
        StringBuilder sb = new StringBuilder();
        try{
        	reader = new BufferedReader(new InputStreamReader(request.getInputStream(), "utf-8"));
            String line = null;
            while ((line = reader.readLine()) != null){
                sb.append(line);
            }
        }catch(IOException e){
        	e.printStackTrace();
        	System.out.println(e);
        }finally{
        	try {
				if (null != reader){
				    reader.close();
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
        }
        return sb.toString();
	}
	
	/**
	 * 验证接收付钱拉通知签名入口
	 * 
	 * @param merch_id
	 * @param sign_type
	 * @param objMap
	 * @return
	 * @throws Exception
	 */
	public boolean verify(Map<String, ?> objMap) {
		boolean flag = false;
		String signKey = "d2d55ca892664009b8b8be550b1c1da9";
		try {
			String hexSign = String.valueOf(objMap.get("sign_info"));
			// 得到待签名数据
			Map<String, ?> filterMap = paraFilter(objMap);
			String linkStr = createLinkString(filterMap);	
			// 拼装md5串  md5.linkStr
			String templinkStr = linkStr + signKey;
			String md5Hex = DigestUtils.md5Hex(templinkStr.getBytes("UTF-8"));
			// 验证签名后数据是否相同
			flag = hexSign.equalsIgnoreCase(md5Hex);
		} catch (Exception e) {
			//验证通知签名信息error 
		}
		return flag;

	}

	/**
	 * 除去数组中的空值和签名参数
	 * 
	 * @param sArray
	 *            签名参数组
	 * @return 去掉空值与签名参数后的新签名参数组
	 */
	public static Map<String, ?> paraFilter(Map<String, ?> sArray) {
		Map<String, Object> result = new HashMap<String, Object>();
		if ((sArray == null) || (sArray.size() <= 0)) {
			return result;
		}
		for (String key : sArray.keySet()) {
			Object value = sArray.get(key);
			if ((value == null) || value.equals("") || key.equalsIgnoreCase("sign_info")
					|| key.equalsIgnoreCase("sign_type")) {
				continue;
			}
			if (value instanceof Map) {
				@SuppressWarnings("unchecked")
				Map<String, ?> m = (Map<String, ?>) value;
				result.put(key, paraFilter(m));
			} else if (value instanceof List) {
				continue;// 不应包含多集合数据
			} else {
				result.put(key, value);
			}
		}
		return result;
	}
	
	/**
	 * 把数组所有元素排序，并按照“参数=参数值”的模式用“&”字符拼接成字符串
	 * 
	 * @param params
	 *            需要排序并参与字符拼接的参数组
	 * @return 拼接后字符串
	 */
	public static String createLinkString(Map<String, ?> params) {
		List<String> keys = new ArrayList<String>(params.keySet());
		Collections.sort(keys);

		StringBuffer prestr = new StringBuffer("");
		for (int i = 0; i < keys.size(); i++) {
			String key = keys.get(i);
			Object o = params.get(key);
			String value = String.valueOf(o);
			if (o instanceof Map) {
				@SuppressWarnings("unchecked")
				Map<String, ?> m = (Map<String, ?>) o;
				value = "{" + createLinkString(m) + "}";
			}

			if (i == (keys.size() - 1)) {// 拼接时，不包括最后一个&字符
				prestr.append(key + "=" + value);
			} else {
				prestr.append(key + "=" + value + "&");
			}
		}
		return prestr.toString();
	}
}
