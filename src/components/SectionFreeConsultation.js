import React from 'react';
import './SectionFreeConsultation.css';

function SectionFreeConsultation() {
  return (
    <section className='section-free-consultation sections-container' id='bezplatna-konsultacja'>
      <h2 className='headline-chapter'>Bezpłatna konsultacja</h2>

      <p>Zapraszam Cię na bezpłatną sesję wstępną.</p>
      <p>
        Ta rozmowa jest dla Ciebie, jeśli jesteś zmęczona swoją rutyną
        korporacyjną. Czujesz się niedoceniana, towarzyszy Ci frustracja, stres
        oraz poczucie utknięcia. Uważasz się za ekspertkę, ale nie przekłada się
        to na Twoje finanse ani na stanowisko, które piastujesz. Chcesz pracować
        zgodnie ze swoim potencjałem, realizować marzenia i ambicje, które
        dotychczas odkładałaś na później. Chcesz, ale nie wiesz, jak rozwijać
        się w obszarze organizacji lub firmy, jak ją zmienić lub jak się
        przebranżowić.
      </p>
      <div className='consultation-divide'>
        <img className='consultation-img' src='img/1336.jpg' alt='Zdjęcie przedstawiające Agnieszkę Baranowską i jej klientkę. Obie siedzą na łóżku. Klientka jest uśmiechnięta. Agnieszka pilnie zapisuje w notesie swoje uwagi.'></img>
        <div>
          <p>Podczas konsultacji wstępnej:</p>

          <ol className='steps'>
            <li>
              Dokonam indywidualnej analizy Twojej sytuacji zawodowej i
              zidentyfikuję obszary wymagające zmiany.
            </li>
            <li>
              Pomogę Ci odkryć, co jest dla Ciebie naprawdę ważne w karierze,
              aby wyklarować Twój prawdziwy cel zawodowy.
            </li>
            <li>
              Razem nakreślimy wizję, gdzie chcesz być zawodowo za dwa lata.
            </li>

            <li>
              Zapoznam Cię z moją metodą pracy i sprawdzę, czy jest dla Ciebie
              odpowiednia.
            </li>
          </ol>
        </div>

        <p>
          Po konsultacji otrzymujesz maila ze szczegółami, w tym z dokładnym
          opisem metodologii, którą pracuję.
        </p>
      </div>

      <a href='#kontakt' className='center'>
        <button className='btn-round center'>Zapisz się na konsultację</button>
      </a>
    </section>
  );
}

export default SectionFreeConsultation;
