
// Require Native Node.js Libraries
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Variables
var serverMessages = '';
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

 	// Emit a new user connected
  	io.emit('connected', id);

  	// Send the state of the messages the first time
    socket.emit('chat message send', serverMessages);

    // Update and resend the state of the messages when a user adds a new one
    socket.on('chat message', function(data) {
     	serverMessages += '<li><span>' + data[2] + '</span><p>' + data[0] + '</p></li>';
        socket.emit('chat message send', serverMessages);
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
