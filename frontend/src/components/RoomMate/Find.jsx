import React from 'react';
import './find.css'; 

function Find() {
  return (
    <>
      <div className="announcement">Looking for a room?</div> 
      <div className="announcement1">Create your room wanted profile.</div> 
      
      <div className="container1">
        <h1>Where are you looking?</h1>
        <div className="search-box">
          <input type="text" placeholder="Type location..." />
        </div>
      </div>
      
      <div className="containerxx">
        <h2>About you</h2>

        <form>
          <div className="form-group">
            <label htmlFor="budget">Budget</label>
            <input type="text" id="budget" name="budget" placeholder="Type per month Budget" />
          </div>

          <div className="form-group">
            <label htmlFor="host_type">I'm looking...</label>
            <select id="host_type" name="host_type">
              {/* <option value="">--</option> */} {/* It's a good practice to uncomment this line for accessibility */}
              <option value="private">Single Seater</option>
              <option value="shared">Double Seater</option>
              <option value="shared">Triple Seater</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gender</label>
            <select id="Gender" name="Gender">
              {/* <option value="">--</option> */}
              <option value="1">Select</option>
              <option value="2">Male</option>
              <option value="3">Female</option>
              <option value="4">Other</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default Find;
