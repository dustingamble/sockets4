
// Require Native Node.js Libraries
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var id = 0;
var user = [];

// Route our Assets
app.use('/assets/', express.static(__dirname + '/public/assets/'));

// Route our Home Page
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

// Handle Socket Connection
io.on('connection', function(socket){
  console.log('A User Connected' + id);

  	io.emit('connected', id);

     socket.on('chat message', function(msg){
        socket.emit('chat message send', msg,id);
    });

    user.push({
    	id:id,name:null
    });

    id = id + 1;


});

// Start Server
http.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = http.address();
  console.log("Server started at", addr.address + ":" + addr.port);
});
