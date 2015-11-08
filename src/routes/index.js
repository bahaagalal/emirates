var is = require('is_js');

var Routes = function(app){

	app.get('/', function(req, res){
		res.redirect('/one');
	});

	app.get('/one', function(req, res){
		res.render('search', {
			from: 'Calgary (YYC)',
			to: 'Cairo (CAI)',
			results: 'results/1'
		});
	});

	app.get('/two', function(req, res){
		res.render('search', {
			from: 'San Francisco (SFO)',
			to: 'Dubai (DXB)',
			results: 'results/2'
		});
	});

	app.get('/results/1', function(req, res){
		res.render('results');
	});

	app.get('/results/2', function(req, res){
		res.render('results2');
	});

	app.get('/results/3', function(req, res){
		res.render('results3');
	});
};

module.exports = Routes;
