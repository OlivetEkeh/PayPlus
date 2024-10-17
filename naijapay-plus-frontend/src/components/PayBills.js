import React, { useState } from 'react';
import axios from 'axios';
import './PayBills.css';

const PayBills = () => {
  const [formData, setFormData] = useState({ biller: '', amount: '', billType: '' });
  const { biller, amount, billType } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/pay-bills', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('An error occurred while paying the bill');
    }
  };

  const billTypes = [
    "PHCN", "Airtime Recharge", "DSTV", "Tax", "Water Bill", "WAEC", "NECO", 
    "JAMB", "GOtv", "StarTimes", "TSTV", "School Fees", "Cable TV", "Internet", 
    "Utility", "Rent", "Insurance"
  ]; // Add more bill types as needed

  const billerImages = [
    { name: "WAEC", url: "https://via.placeholder.com/150", link: "https://www.waecnigeria.org/" },
    { name: "NECO", url: "https://via.placeholder.com/150", link: "http://www.neco.gov.ng/" },
    { name: "JAMB", url: "https://via.placeholder.com/150", link: "https://www.jamb.gov.ng/" },
    { name: "Airtel", url: "https://via.placeholder.com/150", link: "https://www.airtel.com.ng/" },
    { name: "MTN", url: "https://via.placeholder.com/150", link: "https://www.mtnonline.com/" },
    { name: "Glo", url: "https://via.placeholder.com/150", link: "https://www.gloworld.com/ng/" },
    { name: "9mobile", url: "https://via.placeholder.com/150", link: "https://9mobile.com.ng/" }
    // Add more billers with their actual images and links
  ];

  return (
    <div className="pay-bills">
      <div className="pay-bills-content">
        <h1>Pay Bills</h1>
        <form onSubmit={onSubmit}>
          <input 
            type="text" 
            name="biller" 
            value={biller} 
            onChange={onChange} 
            placeholder="Biller" 
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
          <select 
            name="billType" 
            value={billType} 
            onChange={onChange} 
            required 
          >
            <option value="">Select Bill Type</option>
            {billTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          <div className="button-group">
            <button className="btn" type="submit">Pay Bill</button>
            <button className="btn" type="reset">Cancel</button>
          </div>
        </form>
      </div>
      <div className="biller-images">
        {billerImages.map((biller, index) => (
          <div key={index} className="biller-image">
            <a href={biller.link} target="_blank" rel="noopener noreferrer">
              <img src={biller.url} alt={biller.name} />
            </a>
            <p>{biller.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayBills;
