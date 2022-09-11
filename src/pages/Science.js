import React, { useState, useEffect } from 'react';

import Footer from '../components/Footer';

import heroScienceDesktop from '../assets/img/heroScienceDesktop.jpg';
import HeroSuperScienceDesktop from '../assets/img/heroSuperScienceDesktop.jpg';
import ScrollRestoration from '../components/ScrollRestoration';

import { Link } from 'react-router-dom';

const Science = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth <= 1080) {
    var imageUrl = '';
  } else if (windowWidth <= 1920) {
    imageUrl = heroScienceDesktop;
  } else {
    imageUrl = HeroSuperScienceDesktop;
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
        className="hero hero-science"
        style={{
          background: `url(${imageUrl})  center no-repeat var(--science-bg)`,
        }}
      ></div>
      <div className="hero-science-links">
        <h1>NAUKI ŚCISŁE PO GODZINACH</h1>
        <Link to="/nauki-scisle-po-godzinach/fizyka">
          <h2 className="science-link link-physics">FIZYKA</h2>
          <ul>
            <li>
              zajęcia dla uczniów i uczennic ze szkół podstawowych oraz
              ponadpodstawowych
            </li>
            <li>przygotowanie do matury z fizyki rozszerzonej</li>
            <li>
              zajęcia dla studentów i studentek pierwszych lat na kierunkach
              technicznych
            </li>
          </ul>
        </Link>
        <br />
        <Link to="/nauki-scisle-po-godzinach/matematyka">
          <h2 className="science-link link-maths">MATEMATYKA</h2>
          <ul>
            <li>przygotowanie do egzaminu ósmoklasisty</li>
          </ul>
        </Link>
        <br />
        <Link to="/nauki-scisle-po-godzinach/programowanie">
          <h2 className="science-link link-programming">PROGRAMOWANIE</h2>
          <ul>
            <li>programowanie Python</li>
            <li>przygotowanie do matury z informatyki</li>
          </ul>
        </Link>
      </div>
      <div className="hero-science-mobile">
        <Link to="/nauki-scisle-po-godzinach/fizyka">
          <h2 className="science-link link-physics">FIZYKA</h2>
          <ul>
            <li>
              zajęcia dla uczniów i uczennic ze szkół podstawowych oraz
              ponadpodstawowych
            </li>
            <li>przygotowanie do matury z fizyki rozszerzonej</li>
            <li>
              zajęcia dla studentów i studentek pierwszych lat na kierunkach
              technicznych
            </li>
          </ul>
        </Link>

        <Link to="/nauki-scisle-po-godzinach/matematyka">
          <h2 className="science-link link-maths">MATEMATYKA</h2>
          <ul>
            <li>przygotowanie do egzaminu ósmoklasisty</li>
          </ul>
        </Link>
        <Link to="/nauki-scisle-po-godzinach/programowanie">
          <h2 className="science-link link-programming">PROGRAMOWANIE</h2>
          <ul>
            <li>programowanie Python</li>
            <li>przygotowanie do matury z informatyki</li>
          </ul>
        </Link>
      </div>
      <Footer />
    </>
  );
};
export default Science;
