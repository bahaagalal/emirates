var is = require('is_js');

var Routes = function(app){

	app.get('/', function(req, res){
		res.render('search');
	});
};

module.exports = Routes;
