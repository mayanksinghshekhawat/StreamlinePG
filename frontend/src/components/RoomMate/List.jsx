// import React from 'react';
// import './list.css'; 

// function List() {
//   return (
//     <>
//       <div className="announcement">Got a spare room?</div>
//       <div className="container1">
//         <h1>Property address</h1>
//         <div className="search-box">
//           <input type="text" placeholder="Search your address..." />
//           <p>Can't find your address?</p>
//         </div>
//         <div className="checkbox-inline">
//           <input type="checkbox" id="hideStreetName" />
//           <label htmlFor="hideStreetName">Don't display street name</label>
//         </div>
//         <p>Your street number is never displayed, but you can choose not to display your street name as well.</p>
//       </div>
//       <div className="containerxx">
//         <h1>Room Details</h1>
//         <form>
//           <div className="form-group">
//             <label htmlFor="city">City:</label>
//             <input type="text" id="city" name="city" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="state">State:</label>
//             <input type="text" id="state" name="state" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="zip">Zip:</label>
//             <input type="text" id="zip" name="zip" />
//           </div>

//           <div className="form-group">
//             <label htmlFor="bedrooms">Bedrooms:</label>
//             <select id="bedrooms" name="bedrooms">
//               {/* <option value="">--</option> */} {/* Uncomment for a placeholder option */}
//               <option value="1">1</option>
//               <option value="2">2</option>
//               <option value="3">3</option>
//               <option value="4">4+</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label htmlFor="host_type">Host type:</label>
//             <select id="host_type" name="host_type">
//               {/* <option value="">--</option> */} {/* Uncomment for a placeholder option */}
//               <option value="private">Single Seater</option>
//               <option value="shared">Double Seater</option>
//               <option value="shared">Triple Seater</option>
//             </select>
//           </div>

//           <button type="submit" className="btn">Create an account or login</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default List;


import React, { useState, useEffect } from 'react';
import './list.css';
import L from 'leaflet';
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
const List = () => {
  const Navigate = useNavigate();

  
  // const [propertyAddress, setPropertyAddress] = useState('');
  // const [fullName, setFullName] = useState('');
  // const [city, setCity] = useState('');
  // const [email, setEmail] = useState('');
  // const [contactNumber, setContactNumber] = useState('');
  // const [profession, setProfession] = useState('');
  // const [roomType, setRoomType] = useState('');
  // const [rentPerMonth, setRentPerMonth] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [data,setData] = useState({
    propertyAddress:'',
      fullName:'',
      city:'',
      email:'',
      contactNumber:'',
      profession:'',
      roomType:'',
      rentPerMonth:'',
  })
  useEffect(() => {
    if (latitude && longitude) {
      fetchAddressFromCoordinates(latitude, longitude);
    }
  }, [latitude, longitude]);

  const fetchAddressFromCoordinates = async (lat, long) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${long}&format=json`);
      const data1 = await response.json();
      const address = data1.display_name;
      setData(prevState => ({
        ...prevState,
        propertyAddress: address
      }));
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic here, e.g., send data to backend 
    const { propertyAddress,
      fullName,
      city,
      email,
      contactNumber,
      profession,
      roomType,
      rentPerMonth,
    } = data;

    try {
      const {data} = await axios.post('/roomyForm',{
        propertyAddress,
      fullName,
      city,
      email,
      contactNumber,
      profession,
      roomType,
      rentPerMonth

      });
      if(data.error){
        toast.error(data.error);
      }
      else{
        setData({});
        toast.success("Room Posted Successfully");
        Navigate('/');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLocationFetch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="list-room-container">
      <h2>List Your Room</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Property Address:
          <input type="text" value={data.propertyAddress} onChange={(e)=>{setData({...data,propertyAddress:e.target.value})}} />
        </label>
        <label>
          Full Name:
          <input type="text" value={data.fullName} onChange={(e)=>{setData({...data,fullName:e.target.value})}}/>
        </label>
        <label>
          City:
          <input type="text" value={data.city} onChange={(e)=>{setData({...data,city:e.target.value})}}/>
        </label>
        <label>
          Email:
          <input type="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}}/>
        </label>
        <label>
          Contact Number:
          <input type="tel" value={data.contactNumber} onChange={(e)=>{setData({...data,contactNumber:e.target.value})}} />
        </label>
        <label>
          Profession:
          <input type="text"  value={data.profession} onChange={(e)=>{setData({...data,profession:e.target.value})}}  />
        </label>
        <label>
          Room Type:
          <input type="text"  value={data.roomType} onChange={(e)=>{setData({...data,roomType:e.target.value})}}  />
        </label>
        <label>
          Rent Per Month:
          <input type="number"  value={data.rentPerMonth} onChange={(e)=>{setData({...data,rentPerMonth:e.target.value})}}  />
        </label>
        <button type="button" onClick={handleLocationFetch}>Get My Location</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default List;


