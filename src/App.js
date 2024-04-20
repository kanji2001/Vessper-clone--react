import './App.css';
import "@fortawesome/fontawesome-free/css/all.css";
import About2 from './components/About/About2';
import AboutUs from './components/About/AboutUs';
import Clients from './components/Clients/Clients';
import Navbar from './components/Header/Navbar';
import HeroSection from './components/Section2/HeroSection';
import Services from './components/Services/Services';
import Services2 from './components/Services/Services2';
import Testimonial from './components/Testimonial/Testimonial';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Pricing from './components/Pricing/Pricing';
import Faqs from './components/Faq/Faqs';
import Contact from './components/Contact us/Contact';
import Footer from './components/Footer/Footer';
import Boxes from './components/Boxes/Boxes';



function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Clients/>
      <AboutUs/>
      <About2/>
      <Services/>
      <Services2/>
      <Boxes/>
      <Testimonial/>
      <Portfolio/>
      <Team/>
      <Pricing/>
      <Faqs/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
