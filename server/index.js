const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Reservations = require('../database/Reservation');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/dist`));


const port = 3001;

app.get('/listings/:id/reservations', cors(), (req, res) => {
  const { id } = req.params;
  Reservations.find({ listingId: id })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      throw error;
    });
});

app.listen(port, () => {
  console.log('server is up listening on 3001!');
});
