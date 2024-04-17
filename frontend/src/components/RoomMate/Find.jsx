import React, { useState,useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import './find.css'; 
import { FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import sample from './sample.jpg'
function Find() {
  const [city, setCity] = useState("Delhi");
  const [roomType, setRoomType] = useState("");
  const [priceRange, setPriceRange] = useState("5000");
  const [locations, setLocations] = useState([]);
  const [gender, setGender] = useState("");


  // useEffect(() => {
  //   const fetchRoomy = async () => {
  //     try {
  //       const response = await axios.get("/fetchRoomy", {
  //         params: { city, priceRange }, // Include city and price filter in the params
  //       });
  //       setLocations(response.data);
  //     } catch (error) {
  //       console.error("Error fetching locations:", error);
  //     }
  //   };
  //   fetchLocations(); // Call the function when component mounts
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/roomy", {
        params: { city },
      });
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };


  return (
    <>
    <div className="container-parentx">
      {/* <div className="container1x">
        <div className="search-box1">
          
        </div>
      </div> */}
      
      <div className="containerxx">
        <h2>What are You Looking For?</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group1">
          <input type="text" placeholder="Type location..."   value={city}
            onChange={(e) => setCity(e.target.value)}/>
            <label htmlFor="budget">Budget</label>
            <input type="number" id="budget" name="budget" placeholder="Type per month Budget" 
            value={priceRange} onChange={(e) => setPriceRange(e.target.value)}/>
          </div>

          <div className="form-group1">
            <label htmlFor="host_type">I'm looking...</label>
            <select id="host_type" name="host_type" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
              {/* <option value="">--</option> */} {/* It's a good practice to uncomment this line for accessibility */}
              <option value="private">Single Seater</option>
              <option value="shared">Double Seater</option>
              <option value="shared">Triple Seater</option>
            </select>
          </div>

          <div className="form-group1">
            <label htmlFor="Gender">Gender</label>
            <select id="Gender" name="Gender"  value={gender}
            onChange={(e) => setGender(e.target.value)}>
              {/* <option value="">--</option> */}
              <option value="1">Select</option>
              <option value="2">Male</option>
              <option value="3">Female</option>
              <option value="4">Other</option>
            </select>
          </div>
          <div className="form-group1">
            <button onClick={handleSubmit} >Submit</button>
          </div>
        </form>
      </div>
      {/* <div className="map-container">
        <MapContainer center={[28, 77]} zoom={10} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker
              key={location._id}
              position={[location.latitude, location.longitude]}
              // opacity={hoveredHouse && hoveredHouse._id === location._id ? 1 : 0.5}
              //   zIndexOffset={hoveredHouse && hoveredHouse._id === location._id ? 1000 : 0}
              > 
                  <Popup>
                  <div className="popup-content">
                    <div className="popup-image">
                      <img alt="House" />
                    </div>
                    <div className="popup-details">
                      <div className="location">
                        <FaLocationDot /><span>{location.city}</span>
                      </div>
                      <div className="pricing">
                        <div className="rupees"><FaRupeeSign /><span>{location.rentPerMonth}</span></div>
                        <span>per month</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              
              </Marker>
            
          ))}
        </MapContainer>
      </div> */}
      </div>

      <div className="Contentx">
      {locations.filter(roomy => roomy.rentPerMonth <= priceRange).map((roomy) => (
    <div className="firstRoomy" key={roomy._id}>
      <div className="avail3_1"><div className="pichere1">
        <img src={sample} alt="member"/></div></div>
      <div className="avail3_2">
        <div className="memebrname">{roomy.fullName}</div>
        <div className="priceAndLocation">{roomy.rentPerMonth}</div></div>
      <div className="avail3_3"><div className="contactscard">
        <FaPhoneAlt/>
        <MdOutlineMailOutline/>
        <FaWhatsapp/>
        </div></div>
        </div>
  ))}
      </div>
    </>
  );
}

export default Find;
