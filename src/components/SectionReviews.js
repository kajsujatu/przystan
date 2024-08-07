import React from 'react';
import './SectionReviews.css';

function SectionReviews() {
  return (
    <section className='section-reviews' id='opinie'>
      <div className='section-full-container'>
        <h2 className='headline-chapter'>Opinie</h2>

        <div>
          <p className='text-center'>Posłuchaj historii mojej klientki – Kasi:</p>
          <div className='speech-bubble-container top'>
            <div className='speech-bubble'>
              <p>
                <b>Gdzie byłaś przed rozpoczęciem współpracy?</b>
              </p>
              <p>
                Miałam długą przerwę w życiu zawodowym, poświęciłam ją na
                wychowywanie trójki dzieci i bardzo ciężko było mi przestawić
                się na tryb pracy. Chciałam zarabiać pieniądze. Marzenie o byciu
                stylistką, stało się moim celem, ponieważ łączyło moje dwie
                największe pasje: miłość do ubrań i chęć pomocy ludziom.
              </p>
            </div>
            <div className='speech-bubble'>
              <p>
                <b>
                  Dlaczego zdecydowałaś się rozpocząć proces w Przystani Zmiany
                  Zawodowej?
                </b>
              </p>
              <p>
                Od dawna wiedziałam czym chcę się zająć, ale brakowało mi
                odwagi, wiary w siebie, blokowały mnie moje przekonania,
                wiedziałam, że prawdopodobnie bez wsparcia sobie nie poradzę,
                potrzebowałam kogoś kto popchnie mnie do przodu, pomoże poradzić
                sobie z moimi licznymi wątpliwościami.
              </p>
            </div>
            </div>
            <div className='person-info'>
              <img
                src='img/kasia-fotografia.jpg'
                className='person-img'
                alt='Zdjęcie przedstawiające Katarzynę Wojtaś.'
              />
              <div>
                <p>
                  <i>Katarzyna Wojtaś - osobista stylistka</i>
                </p>
              </div>
            </div>
            <div className='speech-bubble-container bottom'>
            <div className='speech-bubble'>
              <p>
                <b>Co najbardziej ceniłaś podczas wspólnych sesji?</b>
              </p>
              <ul>
                <li>
                  Mega profesjonalizm, w żaden sposób nie dałaś się zbić z tropu
                  i cały czas trzymałaś się wyznaczonej tematyki sesji.
                </li>
                <li>
                  Nić porozumienia między nami, potrafiłaś nazwać to czego ja
                  nie umiałam wyrazić słowami.
                </li>
                <li>
                  Czułam, że ogromnie wierzysz we mnie, że Ci zależy, nie było
                  to udawane czy wyuczone.
                </li>
                <li>
                  Po każdym spotkaniu znacząco wzrastała moja pewność siebie,
                  wiara w umiejętności, czułam, że mogę osiągnąć to czego chcę.
                </li>
                <li>
                  Bardzo trafnie formułowałaś pytania, zmuszały do przemyśleń,
                  czasem zupełnie zmieniały tok myślenia.
                </li>
                <li>
                  Przez cały proces czułam się zaopiekowana. Ogromne wsparcie
                  płynęło z Twojej strony, to było bardzo budujące, to cudownie
                  mieć taki support.
                </li>
              </ul>
            </div>
            <div className='speech-bubble'>
              <p>
                <b>Gdzie jesteś obecnie po zakończeniu naszej współpracy?</b>
              </p>
              <p>
                Zawodowo jestem bardzo blisko ruszenia z wymarzonym biznesem,
                właściwie już to robię, szukam okazji na zdobywanie
                doświadczenia. Założyłam media społecznościowe. Przede wszystkim
                zmotywowałaś mnie do podjęcia kroków w tym kierunku, z czym u
                mnie było najtrudniej, ciągle czekałam na odpowiedni moment,
                liczyłam, że wymarzona praca spadnie mi z nieba.
              </p>
              <p>
                Wiem, że bez naszej współpracy dalej żyłabym marzeniami i
                myślała: może kiedyś się uda...
              </p>
              <p>
                Czuję ogromną wdzięczność za czas, który miałyśmy okazję spędzić
                razem. Po każdym spotkaniu dostawałam skrzydeł. Pojawiłaś się w
                idealnym momencie mojego życia, wzięłaś mnie „za fraki” i
                przewróciłaś totalnie moje myślenie, pomogłaś rozprawić się z
                sabotażystami, dostarczyłaś wielu narzędzi do działania w
                słabszych chwilach. Dziękuję.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionReviews;
