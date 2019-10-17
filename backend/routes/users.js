const express = require('express');
const router = express.Router();
var User = require('../models/user');

router.get('/', (req, res, next) => {
  User.find((err, user) => {
    if(err)
      res.send(err);

    res.json(user);
  });
});

router.post('/add', (req, res) => {
  let data = new User();

  const { name } = req.body;

  data.name = name;
  data.company = 'Code for Asia';

  data.save((err) => {
    if(err)
      return res.json({ success: false, error: err });

    return res.json({ success: true });
  })
});

module.exports = router
