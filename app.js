/* import server consigurations */
var app = require('./config/server');

// port listen
var server = app.listen(3000, function(){
	console.log('Server ON');
});

var io = require('socket.io').listen(server);

app.set('io', io);

// Create connetion websocket
io.on('connection', function(socket){
	console.log('User connect');

	socket.on('disconnect', function(){
		console.log('User disconnect');
	});

	socket.on('msgParaServidor', function(data){
		socket.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem}
		);

		socket.broadcast.emit('msgParaCliente', {apelido: data.apelido, mensagem: data.mensagem}
		);
	});


});