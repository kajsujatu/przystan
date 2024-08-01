import React from 'react';
import './SectionFreeConsultation.css';

function SectionFreeConsultation() {
  return (
    <section className='section-free-consultation' id='bezplatna-konsultacja'>
      <h2 className='headline-chapter'>Bezpłatna konsultacja</h2>

      <p>
        Zapraszam Cię na bezpłatną sesję wstępną{' '}
        <b>„Twoja Kariera, Twój Krok”</b>.
      </p>
      <div className='consultation-divide'>
        <img className='consultation-img' src='img/1336.jpg'></img>
        <div>
          <p>Oferuję:</p>
          <ol>
            <li>
              <b>Indywidualną analizę sytuacji zawodowej</b>
            </li>
            <ul>
              <li>
                Razem przeanalizujemy Twoją obecną sytuację zawodową, aby
                zidentyfikować obszary wymagające zmiany.
              </li>
            </ul>
            <li>
              <b>Zrozumienie Twoich potrzeb i pragnień</b>
            </li>
            <ul>
              <li>
                Pomogę Ci odkryć, co naprawdę jest dla Ciebie ważne w karierze i
                jak możesz to osiągnąć.
              </li>
            </ul>
            <li>
              <b>Stworzenie wizji Twojej kariery za 2 lata</b>
            </li>
            <ul>
              <li>
                Razem nakreślimy wizję, gdzie chcesz być zawodowo za dwa lata,
                co pozwoli Ci skoncentrować się na długoterminowych celach.
              </li>
            </ul>
          </ol>
        </div>
        <p>
          Zrób pierwszy krok ku spełnieniu i umów się na bezpłatną konsultację
          już dziś!
        </p>
      </div>

      <a href='#contact' className='center'>
        <button className='btn-round center'>Zapisz się na konsultację</button>
      </a>
    </section>
  );
}

export default SectionFreeConsultation;
