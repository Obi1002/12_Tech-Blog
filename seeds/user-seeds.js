const { User } = require('../models');

const userData = [{
        username: 'Obi',
        password: 'Sasha'

    },
    {
        username: 'Duch',
        password: 'Naomi'
    },
    {
        username: 'FedEx',
        password: 'Mikey'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;