import { useEffect } from "react";
import { About, Hero, Tech } from "../components";
import Social from "../components/Social";
import { divideimg } from "../assets";
import Footer from "../components/Footer";
function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  }, []);
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center mb-20">
        <Hero />
      </div>

      <About />
      {/* <Tech /> */}
      <Social />
      <img src={divideimg} alt="ảnh" className="w-full h-8" />
      <Footer />
    </div>
  );
}

export default Home;
