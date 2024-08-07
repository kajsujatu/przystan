import React, { useEffect, useState } from 'react';
import './SectionExperience.css';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';

function SectionExperience() {
  const [showImages, setShowImages] = useState(false);

  const toggleImages = () => {
    setShowImages(!showImages);
  };

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
    <section className='section-experience' id='doswiadczenie'>
      <div className='section-full-container'>
        <h2 className='headline-chapter'>Doświadczenie</h2>
        <p>
          <b>Moje doświadczenie to:</b> wiedza psychologiczna zdobyta w trakcie
          5-letnich studiów magisterskich na Uniwersytecie Adama Mickiewicza w
          Poznaniu (2017), studia podyplomowe z zakresu coachingu (2018) na UAM
          oraz certyfikacja CSR (Career Steps Revolution) od Talent Development
          Institute (2024). Jestem certyfikowaną coach ICF, obecnie na drodze do
          międzynarodowej akredytacji ACC.
        </p>
        <p>
          <b>Przystań Zmiany Zawodowej</b> powstała w 2022 roku, kiedy po
          urodzeniu córki Róży szukałam przestrzeni dla swojego potencjału po
          1,5 rocznej przerwie w karierze. Pasjonuje mnie praca nad
          przekonaniami i emocjami oraz odkrywanie głębokich potrzeb drugiego
          człowieka. Wierzę, że komunikacja jest kluczem do otwarcia wielu
          drzwi, dlatego codziennie zastanawiam się, jak mówimy, co mówimy i co
          wybieramy przemilczeć w relacjach z innymi.
        </p>
        <p>
          Od wielu lat{' '}
          <b>
            dbam o wizerunek pracodawców i specjalizuję się w komunikacji
            wewnętrznej
          </b>
          . Prawdziwą radość czerpię z towarzyszenia innym kobietom w ich drodze
          ku zmianie. Prowadzę konsultacje, webinary, szkolenia oraz spotkania
          na żywo, aby wspierać i inspirować innych.
        </p>
        <p>
          Dbam o ciągłe podnoszenie kwalifikacji i śledzenie najnowszych trendów
          w coachingu, uczestnicząc w różnych rodzajach terapii i coachingu.
          Moje certyfikaty potwierdzają umiejętności i wiedzę, gwarantując
          wysoką jakość usług.
        </p>

        <button className='btn-round center' onClick={toggleImages}>
          {showImages ? 'Ukryj certyfikaty' : 'Zobacz certyfikaty'}
        </button>
        {showImages && (
          <div className='gallery certificates'>
            <a href='img/certyfikaty/certyfikat_1.jpg'>
              <img
                className='certificate-item'
                src='img/certyfikaty/certyfikat_1.jpg'
                alt='Certyfikat Coach Metodologii CSR'
              ></img>
            </a>
            <a href='img/certyfikaty/certyfikat_2.jpg'>
              <img
                className='certificate-item'
                src='img/certyfikaty/certyfikat_2.jpg'
                alt='Certyfikat UAM'
              ></img>
            </a>
            <a href='img/certyfikaty/certyfikat_3.jpg'>
              <img
                className='certificate-item'
                src='img/certyfikaty/certyfikat_3.jpg'
                alt='Certificate Professional Coach'
              ></img>
            </a>
            <a href='img/certyfikaty/certyfikat_4.jpg'>
              <img
                className='certificate-item'
                src='img/certyfikaty/certyfikat_4.jpg'
                alt='Dyplom UAM w Poznaniu na kierunku psychologia'
              ></img>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default SectionExperience;
