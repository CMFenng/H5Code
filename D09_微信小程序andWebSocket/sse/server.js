var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req,res){

	var filename = req.url;

	if (filename == "/dates"){
		//设置返回头
		res.writeHead(200,{
			"Content-Type":"text/event-stream",
			"Cache-Control":"no-cache",
			"Connection":"keep-alive"
		})

		interval = setInterval(function (){

			res.write("data:"+new Date()+"\n\n");
		},1000)
	}else if(filename == "/sse.html" || filename == "/"){

		var rs = fs.createReadStream("sse.html");
		rs.pipe(res);
	}
})

server.listen(3000);