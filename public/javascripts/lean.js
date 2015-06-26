var socket = io.connect('/lean-game');

var renderButtons = function(aButtons) {
  console.log("aButtons =", aButtons);
};

var defaultAction = function (data) {
  //console.log(data);
  $("#message").text(data.message);
  renderButtons(data.buttons);
  //show forms
};

socket.on('Available Roles', defaultAction);

