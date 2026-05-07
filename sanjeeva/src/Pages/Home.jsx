import Navbar from "../Components/Navbar";
import Hero from "../Components/HeroSection";
import Features from "../Components/FeaturesSection";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div>
      <Navbar variant="light" />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;