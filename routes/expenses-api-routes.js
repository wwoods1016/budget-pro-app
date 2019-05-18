// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {
  // GET route for getting all of the Expenses
  app.get("/api/Expenses/", function (req, res) {
    db.Expenses.findAll({})
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });

  // Get route for returning Expenses of a specific category
  app.get("/api/Expenses/category/:category", function (req, res) {
    db.Expenses.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });

  // Get rotue for retrieving a single Expense
  app.get("/api/Expenses/:id", function (req, res) {
    db.Expenses.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });

  // Post route for saving a new Expenses
  app.post("/api/Expenses", function (req, res) {
    console.log(req.body);
    db.Expenses.create({
      name: req.body.name,
      amount: req.body.amount,
      category: req.body.category
    })
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });

  // DELETE route for deleting Expenses
  app.delete("/api/Expenses/:id", function (req, res) {
    db.Expenses.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });

  // PUT route for updating Expenses
  app.put("/api/Expenses", function (req, res) {
    db.Expenses.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbExpenses) {
        res.json(dbExpenses);
      });
  });
}