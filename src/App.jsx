import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Trends from "./sections/Trends";
import Maps from "./sections/Maps";
import Awareness from "./sections/Awareness";
import Footer from "./sections/Footer";

function App() {
  return (
    <div style={{ background: "#0b0b0b", color: "white", fontFamily: "'Inter', sans-serif" }}>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Sections with IDs for smooth scroll */}
      <section id="hero">
        <Hero />
      </section>

      <section id="trends">
        <Trends />
      </section>

      <section id="maps">
        <Maps />
      </section>

      <section id="awareness">
        <Awareness />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
