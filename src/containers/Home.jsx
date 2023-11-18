import React from 'react'
import Navbar from '../components/Navbar';
import Header from '../components/Header';

import Teachers from '../components/Teachers';
import Why from '../components/Why';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Schools from '../components/Schools';

const home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Schools />
      <Teachers/>
      <Why/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default home;
