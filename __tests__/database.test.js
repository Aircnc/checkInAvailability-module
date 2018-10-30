const Reservations = require('../database/Reservation');

test('properly clears data in the collection', () => {
  Reservations.deleteMany({})
    .then(() => {
      Reservations.countDocuments({})
        .then((error, count) => {
          expect(count).toBe(0);
        });
    });
});
