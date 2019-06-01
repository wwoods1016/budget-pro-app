// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {

  //Get route for all expenses
  app.get("/api/incm_exp", function (req, res) {
    //console.log(res)
    db.incm_exp.findAll({
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });
// Get Route for specific id
  app.get("/api/incm_exp/:id", function (req, res) {
    //console.log(res)
    db.incm_exp.findAll({
      where: {
        id: req.params.id
      }
    })


 //get route for perticular category
  /*app.get("/api/incm_exp/category/:category", function (req, res) {
    //console.log(res)
    db.incm_exp.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });*/




// get route for each category where amount is greate than $50
  app.get("/api/incm_exp/category/:category", function (req, res) {
    //console.log(res)
    //const Op = Sequelize.Op

    db.incm_exp.findAll({
      attributes: ['id', [sequelize.fn('sum', sequelize.col('amount')), 'total']],
      
    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      });
  });


  //get rpute for IEType
  app.get("/api/incm_exp/IEType/:IEType", function (req, res) {
    //console.log(res)
    db.incm_exp.findAll({
      where: {
        IEType: req.params.IEType
      }
    })
      .then(function (result) {
        res.json(result);
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
      source: req.body.Source,
      IEType: req.body.IEType

    })
      .then(function (dbincm_exp) {
        res.json(dbincm_exp);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  
};