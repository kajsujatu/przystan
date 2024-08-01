import React from 'react';
import './SectionAboutMe.css';

function SectionAboutMe() {
  return (
    <section className='section-about-me' id='o-mnie'>
      <div className='about-info'>
        <h2 className='headline-chapter'>O mnie</h2>
        <p>
          Jestem założycielką Przystani Zmiany Zawodowej, certyfikowaną coach
          ICF, obecnie na drodze do międzynarodowej akredytacji, i magistrem
          psychologii. Pomagam ambitnym kobietom z pokolenia Y / Milenialsów
          znaleźć spełnienie zawodowe.
        </p>
        <p>
          Po niemal dekadzie pracy w korporacjach w działach HR i Employer
          Brandingu zrozumiałam, jak ważne jest świadome planowanie kariery.
          Dzięki pracy nad swoimi przekonaniami i pragnieniami, przeszłam
          transformację zawodową i teraz dzielę się tym doświadczeniem z innymi.
        </p>
        <p>Wspieram kobiety poprzez:</p>
        <ul>
          <li>Analizę ich potrzeb</li>
          <li>Wspólne spojrzenie w głąb przekonań, talentów i wartości</li>
          <li>Pomoc w świadomym podejmowaniu decyzji zawodowych</li>
          <li>Tworzenie planu działania</li>
        </ul>

        <p>
          Prywatnie jestem żoną i mamą 3-letniej Róży. To właśnie dla niej
          szukam nowej jakości życia, opartej na szacunku i widzeniu siebie oraz
          wykorzystywaniu swojego potencjału u siebie i innych. Widzę Cię,
          jestem tu dla Ciebie. Porozmawiajmy. Nie bądź w tym sama. Byłam tam,
          gdzie Ty.
        </p>
      </div>
      <img src='img/1409.jpg' className='about-img' alt='About me' />
    </section>
  );
}

export default SectionAboutMe;
