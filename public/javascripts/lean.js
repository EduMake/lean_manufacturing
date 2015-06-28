$(document).ready(function(){
  var socket = io.connect('/lean-game');
  var source   = $("#buttons-template").html();
  console.log("source =", source.length);
  var template = Handlebars.compile(source);
  
  
  var renderButtons = function(aButtons) {
    console.log("aButtons =", aButtons);
    
    var html    = template({buttons:aButtons});  
    console.log("html =", html);
    $("#buttons").html(html);
    $("#buttons button div span").bigText({fontSizeFactor:0.8, limitingDimension:"width"});
    $("#buttons button").click(function(evt){
        var data = $(this).data();
        console.log("data =", data);
        
        //socket.emit(data.emit, JSON.parse(data["emit_data"]));
        socket.emit(data.emit, data["emit_data"]);  //The emit data has been parsed already not sure how
    
    });
  };
  
  var defaultAction = function (data) {
    //console.log(data);
    $("#message").text(data.message);
    renderButtons(data.buttons);
  };
  
  socket.on('Available Roles', defaultAction);
});
