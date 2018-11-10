const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Reservations = require('../database/Reservation');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/listings/:id', express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/dist`));

const PORT = 8080;
const HOST = '0.0.0.0';

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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
