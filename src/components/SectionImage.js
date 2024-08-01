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
            <a href=''>
              <img
                className='icon'
                src='/robocza/img/icon-facebook.svg'
                alt='ikona facebook'
              ></img>
            </a>
            <a href=''>
              <img
                className='icon'
                src='/robocza/img/icon-instagram.svg'
                alt='ikona instagram'
              ></img>
            </a>
            <a href=''>
              <img
                className='icon'
                src='/robocza/img/icon-linkedin.svg'
                alt='ikona linkedin'
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionImage;
