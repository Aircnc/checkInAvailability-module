const Reservations = require('../database/Reservation');
const fake = require('../utils/fake_data');

xtest('properly clears data in the collection', (done) => {
  expect.assertions(1);
  Reservations.deleteMany({}, (err) => {
    if (err) throw err;
    Reservations.countDocuments({}, (error, count) => {
      if (error) throw error;
      expect(count).toBe(0);
      done();
    });
  });
});

xtest('properly seed data in the collection', (done) => {
  expect.assertions(1);
  Reservations.create(fake(100), (err) => {
    if (err) throw err;
    Reservations.countDocuments({}, (error, count) => {
      if (error) throw error;
      expect(count).toBe(100);
      done();
    });
  });
});
