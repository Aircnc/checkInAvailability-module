const db = require('./index.js');
const Reservation = require('./Reservation.js');

const sampleData = [{
    "listStartDate": "10/28/2017",
    "listEndDate": "11/21/2018",
    "reservations": [
      {
        "startDate": "11/30/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000258",
    "userId": "5bd150cafc13ae4ab4000259"
  }, {
    "listStartDate": "10/26/2017",
    "listEndDate": "6/7/2019",
    "reservations": [
      {
        "startDate": "10/25/2017",
        "endDate": "12/2/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab400025a",
    "userId": "5bd150cafc13ae4ab400025b"
  }, {
    "listStartDate": "10/25/2017",
    "listEndDate": "12/4/2018",
    "reservations": [
      {
        "startDate": "11/21/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab400025c",
    "userId": "5bd150cafc13ae4ab400025d"
  }, {
    "listStartDate": "10/29/2017",
    "listEndDate": "2/4/2019",
    "reservations": [
      {
        "startDate": "10/26/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab400025e",
    "userId": "5bd150cafc13ae4ab400025f"
  }, {
    "listStartDate": "10/29/2017",
    "listEndDate": "1/8/2019",
    "reservations": [
      {
        "startDate": "11/13/2017",
        "endDate": "12/2/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000260",
    "userId": "5bd150cafc13ae4ab4000261"
  }, {
    "listStartDate": "10/25/2017",
    "listEndDate": "12/17/2018",
    "reservations": [
      {
        "startDate": "11/11/2017",
        "endDate": "12/2/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000262",
    "userId": "5bd150cafc13ae4ab4000263"
  }, {
    "listStartDate": "10/28/2017",
    "listEndDate": "4/26/2019",
    "reservations": [
      {
        "startDate": "11/19/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000264",
    "userId": "5bd150cafc13ae4ab4000265"
  }, {
    "listStartDate": "10/26/2017",
    "listEndDate": "1/6/2019",
    "reservations": [
      {
        "startDate": "11/15/2017",
        "endDate": "12/4/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000266",
    "userId": "5bd150cafc13ae4ab4000267"
  }, {
    "listStartDate": "10/27/2017",
    "listEndDate": "6/7/2019",
    "reservations": [
      {
        "startDate": "11/25/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab4000268",
    "userId": "5bd150cafc13ae4ab4000269"
  }, {
    "listStartDate": "10/28/2017",
    "listEndDate": "3/2/2019",
    "reservations": [
      {
        "startDate": "11/20/2017",
        "endDate": "12/3/2017"
      }
    ],
    "listingId": "5bd150cafc13ae4ab400026a",
    "userId": "5bd150cafc13ae4ab400026b"
  }];

const insertSampleData = () => {
    Reservation.create(sampleData, (error, result) => {
        console.log('error>>>>>>>>>>>>>>>>>>>>', error);
        console.log('result>>>>>>>>>>>>>>>>>>>', result);
    });
};

insertSampleData();