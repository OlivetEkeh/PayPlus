// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SendMoney from './components/SendMoney';
import PayBills from './components/PayBills';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />
          <main>
            <Routes>
              {/* Default route, users land here after login or signup */}
              <Route path="/" element={<Home />} />
              
              {/* Other authenticated routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/send-money" element={<SendMoney />} />
              <Route path="/pay-bills" element={<PayBills />} />
              
              {/* Public routes */}
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </main>
          <footer>
            &copy; {new Date().getFullYear()} NaijaPay Plus. All rights reserved.
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
