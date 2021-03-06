const mongoose = require('./index');

const reservationSchema = new mongoose.Schema({
  listStartDate: { type: Date, default: Date.now },
  listEndDate: Date,
  reservations: [Array],
  listingId: String,
  userId: String,
  minStay: Number,
  reviewCount: Number,
  avgReview: Number,
  roomPrice: Number,
}, {
  timestamps: true,
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
