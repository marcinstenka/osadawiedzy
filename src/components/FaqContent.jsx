import React from 'react';
import { Link } from 'react-router-dom';

const FaqContent = () => {
	return (
		<>
			<h2 className='header faq__header'>FAQ</h2>

			<div className='faq'>
				<div className='question'>
					<h3>W jakim terminie organizowany jest obóz?</h3>
					<p>Obóz organizowany jest w terminie 28.06. – 6.07.2024r.</p>
				</div>
				<div className='question'>
					<h3>Kto może być uczestnikiem obozu?</h3>
					<p>
						Uczestnikami obozu mogą być uczniowie po VI klasie Szkoły
						Podstawowej. Wymagana jest opinia nauczyciela matematyki (w
						przypadku uczniów po VI klasie SP) oraz fizyki (po VII kl. SP), a w
						przypadku wybrania programu biologia/chemia opinia nauczycieli tych
						przedmiotów.
					</p>
				</div>
				<div className='question'>
					<h3>Kto jest organizatorem obozu?</h3>
					<p>
						Osada Wiedzy opiera się na pracy wykwalifikowanych nauczycieli, z
						bogatym dorobkiem zawodowym, mających uprawnienia w zakresie
						trenerskim, pracujących i koordynujących obozy naukowe od 2010r.
						Dzięki pracownikom Uniwersytetu Gdańskiego i Uniwersytetu Morskiego
						uczniowie będą mogli korzystać bezpośrednio z wiedzy naukowców.
						Więcej informacji w zakładce „Zespół”
						https://www.osadawiedzy.pl/zespol
					</p>
				</div>
				<div className='question'>
					<h3>Jaki jest koszt obozu?</h3>
					<p>
						Koszt obozu naukowego wynosi 2490,00 zł. W przypadku rodzeństwa
						koszt wynosi 2390,00 zł.
					</p>
				</div>
				<div className='question'>
					<h3>Co obejmuje cena obozu?</h3>
					<p>
						Cena obozu obejmuje: koszty zakwaterowania (noclegu), wyżywienia,
						ubezpieczenia NNW, koszty gadżetów (koszulka krój uniwersalny,
						długopis, zeszyt, bidon na wodę), atrakcje dodatkowe: udział w
						spływie kajakowym (jeden spływ).
					</p>
				</div>
				<div className='question'>
					<h3>Do kiedy należy opłacić obóz?</h3>
					<p>
						W dniu zawarcia umowy rodzic/opiekun prawny wpłaca kwotę 30% ceny
						obozu tj. 747,00 zł lub w przypadku rodzeństwa 717,00 zł tytułem
						opłaty rezerwacyjnej. Na 21 dni przed planowanym terminem
						rozpoczęcia obozu tj. do dnia 7.06.2024r. rodzic/opiekun prawny
						zobowiązuje się uiścić na rzecz Organizatora pozostałą część opłaty
						za obóz.
					</p>
				</div>
				<div className='question'>
					<h3>Gdzie i kiedy organizowany jest obóz?</h3>
					<p>
						Obóz naukowy organizowany jest w Załakowie. Miejscowość leży w
						województwie pomorskim w pobliżu Lęborka i Sierakowic. Właśnie w
						Załakowie, powstało Centrum wypoczynkowe „Na Gwizdówce”. Położenie z
						dala od zabudowań mieszkalnych sprawia, że uczestnicy mogą liczyć na
						ciszę, spokój i wypoczynek. Kompleks wypoczynkowy powstał w 2014
						roku i wykonany został z najwyższą starannością i dbałością o
						szczegóły. Otoczenie obiektu dopasowane jest do leśnego krajobrazu
						okolic jeziora Świętego. Uczestnicy obozu zostaną zakwaterowani w
						hotelu. Zajęcia odbywać się będą w budynku obok kompleksu
						hotelowego.
					</p>
					<a href='http://www.gwizdowka.pl/'>http://www.gwizdowka.pl/</a>
				</div>
				<div className='question'>
					<h3>Jakie są warunki zakwaterowania uczestników?</h3>
					<p>
						Uczestnicy zakwaterowani są w budynku hotelowym głównie w pokojach 2
						lub 3-osobowych z dostępem do prywatnej łazienki w każdym pokoju,
						dodatkowo jest 1 pokój 4- osobowy typu studio. (2+2) i 1 pokój
						5-osobowy także typu studio (2+3), każde studio ma także dostęp do
						prywatnej łazienki. Jeśli dwóch lub więcej uczestników chce być w
						jednym pokoju proszę o wpisanie tego w kwestionariuszu zgłoszenia w
						punkcie: <bold>Inne uwagi o uczestniku, komentarz</bold>
					</p>
				</div>

				<div className='question'>
					<h3>Czy jest możliwość skorzystania ze specjalnej diety?</h3>
					<p>
						Tak, możliwość wyboru diety znajduje się w kwestionariuszu
						zgłoszenia.
					</p>
				</div>
				<div className='question'>
					<h3>Co uczestnik zabiera ze sobą na obóz?</h3>
					<p>
						Uczestnicy zabierają ze sobą: długopisy, ołówki, linijki. Zeszyty
						będą czekały na miejscu. Dodatkowo oczywiście obowiązkowo należy
						zabrać stroje kąpielowe, spodenki, buty do biegania, ponieważ poza
						nauką będziemy się troszkę ruszać. Karty do gry i różne gry logiczne
						również się przydadzą. Jeżeli dziecko uczestniczy w programie
						matematyka/fizyka/programowanie zabiera ze sobą laptopa z systemem
						operacyjnym Windows 10 lub 11.
					</p>
				</div>
				<div className='question'>
					<h3>Jak zaczynamy każdy dzień?</h3>
					<p>
						Każdy dzień zaczynamy zaprawą poranną o godzinie 7:30, która jest
						<bold>obowiązkowa</bold> dla wszystkich uczestników. Jeśli istnieją
						przeciwskazania medyczne do wykonywania przez dziecko wybranych
						ćwiczeń, prosimy uwzględnienie tego w kwestionariuszu zgłoszenia w
						punkcie: <bold>Istotne dane o stanie zdrowia uczestnika</bold>.
					</p>
				</div>
				<div className='question'>
					<h3>Jakie są możliwości transportu na obóz?</h3>
					<p>
						Na ten moment nie organizujemy transportu na obóz, rodzic/opiekun
						prawny przywozi i odbiera dziecko osobiście. W przypadku, gdy rodzic
						bądź opiekun prawny nie może osobiście odebrać dziecka prosimy o
						przekazanie upoważnienia osobie odbierającej.
					</p>
				</div>
				<div className='question'>
					<h3>Co zrobić jeśli w kwestionariuszu popełniłem/am błąd?</h3>
					<p>
						Prosimy o kontakt na adres e-mail:{' '}
						<a href='mailto:kontakt@osadawiedzy.pl'>kontakt@osadawiedzy.pl</a>
					</p>
				</div>
				<div className='question'>
					<h3>Jakie dokumenty uczestnicy zabierają ze sobą na obóz?</h3>
					<p>
						Uczestnicy nie potrzebują zabierać żadnych dokumentów tożsamości.
						Dane uczestników podają Państwo wypełniając kwestionariusz
						zgłoszenia.
					</p>
				</div>
				<div className='question'>
					<h3>Czy uczestnicy objęci są dodatkowym ubezpieczeniem?</h3>
					<p>Tak, uczestnicy ubezpieczeni są grupowym ubezpieczeniem NNW.</p>
				</div>
				<div className='question'>
					<h3>Jaki jest podział uczestników na grupy?</h3>
					<p>
						Uczestnicy podzieli są na grupy względem klasy, którą ukończyli w
						szkole. Dopuszcza się możliwość (szczególnie w starszych grupach)
						uczestniczenia w zajęciach na innym poziomie. Podziału na grupy
						dokonujemy w pierwszym dniu obozu.
					</p>
				</div>
				<div className='question'>
					<h3>
						Czym jest program dla dzieci i młodzieży program
						matematyka/fizyka/programowanie?
					</h3>
					<p>
						Jest to program skierowany dla uczniów po VI klasie szkoły
						podstawowej. Zajęcia odbywają się z fizyki, matematyki i
						programowania. Zajęcia obejmują zagadnienia wykraczające poza
						program nauczania, który dziecko zrealizowało w ramach nauki tego
						przedmiotu w szkole w klasie, którą ukończyło. <br />
						<br />
						Ponadto dzieci uczestniczą w zajęciach z zakresu kompetencji
						społecznych.
					</p>
				</div>
				<div className='question'>
					<h3>Czym jest program dla maturzystów i maturzystek – fizyka?</h3>
					<p>
						Jest to program skierowany do uczniów klasy III LO lub IV technikum,
						którzy chcą wybrać studia techniczne i maturę z fizyki. Kurs
						umożliwi uczniom podjęcie decyzji maturalnej i ułatwi przygotowania
						do czekającej matury z fizyki. Zajęcia prowadzone są przez
						egzaminatora maturalnego. <br />
						<br />
						Ponadto uczniowie uczestniczą w zajęciach psychoedukacyjnych z
						zakresu psychologii pozytywnej i mindfulnessu.
					</p>
				</div>
				<div className='question'>
					<h3>Czym jest program maturalny chemia/biologia?</h3>
					<p>
						Jest to program skierowany do uczniów szkół średnich, którzy chcą
						przygotować się do matury z biologii lub chemii. <br />
						<br />
						Ponadto uczniowie uczestniczą w zajęciach psychoedukacyjnych z
						zakresu psychologii pozytywnej i mindfulnessu.
					</p>
				</div>
				<div className='question'>
					<h3>Czy poza wakacjami organizowane są zajęcia?</h3>
					<p>
						Tak, zachęcamy do zapoznania się z Naszą ofertą zajęcia{' '}
						<Link to='/nauki-scisle-po-godzinach'>
							"Nauki ścisłe po godzinach"
						</Link>
					</p>
				</div>
				<div className='question'>
					<h3>Jakie są zasady korzystania z telefonów komórkowych?</h3>
					<p>
						Nie zabieramy uczestnikom telefonów komórkowych, chyba, że wyraźnie
						zostanie to zaznaczone przez rodzica. Program dnia jest niezwykle
						obszerny, co sprawia, że uczestnicy mają bardzo niewiele czasu w
						ciągu dnia na korzystanie z urządzeń elektronicznych. Czas wolny
						uczestników w przerwie obiadowej oraz wieczorem jest także
						zorganizowany.
					</p>
				</div>
				<div className='question'>
					<h3>Jakie zachowania uczestników skutkują usunięciem z obozu?</h3>
					<p>
						W trakcie trwania obozu obowiązuje zakaz posiadania i używania przez
						uczestników obozu narkotyków, środków odurzających, środków
						psychotropowych, dopalaczy oraz środków o zbliżonym działaniu, jak
						również obowiązuje zakaz używania alkoholu i tytoniu oraz
						e-papierosów (papierosy elektroniczne).{' '}
						<bold>
							W przypadku naruszenia tego punktu regulaminu uczestnik zostaje
							usunięty z obozu
						</bold>
						.
					</p>
				</div>
				<div className='question'>
					<h3>Spływ kajakowy</h3>
					<p>
						Ostatniego dnia obozu tj. <bold>6.07.2024r.</bold> organizowany jest
						spływ kajakowy. Tego dnia nie ma żadnych zajęć edukacyjnych. Spływ
						kajakowy dla uczestnika wliczony jest w cenę obozu. Istnieje
						możliwość (do której zachęcamy) dołączenia do spływu
						(rodzice/opiekunowie prawni, rodzeństwo, rodzina, znajomi), wówczas
						prosimy o kontakt (może być mailowy) najpóźniej do dnia{' '}
						<bold>28.06.2024r</bold>.
						<br />
						<br />
						Na spływ ruszamy z ośrodka autokarem około 8-9 rano i po spływie tam
						wracamy, więc samochody można zostawić na terenie ośrodka. Po
						spływie na wszystkich uczestników czeka kolacja - grill na terenie
						ośrodka. Pływamy okolicznymi rzekami, około 6h. Koszt spływu
						kajakowego z transportem i kolacją zostanie podana zainteresowanym
						do dnia <bold>1.06.2024r.</bold> natomiast trasa spływu zostanie
						ostatecznie ustalona około <bold>1.07.2024r.</bold> Zachęcamy do
						udziału w spływie, nawet jeżeli nigdy jeszcze nie pływaliście
						kajakami :)
					</p>
				</div>
			</div>
		</>
	);
};
export default FaqContent;
