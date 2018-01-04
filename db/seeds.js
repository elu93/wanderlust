const User = require('./models/User')
const Journal = require('./models/Journal')
const Post = require('./models/Post')
const mongoose = require('mongoose')

// connect to database
mongoose.connect('mongodb://localhost/travel_blog')

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})

mongoose.connection.on('error', (error) => {
    console.error(`
    MongoDB connection error!!! 
    ${error}
`)
    process.exit(-1)
})

User.remove({}).then(() => {
    const eric = new User({
        username: 'eric_l',
        email: 'lujb1993@gmail.com',
        firstName: 'Eric',
        lastName: 'Lu',
        photoUrl: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg',
    })

    const escapacades = new Journal({
        name: 'Hong Kong',
        category: 'Vacation Escapacades'
    })
    const vacation = new Post({
        name: 'Why I loved Hong Kong',
        image: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg',
        city: 'Hong Kong',
    })

    escapacades.posts.push(vacation)

    const guide = new Journal({
        name: 'Guide to Japan',
        category: 'Guidebook'
    })
    const japanGuide = new Post({
        name: 'The must see things in Japan',
        image: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg',
        city: 'Japan',
    })

    guide.posts.push(japanGuide)

    eric.journals.push(escapacades, guide)

    return eric.save()
}).then(() => {
    return User.create({
        username: 'philinvested',
        email: 'philinvested@gmail.com',
        firstName: 'Phil',
        lastName: 'Lu',
        photoUrl: 'https://pbs.twimg.com/profile_images/378800000134134212/81a38a74f2f122459e88a5f95987a139.jpeg'
    })
}).then((phil) => {
    const backpacking = new Journal({
        name: 'Europe Backpacking',
        category: 'Backpacking'
    })

    const londonEscape = new Post({
        name: 'Backpacking in London',
        image: 'https://pbs.twimg.com/profile_images/378800000134134212/81a38a74f2f122459e88a5f95987a139.jpeg',
        city: 'London'
    })

    backpacking.posts.push(londonEscape)

    phil.journals.push(backpacking)

    return phil.save()
}).catch((error) => {
    console.log('!!!!! ERROR SAVING SEEDED DATA !!!!!')
    console.log(error)
}).then(() => {
    mongoose.connection.close()
    console.log(`
    Finished seeding database...
    Disconnected from MongoDB
    `)
})