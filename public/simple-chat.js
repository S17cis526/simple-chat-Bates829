var socket = io();

socket.on('welcome', function(text){
  $('<li>').text(text).appendTo('#message-log');
  alert(text);
});

socket.on('message', function(message){
  var li = $('<li>')
  .css('color', message.color)
  .appendTo('#message-log');
  $('<strong>')
  .text(message.user)
  
  .appendTo(li);

});

$('#chat-send').on('click', function(){
  var text = $('#chat-text').val();
  socket.emit('message',text);
  $('#chat-text').val('');
});

$('#color').on('change', function(){
  var color = $(this).val();
  socket.emit('color', color);
});
