import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import How from './components/How';
import Vegetables from './components/Vegetables';
import Reviews from './components/Reviews';
import Order from './components/Order';
import Advertisement from './components/Advertisement';
import Footer from './components/Footer';

// Import CSS files
import './css/reset.css';
import './css/base.css';
import './css/container.css';
import './css/header.css';
import './css/hero.css';
import './css/how.css';
import './css/vegetables.css';
import './css/reviews.css';
import './css/order.css';
import './css/adv.css';
import './css/footer.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <How />
        <Vegetables />
        <Reviews />
        <Order />
        <Advertisement />
      </main>
      <Footer />
    </>
  );
}

export default App;
