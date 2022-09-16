import React, { useContext } from 'react';

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
				'- nauczyciel fizyki w technikum w Wejherowie i w liceum w Lęborku. Przez 10 lat pracował w gimnazjum ucząc matematyki i fizyki. Przez ten czas pracował z uczniami szczególnie uzdolnionymi w kierunku przedmiotów ścisłych, przygotowując ich do konkursów i olimpiad zarówno fizycznych, matematycznych i informatycznych. Przez ten czas wychował ponad 20 laureatów i finalistów, głównie konkursów fizycznych. Od 10 lat współorganizuje obozy naukowe. Współpracuje z Uniwersytetem Gdańskim, współorganizując konferencje metodyczne dla nauczycieli fizyki z województwa pomorskiego.',
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
				'Ponadto Ignacy Rejmak wraz z Przemysławem Rojewskim uczestniczy w unikalnym projekcie edukacyjnomedialnym dla uczniów i nauczycieli klas szkół podstawowych oraz średnich realizowanym w Powiatowym Zespole Szkół nr 2 im. Bohaterskiej Załogi ORP “Orzeł” w Wejherowie „Fizyka dla nieletnich” Projekt zakłada tworzenie 12-minutowych odcinków dla uczniów, które będą dostępne na Facebooku oraz kanale YouTube. Ich celem jest wyjaśnianie zjawisk fizycznych w prosty, przystępny, a zarazem ciekawy sposób, a w efekcie zachęcenie młodych ludzi do zawodów i kierunków technicznych. Więcej o projekcie ',
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
				'- coach, trener i mówca John Maxwell Team, trener psychologii pozytywnej, facylitator job craftingu, doradca zawodowy. Zakochana w zmianie. Jej mentorami są Paul Martinelli, Joe Dispenza oraz Gregg Braden . To od nich czerpie wiedzę, to oni nadają kierunek jej pracy. Prowadzi terapię zgodną z nurtem Racjonalnej Terapii Zachowania, która w głównej mierze opiera się na pracy z przekonaniami. Z pierwszego wykształcenia jest pedagogiem i przez 22 lata prowadziła młodych ludzi w okresie dojrzewania, wspierała także rodziców, prowadząc szkolenia i warsztaty. Właścicielka Akademii Rozwoju Prosperity w ramach, której działa Soward Smart Kids Academy oraz Akademia Lidera Still Up. Współwłaścicielka firmy, w ramach której organizuje obozy naukowe Osada Wiedzy. Jedna z kreatorek Festiwalu Inspiracje. Prezes Stowarzyszenia FPUNKT. Finalistka konkursu im. Ireny Sendlerowej „Za naprawianie świata”. W 2021r. została zakwalifikowana przez Centrum Edukacji Obywatelskiej oraz Ambasadę Amerykańską do programu International Visitor Leadershi i jako jedna z sześciu nauczycieli i nauczycielek, wybranych spośród wszystkich finalistów i laureatów tego konkursu, odbędzie 21-dniową studyjną wizytę w USA. Za swoje działania otrzymała Medal Komisji Edukacji Narodowej.  Jej pasją są musicale, które tworzy wspólnie z młodzieżą. Jej spektakle stanęły na Stadionie Narodowym (spektakl „Szukając siebie”) a także na dużej scenie Teatru Muzycznego w Gdyni (musical „Szepty serc”). W Osadzie Wiedzy prowadzi warsztaty pewności siebie i wartości własnej, które leżą w jej obszarze zainteresowań naukowych.',
				<br />,
				<br />,
				<a href='//nataliazaranska.pl'>www.nataliazaranska.pl</a>,
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
				'- swój pierwszy program komputerowy napisał w wieku 12 lat na komputerze Commodore 64. Od tego czasu z małą przerwą uczy się nowych języków programowania i nieustannie poszerza swoją wiedzę i umiejętności, przechodząc od Basica przez Pascala do C++ i Pythona po drodze zahaczając o JavaScript i VBA. Od 2010 roku pracuje jako nauczyciel, nie tylko w szkole, ale także w projektach związanych z prowadzeniem zajęć dla młodzieży uzdolnionej w Słupsku, Lęborku i Kartuzach. Od 2012 roku uczestniczy w obozach naukowych w czasie wakacji. Przygotowywał również uczniów do olimpiad informatycznych, w tym do olimpiady z programowania zespołowego. Aby podnieść swoje umiejętności uczestniczy w warsztatach dla nauczycieli olimpiady informatycznych. Ukończył studia podyplomowe z zakresu testowania oprogramowania, programowania aplikacji internetowych oraz cyberbezpieczeństwa. Najbardziej ceni u siebie zapał do uczenia się nowych rzeczy. W Osadzie Wiedzy prowadzi zajęcia z programowania.',
			],
		},
		{
			name: 'Przemysław Rojewski',
			id: 'Przemyslaw-Rojewski',
			img1: PRimg1,
			img2: PRimg2,
			img3: PRimg3,
			text: [
				'- nauczyciel fizyki w Powiatowym Zespole Szkół nr 2 w Wejherowie. W zawodzie od 20 lat Od 11 lat pracuje z uczniami szczególnie uzdolnionymi w ramach Projektu „Zdolni z Pomorza” przygotowując ich do konkursów i olimpiad  szczególnie w części doświadczalnej. Przez ten czas wychował wielu laureatów i finalistów. Jest doświadczonym egzaminatorem OKE w Gdańsku od 16 lat uczestniczy w pracach komisji egzaminacyjnej egzaminu maturalnego z fizyki. Również przygotowuje z powodzeniem uczniów do tego egzaminu. Od kilku lat tworzy pracownię fizyczną z prawdziwego zdarzenia wyposażoną w najnowocześniejszy dostępny sprzęt pomiarowy. W czasie wolnym nie może obyć się bez treningów biegowych jest zwycięzcą wielu biegów długodystansowych i maratonów.',
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
			{teamPersons.map(person => {
				return (
					<a id={person.id} key={person.name} className='team__section'>
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
					</a>
				);
			})}
		</>
	);
};

export default TeamPerson;
