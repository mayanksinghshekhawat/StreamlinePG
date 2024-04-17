const mongoose = require('mongoose');

const roomySchema = new mongoose.Schema({
    propertyAddress: {
        type: String,
        required: true
      },
      fullName:{
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      contactNumber: {
        type: Number,
        required: true
      },
      profession:{
        type: String,
        required: true
      },
      roomType:{
        type: String,
        required: true
      },
      rentPerMonth:{
        type: Number,
        required: true
      }
})
const Roomy = mongoose.model('Roomy',roomySchema);

module.exports = Roomy
