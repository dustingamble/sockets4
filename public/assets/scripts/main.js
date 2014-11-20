
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    io.on('connection', function(socket){
	  socket.on('chat message', function(msg){
	    console.log('message: ' + msg);
	  });
	});
    
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});