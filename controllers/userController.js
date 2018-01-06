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
    newUser.photoUrl = 'https://source.unsplash.com/random/300x300'
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
router.get('/:userId', (req, res) => {
  const userId = req.params.userId
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
router.get('/:userId/edit', (req, res) => {
  const userId = req.params.userId
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


router.put('/:userId', (req, res) => {
  const userId = req.params.userId
  const userData = req.body
  User.findByIdAndUpdate(userId, userData)
  .then((user) => {
    res.redirect(`/users/${userId}`)
  })
  .catch((error) => {
    console.log(error)
  })
})

router.delete('/:userId/delete', (req, res) => {
  const userId = req.params.userId
  User.findByIdAndRemove(userId)
  .then(() => {
    res.redirect('/')
  })
  .catch((error) => {
    console.log(error)
  })
})

module.exports = router;
