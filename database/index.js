const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const mongooseUrl = 'mongodb://172.17.0.2/reservations';
mongoose.connect(mongooseUrl, { useNewUrlParser: true });

module.exports = mongoose;
