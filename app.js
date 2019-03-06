var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var  port = process.env.PORT || 3000;
app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});
io.on('connection',function(socket){
    // console.log('connection');

    socket.on('chat message',function(msg){
        console.log('socket.on');

        io.emit('chat message',msg);
        console.log('io.emit');
        console.log(msg);
    });
});
http.listen(port,function(){
    console.log('listening on ' + port)
})