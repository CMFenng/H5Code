<?php
	//{"name" : "李四"};
//  echo "{\"name\" : \"李四\"}";


	$user = $_POST["user"];
	$pwd = $_POST["pwd"];
	echo "{\"name\" : \"$user\",\"pwd\" : \"$pwd\"}";
?>