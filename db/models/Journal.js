const mongoose = require('mongoose')
const Schema = require('../schema')
const Journal = mongoose.model('Journal', Schema.JournalSchema)

module.exports = Journal
