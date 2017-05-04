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

  if (!empty($_GET["count"])&&!empty($_GET["start"])){
  	$doubanApi = "https://api.douban.com/v2/movie/top250?count={$_GET["count"]}&start={$_GET["start"]}";
  }else if(!empty($_GET["count"])){
  	$doubanApi = "https://api.douban.com/v2/movie/top250?count=".$_GET["count"];
  }else if(!empty($_GET["start"])){
  	$doubanApi = "https://api.douban.com/v2/movie/top250?start=".$_GET["start"];
  }else{
  	$doubanApi = "https://api.douban.com/v2/movie/top250";
  }
  $resultStr = httpGet($doubanApi);
  echo $resultStr;
  

  
 ?>