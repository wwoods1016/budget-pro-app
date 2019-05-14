// Dependencies
const path = require('path');

// Routes
module.exports = app => {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads dashboard.html
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/dashboard.html'));
	});

	// household route loads household.html
	app.get('/household', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/household.html'));
	});

	// budget route loads budget.html
	app.get('/budget', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/budget.html'));
	});

	// about route loads about-us.html
	app.get('/about', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/about-us.html'));
	});
};
