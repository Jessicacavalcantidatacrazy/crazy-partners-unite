import PartnersHero from "@/components/PartnersHero";
import BenefitsSection from "@/components/BenefitsSection";
import CommissionSection from "@/components/CommissionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <PartnersHero />
      <BenefitsSection />
      <CommissionSection />
      <HowItWorksSection />
      <Footer />
    </div>
  );
}