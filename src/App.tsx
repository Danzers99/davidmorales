import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProofOfWork } from './components/sections/ProofOfWork';
import { NetViz } from './components/sections/NetViz';
import { CRAScout } from './components/sections/CRAScout';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';

function App() {
  return (
    <div className="min-h-screen bg-background text-text-primary font-sans antialiased selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <ProofOfWork />
        <NetViz />
        <CRAScout />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
