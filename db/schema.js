const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = global.Promise

const allPostsSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Post title is required!']
    },
    image: {
        type: String,
        default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    },
    city: {
        type: String
    },
    body: {
        type: String
    }
}, {
    timestamps: {},
    usePushEach: true
})

const PostSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Post title is required!']
    },
    image: {
        type: String,
        default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    },
    city: {
        type: String
    },
    body: {
        type: String
    }
}, {
    timestamps: {},
    usePushEach: true
})

const JournalSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Journal title is required!']
    },
    category: {
        type: String
    },
    posts: [PostSchema]
}, {
    timestamps: {},
    usePushEach: true
})

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required!']
    },
    email: {
        type: String
    },
    firstName: {
        type: String,
        required: [true, 'First name is required!']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required!']
    },
    photoUrl: {
        type: String,
        default: 'https://cdn.vectorstock.com/i/thumb-large/66/69/santa-hat-vector-296669.jpg'
    },
    journals: [JournalSchema]
}, {
    timestamps: {},
    usePushEach: true
})

module.exports = {
    UserSchema,
    JournalSchema,
    PostSchema
}