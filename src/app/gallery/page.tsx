"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, PlayCircle } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
// Import Cloudinary components
import { CldImage } from "next-cloudinary";

const galleryItems = [
  { type: "image", src: "photo1_qxjxph", alt: "Beautiful Hajj Moment 1" },
  { type: "video", src: "hero_1_e3rred", title: "Customer Review - Amazing Experience" },
  { type: "video", src: "video_hero3_pwy2hi", title: "Customer Review - Spiritual Journey" },
  { type: "video", src: "video_hero_grmkyt", title: "Customer Review - Seamless Booking" },
  { type: "video", src: "video_hero4_p8jrdt", title: "Customer Review - Highly Recommended" },
  { type: "image", src: "photo2_kss2g6", alt: "Beautiful Hajj Moment 2" },
  { type: "image", src: "photo3_y43yfd", alt: "Beautiful Hajj Moment 3" },
  { type: "image", src: "photo5_btlewz", alt: "Beautiful Hajj Moment 4" },
  { type: "image", src: "photo6_j6klvq", alt: "Beautiful Hajj Moment 5" },
  { type: "image", src: "photo7_ohnsqp", alt: "Beautiful Hajj Moment 6" },
  { type: "image", src: "photo3.jpg_ot0bn8", alt: "Beautiful Hajj Moment 7" },
];

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<{type: string, src: string, alt?: string, title?: string} | null>(null);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-dark overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiLz48L3N2Zz4=')] bg-repeat opacity-30" />
          
          <div className="relative z-10 w-full max-w-content mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Our Gallery & Reviews
              </h1>
              <p className="text-white/70 max-w-2xl mx-auto text-lg">
                Explore glimpses of our blessed journeys and hear from our beloved travelers.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-surface">
          <div className="max-w-content mx-auto px-6">
            <SectionHeading
              badge="Gallery"
              title="Memories & Moments"
              align="center"
              className="mb-12"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer ${
                    item.type === "video" ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Notice for the user */}
                  <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center text-center p-4 z-0">
                     <span className="text-gray-400 text-sm font-medium mb-2">Cloudinary Media ID: {item.src}</span>
                     <span className="text-xs text-gray-400 max-w-xs">Upload your media and update the src IDs to see them here!</span>
                  </div>

                  {item.type === "image" ? (
                    <div className="aspect-[4/3] w-full relative z-10 bg-gray-200">
                      <CldImage
                        src={item.src}
                        alt={item.alt || "Gallery Media"}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      /> 
                    </div>
                  ) : (
                    <div className="aspect-video w-full relative z-10 bg-black">
                      <video
                        src={`https://res.cloudinary.com/dnfakgkhz/video/upload/q_auto/f_auto/v1781798191/${item.src}.mp4`}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <PlayCircle className="w-10 h-10 text-white fill-white/80" />
                        </div>
                      </div>
                    </div>
                  )}

                  {item.type === "video" && item.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 z-20">
                      <h3 className="text-white font-medium text-lg">{item.title}</h3>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            >
              <button 
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-[110] p-2 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedItem.type === "image" ? (
                  <div className="relative w-full h-[80vh]">
                    <CldImage
                      src={selectedItem.src}
                      alt={selectedItem.alt || "Gallery Media"}
                      fill
                      className="object-contain"
                      sizes="100vw"
                    />
                  </div>
                ) : (
                  <div className="w-full bg-black rounded-xl overflow-hidden shadow-2xl relative">
                    <video
                      src={`https://res.cloudinary.com/dnfakgkhz/video/upload/q_auto/f_auto/v1781798191/${selectedItem.src}.mp4`}
                      className="w-full h-auto max-h-[80vh] object-contain"
                      controls
                      autoPlay
                      playsInline
                    />
                  </div>
                )}
                
                {selectedItem.title && (
                  <div className="mt-6 text-center text-white font-medium text-lg tracking-wide">
                    {selectedItem.title}
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
