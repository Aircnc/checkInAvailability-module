const Reservations = require('../database/Reservation');
const db = require('../database/index');

test('properly clears data in the collection', () => {
  Reservations.deleteMany({})
    .then(() => {
      Reservations.countDocuments({})
        .then((error, count) => {
          expect(count).toBe(0);
          db.close();
        });
    });
});
