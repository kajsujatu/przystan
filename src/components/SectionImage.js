import React from 'react';
import './SectionImage.css';

function SectionImage() {
  return (
    <section className='section-image'>
      <div className='section-image-container'>
        <div className='image-text'>
          <h1>Weź życie w swoje ręce i pracuj wreszcie tak, jak chcesz!</h1>
        </div>
        <div className='image-button-social'>
          <a href='#kontakt'>
            <button className='btn-round'>
              Umów się <br></br> na bezpłatną konsultację
            </button>
          </a>
          <div className='icons'>
            <a
              href='https://www.facebook.com/Przystan.Zmiany.Zawodowej'
              target='_blank' rel="noreferrer"
            >
              <img
                className='icon'
                src='/robocza/img/icon-facebook.svg'
                alt='ikona facebooka'
              ></img>
            </a>
            <a
              href='https://www.instagram.com/przystan_zmiany_zawodowej'
              target='_blank' rel="noreferrer"
            >
              <img
                className='icon'
                src='/robocza/img/icon-instagram.svg'
                alt='ikona instagrama'
              ></img>
            </a>
            <a
              href='https://www.linkedin.com/in/agnieszka-baranowska-66a07b74/'
              target='_blank' rel="noreferrer"
            >
              <img
                className='icon'
                src='/robocza/img/icon-linkedin.svg'
                alt='ikona linkedina'
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionImage;
