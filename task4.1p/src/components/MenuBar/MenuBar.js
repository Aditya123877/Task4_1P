import React from 'react';
import './MenuBar.css'; 

function NavBar() {
  return (
    <div className="menu-bar">
      <div className="menu-brand">
        <h3>DEVLink Marketplace</h3>
      </div>
      <div className="menu-buttons">
        <button>Find DEV</button>
        <button>Find Jobs</button>
        <button>Login</button>
        <button>Create Account</button>
      </div>
    </div>
  );
}

export default  NavBar;
