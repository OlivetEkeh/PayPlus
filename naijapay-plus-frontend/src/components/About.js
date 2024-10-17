// src/components/About.js
import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About Us</h1>
        <section className="company-info">
          <h2>Company Information</h2>
          <p>NaijaPay Plus is your trusted platform for sending money and paying bills. We aim to provide seamless financial services to our users, ensuring convenience, reliability, and security in every transaction.</p>
        </section>
        <section className="mission">
          <h2>Our Mission</h2>
          <p>Our mission is to revolutionize the way people manage their finances by offering innovative solutions that simplify payments and transfers. We strive to empower our users with tools that make financial transactions easy and accessible.</p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>Money Transfer: Send money to anyone, anywhere, anytime.</li>
            <li>Bill Payments: Pay your bills quickly and securely.</li>
            <li>Airtime Recharge: Recharge your phone with ease.</li>
            <li>Utility Payments: Pay for electricity, water, and other utilities.</li>
          </ul>
        </section>
        <section className="team">
          <h2>Meet Our Team</h2>
          <p>Our team is composed of dedicated professionals who are passionate about making financial services more accessible to everyone. We work tirelessly to ensure that our platform is secure, reliable, and user-friendly.</p>
          <ul>
            <li><strong>Olivet Ekeh</strong> - CEO</li>
            <li><strong>Adenuga Sunday</strong> - CTO</li>
            <li><strong>Staff Members</strong> - Engineers</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, please don't hesitate to contact us.</p>
          <p>Email: support@naijapayplus.com</p>
          <p>Phone: +234 806 642 0222</p>
        </section>
      </div>
    </div>
  );
}

export default About;

