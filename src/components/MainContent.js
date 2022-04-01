import React from 'react';
import { Link } from 'react-router-dom';
import MainHeroMobile from '../assets/img/mainHeroMobile.jpg';
import MainLink1 from '../assets/img/mainIcon1.png';
import MainLink2 from '../assets/img/mainIcon2.png';
import MainLink3 from '../assets/img/mainIcon3.png';
import MainLink4 from '../assets/img/mainIcon4.png';

const MainContent = () => {
  return (
    <>
      <div className="main">
        <div
          className="main-img"
          style={{
            background: `url(${MainHeroMobile}) 28% center no-repeat`,
          }}
        >
          <div className="main-text">
            <h1 className="main-header">OSADA WIEDZY</h1>
            <p>
              przestrzeń edukacyjnych inicjatyw dla dzieci,
              <br />
              młodzieży i nauczycieli związanych <br />z przedmiotami ścisłymi
            </p>
          </div>
        </div>
        <div className="main-links">
          <Link to="/oboz">
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
          <div className="main-link">
            <Link to="/fizyka-po-godzinach">
              <div className="main-link">
                <h3>FIZYKA PO GODZINACH</h3>
                <p>
                  zajęcia pozalekcyjne dedykowane uczniom szkół podstawowych
                  oraz ponadpodstawowych
                </p>
                <img
                  src={MainLink2}
                  alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
                />
              </div>
            </Link>
          </div>
          <div className="main-link">
            <Link to="/oboz">
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
            </Link>
          </div>
          <div className="main-link">
            <Link to="/oboz">
              <div className="main-link">
                <h3>FIZYKA DLA NIELETNICH</h3>
                <p>
                  system unikalnych działań medialnych o charakterze
                  popularnonaukowym
                </p>
                <img
                  src={MainLink4}
                  alt="Przejdź na stornę obozu naukowego 'Osada Wiedzy'"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
