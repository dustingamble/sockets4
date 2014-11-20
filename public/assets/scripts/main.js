
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    var userid;

     $('button').click(function(){
          socket.emit('chat message', $('#m').val());
        $('#m').val('');
      });
      socket.on('chat message send', function(msg){
      	var messages;
       	console.log(msg);
        // $('#messages').append($('<li>').text(msg));
        messages = $('#messages').html();
        $('#messages').append('<li><span>' + userid + '</span><p>' + msg + '</p></li>');
        console.log(userid);
      });

       socket.on('connected', function(id){
       		userid = id;
       });

    
});