import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BrandMarquee } from './components/BrandMarquee';

export default function App() {
  return (
    <>
      {/* Custom magnetic cursor for fine pointers */}
      <CustomCursor />

      {/* Tactile paper texture grain overlay */}
      <div className="paper-grain" aria-hidden="true" />

      <Navigation />

      <main>
        <About />
        <Hero />
        <BrandMarquee />
        <SelectedWork />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
