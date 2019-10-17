var mongoose = require('mongoose');

const user = mongoose.model('User', {
  name: String,
  company: String
});

module.exports = user
