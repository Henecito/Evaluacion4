import React from 'react';
import logo from '../assets/img/Logo.JPEG'; 

const Home = () => {
  return (
    <div className="home-container text-center my-5">
      <img src={logo} alt="STDI Logo" className="logo" />
    </div>
  );
};

export default Home;
