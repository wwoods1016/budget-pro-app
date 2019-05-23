// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the incm_exp
  app.get("/api/incm_exp/", function(req, res) {
    db.incm_exp.findAll({})
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  // Get route for returning incm_exp of a specific IEtype
  app.get("/api/incm_exp/IEtype/:IEtype", function(req, res) {
    db.incm_exp.findAll({
      where: {
        IEtype: req.params.IEtype
      }
    })
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  // Get route for retrieving a single incm_exp
  app.get("/api/incm_exp/:id", function(req, res) {
    db.incm_exp.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  // post route for saving a new incm_exp
  app.post("/api/incm_exp", function(req, res) {
    console.log(req.body);
    db.incm_exp.create({
        descript: req.body.descript,
        amount: req.body.amount,
        IEtype: req.body.IEtype,
        relHhMemID: req.body.relHhMemID
    })
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  // DELETE route for deleting incm_exp
  app.delete("/api/incm_exp/:id", function(req, res) {
    db.incm_exp.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });

  // PUT route for updating incm_exp
  app.put("/api/incm_exp", function(req, res) {
    db.incm_exp.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbincm_exp) {
        res.json(dbincm_exp);
      });
  });
};
