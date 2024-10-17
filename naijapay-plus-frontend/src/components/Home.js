// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

const Home = () => {
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(5000); // Example balance amount, you can replace it with actual data fetching logic
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  useEffect(() => {
    // Check if a user is logged in
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const toggleBalanceVisibility = () => {
    setIsBalanceVisible(!isBalanceVisible);
  };

  return (
    <div>
      <h1>Welcome to PayPlus</h1>
      {user && <p>Hello, {user.displayName}</p>}
      <div className="balance-section">
        <p>Balance: {isBalanceVisible ? `$${balance}` : '****'}</p>
        <button onClick={toggleBalanceVisibility}>
          {isBalanceVisible ? 'Hide Balance' : 'Show Balance'}
        </button>
      </div>
      <div className="actions">
        <p>Select what you want to buy:</p>
        {/* Add buttons or links here for the different options */}
        <button>Buy Airtime</button>
        <button>Buy Data</button>
        <button>Buy Electricity</button>
      </div>
    </div>
  );
};

export default Home;
