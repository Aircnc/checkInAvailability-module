const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongooseUrl = 'mongodb://localhost/reservations';
mongoose.connect(mongooseUrl, { useNewUrlParser: true });

module.exports = mongoose;
