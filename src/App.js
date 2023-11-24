import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import RegistrationForm from './Pages/RegistrationForm';
import PricingComponent from './Pages/Pricing.js/PricingComponent';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/pricing" element={<PricingComponent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
