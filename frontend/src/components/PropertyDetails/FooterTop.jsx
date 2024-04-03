import React from 'react';
import './FooterTop.css'; // Make sure the path matches where your CSS file is located

function FooterTop() {
  return (
    <div className="containerx">
      <div className="header2">
        <h1 style={{ color: 'white' }}>Check Out a Neighborhood</h1>
        <p>Does it have pet-friendly rentals? Get important local information on the area you're most interested in.</p>
        <div className="search-bar">
          <input type="text" placeholder="Enter city or ZIP Code" style={{ width: '25%' }} />
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
