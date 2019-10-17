const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3001;
const db = require('./db');
const user = require('./routes/users');
const app = express();
app.use(cors());

mongoose.connect(db.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json())

app.get('/api', (req, res) => {
  res.json({ message: 'Hello there' });
});

app.use('/users', user);

app.listen(PORT, () => {
  console.log('Magic happens at PORT ' + PORT);
});
