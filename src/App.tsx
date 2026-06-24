import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoCards from './components/PromoCards';
import ProductSections from './components/ProductSections';
import Craftsmanship from './components/Craftsmanship';
import Materials from './components/Materials';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Contact from './components/Contact';
import TrustStrip from './components/TrustStrip';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <PromoCards />
        <ProductSections />
        <Craftsmanship />
        <Materials />
        <About />
        <Testimonials />
        <Newsletter />
        <Contact />
      </main>
    </div>
  );
}

export default App;
