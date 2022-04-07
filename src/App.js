import Bg1 from "./assets/hero/bg.png";
import Bg2 from "./assets/about/bg.png";
import About from "./landing-page/About";
import Feature from "./landing-page/Feature";
import Hero from "./landing-page/Hero";
import Navbar from "./landing-page/Navbar";
import Pricing from "./landing-page/Pricing";
import GetFree from "./landing-page/GetFree";
import Footer from "./landing-page/Footer";

function App() {
  return (
    <div className="font-poppins bg-primary-light">
      <div className="bg-cover" style={{ backgroundImage: `url(${Bg1})` }}>
        <div className="container mx-auto pt-[39px]">
          <Navbar />
          <Hero />
          <Feature />
        </div>
      </div>
      <div className="bg-cover bg-bottom" style={{ backgroundImage: `url(${Bg2})`, backgroundPosition: '0 -190px' }}>
        <div className="container mx-auto">
          <About />
          <Pricing />
          <GetFree />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
