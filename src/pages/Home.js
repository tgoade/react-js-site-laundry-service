
import Faqs from "../components/faqs/Faqs";
import HeroBanner from "../components/hero/HeroBanner";
import HowItWorks from "../components/howitworks/HowItWorks";
import "../components/nav/NavBar.css";
//import HeroSection from "../../components/hero/HeroSection";



const Home = () => {
  return (
    <>
      <HeroBanner />
      <HowItWorks />
      <Faqs />
    </>
  );
}

export default Home;
