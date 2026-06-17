import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { HeroSection } from "@/components/sections/HeroSection";
import { SearchBar } from "@/components/sections/SearchBar";
import { TrustedByStrip } from "@/components/sections/TrustedByStrip";
import { AboutStrip } from "@/components/sections/AboutStrip";
import { StatsSection } from "@/components/sections/StatsSection";
import { UmrahPackagesSection } from "@/components/sections/PackageSection";
import { HotelSection } from "@/components/sections/HotelSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CustomerVoicesSection } from "@/components/sections/CustomerVoicesSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SearchBar />
        <TrustedByStrip />
        <AboutStrip />
        <StatsSection />
        <UmrahPackagesSection />
        <HotelSection />
        <CustomerVoicesSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
