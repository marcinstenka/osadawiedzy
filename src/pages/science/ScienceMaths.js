import React from 'react';

import Maths1 from '../../assets/img/maths1.jpg';
import Maths2 from '../../assets/img/maths2.jpg';
import MathsGif from '../../assets/img/mathsGif.gif';
import MathsLecturer from '../../assets/img/mathsLecturer.png';
import MathsLecturerGif from '../../assets/img/mathsLecturerGif.gif';
import ScienceArrow from '../../assets/img/scienceArrow.svg';
import MathsFrame from '../../assets/img/mathsFrame.png';
import { Link } from 'react-router-dom';

import ScienceMail from '../../components/ScienceMail';
import Footer from '../../components/Footer';

const ScienceMaths = () => {
	return (
		<div>
			<div className='science-background science-background--maths'>
				<h2 data-aos='fade-up'>MATEMATYKA</h2>
				<Link to='/nauki-scisle-po-godzinach'>NAUKI ŚCISŁE PO GODZINACH</Link>
			</div>
			<div className='science-content'>
				<h3>
					Matematyka dla uczniów
					<br className='br-reverse' /> i uczennic klas VIII
				</h3>
				<div className='science-maths section-1'>
					<div className='section'>
						<p className='science-text'>
							Egzamin ósmoklasisty to pierwszy bardzo ważny sprawdzian dla
							młodego człowieka, którego wynik wpływa na proces rekrutacji do
							szkoły ponadpodstawowej. Uczniowie i uczennice potrzebują często
							wsparcia, zarówno w zakresie zdobywania wiedzy, jak i rozwinięcia
							poczucia pewności własnych umiejętności, aby stres nie wpłynął na
							efekt końcowy.
							<br />
							<br />
							<bold className='science-color-maths-bigger'>
								Nasz kurs skierowany jest do uczniów, którzy pragną
								usystematyzować swoją wiedzę, rozwinąć umiejętności w których
								nie czują się pewni, a także przypomnieć sobie zagadnienia z
								wcześniejszych lat szkolnych.
							</bold>
							<br />
							<br />
							<ul>
								Nasze zajęcia pozalekcyjne są:
								<li>zaprojektowane z myślą o uczniach i uczennicach,</li>
								<li>dostosowane do ich indywidualnych potrzeb,</li>
								<li>nauczane przez wykwalifikowanego nauczyciela</li>
								<li>
									prowadzone w przyjaznej atmosferze wolnej od ocen i pośpiechu.
								</li>
							</ul>
						</p>
					</div>
					<div className='section section-img'>
						<img src={Maths1} alt='Zajęcia z matematyki.' />
					</div>
					<div className='section'>
						<p className='science-text'>
							W dzisiejszych czasach niezależnie od tego, czy planuje się zostać
							psychologiem, lekarzem, czy inżynierem z pewnością potrzebne są
							choć podstawowe umiejętności matematyczne. Są one bardzo cennymi
							umiejętnościami na współczesnym rynku pracy.
							<br />
							<br />
							<bold className='science-color-maths-bigger'>
								Analityczne i krytyczne myślenie to wskazywane w wielu raportach
								kluczowe kompetencje przyszłości.
							</bold>
						</p>
					</div>
					<div className='section section-img'>
						<img src={Maths2} alt='Zajęcia z matematyki.' />
					</div>
					<div className='section'>
						<p className='science-text science-text-bigger'>
							Zajęcia przyjmujemy cały rok szkolny.
							<br />
							<br />
							Pierwsze grupy startują w <bold>październiku 2022 r.</bold>
							<br />
							<br />
							Zajęcia odbywają się:
						</p>
						<div className='science-classes classes-maths' data-aos='fade-up'>
							<div>w małych grupch</div>
							<div>raz w tygodniu</div>
							<div>trwają 90 minut</div>
						</div>
					</div>
				</div>
			</div>
			<div className='science-separator maths-separator'></div>
			<div className='science-lecturers lecturers-maths'>
				<h3>PROWADZĄCA</h3>
				<div className='lecturers-gif'>
					<img
						src={MathsGif}
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
								src={MathsLecturer}
								alt='Agata Baranowska'
							/>
							<img className='gif gif-1' src={MathsLecturerGif} alt='E=mc^2' />
						</div>
						<div className='lecturer-info'>
							<br />
							mgr
							<h4>AGATA BARANOWSKA</h4>
						</div>
						<a className='lecturer-more-info more-info-maths'>
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
					<h5>przygotowanie do egzaminu ósmoklasisty</h5>
					<p className='science-text'>
						250 zł
						<br className='br-reverse' /> miesięcznie
					</p>
				</div>
				<div
					className='lecturers-where'
					style={{ background: `url(${MathsFrame})` }}
				>
					<p className='science-text'>
						Zajęcia z matematyki prowadzimy w{' '}
						<span className='science-color-maths'>Lęborku</span>.
						<br className='br-reverse' />
						<br />
						Pierwsza lekcja jest próbna i bezpłatna w przypadku rezygnacji z
						kursu.
						<br className='br-reverse' />
						<br /> Na życzenie wystawiamy faktury.
					</p>
				</div>
			</div>
			<div className='science-separator maths-separator'></div>
			<ScienceMail color='var(--science-maths)' />
			<Footer />
		</div>
	);
};

export default ScienceMaths;
