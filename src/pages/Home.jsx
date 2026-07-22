import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default Home;