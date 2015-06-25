module.exports = function(io) {
  
  var oLean = {
    aLines:[],
    getAvailableRoles: function(){
      if(this.aLines.length === 0) {
        return [
          {
            label:"Line 1 : Manager",
            line:1,
            role:"Manager",
            cellid:0
          }
        ];
      } else {
          return [];
      }
    }
  }
  
  io.on('connection', function (socket) {
    console.log("general contection not interested");
 
  
    var oLeanSocket = io.of('/lean-game');
    oLeanSocket.on('connection', function(socket){
      console.log('someone connected');
      socket.emit('Available Roles', {roles:oLean.getAvailableRoles()});
      
      socket.on('Get Available Roles', function (data) {
        console.log(data);
        socket.emit('Available Roles', {roles:oLean.getAvailableRoles()});
      });
      
      
      
      
    });
  });
  
};
