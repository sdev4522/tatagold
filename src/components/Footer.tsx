"use client";

import React from "react";
import { ShieldCheck, Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Links */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/images/tata-gold-logo.png"
                alt="Tata Gold Wires Logo"
                className="w-44 h-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Manufacturers of high-grade 100% Electrolytic Pure Copper PVC
              Insulated Wires and Cables. Built for fire safety, zero power
              loss, and maximum endurance.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-400">
              <ShieldCheck className="w-4 h-4 text-brand-orange" />
              <span>Tested as per IS: 694 & IS: 8130</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-white transition-colors"
                >
                  Product Range
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="hover:text-brand-orange transition-colors"
                >
                  Wire Load Calculator
                </a>
              </li>
              <li>
                <a href="#specs" className="hover:text-white transition-colors">
                  Technical Specification Chart
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact & Factory Location
                </a>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-slate-400">
                  Single Core FR PVC Wires (0.75 - 6.0 mm²)
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  FRLS Low Smoke Zero Halogen Wires
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Multicore Round Flexible Cables
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Submersible 3-Core Flat Cables
                </span>
              </li>
              <li>
                <span className="text-slate-400">
                  Armoured Underground Power Cables
                </span>
              </li>
            </ul>
          </div>

          {/* Corporate Office */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider font-heading">
              Corporate Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>
                  Sector 5, Industrial Development Zone, Delhi NCR, India
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-white transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a
                  href="mailto:info@tatagoldwires.com"
                  className="hover:text-white transition-colors"
                >
                  info@tatagoldwires.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-center sm:flex sm:justify-between sm:items-center text-xs text-slate-500 space-y-2 sm:space-y-0">
          <p>
            © {new Date().getFullYear()} Tata Gold PVC Wires & Cables. All
            Rights Reserved.
          </p>
          <p className="text-[11px]">
            Designed for maximum safety & high electrical performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
