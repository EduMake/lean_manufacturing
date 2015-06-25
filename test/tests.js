var should = require('should');
var io = require('socket.io-client');//,
//server = require('../app');
var socketURL = 'http://0.0.0.0:80/lean-game';
var options ={
    transports: ['websocket'],
    'force new connection': true
};

describe("Lean Server", function(){
    
    it('Should send list of available roles on connection - 1st connection "Line 1 : Manager"',function(done){
        var client = io.connect(socketURL, options);
        client.on('connect',function(data){
            //client.emit('Get Available Roles');
        });
        
        client.on('Available Roles',function(oRoles){
                
            //console.log("aRoles =", aRoles);
            oRoles.should.be.type('object');
            var oExpected = {
                roles:[
                    {
                        label:"Line 1 : Manager",
                        line:1,
                        role:"Manager",
                        cellid:0
                    }
                ]
            };
            console.log("oRoles    =", oRoles);
            console.log("oExpected =", oExpected);
            oRoles.should.eql(oExpected);
            
            /* If this client doesn't disconnect it will interfere with the next test */
            client.disconnect();
            done();
        });
    });
});


