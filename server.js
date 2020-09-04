// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const express = require('express');

const app = express();
const server = require('http').Server(app);

// Avoid problems with Secure Policy
app.use(cors());
app.use(express.json());

const { generateUserData } = require('./server-consts');

let userStatistic = generateUserData(15);

app.get('/', (req, res) => {
  res.json(userStatistic);
});

app.post('/', (req, res) => {
  const newStatistic = userStatistic.filter((el) => el.id !== req.body.id);
  userStatistic = newStatistic;
  res.json(newStatistic);
});

server.listen(3001, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    console.log('Server has launched');
  }
});
