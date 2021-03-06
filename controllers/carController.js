const db = require("../models");

// Defining methods for the carController
module.exports = {
  findAll: function(req, res) {
    db.Car.find()
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(404).json(err));
  },
  findById: function(req, res) {
    db.Car.findById(req.params.id)
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(404).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Car.create(req.body)
      .then(dbCar => {
        //console.log(dbCar)
        res.json(dbCar)})
      .catch(err => {
        //console.log(err)
        res.status(404).json(err)});
  },
  update: function(req, res) {
    console.log('car controller line 26:' , req.body);
    db.Car.findByIdAndUpdate(req.params.id, req.body)
      .then(dbCar => {
        console.log(dbCar);
        res.json(dbCar)})
      .catch(err => res.status(404).json(err));
  },
  remove: function(req, res) {
    db.Car.findById(req.params.id)
      .then(dbCar => dbCar.remove())
      .then(dbCar => res.json(dbCar))
      .catch(err => res.status(404).json(err));
  }
};
