import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './SectionContact.css';

function SectionContact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bu5iu7s', 'template_i8nzbr6', form.current, {
        publicKey: 'gK0hLPBgZnSwR2Vov',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section className='section-contact sections-container' id='kontakt'>
      <h2 className='headline-chapter'>Kontakt</h2>
      <div className='contact-info'>
        <div className='contact-data'>
          <p>
            Napisz do mnie bezpośrednio lub wypełnij formularz, aby umówić się
            na rozmowę.
          </p>
          <p>Odezwę się do Ciebie w ciągu 24h.</p>

          <a href='mailto:przystan.zmiany.zawodowej@gmail.com'>
            <div className='mail-container'>
              <img
                className='icon'
                src='/robocza/img/icon-mail.svg'
                alt='ikona maila'
              ></img>
              przystan.zmiany.zawodowej@gmail.com
            </div>
          </a>
        </div>
        <div className='contact-form'>
          <form className='' ref={form} onSubmit={sendEmail}>
            <div className='form-group'>
              <label htmlFor='name'>Imię</label>
              <input type='text' id='name' name='name' required />
            </div>
            <div className='form-group'>
              <label htmlFor='surname'>Nazwisko</label>
              <input type='text' id='surname' name='surname' required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>E-mail</label>
              <input type='email' id='email' name='email' required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Treść wiadomości</label>
              <textarea
                id='message'
                name='message'
                rows='4'
                required
              ></textarea>
            </div>
            <button type='submit'>Wyślij</button>
            <button type='reset'>Wyczyść</button>
          </form>
        </div>
        <img
          className='contact-img'
          alt='Zdjęcie przedstawiające Agnieszkę Baranowską na tle alejki z drzewami.'
          src='img/1258.jpg'
        ></img>
      </div>
    </section>
  );
}

export default SectionContact;
