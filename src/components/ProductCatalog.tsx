'use client';

import React, { useState } from 'react';
import { Shield, Zap, Check, ArrowUpRight, Flame, Droplets, Cpu } from 'lucide-react';

interface ProductCatalogProps {
  onSelectProduct: (productName: string) => void;
}

const PRODUCTS = [
  {
    id: 'fr-single-core',
    title: 'Single Core FR PVC Wires',
    subtitle: 'Flame Retardant Building Wires (IS 694 Certified)',
    tag: 'Best Seller',
    tagColor: 'bg-brand-orange text-white',
    category: 'House Wiring',
    icon: Flame,
    description: 'High conductivity 99.99% pure electrolytic copper wire with Flame Retardant PVC compound. Prevents flame propagation during short circuits.',
    specs: [
      { label: 'Available Gauges', value: '0.75, 1.0, 1.5, 2.5, 4.0, 6.0 sq.mm' },
      { label: 'Voltage Rating', value: '1100 Volts (1.1kV)' },
      { label: 'Thermal Rating', value: '-15°C to +70°C' },
      { label: 'Coil Length', value: '90 meters standard box' },
    ],
    colors: ['#DC2626', '#2563EB', '#000000', '#CA8A04', '#16A34A'],
  },
  {
    id: 'frls-wires',
    title: 'FRLS (Low Smoke) PVC Wires',
    subtitle: 'Zero Halogen Low Smoke Insulation for Fire Safety',
    tag: 'Maximum Safety',
    tagColor: 'bg-teal-600 text-white',
    category: 'House Wiring',
    icon: Shield,
    description: 'Specially engineered for high-rise buildings, hospitals, and luxury homes. Generates minimal non-toxic smoke and acid gas during electrical fires.',
    specs: [
      { label: 'Oxygen Index', value: '> 29%' },
      { label: 'Temperature Index', value: '> 250°C' },
      { label: 'Acid Gas Emission', value: '< 20%' },
      { label: 'Coil Length', value: '90m & 180m Project Spools' },
    ],
    colors: ['#DC2626', '#2563EB', '#000000', '#CA8A04', '#16A34A'],
  },
  {
    id: 'multicore-flexible',
    title: 'Multicore Round Flexible Cables',
    subtitle: '2 Core, 3 Core & 4 Core Flexible Copper Cables',
    tag: 'Industrial Grade',
    tagColor: 'bg-slate-800 text-white',
    category: 'Industrial',
    icon: Zap,
    description: 'Flexible annealed bright copper conductors insulated with tough PVC sheath. Perfect for heavy duty power tools, appliances, and panel wiring.',
    specs: [
      { label: 'Core Configuration', value: '2 Core, 3 Core, 4 Core' },
      { label: 'Size Range', value: '0.50 to 10.0 sq.mm' },
      { label: 'Outer Sheath', value: 'High Abrasion Resistant PVC' },
      { label: 'Flexibility', value: 'Class 5 Fine Copper Strands' },
    ],
    colors: ['#000000', '#FFFFFF', '#475569'],
  },
  {
    id: 'submersible-flat',
    title: 'Submersible 3-Core Flat Cables',
    subtitle: 'Heavy Duty Waterproof Cable for Agriculture & Borewells',
    tag: 'Waterproof',
    tagColor: 'bg-blue-600 text-white',
    category: 'Agriculture & Pumps',
    icon: Droplets,
    description: 'Tough water-resistant flat PVC cables engineered to withstand deep submersion in agricultural borewells and water pumps under pressure.',
    specs: [
      { label: 'Size Range', value: '1.5, 2.5, 4.0, 6.0, 10.0 sq.mm' },
      { label: 'Submersion Depth', value: 'Up to 500 Meters Under Water' },
      { label: 'Outer Sheath', value: 'Water Resistant Special PVC' },
      { label: 'Conductor', value: 'Class 5 Flexible Copper' },
    ],
    colors: ['#1E3A8A', '#000000'],
  },
  {
    id: 'armoured-cables',
    title: 'Armoured & Power Distribution Cables',
    subtitle: 'Heavy Duty Underground Electrical Power Supply Cables',
    tag: 'Heavy Load',
    tagColor: 'bg-amber-600 text-white',
    category: 'Industrial',
    icon: Cpu,
    description: 'Steel wire armoured electrical cables built for direct burial underground installations, heavy manufacturing units, and transformer feeders.',
    specs: [
      { label: 'Armour Material', value: 'Galvanized Steel Strip / Wire' },
      { label: 'Conductor Material', value: 'High Conductivity Electrolytic Copper' },
      { label: 'Insulation', value: 'Heavy Duty PVC / XLPE' },
      { label: 'Standard', value: 'IS 1554 (Part 1)' },
    ],
    colors: ['#000000'],
  },
];

export default function ProductCatalog({ onSelectProduct }: ProductCatalogProps) {
  const [activeTab, setActiveTab] = useState<'All' | 'House Wiring' | 'Industrial' | 'Agriculture & Pumps'>('All');

  const filteredProducts = activeTab === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-brand-teal text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <span>ISI Certified Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Premium <span className="text-brand-teal">Tata Gold</span> Wire Range
          </h2>
          <p className="text-base text-slate-600">
            Manufactured using 100% pure electrolytic copper and superior grade flame retardant PVC compound. Choose the perfect wire gauge for your safety needs.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {(['All', 'House Wiring', 'Industrial', 'Agriculture & Pumps'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab
                  ? 'bg-brand-teal text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="group bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal-100/80 text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-brand-teal transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-orange mt-1">
                    {product.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Specification Table */}
                  <div className="mt-5 pt-4 border-t border-slate-200/70 space-y-2 text-xs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-slate-500 font-medium">{spec.label}:</span>
                        <span className="font-bold text-slate-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] font-bold text-slate-400 mr-1">Colors:</span>
                    {product.colors.map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-xs"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.title)}
                    className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-xs px-4 py-2 rounded-lg shadow transition-all flex items-center gap-1"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
