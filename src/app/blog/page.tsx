"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";
import Link from "next/link";

import { blogPosts } from "@/data/blog-posts";

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-gray-100">
          <div className="relative z-10 max-w-content mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeading
                badge="Blog"
                title="Travel Tips & Guides"
                subtitle="Insights, guides, and updates to help you prepare for your sacred journey."
              />
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section">
          <div className="max-w-content mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block bg-surface rounded-card shadow-card overflow-hidden transition-all duration-normal ease-out hover:shadow-card-hover hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <div
                        className="w-full h-full bg-cover bg-center transition-transform duration-slow ease-out group-hover:scale-105"
                        style={{ backgroundImage: `url(${post.image})` }}
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 text-label font-mono font-medium text-dark bg-accent rounded-full uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-body text-dark mb-2 group-hover:text-gray-500 transition-colors duration-fast line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-body text-gray-500 line-clamp-2 mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-4 text-label font-mono font-medium text-gray-500 uppercase tracking-wider">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </span>
                        </div>

                        <span className="inline-flex items-center gap-2 text-body font-body font-medium text-dark group-hover:text-accent-hover transition-colors duration-fast">
                          Read
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 group-hover:bg-accent/10 transition-colors duration-fast">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
