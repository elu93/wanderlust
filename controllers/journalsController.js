const express = require('express')
const router = express.Router({
  mergeParams: true
})
const User = require('../db/models/User')


// SHOW JOURNALS ROUTE
router.get('/', (req, res) => {
  const userId = req.params.userId
  User.findById(userId)
    .then((user) => {
      res.render('journals/index', {
        userFullName: `${user.firstName} ${user.lastName}`,
        userId,
        journals: user.journals
      })
    })
    .catch((error) => {
      console.log(error)
    })
})

// CRATE NEW JOURNAL
router.get('/new', (req, res) => {
  res.render('journals/new')
})


module.exports = router