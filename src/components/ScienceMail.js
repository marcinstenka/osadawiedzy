import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ScienceArrow from '../assets/img/scienceArrow.svg';

const ScienceMail = color => {
	const [buttonColor, setButtonColor] = useState(color);
	const [status, setStatus] = useState('');
	const form = useRef();
	useEffect(() => {
		const registerStatus = document.querySelector('#register-status');
		const inputs = document.querySelectorAll('input');
		if (registerStatus) {
			registerStatus.innerHTML = status;
			inputs.forEach(input => {
				input.value = '';
			});
		}
	});
	const sendEmail = e => {
		e.preventDefault();
		emailjs
			.sendForm(
				'osadatest',
				'template_w9a8tbs',
				form.current,
				'zCfJ_UFvXZ_U3x64A'
			)
			.then(
				result => {
					setStatus('Dziękujemy za wiadomość, wkrótce odpiszemy! :)');
				},
				error => {
					alert('Coś poszło nie tak. Spróbuj ponownie za chwilę.');
				}
			);
	};
	return (
		<div className='science-register'>
			<h3>ZAPISY</h3>
			<p className='science-text'>
				W celu zapisania się na kurs zapraszamy do kontaktu telefonicznego,
				wysłania wiadomości na adres zaranskanatalia@gmail.com lub skorzystania
				z poniższego formularza.
			</p>
			<form ref={form} className='register-form' onSubmit={sendEmail}>
				<label htmlFor='register-name'>Imię i nazwisko:</label>
				<input type='text' name='register-name' required />
				<label htmlFor='register-mail'>Adres e-mail:</label>
				<input type='email' name='register-email' required />
				<label htmlFor='register-phone'>Numer telefonu:</label>
				<input type='text' name='register-phone' required />
				<label htmlFor='register-type'>Zajęcia:</label>
				<select name='register-type' required>
					<option value='Fizyka'>Fizyka</option>
					<option value='Matematyka'>Matematyka</option>
					<option value='Programowanie'>Programowanie</option>
				</select>
				<label htmlFor='register-message'>Twoja wiadomość:</label>
				<input type='text' name='register-message' />
				<div className='register-button'>
					<button style={{ background: buttonColor.color }}>
						wyślij <img src={ScienceArrow} alt='Strzałka zobacz więcej.' />
					</button>
					<div
						className='register-status'
						id='register-status'
						style={{ color: buttonColor.color }}
					></div>
				</div>
			</form>
		</div>
	);
};

export default ScienceMail;
