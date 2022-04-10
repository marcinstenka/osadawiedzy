import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'; // problem with route - added  '/swiper-react' at the end
import SwiperCore, { Navigation, Pagination } from 'swiper';

import PascoLogo from '../assets/img/pascoLogo.png';
import PascoSlider1 from '../assets/img/pascoSlider1.jpg';
import PascoSlider2 from '../assets/img/pascoSlider2.jpg';
import PascoSlider3 from '../assets/img/pascoSlider3.jpg';
import Triangle from '../assets/img/triangle.svg';

SwiperCore.use([Navigation, Pagination]);

const PascoContent = () => {
  return (
    <>
      <div className="about about-pasco">
        <h2 className="about--header header">o współpracy</h2>
        <p className="about--text ">
          Osada Wiedzy w 2021r. nawiązała współpracę z firmą PASCO z Kalifornii
          w USA, która od wielu lat specjalizuje się w rozwoju technologii
          służącej nauczaniu przedmiotów przyrodniczych przez wykonywanie
          doświadczeń i jest w tej dziedzinie światowym liderem. PASCO to firma,
          która od 1964 roku zajmuje się wyłącznie projektowaniem i produkcją
          urządzeń przeznaczonych specjalnie do zastosowań edukacyjnych.
          <br />
          <br />
          Nasza współpraca została zainicjowana wraz z rozpoczęciem unikalnego
          projektu „Fizyka dla nieletnich (www.underage.pro), który uzyskał
          honorowy patronat Ministra Edukacji i Nauki i jest przeznaczony dla
          nauczycieli fizyki, przedmiotów zawodowych oraz dla uczniów.
        </p>
        <p className="about--text ">
          Mentorzy Osady Wiedzy Ignacy Rejmak oraz Przemysław Rojewski tworząc
          doskonały, pełen humoru i dystansu do siebie duet, prowadzą i
          realizują doświadczenia wciągając uczniów w niezwykłą przestrzeń
          fizyki, która jest ich pasją i drogą zawodową.
          <br />
          <br />
          Partnerem projektu „Fizyka dla nieletnich” jest Fundacja PGE, która od
          lat wspiera wejherowskiego „Elektryka”, w którym pracują Ignacy i
          Przemysław. Dla spółki to inwestycja w przyszłość. W ramach współpracy
          PGE wyposażyła szkolną pracownię w najnowocześniejszy w Europie sprzęt
          edukacyjny firmy PASCO, niezbędny do kształcenia praktycznego w wielu
          zawodach.
        </p>
        <p className="about--text ">
          PASCO oferuje przede wszystkim cyfrowe pomoce dydaktyczne do
          wykonywania doświadczeń przyrodniczych dla szkół podstawowych,
          średnich i dla wyższych uczelni. Niektóre urządzenia cieszą się także
          zainteresowaniem rodziców, którzy pragną inwestować w rozwój
          kreatywności swoich dzieci.
          <br />
          <br />
          Od pewnego czasu ofertę PASCO uzupełniają też urządzenia do nauki
          kodowania i robotyki. Obsługiwane są przez ten sam program, co
          czujniki do doświadczeń, więc razem tworzą jedno, wspólne,
          uzupełniające się wzajemnie środowisko edukacyjne.
        </p>
      </div>
      <div className="pasco-tutors">
        <div className="pasco-slider">
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
                <img src={PascoSlider1} alt="Poznaj naszych prowadzących!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-slide">
                <img src={PascoSlider2} alt="Poznaj naszych prowadzących!" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-slide">
                <img src={PascoSlider3} alt="Poznaj naszych prowadzących!" />
              </div>
            </SwiperSlide>
          </Swiper>
          <p className="about--text">
            Na stronie{' '}
            <a href="//underage.pro/fizyka/doswiadczenia">
              underage.pro/fizyka/doswiadczenia
            </a>{' '}
            możecie zobaczyć w jaki sposób wykorzystujemy urządzenia m. in.
            PASCO do wykonywania doświadczeń na zajęciach.{' '}
          </p>
        </div>
      </div>
      <div className="about about-pasco">
        <h2 className="about--header header">oferta dla rodziców</h2>
        <p className="about--text ">
          Największym zainteresowaniem rodziców cieszą się:
          <ul>
            <li>
              PS-3209 – Bezprzewodowy czujnik pogody z GPS wraz z PS-3553 –
              Akcesoria wiatromierza do czujnika pogody
            </li>
            <li>PS-3201 – Bezprzewodowy czujnik temperatury</li>
            <li>PS-3207 – Bezprzewodowy czujnik tętna wysiłkowy</li>
            <li>PS-3228 – Bezprzewodowy czujnik wilgotności gleby</li>
            <li>PS-3219 – Bezprzewodowy czujnik położenia</li>
            <li>PS-3213 – Bezprzewodowy czujnik światła</li>
            <li>PS-3231 – //code.Node</li>
            <li>
              Zestaw do budowy i badania mostów z kilkoma tensometrami (PS-3216
              Bezprzewodowy tensometr i akcelerometr)
            </li>
          </ul>
          a także wszystkie urządzenia do kodowania i robotyki.
        </p>
        <h2 className="about--header header">oferta dla szkół</h2>
        <p className="about--text ">
          Obecnie, największym zainteresowaniem cieszą się zestawy przygotowane
          w ramach rządowego dofinansowania Laboratoria Przyszłości. Obecnie
          jest ono dostępne dla publicznych szkół podstawowych, a wkrótce będzie
          też dotyczyło szkół niepublicznych i ponadpodstawowych.
          <br />
          <br />
          Szczegóły na stronie:{' '}
          <a href="//pasco.com.pl/laboratoria-przyszlosci">
            pasco.com.pl/laboratoria-przyszlosci
          </a>
          .
          <br />
          <br />
          Szkoły zainteresowane zakupem pomocy dydaktycznych PASCO najczęściej
          odwiedzają stronę{' '}
          <a href="//pasco.com.pl/co-kupic">pasco.com.pl/co-kupic</a> i
          wybierają spośród gotowych zestawów przygotowanych w oparciu o
          obowiązującą podstawę programową dla szkół podstawowych i średnich
          oraz do każdego z przedmiotów przyrodniczych. Zestawy można jednak
          dowodnie modyfikować lub ułożyć z dostępnych elementów samodzielnie
          swój własny.
        </p>
        <div className="about--logo">
          <p className="about--text pasco--text">
            I najważniejsze ☻ Na hasło „Osada Wiedzy” klienci indywidualni i
            szkoły otrzymają 10% zniżki na zakupy w PASCO.
            <br />
            <br />
            <thin> Zniżki nie kumulują się z innymi.</thin>
          </p>
          <div className="pasco-logo">
            <img src={PascoLogo} alt="Logo projektu 'Fizyka dla nieletnich'" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PascoContent;
