/* import server consigurations */
var app = require('./config/server');

// port listen
app.listen(3000, function(){
	console.log('Server ON');
})