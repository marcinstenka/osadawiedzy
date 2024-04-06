import React from 'react';

import IRimg1 from '../assets/img/ir1.jpg';
import IRimg2 from '../assets/img/ir2.jpg';
import IRimg3 from '../assets/img/ir3.jpg';

import NZimg1 from '../assets/img/nz1.jpg';
import NZimg2 from '../assets/img/nz2.jpg';
import NZimg3 from '../assets/img/nz3.jpg';

import BPimg1 from '../assets/img/bp1.jpg';
import BPimg2 from '../assets/img/bp2.jpg';
import BPimg3 from '../assets/img/bp3.jpg';

import ASimg1 from '../assets/img/as1.jpg';
import ASimg2 from '../assets/img/as2.jpg';
import ASimg3 from '../assets/img/as3.jpg';

import WMimg1 from '../assets/img/wm1.jpg';
import WMimg2 from '../assets/img/wm2.jpg';
import WMimg3 from '../assets/img/wm3.jpg';

import PRimg1 from '../assets/img/pr1.jpg';
import PRimg2 from '../assets/img/pr2.jpg';
import PRimg3 from '../assets/img/pr3.jpg';

import KKimg1 from '../assets/img/kk1.jpg';
import KKimg2 from '../assets/img/kk2.jpg';
import KKimg3 from '../assets/img/kk3.jpg';

import CZ1img from '../assets/img/cz1.jpg';
import CZ2img from '../assets/img/cz2.jpg';
import CZ3img from '../assets/img/cz3.jpg';

