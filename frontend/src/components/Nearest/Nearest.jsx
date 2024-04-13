import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for proper styling

const Nearest = () => {
  const [nearbyAirports, setNearbyAirports] = useState([]);

  useEffect(() => {
    // Fetch nearby airports based on the specified location
    const latitude = 28.6328; // Latitude of the location
    const longitude = 77.2197; // Longitude of the location
    const radius = 100000; // Search radius in meters (50km)

    fetch(`https://overpass-api.de/api/interpreter?data=[out:json];(node(around:${radius},${latitude},${longitude})[aeroway=aerodrome];way(around:${radius},${latitude},${longitude})[aeroway=aerodrome];relation(around:${radius},${latitude},${longitude})[aeroway=aerodrome];);out;`)
      .then(response => response.json())
      .then(data => {
        setNearbyAirports(data.elements.filter(airport => airport.lat && airport.lon)); // Filter out elements with undefined lat/lon
      })
      .catch(error => {
        console.error('Error fetching nearby airports:', error);
      });
  }, []);

  return (
    <div style={{ height: '500px' }}> {/* Ensure the map container has a height */}
      <h1>Nearest Airports</h1>
      <MapContainer center={[28.6328, 77.2197]} zoom={10} style={{ height: '100%' }}> {/* Specify the height */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {nearbyAirports.map(airport => (
          <Marker key={airport.id} position={[airport.lat, airport.lon]}>
            <Popup>{airport.tags.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Nearest;
