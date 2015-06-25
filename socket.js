module.exports = function(io) {

  io.on('connection', function (socket) {
    socket.emit('news', { huzza: 'success' });
    socket.on('my other event', function (data) {
      console.log(data);
    });
  });
  
/*  var nsp = io.of('/my-namespace');
  nsp.on('connection', function(socket){
    console.log('someone connected'):
  });
  nsp.emit('hi', 'everyone!');
  */
};
