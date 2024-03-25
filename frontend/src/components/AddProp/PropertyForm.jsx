import React, { useState } from 'react';
import axios from 'axios';
import './PropertyForm.css';
const PropertyForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    latitude: '',
    longitude: '',
    city: '',
    totalRooms: '',
    oneSeaterRooms: '',
    twoSeaterRooms: '',
    currentResidents: '',
    oneSeaterPrice: '',
    twoSeaterPrice: '',
    otherCharges: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === 'latitude' || name === 'longitude' ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to backend API
      const response = await axios.post('/api/property/add', formData);
      console.log(response.data);
      // Clear form after successful submission
      setFormData({
        email: '',
        latitude: '',
        longitude: '',
        city: '',
        totalRooms: '',
        oneSeaterRooms: '',
        twoSeaterRooms: '',
        currentResidents: '',
        oneSeaterPrice: '',
        twoSeaterPrice: '',
        otherCharges: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="property-form-container">
      <h2>Add Your Property</h2>
      <form onSubmit={handleSubmit} className="property-form">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Latitude:</label>
        <input
          type="text"
          name="latitude"
          value={formData.latitude}
          onChange={handleChange}
          required
        />

        <label>Longitude:</label>
        <input
          type="text"
          name="longitude"
          value={formData.longitude}
          onChange={handleChange}
          required
        />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Total Rooms:</label>
        <input
          type="number"
          name="totalRooms"
          value={formData.totalRooms}
          onChange={handleChange}
          required
        />

        <label>Total One Seater Rooms:</label>
        <input
          type="number"
          name="oneSeaterRooms"
          value={formData.oneSeaterRooms}
          onChange={handleChange}
          required
        />

        <label>Total Two Seater Rooms:</label>
        <input
          type="number"
          name="twoSeaterRooms"
          value={formData.twoSeaterRooms}
          onChange={handleChange}
          required
        />

        <label>Current Number of Residents:</label>
        <input
          type="number"
          name="currentResidents"
          value={formData.currentResidents}
          onChange={handleChange}
          required
        />

        <label>One Seater Price:</label>
        <input
          type="number"
          name="oneSeaterPrice"
          value={formData.oneSeaterPrice}
          onChange={handleChange}
          required
        />

        <label>Two Seater Price:</label>
        <input
          type="number"
          name="twoSeaterPrice"
          value={formData.twoSeaterPrice}
          onChange={handleChange}
          required
        />

        <label>Other Charges:</label>
        <input
          type="text"
          name="otherCharges"
          value={formData.otherCharges}
          onChange={handleChange}
        />

        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default PropertyForm;
