// Dependencies
const path = require('path');

// Routes
module.exports = app => {
	// Each of the below routes just handles the HTML page that the user gets sent to.

	// index route loads about-us.html
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/about-us.html'));
	});

	// expenses route loads expenses.html
	app.get('/expenses', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/expenses.html'));
	});

	// income route loads income.html
	app.get('/income', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/income.html'));
	});

	// dashboard route loads dashboard.html
	app.get('/dashboard', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/dashboard.html'));
	});
};
