// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {
  //Get Route to retrieve all incomes
  app.get("/api/Income/", function (req, res) {
    db.Income.findAll({})
      .then(function (dbIncome) {
        res.json(dbIncome);
      });
  });
  //Post Route to add new income
  app.post("/api/Income", function (req, res) {
    console.log(req.body);
    db.Income.create({
      source: req.body.source,
      amount: req.body.amount,
    })
      .then(function (dbIncome) {
        res.json(dbIncome);
      });
  });
  //Put Route to update income
  app.put("/api/Income", function (req, res) {
    db.Income.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbIncome) {
        res.json(dbIncome);
      });
  });
  //Delete route to remove income
  app.delete("/api/Income/:id", function (req, res) {
    db.Income.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbIncome) {
        res.json(dbIncome);
      });
  });
};
