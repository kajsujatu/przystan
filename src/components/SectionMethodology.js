import React from 'react';
import './SectionMethodology.css';

function SectionMethodology() {
  return (
    <section
      className='section-methodology sections-container'
      id='metodologia'
    >
      <h2 className='headline-chapter'>Metodologia</h2>

      <p>
        Moja <b>metoda pracy</b> to proces coachingowy metodą CSR (Coaching
        Steps Revolution) z elementami mentoringu. Podejście CSR pozwala
        klientkom zidentyfikować i wyeliminować blokady, zrozumieć swoje
        prawdziwe potrzeby i stworzyć plan działania prowadzący do do awansu,
        zmiany pracy lub przebranżowienia się.
      </p>

      <div className='frame'>
        <p>Proces ze mną jest odpowiedni dla Ciebie, jeśli odczuwasz:</p>

        <ol>
          <li>
            Pragnienie znalezienia większego spełnienia i satysfakcji w życiu
            zawodowym.
          </li>
          <li>
            Chęć podejmowania bardziej świadomych i autentycznych decyzji
            zawodowych.
          </li>
          <li>Zmęczenie rutyną korporacyjną i pragnienie zmiany.</li>

          <li>Poszukiwanie równowagi między pracą a życiem osobistym.</li>
          <li>
            Dążenie do realizacji własnych marzeń i ambicji, które dotychczas
            były ignorowane lub odkładane na później.
          </li>
          <li>Chęć sięgnięcia po awans lub podwyżkę.</li>
          <li>Potrzebę wsparcia i mentoringu przy budowaniu Twojego planu.</li>
        </ol>
      </div>
    </section>
  );
}

export default SectionMethodology;
