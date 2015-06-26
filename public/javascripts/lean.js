var socket = io.connect('/lean-game');

var renderButtons = function(aButtons) {
  console.log("aButtons =", aButtons);
};

var defaultAction = function (data) {
  //console.log(data);
  $("#message").text(data.message);
  renderButtons(data.buttons);
  //socket.emit('my other event', { my: 'data' });
  //
};

socket.on('Available Roles', defaultAction);

