
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();

     $('button').click(function(){
          socket.emit('chat message', $('#m').val());
        $('#m').val('');
      });
      socket.on('chat message send', function(msg){
       	console.log(msg);
        $('#messages').append($('<li>').text(msg));
      });

    
});