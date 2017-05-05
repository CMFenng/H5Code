var React = require("react");
var ReactDOM = require("react-dom");

var names = ["tangcaiye","张三","李四","王五"];

var arr = [
	<h1>Hello world!</h1>,
	<h2>React is awesome</h2>
];

ReactDOM.render(
	// 只能有一个根元素
	<div>
		<h1 key="00">hello react and 唐菜也!</h1>
		{
			arr
		}
		{
			// names = [<div title=0>hello,tangcaiye!</div>,<div title=1>hello,张三!</div>]
			names.map(function (item,index){
				return <div title={index}>hello,{item}!</div>
			})
		}
	</div>,
	document.getElementById("app")
	);