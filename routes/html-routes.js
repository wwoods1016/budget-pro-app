// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');

// Routes
// =============================================================
module.exports = function(app) {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads dashboard.html
	app.get('/', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/dashboard.html'));
	});

	// household route loads household.html
	app.get('/household', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/household.html'));
	});

	// budget route loads budget.html
	app.get('/budget', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/budget.html'));
	});

	// about route loads about-us.html
	app.get('/about', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/about-us.html'));
	});
};
