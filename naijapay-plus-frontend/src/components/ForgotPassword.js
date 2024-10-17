// src/components/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/forgot-password', { email });
      console.log(response.data); // Handle success (show message, etc.)
    } catch (error) {
      console.error(error.response.data); // Handle error
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;
