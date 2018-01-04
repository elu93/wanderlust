const express = require('express');
const router = express.Router();
const User = require('../db/models/User')

// SHOW ALL USERS
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

// SHOW SPECIFIC USER
router.get('/:id', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
  .then((user) => {
    res.render('users/show', {
      user
    })
  })
  .catch((error) => {
    console.log(error)
  })
})

// UPDATE SPECIFIC USER
router.get('/:id/edit', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
  .then((user) => {
    res.render('users/edit', {
      user
    })
  })
  .catch((error) => {
    console.log(error)
  })
})


router.put('/:id', (req, res) => {
  const userId = req.params.id
  const userData = req.body
  User.findByIdAndUpdate(userId, userData)
  .then((user) => {
    res.redirect(`/users/${userId}`)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.delete('/:id/delete', (req, res) => {
  const userId = req.params.id
  User.findByIdAndRemove(userId)
  .then(() => {
    res.redirect('/')
  })
  .catch((error) => {
    console.log(error)
  })
})

module.exports = router;
