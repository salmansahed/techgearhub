import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import PromoSection from "../components/home/PromoSection";
import WhyChooseUs from "../components/home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <PromoSection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
