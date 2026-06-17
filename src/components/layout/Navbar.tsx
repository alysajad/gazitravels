"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Umrah", href: "/umrah", hasDropdown: true },
  { name: "Hajj 2027", href: "/hajj-2027" },
  { name: "Ziyarat", href: "/ziyarat" },
  { name: "Kashmir", href: "/kashmir" },
  { name: "Blog", href: "/blog" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-normal",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
            : "bg-white/80 backdrop-blur-xl border-b border-gray-100"
        )}
      >
        <div className="max-w-content mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group/logo">
              <div className="w-12 h-12 relative flex-shrink-0 transition-transform duration-normal ease-out group-hover/logo:scale-110 group-hover/logo:rotate-[5deg]">
                <Image
                  src="/images/team/logo.png"
                  alt="Gazi Tour & Travels"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="font-display font-bold text-lg text-dark tracking-tight leading-tight hidden sm:block">
                Gazi Tour &<br className="hidden xl:block" /> Travels
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-nav font-medium text-gray-500 hover:text-dark transition-colors duration-fast"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5" />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-dark text-white pl-6 pr-2 py-2 rounded-full font-medium text-sm hover:bg-dark-muted transition-colors duration-fast"
              >
                Book Now
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-dark ml-2">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-dark hover:text-gray-500 transition-colors duration-fast"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-white transition-opacity duration-normal lg:hidden",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <div className="flex-1 overflow-y-auto">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-gray-100">
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-4 font-display font-semibold text-heading-md text-dark flex items-center justify-between"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-5 h-5 text-gray-400" />}
                </Link>
              </div>
            ))}
          </div>

          <div className="pt-6">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-dark text-white px-6 py-4 rounded-full font-medium text-lg w-full"
            >
              Book Now
              <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-dark">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
