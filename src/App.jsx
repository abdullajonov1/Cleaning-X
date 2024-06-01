import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import HeroSection from './Components/HeroSection/HeroSection';
import About from './Components/About/About';
import Services from './Components/Servises/Services';
import Covid from './Components/Covid/Covid';
import Articles from './Components/Articles/Articles';
import Contact from './Components/Contact/Contact';
import Foter from './Components/Foter/Foter';

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection/>
      <About/>
      <Services/>
      <Covid/>
      <Articles/>
      <Contact/>
      <Foter/>
    </div>
  );
}

export default App;
