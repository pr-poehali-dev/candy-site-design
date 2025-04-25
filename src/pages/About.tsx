import Header from "../components/Header";
import HeroSection from "../components/about/HeroSection";
import OurStory from "../components/about/OurStory";
import OurValues from "../components/about/OurValues";
import OurAchievements from "../components/about/OurAchievements";
import OurTeam from "../components/about/OurTeam";
import CallToAction from "../components/about/CallToAction";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <HeroSection 
        title="О кондитерской "Сладкоежка""
        description="Мы — команда влюбленных в свое дело кондитеров, которые создают не просто десерты, а настоящие произведения искусства с 2010 года."
      />
      
      <OurStory />
      
      <OurValues />
      
      <OurAchievements />
      
      <OurTeam />
      
      <CallToAction 
        title="Попробуйте наши десерты"
        description="Закажите прямо сейчас или посетите нашу кондитерскую"
        primaryButtonText="Перейти в каталог"
        primaryButtonLink="/catalog"
        secondaryButtonText="Наши контакты"
        secondaryButtonLink="/contacts"
      />
      
      <Footer />
    </div>
  );
};

export default About;
