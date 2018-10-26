const faker = require('faker');
const fakeData = [];

const fake = (num) => {
    for (let i = 0; i < num; i++) {
        let sample = {};
        sample.listStartDate = faker.date.between('2017/01/01', '2017/02/01');
        sample.listEndDate = faker.date.between('2019/01/01', '2019/02/01');
        sample.listingId = faker.random.uuid();
        sample.userId = faker.random.uuid();
        sample.minStay = Math.floor(Math.random() * 5);
        sample.reviewCount = Math.floor(Math.random() * 100 + 100);
        sample.avgReview = Math.floor(Math.random() * 5) + 1;
        let randomNumOfReservations = Math.ceil(Math.random() * 10);
        const reservations = [];
        for (let j = 1; j <= randomNumOfReservations; j++) {
            const reservation = [];
            let startDate = faker.date.between('2017/02/02', '2017/03/02');
            let endDate = new Date(startDate);
            endDate.setDate(endDate.getDate() + j);
            reservation.push(startDate, endDate);
            startDate = endDate;
            reservations.push(reservation);
        }
        sample.reservations = reservations;
        fakeData.push(sample);
    }
    return fakeData;
};

module.exports = fake;