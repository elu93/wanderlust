const mongoose = require('mongoose')
const Schema = require('../schema')
const AllPosts = mongoose.model('AllPosts', Schema.allPostsSchema)

module.exports = AllPosts