const TeamPerson = () => {
	const teamPersons = [
		{
			name: 'Ignacy Rejmak',
			id: 'Ignacy-Rejmak',
			img1: IRimg1,
			img2: IRimg2,
			img3: IRimg3,
			text: [
				'- nauczyciel fizyki w technikum w Wejherowie oraz w szkołach podstawowych w Bolszewie i w Rumi. Przez 10 lat pracował w gimnazjum ucząc matematyki i fizyki. Przez ten czas pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do konkursów i olimpiad zarówno fizycznych, matematycznych i informatycznych. Przez ten czas wychował ponad 20 laureatów i finalistów, głównie konkursów fizycznych. Od 10 lat współorganizuje obozy naukowe.',
				<br />,
				<br />,
				'Ignacy Rejmak jest bohaterem niezwykłego filmu dokumentalnego, który swoją premierę miał we wrześniu 2020. “Nieletni inżynierowie” to historia przemiany, odkrywania pasji i zdobywania wiedzy. To opowieść o miłości do nauki i mocy relacji, tak bardzo nam dzisiaj potrzebnej. Film pojawił się na międzynarodowych festiwalach otrzymując wiele cennych nagród takich jak: Festiwal Cineminha B. w Brazylii, International CHINH INDIA KIDS FILM FESTIVAL w Indiach, Delco Film Festival w USA, Polish Film Festival Los Angeles, Festiwalu Filmowym Zlin w Czechach, Satisfied Eye International Film Festival w Wielkiej Brytanii gdzie stał się Najlepszym Filmem Dokumentalnym, a Ignacy Rejmak otrzymał na tym festiwalu Nagrodę Jury Satisfied Eye International Film Festival.',
				<br />,
				'Więcej o filmie:',
				<br />,
				<a href='/underage.pro/inzynierowie/'>
					https://underage.pro/inzynierowie/
				</a>,
				<br />,
				<br />,
				'Ponadto Ignacy Rejmak wraz z Przemysławem Rojewskim uczestniczy w unikalnym projekcie edukacyjnomedialnym dla uczniów i nauczycieli klas szkół podstawowych oraz średnich realizowanym w Powiatowym Zespole Szkół nr 2 im. Bohaterskiej Załogi ORP “Orzeł” w Wejherowie „Fizyka dla nieletnich” Projekt zakłada tworzenie 12-minutowych odcinków dla uczniów, które będą dostępne na Facebooku oraz kanale YouTube. Ich celem jest wyjaśnianie zjawisk fizycznych w prosty, przystępny, a zarazem ciekawy sposób, a w efekcie zachęcenie młodych ludzi do zawodów i kierunków technicznych. Więcej o projekcie:',
				<br />,
				<a href='//underage.pro/fizyka '>https://underage.pro/fizyka </a>,
				<br />,
				<br />,
				'Przez swoje niekonwencjonalne metody nauczania, niezwykłą osobowość a także relacje z młodzieżą, często porównywany do bohatera książki „Stowarzyszenie Umarłych Poetów”. Twierdzi, że ma więcej szczęścia niż rozumu, gdyż w szkołach w których pracuje zawsze trafia na nauczycieli, od których ciągle może się bardzo wiele nauczyć.',
				<br />,
				'W Osadzie Wiedzy prowadzi zajęcia z fizyki.',
			],
		},
		{
			name: 'Natalia Zarańska',
			id: 'Natalia-Zaranska',
			img1: NZimg1,
			img2: NZimg2,
			img3: NZimg3,
			text: [
				'- coach, trener i mówca Maxwell Leadership Certified Team Poland, trener psychologii pozytywnej, facylitator job craftingu, doradca zawodowy. Zakochana w zmianie. Z pierwszego wykształcenia jest pedagogiem i przez 22 lata prowadziła młodych ludzi w okresie dojrzewania, wspierała także rodziców, prowadząc szkolenia i warsztaty.',
				<br />,
				<br />,
				'Właścicielka Akademii Rozwoju Prosperity oraz Soward Smart Kids Academy będącej przestrzenią rozwoju młodych ludzi w zakresie kompetencji społecznych, matematyki mentalnej, edukacji medialnej i krytycznego korzystania z mediów oraz międzynarodowej metody Brainy Sensory Enhancement. Prezes Stowarzyszenia FPUNKT. Finalistka konkursu im. Ireny Sendlerowej „Za naprawianie świata”. Absolwentka programu wymiany rządu USA International Visitor Leadership. Za swoje działania otrzymała Medal Komisji Edukacji Narodowej.',
				<br />,
				<br />,
				'Jej pasją są musicale, które tworzy wspólnie z młodzieżą. Jej spektakle stanęły na Stadionie Narodowym (spektakl „Szukając siebie”) a także na dużej scenie Teatru Muzycznego w Gdyni (musical „Szepty serc”). Przez wiele lat realizowała profilaktykę rówieśniczą pokazując młodym ludziom możliwości własnego rozwoju, ucząc, że ciekawość to nie pierwszy stopień do piekła, a możliwość dokonywania niemożliwego.',
				,
				<br />,
				<br />,
				<a href='//nataliazaranska.pl'>www.nataliazaranska.pl</a>,
				<br />,
				<a href='//smartkids.soward.eu/lokalizacje/lebork'>
					https://smartkids.soward.eu
				</a>,
			],
		},
		{
			name: 'Bogusław Pranszke',
			id: 'Boguslaw-Pranszke',
			img1: BPimg1,
			img2: BPimg2,
			img3: BPimg3,
			text: [
				'- dr hab., prof. nadz. Uniwersytetu Morskiego w Gdyni. Pracuje na Wydziale Mechanicznym UMG, w Katedrze Fizyki. Fizyk, specjalność - fizyka doświadczalna. Pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do olimpiad fizycznych. Zainteresowania: nauczanie oraz  popularyzacja fizyki i astronomii, filmy i książki sf, gry planszowe oraz, od ponad 15 lat, AoC (gra komputerowa Age of Empires II: The Conquerors).',
			],
		},
		{
			name: 'Agata Baranowska',
			id: 'Agata-Baranowska',
			img1: ASimg1,
			img2: ASimg2,
			img3: ASimg3,
			text: [
				'- nauczycielka matematyki w lęborskiej szkole. Absolwentka projektu „Wyobraźnia ważniejsza od wiedzy”, w ramach którego realizowane są obozy naukowe. Jest przekonana, że każdego człowieka można zainteresować matematyką. Zaraża swoim entuzjazmem do tej dziedziny nauki. Uwielbia organizować wszelkiego rodzaju eventy, angażuje się we wszystko, co tylko może. Posiada niezliczone pokłady radości i uśmiechu, które wykorzystuje na każdym kroku swojego życia. Każdą wolną chwilę spędzałaby na górskich szlakach. Ciągle w podróży, zafascynowana pięknem świata i człowieka. Agata Baranowska jest także trenerką metody Brainy Abacus w Soward Smart Kids Academy w Lęborku. Brainy Abacus to prowadzony w kilku tysiącach szkół na całym świecie, oparty na naukowych podstawach międzynarodowy program treningu mózgu, matematyki mentalnej, pamięci i bardzo szybkiego liczenia. Metoda Brainy Abacus skutecznie poprawia koncentrację, skupienie i pamięć, poprawia umiejętność logicznego myślenia. W osadzie wiedzy spełnia swoje marzenie prowadząc zajęcia z matematyki.',
			],
		},
		{
			name: 'Wojciech Malicki',
			id: 'Wojciech-Malicki',
			img1: WMimg1,
			img2: WMimg2,
			img3: WMimg3,
			text: [
				'- swój pierwszy program komputerowy napisał w wieku 12 lat na komputerze Commodore 64. Od tego czasu uczy się nowych języków programowania i nieustannie poszerza swoją wiedzę i umiejętności, przechodząc od Basica przez Pascala do C++ i Pythona po drodze zahaczając o JavaScript i VBA. Od 2010 roku pracuje jako nauczyciel, nie tylko w szkole, ale także w projektach związanych z zajęiami dla młodzieży uzdolnionej w Słupsku, Lęborku i Kartuzach. Od 2012 roku uczestniczy w obozach naukowych w czasie wakacji. Przygotowywał również uczniów do olimpiad informatycznych, w tym do olimpiady z programowania zespołowego. Aby podnieść swoje umiejętności uczestniczy w warsztatach informatycznych. Ukończył studia podyplomowe z zakresu testowania oprogramowania, programowania aplikacji internetowych oraz cyberbezpieczeństwa. Najbardziej ceni u siebie zapał do uczenia się nowych rzeczy i ciekawość. Obecnie studiuje filozofię. W Osadzie Wiedzy prowadzi zajęcia z programowania.',
			],
		},
		{
			name: 'Przemysław Rojewski',
			id: 'Przemyslaw-Rojewski',
			img1: PRimg1,
			img2: PRimg2,
			img3: PRimg3,
			text: [
				'- nauczyciel fizyki w Powiatowym Zespole Szkół nr 2 w Wejherowie. W zawodzie od ponad 20 lat. Przez 12 lat pracował z uczniami szczególnie uzdolnionymi w ramach Projektu „Zdolni z Pomorza” przygotowując ich do konkursów i olimpiad szczególnie w części doświadczalnej. Przez ten czas wychował wielu laureatów i finalistów. Co najważniejsze jest doświadczonym egzaminatorem i od wielu lat uczestniczy w pracach komisji egzaminacyjnej egzaminu maturalnego z fizyki. Również przygotowuje z powodzeniem uczniów do tego egzaminu. ',
				<br />,
				<br />,
				'Od kilku lat tworzy pracownię fizyczną z prawdziwego zdarzenia wyposażoną w najnowocześniejszy dostępny sprzęt pomiarowy. W czasie wolnym nie może obyć się bez treningów biegowych jest zwycięzcą wielu biegów długodystansowych i maratonów.',
			],
		},
		{
			name: 'Kamil Kostrzewa',
			id: 'Kamil-Kostrzewa',
			img1: KKimg1,
			img2: KKimg2,
			img3: KKimg3,
			text: [
				'- doktor nauk fizycznych, nauczyciel fizyki i matematyki z ponad dziesięcioletnim stażem, najpierw w gdańskich podstawówkach, gimnazjach i liceach, obecnie w lęborskim liceum. Aktywny popularyzator nauki, prowadzi zajęcia między innymi w MateManiakach, czy Zdolnych z Pomorza. Od ponad pięciu lat autor i twórca Wykładów Otwartych z Fizyki. Prywatnie miłośnik literatury i filmów fantasy, gier strategicznych oraz papierowych rpg-ów, siatkówki i eleganckich ubrań. Nauczycielem fizyki chciał być od zawsze (dokładniej od pierwszej lekcji fizyki w gimnazjum), choć z krótką przerwą na marzenia o byciu papieżem. Podczas obozu będzie miał z Wami zajęcia z matematyki.',
			],
		},
		{
			name: 'Cały zespół',
			img1: CZ1img,
			img2: CZ2img,
			img3: CZ3img,
			text: [''],
		},
	];
	return (
		<>
			{teamPersons.map((person) => {
				return (
					<div id={person.id} key={person.name} className='team__section'>
						<div className='team__name'>{person.name}</div>
						<div className='team__imgs'>
							<div className='team__img'>
								<img src={person.img1} alt='' />
							</div>
							<div className='team__img'>
								<img src={person.img2} alt='' />
							</div>
							<div className='team__img'>
								<img src={person.img3} alt='' />
							</div>
						</div>
						<div className='team__text'>
							<p>{person.text}</p>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default TeamPerson;
