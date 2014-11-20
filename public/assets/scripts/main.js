
// Wait for DOM to Load
jQuery(function($) {
    
    // Create New Socket Connection using Socket.io
    var socket = io();
    var userid;
    // var username;     // create function from this to update name

     $('button').click(function(){
     
     	var data = [ $('#m').val(), userid, username ];
     	socket.emit('chat message', data);
        $('#m').val('');
      
      });

      socket.on('chat message send', function(html){

        $('#messages').html(html);
        console.log(userid);

      });

       socket.on('connected', function(id){
       		userid = id;
       		// username = id;
       });
    
});