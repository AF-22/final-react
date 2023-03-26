
export const links = [
    
    {
        name: "Nosotros",
        path: '/about'
    },
    {
        name: "Gallería",
        path: '/gallery'
    },
    {
        name: "Planes",
        path: '/plans'
    },
    {
        name: "Equipo",
        path: '/trainers'
    },
    {
        name: "Contáctanos",
        path: '/contact'
    }
]



export const plans = [
    {
        id: 1,
        name: 'Silver',
        desc: 'Este plan es perfecto para los que estan iniciando en el mundo del anime',
        price: 29000,
        features: [
            {feature: 'Code Geass', available: true},
            {feature: 'Jujutsu Kaisen', available: true},
            {feature: 'Bleach', available: true},
            {feature: 'Naruto Shippuden', available: true},
            {feature: 'Nanatsu no Taizai', available: true},
            {feature: 'Shingeki no Kyojin', available: false},
            {feature: 'Death Note', available: false},
            {feature: 'Kimetsu no Yaiba', available: false},
            {feature: 'Hunter x Hunter', available: false},
            {feature: 'One Piece', available: false},
            {feature: 'My Hero Academia', available: false},
            {feature: 'Rurouni Kenshin', available: false},
            {feature: 'Sailor Moon', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold',
        desc: 'Este plan es perfecto para los que tienen poco tiempo al día',
        price: 49000,
        features: [
            {feature: 'Code Geass', available: true},
            {feature: 'Jujutsu Kaisen', available: true},
            {feature: 'Bleach', available: true},
            {feature: 'Naruto Shippuden', available: true},
            {feature: 'Nanatsu no Taizai', available: true},
            {feature: 'Shingeki no Kyojin', available: true},
            {feature: 'Death Note', available: true},
            {feature: 'Kimetsu no Yaiba', available: true},
            {feature: 'Hunter x Hunter', available: true},
            {feature: 'One Piece', available: false},
            {feature: 'My Hero Academia', available: false},
            {feature: 'Rurouni Kenshin', available: false},
            {feature: 'Sailor Moon', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum',
        desc: 'Este plan es perfecto para los amantes del anime',
        price: 89000,
        features: [
            {feature: 'Code Geass', available: true},
            {feature: 'Jujutsu Kaisen', available: true},
            {feature: 'Bleach', available: true},
            {feature: 'Naruto Shippuden', available: true},
            {feature: 'Nanatsu no Taizai', available: true},
            {feature: 'Shingeki no Kyojin', available: true},
            {feature: 'Death Note', available: true},
            {feature: 'Kimetsu no Yaiba', available: true},
            {feature: 'Hunter x Hunter', available: true},
            {feature: 'One Piece', available: true},
            {feature: 'My Hero Academia', available: true},
            {feature: 'Rurouni Kenshin', available: true},
            {feature: 'Sailor Moon', available: true}
        ]
    }
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')
const Trainer7 = require('./images/trainer7.jpg')
const Trainer8 = require('./images/trainer8.jpg')
const Trainer9 = require('./images/trainer9.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'Lelouch Lamperouge',
        job: 'Code Geass',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Satoru Gojō',
        job: 'Jujutsu Kaisen',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Ichigo Kurosaki',
        job: 'Bleach ',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Madara Uchiha',
        job: 'Naruto Shippuden',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Ban',
        job: 'Nanatsu no Taizai',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Levi Ackerman',
        job: 'Shingeki no Kyojin',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 7,
        image: Trainer7,
        name: 'Light Yagami',
        job: 'Death Note',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 8,
        image: Trainer8,
        name: 'Nezuko Kamado',
        job: 'Kimetsu no Yaiba',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 9,
        image: Trainer9,
        name: 'Killua Zoldyck',
        job: 'Hunter x Hunter',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    }
]