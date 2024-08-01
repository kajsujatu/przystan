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
    <section className='section-contact' id='kontakt'>
      <h2 className='headline-chapter'>Kontakt</h2>
      <div className='contact-info'>
        <div className='contact-data'>
          <p>
            Telefon:{' '}
            <b>
              <a href='tel:+48607929329'>607 929 329</a>
            </b>
          </p>
          <p>
            Mail:{' '}
            <b>
              <a href='mailto:przystan.zmiany.zawodowej@gmail.com'>
                przystan.zmiany.zawodowej@gmail.com
              </a>
            </b>
          </p>
          <p>Poznań</p>
          <p>
            Napisz do mnie, żeby umówić się na rozmowę. Oddzwonię do Ciebie w
            ciągu 24h.
          </p>
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
        <img className='contact-img' src='img/1258.jpg'></img>
      </div>
    </section>
  );
}

export default SectionContact;
