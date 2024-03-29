import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainHeroMobile from '../assets/img/mainHeroMobile.jpg';
import MainHeroDesktop from '../assets/img/mainHeroDesktop.jpg';
import MainHeroSuperDesktop from '../assets/img/mainHeroSuperDesktop.jpg';
import MainLink1 from '../assets/img/mainIcon1.svg';
import MainLink2 from '../assets/img/mainIcon2.svg';
import MainLink3 from '../assets/img/mainIcon3.svg';
import MainLink4 from '../assets/img/mainIcon4.svg';

const MainContent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (windowWidth <= 768) {
    var imageUrl = MainHeroMobile;
  } else if (windowWidth <= 1920) {
    imageUrl = MainHeroDesktop;
  } else {
    imageUrl = MainHeroSuperDesktop;
  }
  const handleWindowResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
  });
  return (
    <>
      <div className="main">
        <div
          className="main-img"
          style={{
            background: `url(${imageUrl}) 28% center no-repeat`,
          }}
        >
          <div className="main-text">
            <h1 className="main-header" data-aos="fade-up">
              OSADA WIEDZY
            </h1>
            <p className="main-text--mobile" data-aos="fade-up">
              przestrzeń edukacyjnych inicjatyw dla dzieci,
              <br />
              młodzieży i nauczycieli związanych <br />z przedmiotami ścisłymi
            </p>
            <p className="main-text--desktop" data-aos="fade-up">
              przestrzeń edukacyjnych inicjatyw dla dzieci, młodzieży i
              nauczycieli <br />
              związanych z przedmiotami ścisłymi
            </p>
          </div>
        </div>
        <div className="main-links">
          <Link to="/oboz" data-aos="fade-up">
            <div className="main-link">
              <h3 className="main-link--header">OBÓZ NAUKOWY</h3>
              <p>
                wyjątkowy obóz naukowy, przestrzeń budowania relacji, rozwijania
                pasji i zainteresowań
              </p>
              <img
                src={MainLink1}
                alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
              />
            </div>
          </Link>
          <Link to="/nauki-scisle-po-godzinach" data-aos="fade-up">
            <div className="main-link">
              <div className="main-link">
                <h3>
                  NAUKI ŚCISŁE <br className="br" />
                  PO GODZINACH
                </h3>
                <p>
                  zajęcia pozalekcyjne dedykowane uczniom szkół podstawowych,
                  ponadpodstawowych oraz studentom
                </p>
                <img
                  src={MainLink2}
                  alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
                />
              </div>
            </div>
          </Link>
          <Link to="/pasco" data-aos="fade-up">
            <div className="main-link">
              <div className="main-link">
                <h3 className="main-link--header">PASCO</h3>
                <p>
                  urządzenia cyfrowe do pomiarów i analiz podczas doświadczeń na
                  lekcjach przedmiotów przyrodniczych
                </p>
                <img
                  src={MainLink3}
                  alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
                />
              </div>
            </div>
          </Link>
          <Link to="/fizyka-dla-nieletnich" data-aos="fade-up">
            <div className="main-link">
              <div className="main-link">
                <h3>
                  FIZYKA
                  <br className="br" /> DLA NIELETNICH
                </h3>
                <p>
                  system unikalnych działań medialnych o charakterze
                  popularnonaukowym
                </p>
                <img
                  src={MainLink4}
                  alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainContent;
