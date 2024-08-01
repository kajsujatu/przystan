import React from 'react';
import Header from './components/Header';
import SectionImage from './components/SectionImage';
import SectionAboutMe from './components/SectionAboutMe';
import SectionReviews from './components/SectionReviews';
import SectionFreeConsultation from './components/SectionFreeConsultation';
import SectionCooperation from './components/SectionCooperation';
import SectionCertificates from './components/SectionCertificates';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <SectionImage />
      <div className='sections-container'>
        <SectionAboutMe />
        <SectionReviews />
        <SectionFreeConsultation />
        <SectionCooperation />
        <SectionCertificates />
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
