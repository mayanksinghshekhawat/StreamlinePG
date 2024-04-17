const mongoose = require('mongoose');

const rentHomeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  roomType:{
    type: String,
    required: true
  }
});

const RentHome = mongoose.model('RentHome', rentHomeSchema);

module.exports = RentHome;
