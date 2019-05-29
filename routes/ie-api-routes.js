// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {
  //Get route for all incomes and expenses
  app.get("/api/incm_exp", function (req, res) {
    //console.log(res)
    db.incm_exp.findAll({
          })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  
  //Put route for updating income or expenses
  app.put("/api/incm_exp", function (req, res) {
    db.incm_exp.update(req.body,
      {
        where: {
          ieID: req.body.ieID
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
      amount: req.body.Amount,
      IEdate: req.body.Date,
      category: req.body.Category,
      descript: req.body.Description,
      source: req.body.Source
      
      
      
      
      /*amount: req.body.amount,
      IEdate: req.body.IEdate,
      category: req.body.category,
      descript: req.body.descript,
      source: req.body.source*/
 
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      })
      .catch((err) => {
        console.log(err);
      });
  });
 };