import React from 'react';

import pdf1 from '../assets/links/umowa-oboz.pdf';
import pdf2 from '../assets/links/Regulamin-obozu-naukowego.pdf';
import pdf3 from '../assets/links/opinia-nauczyciela-matematyki-fizyki.pdf';
import pdf4 from '../assets/links/rozklad-dnia.pdf';
import pdf5 from '../assets/links/karta-uczestnika.pdf';

const DownloadsContent = () => {
  return (
    <div className="downloads__main">
      Szanowni Państwo
      <ol>
        <li>
          Prosimy o pobranie poniższych dokumentów ze strony (oprócz rozkładu
          dnia).{' '}
        </li>
        <li>Wydrukowanie ich, uzupełnienie i podpisanie. </li>
        <li>Umowę prosimy wydrukować w dwóch egzemplarzach, oba podpisać.</li>
        <li>
          Całość prosimy przesłać na adres:{' '}
          <bold>
            Osada Wiedzy ul. Długa 24A 84-353 Lębork-Mosty najpóźniej do
            10.07.2022r.{' '}
          </bold>
        </li>
        <li>
          Umowę podpisaną przez Organizatora prześlemy na wskazany przez Państwa
          adres.
        </li>
        <li>
          Numer konta do wpłaty:
          <br />
          <bold>Stowarzyszenie FPUNKT</bold> <br />
          Bank Spółdzielczy w Łebie <br />
          numer: 45 9324 0008 0004 6314 2000 0010
        </li>
      </ol>
      <ul className="downloads__list">
        <li className="downloads__list-item">
          <a href={pdf1} download="Umowa.pdf">
            Umowa o udział w obozie
          </a>
        </li>
        <li className="downloads__list-item">
          <a href={pdf2} download="Regulamin.pdf">
            Regulamin obozu
          </a>
        </li>
        <li className="downloads__list-item">
          <a href={pdf3} download="Opinia.pdf">
            Opinia nauczyciela matematyki/fizyki
          </a>
        </li>
        <li className="downloads__list-item">
          <a href={pdf4} download="Rozklad dnia.pdf">
            Rozkład dnia
          </a>
        </li>
        <li className="downloads__list-item">
          <a href={pdf5} download="Karta uczestnika.pdf">
            Karta uczestnika
          </a>
        </li>
      </ul>
    </div>
  );
};
export default DownloadsContent;
