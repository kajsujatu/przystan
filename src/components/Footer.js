import React, { useState, useEffect } from 'react';
import './Footer.css';

function Footer() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const updateYear = () => {
        setCurrentYear(new Date().getFullYear());
      };
  
      const intervalId = setInterval(updateYear, 60000);
  
      return () => clearInterval(intervalId);
    }, []);

  return <div className='footer'>{currentYear} © Agnieszka Baranowska</div>;
}

export default Footer;
