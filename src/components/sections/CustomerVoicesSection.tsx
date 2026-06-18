"use client";

import { motion } from "framer-motion";
import { customerVoices } from "@/data/customer-voices";
import { Star, PlayCircle } from "lucide-react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const videoReviews = [
  { id: "1", type: "video", src: "https://res.cloudinary.com/dnfakgkhz/video/upload/q_auto/f_auto/v1781798191/hero_1_e3rred.mp4" },
  { id: "2", type: "placeholder", src: "samples/landscapes/nature-mountains" },
  { id: "3", type: "placeholder", src: "samples/people/smiling-man" },
  { id: "4", type: "placeholder", src: "samples/animals/reindeer" }
];

export function CustomerVoicesSection() {
  return (
    <section className="py-20 bg-[#F9F7F3] overflow-hidden">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <h2 className="font-display font-medium text-3xl text-[#1A4F41]">Customer Voices</h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-sm mb-4"
          >
            Real reviews from our travelers experiencing the spiritual and scenic beauty with us.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4"
          >
            <span className="font-bold text-xl text-yellow-500">4.8</span>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">(120+ Reviews)</span>
          </motion.div>
        </div>

        {/* Video Reviews Section */}
        <div className="mb-12">
          <h3 className="font-display font-semibold text-2xl text-dark mb-6 px-6 sm:px-0 text-center sm:text-left">
            Listen from Customers itself
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
            {/* Video Reviews linking to Gallery */}
            {videoReviews.map((item, index) => (
              <Link key={`video-${item.id}`} href="/gallery">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[85vw] max-w-[280px] sm:max-w-[320px] snap-center rounded-[24px] overflow-hidden shadow-md relative group aspect-[9/16] bg-gray-200 cursor-pointer block"
                >
                  {item.type === "video" ? (
                    <video 
                      src={item.src}
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  ) : (
                    <CldImage
                      src={item.src}
                      alt="Review Placeholder"
                      fill
                      className="object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-10 h-10 text-white fill-white/80" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {item.type === "video" ? "Watch Review" : "Coming Soon"}
                    </h4>
                    <p className="text-white/80 text-sm">
                      {item.type === "video" ? "See their journey" : "More reviews soon"}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Text Reviews Section */}
        <div>
          <h3 className="font-display font-semibold text-2xl text-dark mb-6 px-6 sm:px-0 text-center sm:text-left">
            Written Experiences
          </h3>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
            {customerVoices.map((voice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[85vw] max-w-[300px] sm:max-w-[350px] snap-center bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex flex-col relative"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${voice.avatarColor}`}>
                    {voice.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-dark">{voice.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className={`w-3 h-3 ${star <= voice.rating ? 'fill-yellow-500 text-yellow-500' : 'fill-gray-200 text-gray-200'}`} />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">{voice.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic leading-relaxed flex-grow">
                  &quot;{voice.review}&quot;
                </p>
                
                <div className="absolute bottom-6 right-6 opacity-30">
                  <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
