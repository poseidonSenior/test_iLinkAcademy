import React, { useState } from 'react';
import './App.css';
import './AppMobile.css';

import Header from './Components/Header/Header';
import AboutMe from './Components/AboutMe/AboutMe';
import Comment from './Components/Comment/Comment';
import Footer from './Components/Footer/Footer';

import Vector from './Components/img/Vector.svg'
import VectorMobile from './Components/img/VectorMobile.svg'

function App() {
  return (
    <div className="container">
      <Header />
      <div className="text-Wlc" >
        Добро пожаловать в академию!
      </div>
      <img className="img-vector" src={Vector} />
      <img className="img-vectorMobile" src={VectorMobile} />

      <AboutMe />
      <Comment />
      <Footer />
    </div>
  );
}

export default App;
