import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import PhysicsContent from '../components/PhysicsContent';

import HeroPhysicsMobile from '../assets/img/heroPhysicsMobile.jpg';
import HeroPhysicsDesktop from '../assets/img/heroPhysicsDesktop.jpg';
import HeroSuperPhysicsDesktop from '../assets/img/heroPhysicsSuperDesktop.jpg';
import ScrollRestoration from '../components/ScrollRestoration';

import { Link } from 'react-router-dom';

const Physics = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth <= 768) {
    var imageUrl = HeroPhysicsMobile;
  } else if (windowWidth <= 1080) {
    imageUrl = HeroPhysicsDesktop;
  } else {
    imageUrl = HeroSuperPhysicsDesktop;
  }
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  });
  return (
    <>
      <ScrollRestoration />

      <Link to="/" className="back-to-main">
        POWRÓT DO STRONY GŁÓWNEJ
      </Link>
      <div
        className="hero hero-physics"
        style={{ background: `url(${imageUrl}) center 67%  no-repeat` }}
      ></div>
      <div className="physics-text">
        <h1 className="hero-physics--header">fizyka po godzinach</h1>
        <h5 className="hero-physics--p">
          zajęcia pozalekcyjne dedykowane uczniom szkół
          <br /> podstawowych oraz ponadpodstawowych
        </h5>
      </div>

      <PhysicsContent />
      <Footer />
    </>
  );
};
export default Physics;
