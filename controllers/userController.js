const express = require('express');
const router = express.Router();
const User = require('../db/models/User')

/* GET users listing. */
router.get('/', (req, res) => {
  User.find({})
  .then((users) => {
    res.render('users/index', {
      users
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

// CREATE USERS
router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/', (req, res) => {
  const newUser = req.body
  
})


module.exports = router;
