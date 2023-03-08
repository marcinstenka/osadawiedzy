import React from 'react';

import pdf1 from '../assets/links/umowa-oboz.pdf';
import pdf2 from '../assets/links/Regulamin-obozu-naukowego.pdf';
import pdf3 from '../assets/links/opinia-nauczyciela-matematyki-fizyki.pdf';
import pdf4 from '../assets/links/rozklad-dnia.pdf';

const DownloadsContent = () => {
	return (
		<>
			<h2 className='header downloads__header'>Pliki do pobrania</h2>

			<div className='downloads__main'>
				Szanowni Państwo
				<ol>
					<li>Umowę należy pobrać ze strony, uzupełnić i podpisać.</li>
					<li>Umowę należy wydrukować w dwóch egzemplarzach, oba podpisać.</li>
					<li>
						Całość prosimy przesłać na adres:{' '}
						<bold>
							Osada Wiedzy ul. Długa 24A 84-353 Lębork-Mosty najpóźniej do
							25.06.2023r.{' '}
						</bold>
					</li>
					<li>
						Umowa podpisana przez Organizatora zostanie odesłana na wskazany w
						kwestionariuszu adres.
					</li>
					<li>
						Numer konta do wpłaty:
						<br />
						<bold>Stowarzyszenie FPUNKT</bold> <br />
						Bank Spółdzielczy w Łebie <br />
						numer: 45 9324 0008 0004 6314 2000 0010
					</li>
				</ol>
				<ul className='downloads__list'>
					<li className='downloads__list-item'>
						<a href={pdf1} download='Umowa.pdf'>
							Umowa o udział w obozie
						</a>
					</li>
					<li className='downloads__list-item'>
						<a href={pdf2} download='Regulamin.pdf'>
							Regulamin obozu
						</a>
					</li>
					<li className='downloads__list-item'>
						<a href={pdf3} download='Opinia.pdf'>
							Opinia nauczyciela matematyki/fizyki
						</a>
					</li>
					<li className='downloads__list-item'>
						<a href={pdf4} download='Rozklad dnia.pdf'>
							Rozkład dnia
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default DownloadsContent;
