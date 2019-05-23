// Dependencies

// Requiring our models
const db = require('../models');

// Routes
module.exports = app => {
  //Get Route to retrieve all goals
  app.get("/api/goals/", function (req, res) {
    db.goals.findAll({})
      .then(function (dbgoals) {
        res.json(dbgoals);
      });
  });
  //Post Route to add new goals
  app.post("/api/goals", function (req, res) {
    console.log(req.body);
    db.goals.create({
      gName: req.body.gName,
      gDesc: req.body.gDesc,
      gAmount: req.body.gAmount,
      gDATE: req.body.gDATE,
    })
      .then(function (dbgoals) {
        res.json(dbgoals);
      });
  });
  //Put Route to update goals
  app.put("/api/goals", function (req, res) {
    db.goals.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function (dbgoals) {
        res.json(dbgoals);
      });
  });
  //Delete route to remove goals
  app.delete("/api/goals/:id", function (req, res) {
    db.goals.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbgoals) {
        res.json(dbgoals);
      });
  });
};
