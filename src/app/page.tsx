import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import PromoSection from "../components/home/PromoSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
