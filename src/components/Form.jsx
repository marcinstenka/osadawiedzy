import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScienceArrow from '../assets/img/scienceArrow.svg';
import LoadingGif from '../assets/img/loadingGif.gif';

const Form = () => {
	const [status, setStatus] = useState('');
	const form = useRef();

	useEffect(() => {
		const registerStatus = document.querySelector('#register-status');
		const inputs = document.querySelectorAll('input');
		const textareas = document.querySelectorAll('textarea');
		const selects = document.querySelectorAll('select');
		if (registerStatus) {
			registerStatus.innerHTML = status;
			inputs.forEach((input) => {
				input.value = '';
			});
			textareas.forEach((t) => {
				t.value = '';
			});
			selects.forEach((s) => {
				s.selectedIndex = 0;
			});
		}
	});
	const sendEmail = (e) => {
		const registerStatus = document.querySelector('#register-status');
		registerStatus.innerHTML = `<img src="${LoadingGif}" />`;
		e.preventDefault();
		emailjs
			.sendForm(
				'service_i2turqg',
				'template_ajdpeol',
				form.current,
				'zCfJ_UFvXZ_U3x64A'
			)
			.then(
				(result) => {
					setStatus('Dziękujemy za wiadomość, wkrótce odpiszemy! :)');
				},
				(error) => {
					setStatus('Coś poszło nie tak. Spróbuj ponownie za chwilę.');
				}
			);
	};
	return (
		<form ref={form} className='form-container' onSubmit={sendEmail}>
			<ol>
				<li>Wybór obozu</li>
				<label htmlFor='form-campus-type' className='form-required'>
					Proszę wybrać jeden z dostępnych obozów.{' '}
				</label>
				<select name='form-campus-type' required>
					<option value='' selected disabled hidden>
						wybierz obóz
					</option>
					<option value='Obóz naukowy dla dzieci i młodzieży program matematyka/fizyka/programowanie'>
						Obóz naukowy dla dzieci i młodzieży -
						matematyka/fizyka/programowanie
					</option>
					<option value='Obóz naukowy dla maturzystów i maturzystek - fizyka'>
						Obóz naukowy dla maturzystów i maturzystek - fizyka
					</option>
					<option value='Obóz naukowy program maturalny - chemia/biologia'>
						Obóz naukowy program maturalny - chemia/biologia
					</option>
				</select>
				<div className='form-radio'>
					Czy uczestnik/uczestniczka już u Nas był/a?
					<div className='radio-labels'>
						<div>
							<input
								type='radio'
								value='Nie'
								defaultChecked
								name='form-first-time'
								id='form-first-time-no'
							/>
							<input
								type='radio'
								value='Tak'
								name='form-first-time'
								id='form-first-time-yes'
							/>
						</div>
						<div>
							<label htmlFor='form-first-time-no'>Nie</label>
							<label htmlFor='form-first-time-yes'>Tak</label>
						</div>
					</div>
				</div>
				<li>Informacje na temat uczestnika</li>
				<p>
					Poniższe informacje są niezbędne do przyjęcia zgłoszenia
					uczestnika/uczestniczki obozu oraz stworzenia karty kwalifikacyjnej.
					Dane zostaną udostępnione tylko i wyłącznie organizatorom i
					pracownikom obozu naukowego Osada Wiedzy.
				</p>
				<label htmlFor='form-participant-name' className='form-required'>
					Imie:
				</label>
				<input type='text' name='form-participant-name' required />
				<label htmlFor='form-participant-surname' className='form-required'>
					Nazwisko:
				</label>
				<input type='text' name='form-participant-surname' required />
				<label htmlFor='form-participant-birthday' className='form-required'>
					Data urodzenia:
				</label>
				<input type='date' name='form-participant-birthday' required />
				<label
					htmlFor='form-participant-birthday-place'
					className='form-required'
				>
					Miejsce urodzenia:
				</label>
				<input
					type='text'
					name='form-participant-birthday-place'
					placeholder='Lębork'
					required
				/>
				<label htmlFor='form-participant-place' className='form-required'>
					Adres zamieszkania:
				</label>
				<input
					type='text'
					name='form-participant-place'
					placeholder='ul. Szkolna 2a/4, 12-345 Lębork'
					required
				/>
				<label htmlFor='form-participant-pesel' className='form-required'>
					PESEL
				</label>
				<input type='number' name='form-participant-pesel' required />
				<label htmlFor='form-participant-diseases'>
					Przebyte choroby (ospa, różyczka itp.)
				</label>
				<textarea
					name='form-participant-diseases'
					cols='30'
					rows='10'
				></textarea>
				<label htmlFor='form-participant-vaccinations'>
					Informacja o przebytych szczepieniach ochronnych wraz z rokiem
					otrzymania szczepionki (tężec, błonica i inne):
				</label>
				<textarea
					name='form-participant-vaccinations'
					cols='30'
					rows='10'
				></textarea>
				<label htmlFor='form-participant-special-info'>
					Informacja o specjalnych potrzebach edukacyjnych uczestnika
					wypoczynku, w szczególności o potrzebach wynikających z
					niepełnosprawności, niedostosowania społecznego lub zagrożenia
					niedostosowaniem społecznym:
				</label>
				<textarea
					name='form-participant-special-info'
					cols='30'
					rows='10'
				></textarea>
				<label htmlFor='form-participant-health'>
					Istotne dane o stanie zdrowia uczestnika, rozwoju psychofizycznym i
					stosowanej diecie (alergie, jak znosi jazdę samochodem, czy przyjmuje
					stale leki i w jakich dawkach, czy nosi aparat ortodontyczny lub
					okulary):
				</label>
				<textarea name='form-participant-health' cols='30' rows='10'></textarea>
				<label htmlFor='form-participant-other'>
					Inne uwagi o uczestniku, komentarz:
				</label>
				<textarea name='form-participant-other' cols='30' rows='10'></textarea>
				<li>Pozostałe informacje</li>
				<label htmlFor='form-diet' className='form-required'>
					Preferowana dieta
				</label>
				<select name='form-diet' required>
					<option value='' selected disabled hidden>
						wybierz dietę
					</option>
					<option value='Dieta podstawowa'>Dieta podstawowa</option>
					<option value='Dieta bezglutenowa'>Dieta bezglutenowa</option>
					<option value='Dieta z ograniczeniem łatwo przyswajalnych węglowodanów (cukrzycowa)'>
						Dieta z ograniczeniem łatwo przyswajalnych węglowodanów (cukrzycowa)
					</option>
					<option value='Dieta wegetariańska'>Dieta wegetariańska</option>
					<option value='Dieta wegańska'>Dieta wegańska</option>
					<option value='Dieta bez laktozy'>Dieta bez laktozy</option>
					<option value='Inna'>
						Inna - proszę opisać w podpunkcie "Inne uwagi o uczestniku"
					</option>
				</select>
				<div className='form-radio'>
					Rozmiar koszulki uczestnika/uczestniczki obozu
					<div className='radio-labels'>
						<div>
							<input
								type='radio'
								value='S'
								id='size-s'
								defaultChecked
								name='form-participant-shirt-size'
							/>
							<input
								type='radio'
								value='M'
								id='size-m'
								name='form-participant-shirt-size'
							/>
							<input
								type='radio'
								value='L'
								id='size-l'
								name='form-participant-shirt-size'
							/>

							<input
								type='radio'
								value='XL'
								id='size-xl'
								name='form-participant-shirt-size'
							/>
						</div>
						<div>
							<label htmlFor='size-s'>S</label>
							<label htmlFor='size-m'>M</label>
							<label htmlFor='size-l'>L</label>
							<label htmlFor='size-xl'>XL</label>
						</div>
					</div>
				</div>
				<label htmlFor='form-participant-school' className='form-required'>
					Typ szkoły
				</label>
				<select name='form-participant-school' required>
					<option value='' selected disabled hidden>
						wybierz typ szkoły
					</option>
					<option value='Szkoła podstawowa'>Szkoła podstawowa</option>
					<option value='Liceum'>Liceum</option>
					<option value='Technikum'>Technikum</option>
				</select>
				<label
					htmlFor='form-participant-school-grade'
					className='form-required'
				>
					Klasa
				</label>
				<input type='number' name='form-participant-school-grade' required />
				<li>Informacje na temat osoby zgłaszającej</li>
				<p>
					Dalsza korespondencja będzie kierowana na podany niżej adres e-mail
					oraz numer telefonu. Ewentualna faktura również zostanie wysłana na
					podany adres e-mail (po zakończeniu turnusu).
				</p>
				<label htmlFor='form-parent-name' className='form-required'>
					Imię:
				</label>
				<input type='text' name='form-parent-name' required />
				<label htmlFor='form-parent-surname' className='form-required'>
					Nazwisko:
				</label>
				<input type='text' name='form-parent-surname' required />
				<label htmlFor='form-parent-phone' className='form-required'>
					Numer telefonu rodzica/opiekuna lub osoby wskazanej przez
					pełnoletniego uczestnika:
				</label>
				<input type='tel' name='form-parent-phone' required />
				<label htmlFor='form-parent-email' className='form-required'>
					Adres e-mail
				</label>
				<input type='email' name='form-parent-email' required />
				<div className='form-radio'>
					Czy chcesz otrzymać fakturę?
					<div className='radio-labels'>
						<div>
							<input
								type='radio'
								value='Nie'
								defaultChecked
								name='form-parent-invoice'
								id='form-parent-invoice-no'
							/>
							<input
								type='radio'
								value='Tak'
								name='form-parent-invoice'
								id='form-parent-invoice-yes'
							/>
						</div>
						<div>
							<label htmlFor='form-parent-invoice-no'>Nie</label>
							<label htmlFor='form-parent-invoice-yes'>Tak</label>
						</div>
					</div>
				</div>
				<label htmlFor='form-parent-invoice-info'>Dane do faktury</label>
				<input
					type='text'
					name='form-parent-invoice-info'
					placeholder='Nazwa firmy, numer NIP, adres'
				/>
				Płatności proszę dokonać na numer bankowy
				<br />
				<b>Zjednoczony Bank Spóldzielczy o numerze:</b>
				<b>45 9324 0008 0004 6314 2000 0010</b>
				<br />
				Wpłaty dokonuje się tytułem:
				<i>
					"wpłata na organizację obozu naukowego „Osada Wiedzy” organizowanego w
					dniach 28.06.2024r. – 06.07.2024r. uczestnik/uczestniczka
					……………………………………………".
				</i>
				<br />
				<br />
				<div className='form-checkbox'>
					<input
						type='checkbox'
						name='form-acceptance1'
						id='form-acceptance1'
						required
					/>
					<label htmlFor='form-acceptance1' className='form-required'>
						Akceptuję warunki zwarte w: umowie obozu, regulaminie obozu
					</label>
				</div>
				<div className='form-checkbox'>
					<input
						type='checkbox'
						name='form-acceptance2'
						id='form-acceptance2'
						required
					/>
					<label htmlFor='form-acceptance2' className='form-required'>
						Wyrażam zgodę na przetwarzanie danych osobowych zawartych w karcie
						kwalifikacyjnej na potrzeby niezbędne do zapewnienia bezpieczeństwa
						i ochrony zdrowia uczestnika wypoczynku (zgodnie z ustawą z dnia 29
						sierpnia 1997r. o ochronie danych osobowych (Dz. U. z 2015r. poz.
						2135, z późn. zm.)).
					</label>
				</div>
				<br />
				<br />
				Umowę należy pobrać ze strony, uzupełnić i podpisać. <br /> Umowę należy
				wydrukować w dwóch egzemplarzach, oba podpisać. <br /> Do umowy należy
				dołączyć opinię nauczyciela matematyki i fizyki (fizyka nie dotyczy
				uczniów/uczennic po klasie VI Szkoły Podstawowej) <br /> Całość należy
				przesłać na adres:{' '}
				<b>
					{' '}
					Osada Wiedzy ul. Długa 24A 84-353 Lębork-Mosty najpóźniej do
					21.06.2024r.
				</b>{' '}
				<br />
				Umowa podpisana przez Organizatora zostanie odesłana na wskazany w
				kwestionariuszu adres.
				<br />
				<br />
				Do umowy należy dołączyć opinię nauczyciela matematyki i fizyki (fizyka
				nie dotyczy uczniów/uczennic po klasie VI Szkoły Podstawowej) w
				przypadku wyboru opcji biologia/chemia opinię nauczyciela tych
				przedmiotów.
			</ol>

			<div className='register-button'>
				<button>
					wyślij <img src={ScienceArrow} alt='Strzałka zobacz więcej.' />
				</button>
				<div className='register-status' id='register-status'></div>
			</div>
		</form>
	);
};

export default Form;
