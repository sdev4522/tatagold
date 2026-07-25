"use client";

import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  Flame,
  Award,
  CheckCircle2,
  ArrowRight,
  Calculator,
} from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-100">
      {/* Decorative background grid and lighting flares */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#006b7b0a_1px,transparent_1px),linear-gradient(to_bottom,#006b7b0a_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-50 to-orange-50 border border-teal-200/80 px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              <span className="text-xs font-bold tracking-wide uppercase text-brand-teal font-heading">
                Official Manufacturers & Suppliers
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-xs font-semibold text-brand-orange">
                ISI Certified 1100V Grade
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                <span className="text-brand-teal">TATA GOLD</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-teal via-slate-800 to-brand-orange">
                  PVC WIRES & CABLES
                </span>
              </h1>
              <p className="text-xl text-center sm:text-2xl font-bold text-brand-orange tracking-wide font-heading pt-1">
                "Making difference in electric"
              </p>
            </div>

            {/* Subheading description */}
            <p className="text-base text-center sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Engineered with{" "}
              <strong className="text-slate-900 font-semibold">
                99.99% Electrolytic Pure Copper
              </strong>{" "}
              and advanced Flame Retardant PVC insulation. Designed for maximum
              electrical conductivity, minimal energy loss, and total fire
              safety for modern homes and commercial infrastructure.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-teal-100/80 text-brand-teal flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    99.99% Pure
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Electrolytic Copper
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">FR & FRLS</p>
                  <p className="text-[11px] text-slate-500">Flame Retardant</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">
                    ISI Certified
                  </p>
                  <p className="text-[11px] text-slate-500">IS: 694 Standard</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-gradient-to-r from-brand-orange to-amber-500 hover:from-brand-orange-hover hover:to-amber-600 text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Request Instant Bulk Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto bg-white border-2 border-brand-teal text-brand-teal hover:bg-teal-50 font-bold text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
              >
                <Calculator className="w-5 h-5" />
                <span>Calculate Wire Size</span>
              </a>
            </div>

            {/* Trust Bulletins */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Direct Manufacturer Prices
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Pan India Fast Supply
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Custom Length Spools Available
              </span>
            </div>
          </div>

          {/* Right Product 3D Pack Box Showcase Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-orange/20 rounded-3xl blur-2xl transform -rotate-3 scale-95" />

              {/* Box Image Frame */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card animate-float">
                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 z-10 bg-brand-orange text-white text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Original Box Packaging</span>
                </div>

                <div className="relative aspect-[4/5] w-full flex items-center justify-center">
                  <Image
                    src="/images/tata_gold_box_mockup.png"
                    alt="Tata Gold PVC Wires Packaging Box"
                    width={500}
                    height={625}
                    priority
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Box Feature Bar */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">
                      Standard Colors
                    </span>
                    <div className="flex gap-1.5 mt-1">
                      <span
                        className="w-3.5 h-3.5 rounded-full bg-red-600 border border-slate-300"
                        title="Red"
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full bg-blue-600 border border-slate-300"
                        title="Blue"
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full bg-black border border-slate-300"
                        title="Black"
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-slate-300"
                        title="Yellow"
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full bg-emerald-600 border border-slate-300"
                        title="Green"
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">
                      Voltage Grade
                    </span>
                    <span className="font-extrabold text-brand-teal text-sm">
                      1100V AC
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
