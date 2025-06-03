import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Agregar clase de fuente serif al body
    document.body.classList.add('font-sans');
    
    return () => {
      document.body.classList.remove('font-sans');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div id="areas">
          <PracticeAreas />
        </div>
        <div id="sobre-nosotros">
          <About />
        </div>
        <div id="testimonios">
          <Testimonials />
        </div>
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
