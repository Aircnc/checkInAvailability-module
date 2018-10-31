const reservations = require('./data/reservations');

const axios = jest.genMockFromModule('axios');

axios.get = url => new Promise((resolve, reject) => {
  if (url) {
    resolve(reservations);
  } else {
    reject(new Error('invalid url.'));
  }
});


module.exports = axios;
