// import React, { useState, useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS for proper styling

// const Nearest = () => {
//   const [nearbyAirports, setNearbyAirports] = useState([]);

//   useEffect(() => {
//     // Fetch nearby airports based on the specified location
//     const latitude = 28.6328; // Latitude of the location
//     const longitude = 77.2197; // Longitude of the location
//     const radius = 100000; // Search radius in meters (50km)

//     fetch(`https://overpass-api.de/api/interpreter?data=[out:json];(node(around:${radius},${latitude},${longitude})[aeroway=aerodrome];way(around:${radius},${latitude},${longitude})[aeroway=aerodrome];relation(around:${radius},${latitude},${longitude})[aeroway=aerodrome];);out;`)
//       .then(response => response.json())
//       .then(data => {
//         setNearbyAirports(data.elements.filter(airport => airport.lat && airport.lon)); // Filter out elements with undefined lat/lon
//       })
//       .catch(error => {
//         console.error('Error fetching nearby airports:', error);
//       });
//   }, []);

//   return (
//     <div style={{ height: '500px' }}> {/* Ensure the map container has a height */}
//       <h1>Nearest Airports</h1>
//       <MapContainer center={[28.6328, 77.2197]} zoom={10} style={{ height: '100%' }}> {/* Specify the height */}
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {nearbyAirports.map(airport => (
//           <Marker key={airport.id} position={[airport.lat, airport.lon]}>
//             <Popup>{airport.tags.name}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// };

// export default Nearest;
import React from 'react';

const Nearest = () => {
  // Embedded code for a 3D model
  const embeddedCode = `
    <div class="sketchfab-embed-wrapper">
      <iframe 
        title="House Interior" 
        frameborder="0" 
        allowfullscreen 
        mozallowfullscreen="true" 
        webkitallowfullscreen="true" 
        allow="autoplay; fullscreen; xr-spatial-tracking" 
        xr-spatial-tracking 
        execution-while-out-of-viewport 
        execution-while-not-rendered 
        web-share 
        src="https://sketchfab.com/models/89c45d1d5dfa4876ba353c86007084b8/embed?autospin=1&autostart=1"
        style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}
      >
      </iframe>
      <p style={{ fontSize: '13px', fontWeight: 'normal', margin: '5px', color: '#4A4A4A' }}>
        <a href="https://sketchfab.com/3d-models/house-interior-89c45d1d5dfa4876ba353c86007084b8?utm_medium=embed&utm_campaign=share-popup&utm_content=89c45d1d5dfa4876ba353c86007084b8" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}> 
          House Interior 
        </a> 
        by 
        <a href="https://sketchfab.com/liam.broughm?utm_medium=embed&utm_campaign=share-popup&utm_content=89c45d1d5dfa4876ba353c86007084b8" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}> 
          Liam Broughm 
        </a> 
        on 
        <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=89c45d1d5dfa4876ba353c86007084b8" 
          target="_blank" 
          rel="nofollow" 
          style={{ fontWeight: 'bold', color: '#1CAAD9' }}>
          Sketchfab
        </a>
      </p>
    </div>
  `;

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>House Viewer</h1>
      {/* Render the embedded code */}
      <div dangerouslySetInnerHTML={{ __html: embeddedCode }} />
    </div>
  );
};

export default Nearest;

