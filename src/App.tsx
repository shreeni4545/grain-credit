import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Market from './components/Market';
import Product from './components/Product';
import BusinessModel from './components/BusinessModel';
import Traction from './components/Traction';
import Team from './components/Team';
import Financials from './components/Financials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MVPDemo from './components/MVPDemo';
import './App.css';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onDemoClick={() => setShowDemo(true)} />
      {showDemo ? (
        <MVPDemo onBack={() => setShowDemo(false)} />
      ) : (
        <>
          <Hero onDemoClick={() => setShowDemo(true)} />
          <Problem />
          <Solution />
          <Market />
          <Product />
          <BusinessModel />
          <Traction />
          <Team />
          <Financials />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;