'use client';

import React from 'react';
import { ShieldCheck, Zap, Flame, Award, ThumbsUp, DollarSign } from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Zap,
    title: '99.99% Pure Electrolytic Copper',
    desc: 'Made with 100% pure ETP grade copper strands. Lowers conductor electrical resistance, preventing heating and reducing household electricity bills.',
  },
  {
    icon: Flame,
    title: 'Flame Retardant (FR) PVC Insulation',
    desc: 'Formulated with high oxygen index PVC compound. Self-extinguishes within seconds when exposed to open flame, arresting fire spread.',
  },
  {
    icon: ShieldCheck,
    title: '100% Shock-Proof & ISI Certified',
    desc: 'Tested to withstand over 3000 Volts spark testing. Guarantees zero leakage current and total safety against short circuit shocks.',
  },
  {
    icon: DollarSign,
    title: 'Energy Saving & Low Voltage Drop',
    desc: 'Optimum wire stranding ensures maximum flexibility and current flow with zero voltage drop across long distances in home wiring.',
  },
  {
    icon: Award,
    title: 'High Thermal Stability (-15°C to +70°C)',
    desc: 'Operates smoothly in extreme summer heat and severe cold without cracking, peeling, or degrading PVC insulation strength.',
  },
  {
    icon: ThumbsUp,
    title: 'Water & Chemical Resistant',
    desc: 'Resistant to moisture, oils, grease, alkali, and chemical corrosion in wall conduits and damp masonry.',
  },
];

export default function WhyTataGold() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <span>Why Choose Tata Gold</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uncompromising Safety & Engineering Excellence
          </h2>
          <p className="text-base text-slate-600">
            For over two decades, Tata Gold PVC Wires & Cables has been the trusted choice for electrical contractors, architects, and homeowners across India.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-card hover:shadow-hover transition-all duration-300 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-teal-dark text-brand-gold flex items-center justify-center shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-heading">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
