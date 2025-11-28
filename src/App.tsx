import { Navbar } from './components/blurbit/layout/Navbar';
import { Hero } from './components/blurbit/sections/Hero';
import { Features } from './components/blurbit/sections/Features';
import { Process } from './components/blurbit/sections/Process';
import { Examples } from './components/blurbit/sections/Examples';
import { Pricing } from './components/blurbit/sections/Pricing';
import { About } from './components/blurbit/sections/About';
import { Testimonials } from './components/blurbit/sections/Testimonials';
import { Contact } from './components/blurbit/sections/Contact';
import { Footer } from './components/blurbit/layout/Footer';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Global Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
      `}</style>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Examples />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
