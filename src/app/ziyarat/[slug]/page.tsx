import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { ziyaratPackages } from "@/data/ziyarat-packages";
import { CTAButton } from "@/components/ui/CTAButton";
import { Check, Clock, MapPin } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function ZiyaratPackageDetails({ params }: { params: { slug: string } }) {
  const pkg = ziyaratPackages.find(p => p.slug === params.slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gray-50">
        <div className="max-w-content mx-auto px-6">
          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <span className="inline-block px-3 py-1 mb-4 text-xs font-mono font-bold text-dark bg-accent rounded-full uppercase tracking-wider">
                  {pkg.country}
                </span>
                <h1 className="font-display font-bold text-4xl md:text-5xl text-dark mb-6">
                  {pkg.title}
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                  {pkg.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Duration</p>
                      <p className="font-medium text-dark">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-dark">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Destinations</p>
                      <p className="font-medium text-dark">{pkg.destinations.length} Cities</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-dark mb-6">Package Highlights</h3>
                <ul className="space-y-4 mb-12">
                  {pkg.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-dark" />
                      </div>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-display font-bold text-dark mb-6">Sacred Shrines Included</h3>
                <div className="flex flex-wrap gap-2 mb-12">
                  {pkg.shrines.map((shrine, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                      {shrine}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-[400px]">
                <div className="bg-dark text-white rounded-3xl p-8 sticky top-32">
                  <h3 className="text-xl font-display font-semibold mb-2">Package Price</h3>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className="text-4xl font-bold font-display">{formatPrice(pkg.price)}</span>
                    <span className="text-gray-400">/person</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="border-b border-gray-800 pb-4">
                      <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Destinations</p>
                      <p className="font-medium">{pkg.destinations.join(", ")}</p>
                    </div>
                  </div>

                  <CTAButton 
                    href={`https://wa.me/917006604820?text=Assalamu%20Alaikum%2C%20I'm%20interested%20in%20the%20${pkg.title}%20Ziyarat%20Package.`}
                    variant="accent" 
                    className="w-full justify-center text-lg py-4"
                  >
                    Book This Package
                  </CTAButton>
                  <p className="text-center text-sm text-gray-400 mt-4">
                    Or call us at +91 70066 04820
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
