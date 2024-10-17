import React, { useState } from 'react';
import axios from 'axios';
import './SendMoney.css';

const SendMoney = () => {
  const [formData, setFormData] = useState({ recipient: '', amount: '', message: '' });
  const { recipient, amount, message } = formData;

  const onChange = e => setFormData({ ...formData, [ e.target.name ]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/send-money', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred while sending money');
    }
  };

  return (
    <div className="send-money">
      <div className="send-money-content">
        <h1>Send Money</h1>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            name="recipient" 
            value={recipient} 
            onChange={onChange} 
            placeholder="Recipient" 
            required 
          />
          <input 
            type="number" 
            name="amount" 
            value={amount} 
            onChange={onChange} 
            placeholder="Amount" 
            required 
          />
          <textarea 
            name="message" 
            value={message} 
            onChange={onChange} 
            placeholder="Message" 
          />
          <div className="button-group">
            <button className="btn" type="submit">Send</button>
            <button className="btn" type="reset">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendMoney;
