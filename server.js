// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);

app.use(cors());
app.use(express.json());

const { generateUserData } = require('./server-consts');

const userStatistic = generateUserData(15);

app.get('/', (req, res) => {
  res.json(userStatistic);
});

server.listen(3001, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Server has launched');
  }
});
