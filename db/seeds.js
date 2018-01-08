require('dotenv').config()
const User = require('./models/User')
const Journal = require('./models/Journal')
const Post = require('./models/Post')
const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)

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
    const james = new User({
        username: 'hakoken',
        email: 'hako@gmail.com',
        firstName: 'James',
        lastName: 'Lin',
        photoUrl: 'https://source.unsplash.com/mN874sEvSWU',
        backgroundImage: 'https://source.unsplash.com/Lbey-Fi5di0',
        description: "I'm a dude who loves to find little great places to travel and discover the world."
    })

    const escapacades = new Journal({
        name: 'Hong Kong Discoveries',
        category: 'Vacation Escapacades',
        journalPicture: 'https://source.unsplash.com/CSID46Dq4LA'
    })
    const vacation = new Post({
        name: 'Why I loved Hong Kong',
        image: 'https://source.unsplash.com/YsPVzglFc60',
        postDescription: 'A city that has a bit of everything',
        body: `Bacon ipsum dolor amet bacon kevin boudin venison meatball pork pork belly. Landjaeger pancetta hamburger pork belly leberkas tenderloin beef ribs shoulder fatback pork chop kielbasa porchetta bresaola cow. Filet mignon picanha tenderloin pastrami meatball venison. Swine biltong porchetta, alcatra cow frankfurter jerky t-bone ham hock tongue picanha turducken ground round pastrami. Meatball porchetta ham hock pork, ground round pork loin andouille flank bresaola leberkas pastrami shankle cow jowl. Landjaeger jowl cupim cow ground round prosciutto salami.

        Salami pancetta frankfurter cow turkey strip steak pork chop pig jowl. Tongue tenderloin sirloin alcatra spare ribs. Filet mignon bresaola turducken frankfurter drumstick turkey, rump sausage boudin venison chuck pork belly porchetta landjaeger. Cupim flank alcatra prosciutto. Spare ribs burgdoggen swine kielbasa sirloin, jerky biltong brisket hamburger fatback shoulder alcatra frankfurter.
        
        Frankfurter strip steak prosciutto corned beef venison, chuck pork belly spare ribs short loin andouille. Tri-tip biltong leberkas ribeye. Swine boudin alcatra, kielbasa pork loin burgdoggen t-bone biltong. Kevin flank beef ribs shankle pastrami meatball pork turducken.
        
        Beef jowl sausage, picanha short loin doner fatback pork loin beef ribs chuck filet mignon landjaeger corned beef. Strip steak ground round buffalo meatball ball tip frankfurter brisket tongue jowl prosciutto kielbasa shank chuck. Ball tip tongue drumstick andouille, sausage jowl alcatra shankle pork chop corned beef. Pork belly beef pork cow boudin salami venison kevin short ribs burgdoggen pork chop. Tail salami buffalo, sausage landjaeger pork belly chicken tri-tip beef ribs porchetta leberkas.
        
        Shoulder filet mignon beef ribs frankfurter tri-tip. Filet mignon strip steak chicken hamburger cow pork loin pig biltong andouille short loin fatback boudin. Ball tip landjaeger ham flank buffalo prosciutto pancetta chicken. Rump doner buffalo t-bone tongue, shoulder tri-tip corned beef pastrami. Pancetta short loin cupim pork chop kielbasa rump pork. Biltong kevin fatback cow landjaeger meatball turkey kielbasa capicola picanha burgdoggen.
        
        Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!`
    })


    escapacades.posts.push(vacation)

    const guide = new Journal({
        name: 'Guide to Japan',
        category: 'Guidebook',
        journalPicture: 'https://source.unsplash.com/dwKZyTMTr7o'
    })
    const japanGuide = new Post({
        name: 'The must see things in Japan',
        image: 'https://source.unsplash.com/hwLAI5lRhdM',
        postDescription: 'Everything one desires in a country full of wonders',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const eatGuide = new Journal({
        name: 'Eating in Europe',
        category: 'Nuggets of Food',
        journalPicture: 'https://source.unsplash.com/IHpI0OVUzRk'
    })
    const europeGuide = new Post({
        name: 'The Food Joints You Must Go Check Out',
        image: 'https://source.unsplash.com/Pt_YmiYm7a4',
        postDescription: 'Food can be affordable and great',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const travelGuide = new Journal({
        name: 'Iceland',
        category: 'The Northern Lights',
        journalPicture: 'https://source.unsplash.com/wMzx2nBdeng'
    })
    const northernLights = new Post({
        name: 'The Celestial lights are truly breathtaking',
        image: 'https://source.unsplash.com/eKU3JGNCCMg',
        postDescription: 'Lights you have to view in person',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })


    guide.posts.push(japanGuide)
    eatGuide.posts.push(europeGuide)
    travelGuide.posts.push(northernLights)

    james.journals.push(escapacades, guide, eatGuide, travelGuide)


    return james.save()
}).then(() => {
    return User.create({
        username: 'georgg',
        email: 'georgy@gmail.com',
        firstName: 'George',
        lastName: 'Boom',
        photoUrl: 'https://source.unsplash.com/ILip77SbmOE',
        backgroundImage: 'https://source.unsplash.com/tZDtyUrYrFU',
        description: "I'm a 28 years old software engineer that enjoys to travel."
    })
}).then((george) => {
    const backpacking = new Journal({
        name: 'Europe Backpacking',
        category: 'Backpacking',
        journalPicture: 'https://source.unsplash.com/_q5H19c-VwU'
    })

    const londonEscape = new Post({
        name: 'Backpacking in London',
        image: 'https://source.unsplash.com/EXdXLrZXS9Q',
        postDescription: 'The affordable way to travel and have fun',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const hollywood = new Journal({
        name: 'Los Angeles',
        category: 'Frollicking in LA',
        journalPicture: 'https://source.unsplash.com/PC_lbSSxCZE'
    })

    const laTravels = new Post({
        name: 'Discovering Hollywood',
        image: 'https://source.unsplash.com/aNrRsB2wLDk',
        postDescription: 'Hollywood is a place of great vibes and good people',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const newYork = new Journal({
        name: 'New York',
        category: 'The Big Apple',
        journalPicture: 'https://source.unsplash.com/Q9xdAzYJQyc'
    })

    const nyPost = new Post({
        name: 'The City that Never Sleeps',
        image: 'https://source.unsplash.com/SVVTZtTGyaU',
        postDescription: 'Discovering the beauties of New York',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const amsterdam = new Journal({
        name: 'Amsterdam',
        category: 'Europe Checklist',
        journalPicture: 'https://source.unsplash.com/q53E8d_ze2E'
    })

    const amsterdamPost = new Post({
        name: 'Amsterdam - A fun and inviting city',
        image: 'https://source.unsplash.com/bH5b8o59vlI',
        postDescription: 'Discovering the attractions of Amsterdam',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    backpacking.posts.push(londonEscape)
    hollywood.posts.push(laTravels)
    newYork.posts.push(nyPost)
    amsterdam.posts.push(amsterdamPost)
    george.journals.push(backpacking, hollywood, newYork, amsterdam)

    return george.save()
}).then(() => {
    return User.create({
        username: 'rachel_',
        email: 'rachel@gmail.com',
        firstName: 'Rachel',
        lastName: 'McAdams',
        photoUrl: 'https://source.unsplash.com/9qquJNwMOos',
        backgroundImage: 'https://source.unsplash.com/pNJGjRJUeuY',
        description: "I'm a model that enjoys to eat and travel."
    })
}).then((rachel) => {
    const backpacking = new Journal({
        name: 'Europe Backpacking',
        category: 'Backpacking',
        journalPicture: 'https://source.unsplash.com/_q5H19c-VwU'
    })

    const londonEscape = new Post({
        name: 'Backpacking in London',
        image: 'https://source.unsplash.com/EXdXLrZXS9Q',
        postDescription: 'The affordable way to travel and have fun',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const hollywood = new Journal({
        name: 'Los Angeles',
        category: 'Frollicking in LA',
        journalPicture: 'https://source.unsplash.com/PC_lbSSxCZE'
    })

    const laTravels = new Post({
        name: 'Discovering Hollywood',
        image: 'https://source.unsplash.com/aNrRsB2wLDk',
        postDescription: 'Hollywood is a place of great vibes and good people',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const newYork = new Journal({
        name: 'New York',
        category: 'The Big Apple',
        journalPicture: 'https://source.unsplash.com/Q9xdAzYJQyc'
    })

    const nyPost = new Post({
        name: 'The City that Never Sleeps',
        image: 'https://source.unsplash.com/SVVTZtTGyaU',
        postDescription: 'Discovering the beauties of New York',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    const amsterdam = new Journal({
        name: 'Amsterdam',
        category: 'Europe Checklist',
        journalPicture: 'https://source.unsplash.com/q53E8d_ze2E'
    })

    const amsterdamPost = new Post({
        name: 'Amsterdam - A fun and inviting city',
        image: 'https://source.unsplash.com/bH5b8o59vlI',
        postDescription: 'Discovering the attractions of Amsterdam',
        body: `Bacon ipsum dolor amet ribeye tri-tip prosciutto, ex buffalo laborum spare ribs picanha. Shank meatloaf rump eiusmod alcatra, adipisicing short loin magna lorem pig beef shankle. Fugiat excepteur venison sausage nulla aliqua. Excepteur incididunt pancetta pork loin, cupidatat duis short ribs ex. Labore pork loin ham hock, aliquip incididunt swine officia enim. Tenderloin kielbasa ipsum in landjaeger. Tempor leberkas labore salami tenderloin spare ribs veniam irure aliquip ullamco incididunt prosciutto bacon kevin.

        Eiusmod tempor cupidatat landjaeger non swine magna esse in ground round pancetta porchetta. In qui ham burgdoggen, ex pork chop irure pariatur ball tip strip steak ea excepteur ground round chuck sunt. Frankfurter cupim proident ut, hamburger ex meatball nulla ham hock est kielbasa ea cow. Venison duis dolor, est alcatra anim cupidatat chuck ipsum burgdoggen spare ribs. Turkey anim nisi elit proident frankfurter andouille in laboris.
        
        Flank jowl ad, culpa ea bresaola ground round. Leberkas est drumstick sirloin ullamco occaecat doner lorem chuck tail fatback pariatur pork loin in. Short loin commodo laboris aliquip magna ball tip dolore tenderloin shoulder reprehenderit pastrami beef ribs ribeye nulla. Chuck pork belly chicken, adipisicing anim tri-tip duis in dolore proident turducken ball tip prosciutto mollit. Jowl venison reprehenderit, excepteur laboris sunt pork rump aliquip dolore do pork chop ea elit id. Short ribs et reprehenderit ham adipisicing.
        
        Nisi quis pork loin, jerky bresaola dolore pork chop. Qui filet mignon tail fatback. Occaecat turducken nulla strip steak adipisicing. Eu tail brisket est shank quis ex anim duis ham irure chuck turducken non incididunt. Id eiusmod jowl, ball tip voluptate beef ground round sunt ullamco venison officia pork belly pastrami est ribeye. Laborum capicola cillum ribeye irure non jerky bresaola ground round jowl velit drumstick excepteur eu exercitation. Lorem venison esse in exercitation anim non ut dolore ea buffalo.
        
        Sed porchetta jowl commodo kielbasa, bacon strip steak prosciutto fatback laborum pariatur boudin ullamco. Frankfurter ad exercitation et proident cupidatat ut ut burgdoggen. Ipsum tail tenderloin, capicola bacon consequat kielbasa ut adipisicing est id boudin swine et in. Boudin ball tip jowl tenderloin porchetta velit adipisicing pancetta shoulder. Kevin pork belly cow tail buffalo swine, exercitation pancetta dolore est biltong capicola shankle ipsum. Ut labore laboris sirloin, occaecat ribeye burgdoggen jowl leberkas tail officia culpa tongue proident. Porchetta meatball ball tip dolore buffalo.`
    })

    backpacking.posts.push(londonEscape)
    hollywood.posts.push(laTravels)
    newYork.posts.push(nyPost)
    amsterdam.posts.push(amsterdamPost)
    rachel.journals.push(backpacking, hollywood, newYork, amsterdam)

    return rachel.save()
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