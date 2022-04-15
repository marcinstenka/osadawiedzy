import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'; // problem with route - added  '/swiper-react' at the end
import SwiperCore, { Navigation, Pagination } from 'swiper';

import WbIcon from '../assets/img/forMinors-wb.svg';
import TikTokIcon from '../assets/img/forMinors-tik-tok.svg';
import YtIcon from '../assets/img/forMinors-yt.svg';
import FbIcon from '../assets/img/forMinors-fb.svg';
import ForMinorsLogo from '../assets/img/forMinorsLogo.png';
import ForMinorsSlider1 from '../assets/img/forMinorsSlider1.jpg';
import ForMinorsSlider2 from '../assets/img/forMinorsSlider2.jpg';
import ForMinorsSlider3 from '../assets/img/forMinorsSlider3.jpg';
import Triangle from '../assets/img/triangle.svg';

SwiperCore.use([Navigation, Pagination]);

const ForMinorsContent = () => {
  return (
    <>
      <div className="about about-forMinors">
        <h2 className="about--header header">O PROJEKCIE</h2>
        <p className="about--text about--text--forMinors">
          <bold>„Fizyka dla nieletnich – doświadczenia”</bold>{' '}
          (www.underage.pro) unikalny projekt pod patronatem honorowym Ministra
          Edukacji i Nauki przeznaczony dla nauczycieli fizyki, przedmiotów
          zawodowych oraz dla uczniów fizyki z klas 7-8 szkół podstawowych,
          młodzieży z klas 1-4 liceów oraz 1-5 techników, a także ze szkół
          zawodowych.
        </p>
        <p className="about--text about--text--forMinors">
          Projekt obejmuje 100 doświadczeń z całego zakresu nauczania fizyki,
          które w kolejnych miesiącach będą uzupełniane o kolejne „paczki”
          eksperymentow, dostępnych bezpłatnie (a także do ściągnięcia) na
          stronie{' '}
          <a href="//underage.pro/fizyka/doswiadczenia">
            www.underage.pro/fizyka/doswiadczenia
          </a>
          . Doświadczenia celowo pozbawione są komentarza, by pozostawić
          nauczycielom pole do zademontrowania i opracowania ich na lekcjach.
        </p>
        <iframe
          title="movie"
          className="frame frame-forMinors"
          src="https://www.youtube.com/embed/clwS2qAU1q4"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="about--text about--text--forMinors">
          Rozszerzeniem projektu jest cykl atrakcyjnych prezentacji i omówień z
          fizyki, przeznaczonych dla uczniów, które dostępne są pod adresem{' '}
          {` `}
          <a href="/underage.pro/fizyka/odcinki">
            www.underage.pro/fizyka/odcinki
          </a>{' '}
          w formie kilku-kilkunastominuto-wych filmów w przystępny sposób
          wyjaśnionych przez dwóch nauczycieli z wejherowskiego „Elektryka”:
          Ignacego Rejmaka i Przemysława Rojewskiego.
        </p>
        <p className="about--text about--text--forMinors">
          „Fizyka dla nieletnich” powstała po konsultacjach z nauczycielami
          fizyki, pedagogami oraz naukowcami, którzy wskazywali na olbrzymie
          zapotrzebowanie na takie pomoce dydaktyczne. Projekt został
          przygotowany w oparciu o podstawę programową.
        </p>
        <p className="about--text about--text--forMinors">
          100 doświadczeń z zakresu kinematyki, dynamiki, bryły sztywnej,
          statyki, drgań i fal, elektrostatyki oraz prądu stałego. Już wkrótce
          kolejne eksperymentyz tych i kolejnych działów: prądu przemiennego,
          magnetyzmu, hydrostatyki, termodynamiki, optyki oraz fizyki jądrowej.
          Cotygodniowe odcinki na YouTube – premiera w każdą środę –
          przeznaczone dla uczniów, które z dystansem i humorem tłumaczą nawet
          najtrudniejsze zagadnienia.
        </p>
        <iframe
          title="movie"
          className="frame frame-forMinors"
          src="https://www.youtube.com/embed/U1_CFAE_tjY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className="forMinors-social">
          <h3>odwiedź naszą stronę i media społecznościowe:</h3>
          <div className="social-continer">
            <a href="//underage.pro">
              <img src={WbIcon} alt="Sprawdź naszą stronę!" />
            </a>
            <a href="//tiktok.com/@underage.pro">
              <img src={TikTokIcon} alt="Sprawdź naszego Tik Toka!" />
            </a>
            <a href="//youtube.com/channel/UChkmmDRRdNvkrLB6lFctbgw">
              <img src={YtIcon} alt="Sprawdź nasz kanał na Youtube!" />
            </a>
            <a href="//facebook.com/NieletniInzynierowie">
              <img src={FbIcon} alt="Sprawdź naszego Facebooka!" />
            </a>
          </div>
        </div>
      </div>
      <div className="forMinors-tutors">
        <h2 className="about--header header">PROWADZĄCY </h2>
        <p className="about--text">
          Prowadzącymi i realizującymi doświadczenia są Ignacy Rejmak i
          Przemysław Rojewski, charyzmatyczni nauczyciele z wieloletnim stażem i
          sukcesami. Potrafią wciągnąć uczniów w niełatwą dziedzinę, jaką jest
          fizyka. Tworzą doskonały, pełen humoru i dystansu do siebie duet.
          <ul>
            <li>
              Ignacego obserwowaliśmy podczas 4 lat pracy nad filmem
              dokumentalnym „Nieletni inżynierowie”.
            </li>
            <li>
              Przemek jest magikiem doświadczeń, potrafi zilustrować każde
              zjawisko dzięki czemu fizyka przestaje być wiedzą tajemną. Jej
              prawa stają się zrozumiałe.
            </li>
          </ul>
          Strony merytorycznej na planie i poza nim dogląda dr inż. Grzegorz
          Łukasik. Doświadczenia wykonywane są w jednej z najlepszych pracowni w
          kraju, w wejherowskim „Elektryku”.
        </p>
        <div className="forMinors-slider">
          <Swiper
            slidesPerView={1}
            navigation={{
              nextEl: '.nextNav',
              prevEl: '.prevNav',
            }}
            loop={true}
            pagination={{
              el: '.pagination',
              clickable: true,
            }}
            grabCursor
          >
            <div className="swiper-nav">
              <div className="pagination"></div>
            </div>
            <div className="prevNav">
              <img src={Triangle} alt="Strzałki służące do przewijania" />
            </div>

            <div className="nextNav">
              <img src={Triangle} alt="Strzałki służące do przewijania" />
            </div>
            <SwiperSlide>
              <div className="slider-slide">
                <img
                  src={ForMinorsSlider1}
                  alt="Poznaj naszych prowadzących!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-slide">
                <img
                  src={ForMinorsSlider2}
                  alt="Poznaj naszych prowadzących!"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-slide">
                <img
                  src={ForMinorsSlider3}
                  alt="Poznaj naszych prowadzących!"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="forMinors-logo">
        <a href="//underage.pro">
          <img
            src={ForMinorsLogo}
            alt="Logo projektu 'Fizyka dla nieletnich'"
          />
        </a>
      </div>
    </>
  );
};

export default ForMinorsContent;
