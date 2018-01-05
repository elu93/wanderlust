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
            userId,
            journal,
            post
        })
    })
    .catch((error) => {
        console.log(error)
    })
})

router.post('/', (req, res) => {
    const userId = req.params.userId
    const journal = req.params.journalId

    const newGift = req.body

    User.findById(userId)
        .then((user) => {
            const store = user.stores.id(storeId)
            store.giftsToReturn.push(newGift)

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/stores/${storeId}`)
        })
})

// DELETE GIFT ROUTE
router.get('/:giftId/delete', (req, res) => {
    const userId = req.params.userId
    const storeId = req.params.storeId
    const giftId = req.params.giftId

    User.findById(userId)
        .then((user) => {
            const store = user.stores.id(storeId)
            store.giftsToReturn.id(giftId).remove()

            return user.save()
        })
        .then(() => {
            res.redirect(`/users/${userId}/stores/${storeId}`)
        })
        .catch((error) => {
            console.log(error)
        })
})


module.exports = router