import React, { useState,useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import "./Map.css";
import { FaRupeeSign } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import main from './main.webp';
import { MdReadMore } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import more from './more.svg'
// import { IonAvatar, IonChip, IonLabel } from '@ionic/react';
const Map = () => {
  const [city, setCity] = useState("Delhi");
  const [locations, setLocations] = useState([]);
  const [hoveredHouse, setHoveredHouse] = useState(null);
  const [roomType, setRoomType] = useState("");
  const [userType, setUserType] = useState("");
  const [priceRange, setPriceRange] = useState("5000");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("/api/property/map", {
          params: { city, priceRange }, // Include city and price filter in the params
        });
        setLocations(response.data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };
    fetchLocations(); // Call the function when component mounts
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("/api/property/map", {
        params: { city },
      });
      setLocations(response.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };
  

  const initialCenter =
    locations.length > 0
      ? [locations[0].latitude, locations[0].longitude]
      : [0, 0];

  return (
    
    <div className="mainDiscover">
      <div className="topProfile">
        <div className="img">
          {/* <img  src={} alt="" /> */}
          <CgProfile />
        </div>
        <div className="name">
        </div>
        <button className="Btn">
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div className="text">Logout</div>
        </button>
      </div>
      <div className="filters">
        <form>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Select Room Type</option>
            <option value="oneSeaterRooms">One Seater</option>
            <option value="twoSeaterRooms">Two Seater</option>
          </select>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="owner">Owner</option>
            <option value="customer">Customer</option>
          </select>
          <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
            <option value="">Select Price Range</option>
            <option value="5000">Below 5000</option>
            <option value="10000">Below 10000</option>
          </select>
        </form>
      </div>
    <div className="discover">
      
      <div className="Content">
      {locations.filter(house => house.oneSeaterPrice <= priceRange).map((house) => (
    <div className="firstHome" key={house._id}  onMouseEnter={() => setHoveredHouse(house)}
    onMouseLeave={() => setHoveredHouse(null)}>
      <div className="Latest">
        <div className="discoverText">
          <span style={{ fontSize: "15px", color: "Grey", marginLeft: "10px" }}>Discover</span>
        </div>
        <div className="LatestText">
          <span style={{ fontSize: "15px", color: "Black", marginRight: "10px" }}>Latest in Town</span>
        </div>
      </div>
      <div className="loc-pricings">
        <div className="location">
          <FaLocationDot /><span style={{ fontSize: "15px", marginLeft: "10px" }}>{house.city}</span>
        </div>
        <div className="pricing">
          <div className="rupees"><FaRupeeSign /><span>{house.oneSeaterPrice}</span></div>
          <span>per month</span>
        </div>
      </div>
      <div className="mainImg">
        <img className="imgMain" src={main} alt="house" />
      </div>
      <div className="smallImg">
          <div className="pehli">
            <img className="imgMain" src={main} alt="house" />
          </div>
          <div className="pehli">
            <img className="imgMain" src={main} alt="house" />
          </div>
          <div className="pehli">
            <img className="imgMain" src={main} alt="house" />
          </div>
      
        <div className="seemore">
          <div className="logomore">
            <img className="seemoreImg" src={more} alt="house" />
          </div>
        </div>
      </div>
      <div className="contacts">
        <div className="contact_btn">
          <button className="shadow__btn">Contact</button>
        </div>
        <div className="rent_btn">
          <button className="shadow__btn">Rent</button>
        </div>
      </div>
      <br></br>
    </div>
  ))}
      </div>
      <div className="map-container">
        <form className="group" onSubmit={handleSubmit}>
          <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            type="search"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="input"
          />
          {/* <button type="submit">Search</button> */}
        </form>
        <MapContainer center={[28, 77]} zoom={10} className="map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker
              key={location._id}
              position={[location.latitude, location.longitude]}
              opacity={hoveredHouse && hoveredHouse._id === location._id ? 1 : 0.5}
                zIndexOffset={hoveredHouse && hoveredHouse._id === location._id ? 1000 : 0}
              > 
                  <Popup>
                  <div className="popup-content">
                    <div className="popup-image">
                      <img src={main} alt="House" />
                    </div>
                    <div className="popup-details">
                      <div className="location">
                        <FaLocationDot /><span>{location.city}</span>
                      </div>
                      <div className="pricing">
                        <div className="rupees"><FaRupeeSign /><span>{location.oneSeaterPrice}</span></div>
                        <span>per month</span>
                      </div>
                    </div>
                  </div>
                </Popup>
              
              </Marker>
            
          ))}
        </MapContainer>
      </div>
    </div>
    </div>
  );
};

export default Map;
