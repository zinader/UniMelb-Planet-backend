const router = require('express').Router();
let Breadth = require('../models/breadth.model');

router.route('/').get((req, res) => {
  Breadth.find()
    .then(breadths => res.json(breadths))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newBreadth = new Breadth(
      {
          name: req.body.name,
          department: req.body.department
      }
  );

  newBreadth.save()
    .then(() => res.json('Breadth added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;