/* import server consigurations */
var app = require('./config/server');

// port listen
var server = app.listen(3000, function(){
	console.log('Server ON');
})