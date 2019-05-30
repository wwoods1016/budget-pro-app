// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {
  //Get route for all incomes/expenses
  app.get("/api/incm_exp/IEtype/:IEtype", function (req, res) {
    db.incm_exp.findAll({
      where: {
        IEType: req.params.IEType
      }
          })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      }).catch((err) => {
        // console.log(err);
      });
  });

  
  //Put route for updating income or expenses
  app.put("/api/incm_exp", function (req, res) {
    db.incm_exp.update(req.body,
      {
        where: {
          ID: req.body.id
        }
      })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  //Delete route for removing income/expense
  app.delete("/api/incm_exp/:id", function (req, res) {
    db.incm_exp.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  //Post route for income and expenses comment
  app.post("/api/incm_exp", function (req, res) {
    db.incm_exp.create({
      IEType: req.body.IEType,
      amount: req.body.Amount,
      IEdate: req.body.Date,
      category: req.body.Category,
      descript: req.body.Description,
      source: req.body.Source
    
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      })
      .catch((err) => {
        console.log(err);
      });
  });
 };