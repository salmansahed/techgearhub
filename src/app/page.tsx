import CategorySection from "../components/home/CategorySection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import HeroSection from "../components/home/HeroSection";
import NewsletterSection from "../components/home/NewsletterSection";
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
      <NewsletterSection />
    </div>
  );
};

export default Home;
