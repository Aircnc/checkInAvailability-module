const Reservations = require('../database/Reservation');
const fake = require('../utils/fake_data');

test('properly clears data in the collection', () => {
  Reservations.deleteMany({})
    .then(() => {
      Reservations.countDocuments({})
        .then((error, count) => {
          expect(count).toBe(0);
        });
    });
});

test('properly seed data in the collection', () => {
  Reservations.create(fake(100))
    .then(() => {
      Reservations.countDocuments({})
        .then((error, count) => {
          expect(count).toBe(100);
        });
    });
});
