import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';
import ForMinorsContent from '../components/ForMinorsContent';

import HeroForMinorsMobile from '../assets/img/heroForMinorsMobile.jpg';
import HeroForMinorsDesktop from '../assets/img/heroForMinorsDesktop.jpg';
import HeroForMinorsSuperDesktop from '../assets/img/heroForMinorsSuperDesktop.jpg';
import ScrollRestoration from '../components/ScrollRestoration';

import { Link } from 'react-router-dom';

const ForMinors = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth <= 768) {
    var imageUrl = HeroForMinorsMobile;
  } else if (windowWidth <= 1080) {
    imageUrl = HeroForMinorsDesktop;
  } else {
    imageUrl = HeroForMinorsSuperDesktop;
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
      <Link to="/" className="back-to-main back-to-main--white">
        POWRÓT DO STRONY GŁÓWNEJ
      </Link>
      <div
        className="hero hero-forMinors"
        style={{ background: `url(${imageUrl}) center 67%  no-repeat` }}
      ></div>
      <div className="science-text text-forMinors" data-aos="fade-up">
        <h1 className="hero-science--header">fizyka dla nieletnich</h1>
        <h5 className="hero-science--p">
          unikalne działania łączące edukację
          <br />z nowymi mediami
        </h5>
      </div>

      <ForMinorsContent />
      <Footer />
    </>
  );
};
export default ForMinors;
