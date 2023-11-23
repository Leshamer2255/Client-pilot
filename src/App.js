import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import Nav from './Pages/Nav/Nav';
import RegistrationForm from './Pages/RegistrationForm';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Nav />
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
