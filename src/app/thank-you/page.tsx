"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CTAButton } from "@/components/ui/CTAButton";
import { CheckCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ThankYouContent() {
  const searchParams = useSearchParams();
  
  // Extract form details
  const name = searchParams.get("name") || "";
  const journeyType = searchParams.get("journeyType") || "General Enquiry";
  const duration = searchParams.get("duration") || "";
  const travelers = searchParams.get("travelers") || "";
  
  // Format the WhatsApp message
  const whatsappMessage = `Assalamu Alaikum, I just submitted an enquiry on your website. 
Here are my details:
- Name: ${name}
- Interested In: ${journeyType}
${duration ? `- Duration: ${duration}\n` : ''}${travelers ? `- Travelers: ${travelers}\n` : ''}
Could you please share more details?`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/917006604820?text=${encodedMessage}`;

  return (
    <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 sm:p-12 flex flex-col items-center">
      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mb-8">
        <CheckCircle className="w-10 h-10 text-dark" />
      </div>
      <h1 className="font-display font-bold text-4xl text-dark mb-4 text-center">
        Thank You!
      </h1>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto text-center">
        Your message has been successfully sent. We have received your enquiry and our team will get back to you shortly.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
        <CTAButton href={whatsappUrl} variant="accent" className="w-full sm:w-auto justify-center bg-[#25D366] hover:bg-[#1ebd5a] text-white border-none">
          Send details to WhatsApp
        </CTAButton>
        
        <CTAButton href="/" variant="outline" className="w-full sm:w-auto justify-center">
          Back to Home
        </CTAButton>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-50 items-center justify-center">
        <div className="max-w-2xl mx-auto px-6 w-full">
          <Suspense fallback={<div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12 h-64 flex items-center justify-center">Loading...</div>}>
            <ThankYouContent />
          </Suspense>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
