var WebsocketServer = require("ws").Server;

//实例并设置端口号
var wss = new WebsocketServer({
	port:3001
});

//保存所有已连接的socket
var sockets = [];

//当有连接进来的时候触发
wss.on("connection",function (socket){
	//socket->管道
	sockets.push(socket);

	socket.on("message",function (message){

		console.log(message);
		// socket.send("啊，我接受到了你的"+message);

		for (var i=0; i<sockets.length; i++){

			if (sockets[i] != this){
				sockets[i].send(message);
			}
		}
	})
	socket.on("close",function (){

		for (var i=0; i<sockets.length; i++){
			if (sockets[i] == this){
				sockets.splice(i,1);
				break;
			}
		}
	})
})