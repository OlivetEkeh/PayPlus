import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUserCircle, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
    setShowProfileOptions(false); // Close profile options when menu is open
  };

  const handleProfileClick = () => {
    setShowProfileOptions(!showProfileOptions);
    setShowMenu(false); // Close menu when profile options are open
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <nav className="navbar">
      <h1>PayPlus</h1>
      <ul className={`navbar-left ${showMenu ? 'show' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/send-money">Send Money</Link></li>
        <li><Link to="/pay-bills">Pay Bills</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      <div className="navbar-right">
        {user ? (
          <>
            <div className="profile-container">
              {profilePicture ? (
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="user-icon profile-picture"
                  onClick={handleProfileClick}
                />
              ) : (
                <FaUserCircle className="user-icon" onClick={handleProfileClick} />
              )}
              {showProfileOptions && (
                <div className="profile-options">
                  <button onClick={() => alert('View Profile Picture')}>View Profile Picture</button>
                  <label htmlFor="profile-upload" className="upload-label">
                    Change Profile Picture
                    <input id="profile-upload" type="file" onChange={handleFileChange} />
                  </label>
                  <button onClick={() => setProfilePicture(null)}>Delete Profile Picture</button>
                </div>
              )}
            </div>
            <FaBars className="menu-icon" onClick={handleMenuClick} />
            {showMenu && (
              <div className="menu-options">
                <Link to="/settings">Settings</Link>
                <Link to="/transaction-history">Transaction History</Link>
                <button onClick={logout}>Logout</button>
              </div>
            )}
          </>
        ) : (
          <>
            <FaUserCircle className="user-icon" onClick={handleProfileClick} />
            {showProfileOptions && (
              <div className="profile-options">
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
              </div>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
