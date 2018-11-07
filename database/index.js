const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongooseUrl = 'mongodb://127.0.0.1/reservations';
mongoose.connect(mongooseUrl, { useNewUrlParser: true });

module.exports = mongoose;
