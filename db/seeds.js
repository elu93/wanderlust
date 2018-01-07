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
        description: 'I am a 24 year old ex-management consultant that loves to travel.'
    })

    const escapacades = new Journal({
        name: 'Hong Kong',
        category: 'Vacation Escapacades'
    })
    const vacation = new Post({
        name: 'Why I loved Hong Kong',
        image: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg',
        postDescription: 'A vibrant city that fulfills the wonders of many',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veritatis ipsam exercitationem temporibus accusamus itaque adipisci, commodi eveniet dolor necessitatibus quisquam aliquam nam voluptatum voluptate sed magnam amet, nesciunt debitis! '
    })

    
    escapacades.posts.push(vacation)

    const guide = new Journal({
        name: 'Guide to Japan',
        category: 'Guidebook'
    })
    const japanGuide = new Post({
        name: 'The must see things in Japan',
        image: 'https://enterprisectr.org/wp-content/uploads/2014/09/bobloblaw.jpg',
        postDescription: 'Everything one desires in a country full of wonders',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
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
        photoUrl: 'https://pbs.twimg.com/profile_images/378800000134134212/81a38a74f2f122459e88a5f95987a139.jpeg',
        description: "I'm a 28 years old software engineer that enjoys to travel."
    })
}).then((phil) => {
    const backpacking = new Journal({
        name: 'Europe Backpacking',
        category: 'Backpacking'
    })

    const londonEscape = new Post({
        name: 'Backpacking in London',
        image: 'https://pbs.twimg.com/profile_images/378800000134134212/81a38a74f2f122459e88a5f95987a139.jpeg',
        postDescription: 'The affordable way to travel and have fun',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
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