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
  if (!newUser.photoUrl) {
    newUser.photoUrl = 'http://www.fillmurray.com/g/300/300'
  }
  User.create(newUser)
  .then(() => {
    res.redirect('/users')
  })
  .catch((error) => {
    console.log(error)
  })
})


module.exports = router;
