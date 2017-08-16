/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	 create : function(req,res){
         console.log(req.body);
       
        
         var socketId = sails.sockets.getId(req);
         User.create({
             email : req.body.email,
             password : req.body.passwordGroup.password,
             DateOfBirth : req.body.BirthDay
         }).exec(function(err,user){
             if(err) res.send(err);
              var io = sails.io;
                var socket = req.socket;
             req.session.user = user;
             session = user;
             socket.join('message');
                 res.json(socketId);
                io.to(socketId).emit('message','hi');
                socket.broadcast.to('message').emit('message', user);
            
             
         })
     }
};

