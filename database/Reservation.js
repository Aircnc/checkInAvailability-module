const mongoose = require('mongoose');
const db = require('./index.js');

const reservationSchema = new mongoose.Schema({
    listStartDate: { type: Date, default: Date.now },
    listEndDate: Date,
    reservations: [ Array ],
    listingId: String,
    userId: String
}, {
    timestamps: true
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;