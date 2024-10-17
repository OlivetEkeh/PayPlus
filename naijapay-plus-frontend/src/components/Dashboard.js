import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p className="welcome-message">Welcome, Olivet!</p>
        <p className="balance">Your Balance: <span>₦100,000,000.00</span></p>
        <div className="button-group">
          <Link to="/send-money" className="btn">Send Money</Link>
          <Link to="/pay-bills" className="btn">Pay Bills</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
