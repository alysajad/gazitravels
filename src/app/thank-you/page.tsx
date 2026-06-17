import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckCircle } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Gazi Tour & Travels",
  description: "Thank you for contacting us.",
};

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-50 items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12 flex flex-col items-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-8">
              <CheckCircle className="w-10 h-10 text-dark" />
            </div>
            <h1 className="font-display font-bold text-4xl text-dark mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Your message has been successfully sent. We have received your enquiry and our team will get back to you shortly.
            </p>
            <CTAButton href="/" variant="accent" className="w-full sm:w-auto justify-center">
              Back to Home
            </CTAButton>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
