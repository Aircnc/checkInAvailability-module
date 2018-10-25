const fake = require('../utils/fake_data');
const db = require('./index');
const Reservation = require('./Reservation');

Reservation.create(fake(100))
    .then(() => {
        console.log('database seeded with reservation data!');
        db.disconnect();
    });