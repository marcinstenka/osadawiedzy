import React from 'react';

import Physics1 from '../../assets/img/physics1.jpg';
import Physics2 from '../../assets/img/physics2.jpg';
import Physics3 from '../../assets/img/physics3.jpg';
import Physics4 from '../../assets/img/physics4.jpg';
import Physics5 from '../../assets/img/physics5.jpg';

import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

const SciencePhysics = () => {
	return (
		<div>
			<div className='science-background science-background--physics'>
				<h2>FIZYKA</h2>
				<Link to='nauki-scisle-po-godzinach'>NAUKI ŚCISŁE PO GODZINACH</Link>
			</div>
			<div className='science-content'>
				<h3>
					Fizyka dla uczniów i uczennic
					<br /> ze szkół podstawowych
				</h3>
				<div className='science-physics section-1'>
					<div className='section'>
						<p className='science-text'>
							Tutaj fizykę zaczniemy od podstaw i to podstaw matematycznych.
							<br />
							<br />
							<bold className='science-color-physics'>
								Naszym celem jest ukierunkowaniu uczniów na zainteresowanie i
								zrozumienie zagadnień technicznych w przyszłości,
							</bold>
							<br />
							<br />
							więc na początku będziemy przekształcać wzory, dodawać wektory
							oraz zajmować się tą częścią matematyki, która będzie nam
							niezbędna na fizyce. Z czasem pojawią się nawet funkcje
							trygonometryczne.
							<br />
							<br />
							Równolegle obok matematyki, będzie raczkowało zrozumienie
							zagadnień z fizyki. Początkowo będzie się to opierało głównie na
							opowiadaniu bajek, ale wraz ze wzrostem umiejętności
							matematycznych coraz odważniej będziemy zagłębiali się we wzory,
							precyzyjne rysunki i obliczenia, czyli to jak fizyka powinna
							wyglądać w szkole podstawowej.
						</p>
					</div>
					<div className='section section-img'>
						<img src={Physics1} alt='Zajęcia z fizyki.' />
					</div>
					<div className='section'>
						<p className='science-text'>
							Naturalnym zwieńczeniem przygody z fizyką na tym etapie będzie
							przygotowanie uczniów do udziału w kuratoryjnym konkursie z
							fizyki, który jest wielką motywacją do wytężonej pracy, a w
							przypadku sukcesu
							<br />
							<br />
							<bold className='science-color-physics'>
								otwiera przed uczniami drogę do dowolnej szkoły ponadpodstawowej
								w Polsce.
							</bold>
						</p>
					</div>
					<div className='section section-img'>
						<img src={Physics2} alt='Zajęcia z fizyki.' />
					</div>
					<div className='section'>
						<ul>
							Dodatkowo oprócz fizyki odbywają się:
							<br />
							<br />
							<li>
								<bold>zajęcia z matematycznych podstaw fizyki</bold> (dwa razy w
								miesiącu)
							</li>
							<li>
								<bold>
									zajęcia oraz wykłady z pracownikiem naukowym Uniwersytetu
									Morskiego w Gdyni
								</bold>{' '}
								(dwa razy w roku szkolnym)
							</li>
							<li>
								<bold>a także wyjazd na Uniwersytet Morski w Gdyni </bold>(jeden
								w trakcie roku szkolnego)
							</li>
						</ul>
					</div>
					<div className='section'>
						<p className='science-text'>
							Zajęcia skierowane są do młodych ludzi{' '}
							<bold>ze szkół podstawowych.</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br />
							Pierwsze grupy startują w <bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div className='science-classes'>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 90 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator physics-separator'></div>
			<div className='science-content'>
				<h3>
					Fizyka dla uczniów i uczennic
					<br />
					ze szkół ponadpodstawowych
				</h3>
				<div className='science-physics section-2'>
					<div className='section'>
						<p className='science-text'>
							W zdecydowanej większości szkół średnich fizyka realizowana jest
							tylko na poziomie podstawowym. Rodzi to problem przy rekrutacji na
							studia techniczne, gdzie coraz częściej wymagana jest matura z
							fizyki, a ta przeprowadzana jest tylko na poziomie rozszerzonym.
						</p>
						<ul>
							Zajęcia z fizyki na tym etapie prowadzić będziemy kompleksowo:
							<li>przechodząc przez kolejne działy fizyki,</li>
							<li>rozkładając zagadnienia na podstawowe składniki,</li>
							<li>
								wprowadzając na bieżąco odpowiedni aparat matematyczny, który
								pozwoli na zrozumienie zarówno na poziomie intuicyjnym jak i
								matematycznym fizyki.
							</li>
						</ul>
						<p className='science-text'>
							<bold className='science-color-physics'>
								W trakcie kursu przygotujemy do zdawania matury rozszerzonej z
								fizyki oraz pokażemy, że rekrutacja na kierunki techniczne na
								studia nie jest taka trudna.
							</bold>
						</p>
					</div>
					<div className='section section-img'>
						<img src={Physics3} alt='Zajęcia z fizyki.' />
					</div>
					<div className='section'>
						<ul>
							Dodatkowo oprócz fizyki odbywają się:
							<br />
							<br />
							<li>
								<bold>zajęcia z matematycznych podstaw fizyki</bold> (dwa razy w
								miesiącu)
							</li>
							<li>
								<bold>
									zajęcia oraz wykłady z pracownikiem naukowym Uniwersytetu
									Morskiego w Gdyni
								</bold>
								(dwa razy w roku szkolnym)
							</li>
							<li>
								<bold>a także wyjazd na Uniwersytet Morski w Gdyni</bold> (jeden
								w trakcie roku szkolnego)
							</li>
						</ul>
					</div>
					<div className='section'>
						<p className='science-text'>
							<br />
							Zajęcia skierowane są do młodych ludzi{' '}
							<bold>ze szkół ponadpodstawowych.</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br /> Pierwsze grupy startują w <bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div className='science-classes'>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 90 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator physics-separator'></div>
			<div className='science-content'>
				<h3>Fizyka dla maturzystów i maturzystek</h3>
				<div className='science-physics section-3'>
					<div className='section'>
						<div className='science-text'>
							<bold className='science-color-physics'>
								Wybierasz się na studia techniczne i właśnie się zorientowałeś,
								że musisz zdawać maturę z fizyki?
							</bold>
							<br />
							<br />
							Miałeś w szkole tylko fizykę na poziomie podstawowym? A może
							chcesz usystematyzować swoją wiedzę i jeszcze raz po kolei
							przerobić całą fizykę w szkole przed maturą? Te zajęcia są dla
							Ciebie! <br />
							<br />
							Na tych zajęciach przygotujemy Cię do matury rozszerzonej z
							fizyki. Przerobimy każdy dział po kolei zwracając szczególna uwagę
							na elementy wyjątkowo ważne z punktu widzenia matury. Pomożemy Ci
							zrozumieć poszczególne zależności oraz nauczymy Cię pracować na
							maturze z tablicami wzorów, które są tam dostępne.
							<br />
							<br />
							<bold className='science-color-physics'>
								To będzie intensywny czas, który pozwoli Ci nadrobić zaległości
								z poprzednich lat i pozwoli ze spokojną głową podejść do matury.
							</bold>
						</div>
					</div>
					<div className='section section-img'>
						<img src={Physics4} alt='Zajęcia z fizyki.' />
					</div>
					<div className='section'>
						<p className='science-text'>
							Zajęcia skierowane są do{' '}
							<bold>
								maturzystów chcących zdawać fizykę na poziomie rozszerzonym.
							</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br /> Pierwsze grupy startują w<bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div className='science-classes'>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 120 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator physics-separator'></div>
			<div className='science-content'>
				<h3>
					Fizyka dla studentów i studentek pierwszych lat na kierunkach
					technicznych
				</h3>
				<div className='science-physics section-4'>
					<div className='section'>
						<p className='science-text'>
							<bold className='science-color-physics'>
								Jesteś na pierwszym roku studiów technicznych?
							</bold>
							<br />
							<br />
							Fizyka jest zupełnie inna, niż do tej pory? Nie wiesz co się
							dzieje na tablicy i dlaczego cały zapis matematyczny jest zupełnie
							inny? Co to są te pochodne i całki? Pomożemy Ci. <br />
							<br />
							<bold className='science-color-physics'>
								Pokażemy, że fizyka, która tutaj się pojawiła to jest ta sama
								fizyka, którą znałeś w szkole średniej,
							</bold>
							<br />
							<br />
							tylko zapis matematyczny się zmienił. Wytłumaczymy Ci jak
							wykorzystywać pochodne i całki w zapisie fizycznym i pokażemy, że
							to tak naprawdę jest to bardzo wygodne narzędzie w twojej
							przyszłej pracy jako inżyniera.
						</p>
					</div>
					<div className='section section-img'>
						<img src={Physics5} alt='Zajęcia z fizyki.' />
					</div>
					<div className='section'>
						<p className='science-text'>
							Zajęcia skierowane są do{' '}
							<bold>studentów pierwszych lat na kierunkach technicznych.</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br />
							Pierwsze grupy startują w<bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div className='science-classes'>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 120 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator physics-separator'></div>
			<Footer />
		</div>
	);
};

export default SciencePhysics;
