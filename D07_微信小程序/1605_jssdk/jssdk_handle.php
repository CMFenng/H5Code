<?php 

	//$_GET 获取通过get请求发过来的参数  $_POST
	$url = $_GET["url"];
	// 输出
	// echo "服务器返回的".$url;

	require_once "jssdk.php";
	$jssdk = new JSSDK("wxb14cedc11b4862ca", "c4d025053e5673c63b2ec2cee02ca521",$url);
	$signPackage = $jssdk->GetSignPackage();

	//json_encode->将php的数组或者对象转化为json字符串
	echo json_encode($signPackage);
 ?>