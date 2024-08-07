import React from 'react';
import './SectionAboutMe.css';

function SectionAboutMe() {
  return (
    <section className='section-about-me sections-container' id='o-mnie'>
      <div className='about-info'>
        <h2 className='headline-chapter'>O mnie</h2>
        <p>Jestem coachem kariery, mentorką i psychologiem.</p>
        <p>
          Pomagam kobietom, które nie odczuwają satysfakcji z życia zawodowego w
          odnalezieniu ścieżki kariery zgodnej z potencjałem, dzięki czemu
          odnajdują lepszą jakość w każdym obszarze swojego życia.
        </p>

        <p>
          Po dekadzie pracy w korporacjach w działach HR i Employer Brandingu
          zrozumiałam, jak ważne jest świadome planowanie kariery. Dzięki
          metodzie CSR, którą pracuję, sama przeszłam transformację zawodową i
          teraz pomagam w tym moim klientkom.
        </p>

        <div className='frame'>
          <p>Wspieram kobiety w:</p>
          <ol>
            <li>Zaprojektowaniu ścieżki do awansu</li>
            <li>Przebranżowieniu się</li>
            <li>Zmianie roli zawodowej na zgodną z talentami</li>
          </ol>
        </div>
        <p>
          Prywatnie jestem żoną i mamą 3-letniej Róży. To właśnie dla niej
          szukam nowej jakości życia, opartej na szacunku i widzeniu siebie oraz
          wykorzystywaniu swojego potencjału u siebie i innych.
        </p>
      </div>
      <img
        src='img/1409.jpg'
        className='about-img'
        alt='Zdjęcie przedstawiające Agnieszkę Baranowską. Agnieszka siedzi przy stole i trzyma w rękach białą filiżankę. Na stole leżą zeszyty z notatkami.'
      />
    </section>
  );
}

export default SectionAboutMe;
