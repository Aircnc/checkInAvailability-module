const reservations = require('./data/reservations');

const axios = jest.genMockFromModule('axios');

axios.get = (url) => {
  return new Promise((resolve, reject) => {
    if (url === '/listings/7/reservations') {
      resolve(reservations);
    } else {
      reject(new Error('invalid url.'));
    }
  });
};


module.exports = axios;
