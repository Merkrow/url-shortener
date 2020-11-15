const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const { shortenUrlRoute, longUrlRoute } = require('./routes');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/shortener', shortenUrlRoute);
app.get('/:shortUrl', longUrlRoute);

app.listen(process.env.PORT, () => {
  console.log(`Started server on port: ${process.env.PORT}`);
})
