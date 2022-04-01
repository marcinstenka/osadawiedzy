import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import PhysicsContent from '../components/PhysicsContent';

import HeroPhysicsMobile from '../assets/img/heroPhysicsMobile.jpg';
import HeroPhysicsDesktop from '../assets/img/heroDesktop.jpg';
import HeroSuperPhysicsDesktop from '../assets/img/heroSuperDesktop.jpg';
import { Link } from 'react-router-dom';

const Physics = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth <= 768) {
    var imageUrl = HeroPhysicsMobile;
  } else if (windowWidth <= 1920) {
    imageUrl = HeroPhysicsDesktop;
  } else {
    imageUrl = HeroSuperPhysicsDesktop;
  }
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  return (
    <>
      <Link to="/" className="back-to-main">
        POWRÓT DO STRONY GŁÓWNEJ
      </Link>
      <div
        className="hero"
        style={{ background: `url(${imageUrl}) center center  no-repeat` }}
      >
        <h1 className="hero-physics__header">FIZYKA PO GODZINACH</h1>
        <h5 className="hero-physics__p">
          zajęcia pozalekcyjne dedykowane uczniom szkół podstawowych
          orazponadpodstawowych
        </h5>
      </div>
      <PhysicsContent />
      <Footer />
    </>
  );
};
export default Physics;
