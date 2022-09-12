import React, { useState } from 'react';
import ScienceArrow from '../assets/img/scienceArrow.svg';

const ScienceMail = color => {
  const [buttonColor, setButtonColor] = useState(color);
  return (
    <div className="science-register">
      <h3>ZAPISY</h3>
      <p className="science-text">
        W celu zapisania się na kurs zapraszamy do kontaktu telefonicznego,
        wysłania wiadomości na adres zaranskanatalia@gmail.com lub skorzystania
        z poniższego formularza.
      </p>
      <form className="register-form">
        <label htmlFor="register-name">Imię i nazwisko:</label>
        <input type="text" name="register-name" required />
        <label htmlFor="register-mail">Adres e-mail:</label>
        <input type="text" name="register-email" required />
        <label htmlFor="register-phone">Numer telefonu:</label>
        <input type="text" name="register-phone" required />
        <label htmlFor="register-type">Zajęcia:</label>
        <div className="register-type"></div>
        <select name="register-type" required>
          <option value="0">wybierz z listy</option>
          <option value="1">Fizyka</option>
          <option value="2">Matematyka</option>
          <option value="3">Programowanie</option>
        </select>
        <label htmlFor="register-message">Twoja wiadomość</label>
        <input type="text" name="register-message" />
        <button style={{ background: buttonColor.color }}>
          wyślij <img src={ScienceArrow} alt="Strzałka zobacz więcej." />
        </button>
      </form>
    </div>
  );
};

export default ScienceMail;
