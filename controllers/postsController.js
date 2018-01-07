const express = require('express')
const router = express.Router({
    mergeParams: true
})

const User = require('../db/models/User')

// CREATE ADD ROUTE
router.get('/new', (req, res) => {
    const userId = req.params.userId
    const journalId = req.params.journalId

    User.findById(userId)
        .then((user) => {
            const journal = user.journals.id(journalId)
            res.render('posts/new', {
                userId,
                journal
            })
        })
        .catch((error) => {
            console.log(error)
        })
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const journalId = req.params.journalId
    const newPost = req.body
    User.findById(userId)
        .then((user) => {
            const journal = user.journals.id(journalId)
            journal.posts.push(newPost)
            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/journals/${journalId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


// GET SPECIFIC POST ROUTE
router.get('/:postId', (req, res) => {
    const userId = req.params.userId
    const journalId = req.params.journalId
    const postId = req.params.postId

    User.findById(userId)
        .then((user) => {
            const journal = user.journals.id(journalId)
            const post = journal.posts.id(postId)
            res.render('posts/show', {
                user,
                userId,
                journal,
                post
            })
        })
        .catch((error) => {
            console.log(error)
        })
})


// DELETE POST ROUTE
router.get('/:postId/delete', (req, res) => {
    const userId = req.params.userId
    const journalId = req.params.journalId
    const postId = req.params.postId
    User.findById(userId)
        .then((user) => {
            const journal = user.journals.id(journalId)
            journal.posts.id(postId).remove()

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/journals/${journalId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router