import AboutMe from "../Home/AboutMe";
import ContactMe from "../Home/ContactMe";
import Footer from "../Home/Footer";
import HeroSection from "../Home/HeroSection";
import MyPortfolio from "../Home/MyPortfolio";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
