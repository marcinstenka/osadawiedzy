import React from 'react';

import Programming1 from '../../assets/img/programming1.jpg';
import Programming2 from '../../assets/img/programming2.jpg';
import Programming3 from '../../assets/img/programming3.jpg';
import ProgrammingGif from '../../assets/img/programmingGif.gif';
import ProgrammingLecturer from '../../assets/img/programmingLecturer.png';
import ProgrammingLecturerGif from '../../assets/img/programmingLecturerGif.gif';
import ScienceArrow from '../../assets/img/scienceArrow.svg';
import ProgrammingFrame from '../../assets/img/programmingFrame.png';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import ScienceMail from '../../components/ScienceMail';

const ScienceProgramming = () => {
	return (
		<div>
			<div className='science-background science-background--programming'>
				<h2 data-aos='fade-up'>PROGRAMOWANIE</h2>
				<Link to='/nauki-scisle-po-godzinach'>NAUKI ŚCISŁE PO GODZINACH</Link>
			</div>
			<div className='science-content'>
				<h3>
					Dlaczego warto uczyć się
					<br className='br-reverse' /> programowania?
				</h3>
				<div className='science-programming section-1'>
					<div className='section'>
						<ul className='science-text'>
							<li>
								<bold className='science-color-programming-bigger'>
									poprawa umiejętności analitycznych
								</bold>
							</li>
							Przede wszystkim to świetny sposób na poprawę umiejętności
							analitycznych. Pokazuje jak rozwiązywać większe problemy poprzez
							rozłożenie je na mniejsze części. Jest to bardzo cenna umiejętność
							na współczesnym rynku pracy.
							<li>
								<bold className='science-color-programming-bigger'>
									rozwijanie kluczowych kompetencji
								</bold>
							</li>
							Programowanie i myślenie komputatywne to obecnie kluczowe
							kompetencje. Nauka, chociażby podstaw, jakiegokolwiek języka
							programowania oraz umiejętność rozwiązywania problemów krok po
							kroku zdają się być ważnymi elementami edukacji.
							<li>
								<bold className='science-color-programming-bigger'>
									satysfakcja i rozwój
								</bold>
							</li>
							Ponadto programowanie może pomóc w znalezieniu dobrze płatnego
							stanowiska, gwarantującego satysfakcję i rozwój.
							<li>
								<bold className='science-color-programming-bigger'>zabawa</bold>
							</li>
							Co jednak najważniejsze, programowanie i rozwiązywania problemów
							algorytmicznych może dostarczyć dużo zabawy i zadowolenia młodemu
							człowiekowi.
						</ul>
					</div>
					<div className='section section-img'>
						<img src={Programming1} alt='Zajęcia z programowania.' />
					</div>
				</div>
			</div>
			<div className='science-separator programming-separator'></div>
			<div className='science-content'>
				<h3>PROGRAMOWANIE PYTHON</h3>
				<div className='science-programming section-2'>
					<div className='section'>
						<p className='science-text'>
							Prawdopodobnie na lekcjach informatyki Państwa Dziecko poznało już
							takie programy jak Scratch czy Baltie. Są one dobrym wstępem do
							rozpoczęcia programowania w “dorosłym” języku.
							<br />
							<br />
							Na naszych zajęciach uczniowie rozpoczną swoją przygodę z językiem
							Python, który obecnie jest jednym z najpopularniejszych języków
							programowania, a jednocześnie zapewnia przyjazny start w
							zaawansowane kodowanie.
							<br />
							<br />
							<bold className='science-color-programming-bigger'>
								Poziom zajęć dostosowany jest do poziomu uczestników.
							</bold>
							<br />
							<br />
							<ul>
								<li>
									Ci, którzy zaczynają swoją przygodę z jakimkolwiek
									programowaniem, otrzymają przyjazny start i dużo sposobów na
									rozwinięcie skrzydeł.{' '}
								</li>
								<li>
									Ci, którzy już coś potrafią dostaną stymulujący zastrzyk
									nowych pomysłów i wyzwań, które pomogą im się rozwinąć.
								</li>
							</ul>
							Wszystko zaś w atmosferze wolnej od ocen i pośpiechu.
						</p>
					</div>
					<div className='section section-img'>
						<img src={Programming2} alt='Zajęcia z programowania.' />
					</div>
					<div className='section'>
						<p className='science-text science-text-bigger'>
							Zajęcia skierowane są do{' '}
							<bold>młodych ludzi od VII klasy szkoły podstawowej</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br /> Pierwsze grupy startują w <bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div
							className='science-classes classes-programming'
							data-aos='fade-up'
						>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 90 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator programming-separator'></div>
			<div className='science-content'>
				<h3>PRZYGOTOWANIE DO MATURY Z INFORMATYKI</h3>
				<div className='science-programming section-2'>
					<div className='section'>
						<p className='science-text'>
							Uczniowie szkół ponadpodstawowych chcący zdawać maturę z
							informatyki znajdą na naszych zajęciach kogoś,
							<br />
							<br />
							<bold className='science-color-programming-bigger'>
								kto pomoże im się przygotować, wyjaśni trudności w zadaniach
								oraz będzie motywował ich do wytężonego wysiłku.
							</bold>
						</p>
					</div>
					<div className='section section-img'>
						<img src={Programming3} alt='Zajęcia z programowania.' />
					</div>
					<div className='section'>
						<p className='science-text science-text-bigger'>
							Zajęcia skierowane są do{' '}
							<bold>
								uczniów chcących zdawać informatykę na poziomie rozszerzonym.
							</bold>
							<br />
							<br />
							Zapisy przyjmujemy cały rok szkolny.
							<br />
							<br /> Pierwsze grupy startują w <bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div
							className='science-classes classes-programming'
							data-aos='fade-up'
						>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 90 minut</div>
						</div>
					</div>
				</div>
			</div>

			<div className='science-separator programming-separator'></div>
			<div className='science-lecturers lecturers-programming'>
				<h3>PROWADZĄCY</h3>
				<div className='lecturers-gif'>
					<img
						src={ProgrammingGif}
						alt='Wiedza i kompetencje + zamiłowanie do nauki i nauczania'
					/>
				</div>
				<p className='science-text'>
					Jesteśmy nauczycielami, którzy od <bold>2001 roku</bold> organizują
					obozy naukowe dla uczniów uzdolnionych w kierunku przedmiotów
					ścisłych.
					<br />
					<br />
					Mamy <bold>wiedzę</bold> i <bold>kompetencje</bold> w zakresie
					wspierania pasji młodych ludzi, pokazując, że powszechnie uznana za
					trudną, matematyka jest niezwykle piękną nauką, jeśli przez drogę jej
					poznania, przewodnikiem będzie <bold>mentor</bold>, dla którego
					stanowi ona zamiłowanie.
				</p>
				<div className='lecturers-container'>
					<div className='lecturer'>
						<div className='lecturer-img'>
							<img
								className='photo'
								src={ProgrammingLecturer}
								alt='Wojciech Malicki'
							/>
							<img
								className='gif gif-1'
								src={ProgrammingLecturerGif}
								alt='E=mc^2'
							/>
						</div>
						<div className='lecturer-info'>
							<br />
							mgr
							<h4>Wojciech Malicki</h4>
						</div>
						<a className='lecturer-more-info more-info-programming'>
							zobacz więcej
							<img src={ScienceArrow} alt='Strzałka zobacz więcej.' />
						</a>
					</div>
					<div className='lecturers-mission'>
						<p className='science-text'>
							<span className='text-small'>Nasza misja brzmi:</span> <br />
							<br />
							<i>
								Osada Wiedzy to przestrzeń budowania relacji.{' '}
								<br className='br' /> Wyobraźnia, rozwój i wiedza stanowią
								podstawowe wartości,
								<br className='br' /> a wiara w możliwości człowieka wpisana
								jest w serca prowadzących.
							</i>
						</p>
					</div>
				</div>
				<div className='science-price-list'>
					<h5>programowanie python</h5>
					<p className='science-text'>
						300 zł
						<br className='br-reverse' /> miesięcznie
					</p>
					<h5>przygotowanie do matury z informatyki</h5>
					<p className='science-text'>
						300 zł
						<br className='br-reverse' /> miesięcznie
					</p>
				</div>
				<div
					className='lecturers-where'
					style={{ background: `url(${ProgrammingFrame})` }}
				>
					<p className='science-text'>
						Zajęcia z programowania prowadzimy w{' '}
						<span className='science-color-programming'>Lęborku</span>.
						<br className='br-reverse' />
						<br />
						Uczniowie pracują na własnym sprzęcie
						<br className='br-reverse' />
						<br />
						Pierwsza lekcja jest próbna i bezpłatna w przypadku rezygnacji z
						kursu.
						<br className='br-reverse' />
						<br /> Na życzenie wystawiamy faktury.
					</p>
				</div>
			</div>
			<div className='science-separator programming-separator'></div>
			<ScienceMail color='var(--science-programming)' />
			<Footer />
		</div>
	);
};

export default ScienceProgramming;
