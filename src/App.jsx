import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./components/sections/Contact";


function App() {
  return (
    <div className="bg-[#0f1115] text-white antialiased">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <section id="portfolio" className="py-28 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <Portfolio />
        </div>
      </section>

      <Contact />
    </div>
  );
}

export default App;
