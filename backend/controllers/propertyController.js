const Property = require('../models/Property');

exports.addProperty = async (req, res) => {
    try {
      // Create a new property based on the request body
      const property = new Property(req.body);
      // Save the property to the database
      await property.save();
      // Send a success response
      res.status(201).json({ success: true, message: 'Property added successfully' });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to add property' });
    }
  };
  
  // Controller function to edit a property
  exports.editProperty = async (req, res) => {
    try {
      const { id } = req.params;
      // Find the property by ID and update it with the request body
      await Property.findByIdAndUpdate(id, req.body);
      // Send a success response
      res.json({ success: true, message: 'Property updated successfully' });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to update property' });
    }
  };
  
  // Controller function to delete a property
  exports.deleteProperty = async (req, res) => {
    try {
      const { id } = req.params;
      // Find the property by ID and delete it
      await Property.findByIdAndDelete(id);
      // Send a success response
      res.json({ success: true, message: 'Property deleted successfully' });
    } catch (error) {
      // Handle any errors
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to delete property' });
    }
}

//fetch prop:
exports.fetchProperty = async (req, res) => {
  try {
    const city = req.query.city;
    const locations = await Property.find({ city: city });
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
