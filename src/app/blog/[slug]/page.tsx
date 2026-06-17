"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog-posts";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale mix-blend-overlay" style={{ backgroundImage: `url(${post.image})` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent" />
          
          <div className="relative z-10 max-w-content mx-auto px-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Guides
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 text-xs font-mono font-bold text-dark bg-accent rounded-full uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/80 font-medium">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-white/80 font-medium">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
              
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white text-balance leading-tight mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-white/70 font-medium">
                {post.excerpt}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="section bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h4:text-xl prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-accent hover:prose-a:text-accent-hover"
            >
              <style dangerouslySetInnerHTML={{ __html: `
                .prose ul {
                  list-style: none;
                  padding-left: 0;
                }
                .prose ul li {
                  position: relative;
                  padding-left: 1.5rem;
                  margin-bottom: 0.75rem;
                  color: #4b5563;
                }
                .prose ul li::before {
                  content: "•";
                  position: absolute;
                  left: 0;
                  color: #d1b87a;
                  font-weight: bold;
                  font-size: 1.2rem;
                  line-height: 1;
                  top: 0.2rem;
                }
                .infographic {
                  background-color: #f9fafb;
                  border: 1px solid #f3f4f6;
                  border-radius: 24px;
                  padding: 2rem;
                  margin: 2.5rem 0;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
                }
                .infographic h4 {
                  margin-top: 0;
                  color: #111827;
                  font-size: 1.25rem;
                  border-bottom: 2px solid #d1b87a;
                  padding-bottom: 0.5rem;
                  display: inline-block;
                }
                .infographic.grid-style {
                  display: grid;
                  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                  gap: 1.5rem;
                  padding: 1.5rem;
                }
                .infographic.grid-style .step {
                  background: white;
                  padding: 1.5rem;
                  border-radius: 16px;
                  box-shadow: 0 1px 3px rgba(0,0,0,0.05);
                  position: relative;
                  border: 1px solid #f3f4f6;
                }
                .infographic.grid-style .step h5 {
                  margin-top: 0;
                  font-size: 1.1rem;
                  color: #111827;
                  margin-bottom: 0.5rem;
                }
                .infographic.grid-style .step p {
                  margin: 0;
                  font-size: 0.95rem;
                  color: #6b7280;
                }
                .step-num {
                  position: absolute;
                  top: -12px;
                  left: -12px;
                  width: 32px;
                  height: 32px;
                  background: #111827;
                  color: #d1b87a;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 50%;
                  font-weight: bold;
                  font-family: monospace;
                  border: 4px solid white;
                }
                .quote-box {
                  background-color: #111827;
                  color: white;
                  border-left: 4px solid #d1b87a;
                  text-align: center;
                  font-size: 1.25rem;
                  font-style: italic;
                  padding: 2.5rem 2rem;
                }
                .quote-box p {
                  margin: 0;
                  color: white !important;
                }
              ` }} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
