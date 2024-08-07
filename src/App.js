import React from 'react';
import Header from './components/Header';
import SectionImage from './components/SectionImage';
import SectionAboutMe from './components/SectionAboutMe';
import SectionReviews from './components/SectionReviews';
import SectionFreeConsultation from './components/SectionFreeConsultation';
import SectionExperience from './components/SectionExperience';
import SectionMethodology from './components/SectionMethodology';
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <SectionImage />
      <div className='sections-container-full'>
        <SectionAboutMe />
        <SectionReviews />
        <SectionFreeConsultation />
        <SectionExperience />
        <SectionMethodology />
        <SectionContact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
