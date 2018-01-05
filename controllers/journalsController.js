const express = require('express')
const router = express.Router({
  mergeParams: true
})
const User = require('../db/models/User')


// SHOW ALL JOURNALS ROUTE
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
  const userId = req.params.userId
  res.render('journals/new', {
    userId
  })
})

router.post('/', (req, res) => {
  const userId = req.params.userId
  const newJournal = req.body
  User.findById(userId)
  .then((user) => {
    user.journals.push(newJournal)
    return user.save()
  })
  .then(() => {
    res.redirect(`/users/${userId}/journals`)
  })
  .catch((error) => {
    console.log(error)
  })
})

// SHOW SPECIFIC JOURNAL
router.get('/:journalId', (req, res) => {
  const userId = req.params.userId
  const journalId = req.params.journalId

  User.findById(userId)
  .then((user) => {
    const journal = user.journals.id(journalId)
    res.render('journals/show', {
      userId,
      journal
    })
  })
})

// DELETE JOURNAL
router.get('/:journalId/delete', (req, res) => {
  const userId = req.params.userId
  const journalId = req.params.journalId
  User.findById(userId)
  .then((user) => {
    user.journals.id(journalId).remove()
    return user.save()
  })
  .then(() => {
    res.redirect(`/users/${userId}/journals`)
  })
  .catch((error) => {
    console.log(error)
  })
})


module.exports = router