<?php 
function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }

  if (empty($_GET['q'])){
  	echo '{"err":1,"msg":"没有填写搜索的关键字"}';
  }else if(!empty($_GET['q'])){
  	$api = "https://api.douban.com/v2/movie/search?q=".$_GET['q'];
  	$resultStr = httpGet($api);

  	echo $resultStr;
  }
 ?>