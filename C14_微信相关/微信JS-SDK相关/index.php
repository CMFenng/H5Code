<?php
error_reporting(E_ERROR);
require_once "jssdk.php";
$jssdk = new JSSDK("wx20a0b647035a14b3", "dfeb6add21153d39932cea45b494fece");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
  <title></title>
  <style type="text/css">
    *{
        margin: 0;
        padding: 0;
    }
    #box div{
        width: 200px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin: 50px auto;
        background-color: red;
        color: white;
    }
  </style>
</head>
<body>
  <div id="box">
  	<div>本地相册或相机</div>
  	<div>使用内部地图</div>
  	<div>获取网络状态</div>
  	<div>扫一扫</div>
  </div>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
  /*
   * 注意：
   * 1. 所有的JS接口只能在公众号绑定的域名下调用，公众号开发者需要先登录微信公众平台进入“公众号设置”的“功能设置”里填写“JS接口安全域名”。
   * 2. 如果发现在 Android 不能分享自定义内容，请到官网下载最新的包覆盖安装，Android 自定义分享接口需升级至 6.0.2.58 版本及以上。
   * 3. 常见问题及完整 JS-SDK 文档地址：http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html
   *
   * 开发中遇到问题详见文档“附录5-常见错误及解决办法”解决，如仍未能解决可通过以下渠道反馈：
   * 邮箱地址：weixin-open@qq.com
   * 邮件主题：【微信JS-SDK反馈】具体问题
   * 邮件内容说明：用简明的语言描述问题所在，并交代清楚遇到该问题的场景，可附上截屏图片，微信团队会尽快处理你的反馈。
   */
  wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: <?php echo $signPackage["timestamp"];?>,
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
    jsApiList: [
      // 所有要调用的 API 都要加到这个列表中
      //选择本地相册或拍照的接口
      'chooseImage',
      //使用微信内置地图查看位置接口
      'openLocation',
      //获取网络状态接口
      'getNetworkType',
      //调起微信扫一扫接口
      'scanQRCode'
    ]
  });
  wx.ready(function () {
    // 在这里调用 API
    var div1 = document.querySelector('#box div:nth-of-type(1)');
    var div2 = document.querySelector('#box div:nth-of-type(2)');
    var div3 = document.querySelector('#box div:nth-of-type(3)');
    var div4 = document.querySelector('#box div:nth-of-type(4)');
    
    //获取本地相册或照相
    div1.onclick = function () {
    		wx.chooseImage({
		    count: 9, // 默认9
		    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
		    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
		    success: function (res) {
		        var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
		        alert(localIds);
		    }
		});
    }
    
    //打开内置地图
    div2.onclick = function () {
    		wx.openLocation({
		    latitude: 39.9244550000, // 纬度，浮点数，范围为90 ~ -90
		    longitude: 116.4034380000, // 经度，浮点数，范围为180 ~ -180。
		    name: '故宫', // 位置名
		    address: '北京市东城区东华门街道西北方向', // 地址详情说明
		    scale: 10, // 地图缩放级别,整形值,范围从1~28。默认为最大
		    infoUrl: 'http://weixin.qq.com' // 在查看位置界面底部显示的超链接,可点击跳转
		});
    }
    
    //查看设备信息（网络状态）
    div3.onclick = function () {
    		wx.getNetworkType({
		    success: function (res) {
		        var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
		        alert(networkType);
		    }
		});
    }
    
    //扫一扫
    div4.onclick = function () {
    		wx.scanQRCode({
		    needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
		    scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
		    success: function (res) {
			    var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
			}
		});
    }
    
  });
</script>
</html>
