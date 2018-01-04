const express = require('express')
const router = express.Router({
  mergeParams: true
})
const User = require('../db/models/User')


// SHOW JOURNALS ROUTE
router.get('/', (req, res) => {
  const userId = req.params.id
  User.findById(userId)
  .then((user) => {
    console.log(`JOURNALS ${user.journals}`)
    res.render('journals/index', {
      userFullName: `${user.firstName} ${user.lastName}`,
      userId,
      journals: user.journals
    })
  })
})


module.exports = router