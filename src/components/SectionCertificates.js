import React, { useEffect } from 'react';
import './SectionCertificates.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

function SectionCertificates() {
  // simplelightbox
  useEffect(() => {
    const lightbox = new SimpleLightbox('.gallery a');

    lightbox.on('show.simplelightbox', function (e) {
      console.log('Image ' + (e.index + 1) + ' shown');
    });

    return () => {
      lightbox.destroy();
    };
  });

  return (
    <section className='section-certificates'>
      <h2 className='headline-chapter'>Certyfikaty</h2>
      <p>
        Dbam o ciągłe podnoszenie kwalifikacji i śledzenie najnowszych trendów w
        coachingu, uczestnicząc w różnych rodzajach terapii i coachingu. Moje
        certyfikaty potwierdzają umiejętności i wiedzę, gwarantując wysoką
        jakość usług.
      </p>
      <div className='gallery certificates'>
        <a href='img/certyfikaty/certyfikat_1.jpg'>
          <img
            className='certificate-item'
            src='img/certyfikaty/certyfikat_1.jpg'
          ></img>
        </a>
        <a href='img/certyfikaty/certyfikat_2.jpg'>
          <img
            className='certificate-item'
            src='img/certyfikaty/certyfikat_2.jpg'
          ></img>
        </a>
        <a href='img/certyfikaty/certyfikat_3.jpg'>
          <img
            className='certificate-item'
            src='img/certyfikaty/certyfikat_3.jpg'
          ></img>
        </a>
        <a href='img/certyfikaty/certyfikat_4.jpg'>
          <img
            className='certificate-item'
            src='img/certyfikaty/certyfikat_4.jpg'
          ></img>
        </a>
      </div>
    </section>
  );
}

export default SectionCertificates;
