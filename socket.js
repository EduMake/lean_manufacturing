module.exports = function(io) {
  
  var oLean = {
    
    aLines:[],
    refresh: function(){
      //if still looking for vicitims
      if(this.aLines.length === 0) {
        return { 
          emit: 'Available Roles',
          resp:this.respAvailableRoles()
        };  
      }
    },
    respAvailableRoles: function(){
      var aResp = {
            message: "Select Role for this device",
            buttons: []
      };
      
      if(this.aLines.length === 0) {
        aResp.buttons.push({
          label:  "Line 1 : Manager",
          display:"green",
          emit:   "Become Manager",
          emit_data: JSON.stringify({line: 0})
        });
      } else {
        
      
      }
      return aResp;
    }
      
            
    /*,
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
    }*/
  };
  
  io.on('connection', function (socket) {
    var oLeanSocket = io.of('/lean-game');
    oLeanSocket.on('connection', function(socket){
      socket.emit('Available Roles', oLean.respAvailableRoles());
      
      socket.on('Refresh', function (data) {
        console.log(data);
        var oRefreshAction = oLean.Refresh();
        socket.emit(oRefreshAction.emit, oRefreshAction.resp);
      });
      
      socket.on('Become Manager', function (data) {
        console.log("Become Manager", data);
      });
      
    });
  });
};
