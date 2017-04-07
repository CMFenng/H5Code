<?php
	//通过get请求提交的参数
	/*$user = $_GET["user"];
	$pwd = $_GET["pwd"];*/
	$user = $_POST["user"];
	$pwd = $_POST["pwd"];
	if($user == "lisi"){
		echo $user . " 我们不欢迎你";
	}else{
		echo "欢迎" . $user . "注册，请牢记你的密码：" . $pwd; 
	}

?>