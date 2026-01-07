import Hero from "@/components/Hero";
import FeatureShowcase from "@/components/FeatureShowcase";
import FeatureCards from "@/components/FeatureCards";
import PrivacySection from "@/components/PrivacySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <FeatureShowcase />
      <FeatureCards />
      <PrivacySection />
      <Footer />
    </main>
  );
};

export default Index;
