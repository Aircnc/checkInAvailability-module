const mongoose = require('mongoose');
const mongooseUrl = 'mongodb://localhost/reservations';
mongoose.connect(mongooseUrl, { useNewUrlParser: true });

module.exports = mongoose;