const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  totalRooms: {
    type: Number,
    required: true
  },
  oneSeaterRooms: {
    type: Number,
    required: true
  },
  twoSeaterRooms: {
    type: Number,
    required: true
  },
  currentResidents: {
    type: Number,
    required: true
  },
  oneSeaterPrice: {
    type: Number,
    required: true
  },
  twoSeaterPrice: {
    type: Number,
    required: true
  },
  otherCharges: {
    type: String
  }
});

// Index for location field
propertySchema.index({ location: '2dsphere' });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
