const mongoose = require('mongoose');
const mongooseUrl = 'mongodb://localhost/reservations';
const db = mongoose.connect(mongooseUrl, {useNewUrlParser: true});

module.exports = db;