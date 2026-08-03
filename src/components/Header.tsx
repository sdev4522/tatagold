<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Mail, ShieldCheck, Menu, X, ArrowRight, Download } from 'lucide-react';
=======
"use client";

import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Download,
} from "lucide-react";
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a

interface HeaderProps {
  onOpenQuote: () => void;
}

export default function Header({ onOpenQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
=======
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
<<<<<<< HEAD
      <div className="bg-brand-teal text-white text-xs py-2 px-4 border-b border-teal-700/50">
=======
      <div className="bg-white text-gray-800   text-xs py-2 px-4 border-b border-teal-700/50">
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
              100% Electrolytic Pure Copper • ISI Certified
            </span>
            <span className="hidden md:inline text-teal-200">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-teal-100">
<<<<<<< HEAD
              Tagline: <strong className="text-white">"Making difference in electric"</strong>
=======
              Tagline:{" "}
              <strong className="text-gray-800  font-semibold">
                "Making difference in electric"
              </strong>
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
            </span>
          </div>

          <div className="flex items-center gap-4 text-teal-100">
<<<<<<< HEAD
            <a href="tel:#" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-brand-orange" />
              <span className="font-semibold text-white">+91 XXXXX XXXXX</span>
            </a>
            <a href="mailto:info@tatagoldwires.com" className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-brand-orange" />
              <span>info@tatagoldwires.com</span>
=======
            <a
              href="tel:+919876543210"
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-brand-orange" />
              <span className="font-semibold text-gray-800">
                +91 98765 43210
              </span>
            </a>
            <a
              href="mailto:info@tatagoldwires.com"
              className="hidden sm:flex items-center gap-1 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-3 h-3 text-brand-orange" />
              <span className="font-semibold text-gray-800">
                info@tatagoldwires.com
              </span>
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
<<<<<<< HEAD
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-gray-100'
=======
            ? "bg-brand-teal backdrop-blur-md shadow-md py-3"
            : "bg-brand-teal py-4 border-b border-gray-100"
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group">
<<<<<<< HEAD
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark flex items-center justify-center text-brand-gold font-extrabold text-xl shadow-md border-2 border-brand-orange/30 group-hover:scale-105 transition-transform">
              TG
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-brand-teal font-heading">
                  TATA GOLD
                </span>
                <span className="bg-brand-orange text-white text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                  ISI
                </span>
              </div>
              <span className="text-[11px] font-semibold tracking-widest text-brand-orange uppercase -mt-1">
                PVC Wires & Cables
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-gray-700">
            <a href="#about" className="hover:text-brand-teal transition-colors py-1">
              About Us
            </a>
            <a href="#products" className="hover:text-brand-teal transition-colors py-1">
              Products
            </a>
            <a href="#calculator" className="hover:text-brand-teal transition-colors py-1 flex items-center gap-1">
              <span>Wire Calculator</span>
              <span className="bg-orange-100 text-brand-orange text-[10px] font-bold px-1.5 py-0.5 rounded-full">New</span>
            </a>
            <a href="#specs" className="hover:text-brand-teal transition-colors py-1">
              Specifications
            </a>
            <a href="#contact" className="hover:text-brand-teal transition-colors py-1">
=======
            <img
              src="/images/tata-gold-logo.png"
              alt="Tata Gold Wires Logo"
              className="w-44 h-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-sm text-white">
            <a
              href="#about"
              className="hover:text-brand-teal transition-colors py-1"
            >
              About Us
            </a>
            <a
              href="#products"
              className="hover:text-brand-teal transition-colors py-1"
            >
              Products
            </a>
            <a
              href="#calculator"
              className="hover:text-brand-teal transition-colors py-1 flex items-center gap-1"
            >
              <span>Wire Calculator</span>
              <span className="bg-orange-100 text-brand-orange text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                New
              </span>
            </a>
            <a
              href="#specs"
              className="hover:text-brand-teal transition-colors py-1"
            >
              Specifications
            </a>
            <a
              href="#contact"
              className="hover:text-brand-teal transition-colors py-1"
            >
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
              Contact Us
            </a>
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="bg-brand-orange hover:bg-brand-orange-hover text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 group"
            >
              <span>Get Quick Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
<<<<<<< HEAD
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
>>>>>>> fd63ae7636c0f5a2b998c8fd627a05ab6f50c34a
          </button>
        </div>

        {/* Mobile Dropdown Nav Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-brand-teal"
            >
              About Us
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-brand-teal"
            >
              Product Range
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-brand-orange"
            >
              Wire Load Calculator
            </a>
            <a
              href="#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-brand-teal"
            >
              Technical Specifications
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-700 hover:text-brand-teal"
            >
              Contact & Inquiry
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full bg-brand-orange text-white font-semibold py-3 rounded-xl shadow-md text-center"
              >
                Request Instant Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
