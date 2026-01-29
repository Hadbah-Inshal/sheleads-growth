
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SocialImpact from './components/SocialImpact';
import TargetMarket from './components/TargetMarket';
import Operations from './components/Operations';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-petal selection:bg-berry selection:text-white">
      <Navbar />
      <div className="animate-reveal">
        <main>
          <Hero />
          <About />
          <Services />
          <SocialImpact />
          <TargetMarket />
          <Operations />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
