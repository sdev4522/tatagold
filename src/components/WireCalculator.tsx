'use client';

import React, { useState } from 'react';
import { Calculator, Zap, AlertCircle, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';

interface WireCalculatorProps {
  onSelectGauge: (gauge: string) => void;
}

const PRESETS = [
  { label: 'Lighting & Fans', loadKw: 0.5, defaultGauge: '0.75 sq.mm', desc: 'Lighting circuits, exhaust fans, mobile chargers' },
  { label: 'General Plug Points', loadKw: 1.0, defaultGauge: '1.0 sq.mm', desc: 'Laptops, TVs, sound systems, desktop computers' },
  { label: '1.5 Ton Split AC / Microwave', loadKw: 2.2, defaultGauge: '2.5 sq.mm', desc: 'Heavy bedroom appliances & 1.5 Ton air conditioners' },
  { label: 'Geyser & Water Heater', loadKw: 3.5, defaultGauge: '4.0 sq.mm', desc: 'Bathroom water heaters, induction cooktops, dishwashers' },
  { label: 'Main Floor Line / Heavy Motors', loadKw: 6.0, defaultGauge: '6.0 sq.mm', desc: 'Main distribution board feeding entire floor or water pump' },
  { label: 'Commercial Main Power Feed', loadKw: 10.0, defaultGauge: '10.0 sq.mm', desc: 'Whole building main power meter to breaker panel' },
];

export default function WireCalculator({ onSelectGauge }: WireCalculatorProps) {
  const [selectedPreset, setSelectedPreset] = useState<number | null>(2); // Default to AC
  const [customWattage, setCustomWattage] = useState<string>('2200');
  const [voltage, setVoltage] = useState<number>(230); // 230V standard AC single phase

  const watts = Number(customWattage) || 0;
  const amps = watts / voltage;

  // Calculate recommended gauge based on standard Indian IS: 694 amperage ratings
  const getRecommendation = (amps: number) => {
    if (amps <= 7) return { gauge: '0.75 sq.mm', maxAmps: 7, mcb: '6A', color: 'Red / Blue / Black', item: 'Single Core FR PVC Wire 0.75mm²' };
    if (amps <= 11) return { gauge: '1.0 sq.mm', maxAmps: 11, mcb: '10A', color: 'Red / Blue / Black', item: 'Single Core FR PVC Wire 1.0mm²' };
    if (amps <= 14) return { gauge: '1.5 sq.mm', maxAmps: 14, mcb: '16A', color: 'Red / Blue / Green', item: 'Single Core FR PVC Wire 1.5mm²' };
    if (amps <= 19) return { gauge: '2.5 sq.mm', maxAmps: 19, mcb: '20A', color: 'Red / Blue / Yellow / Black', item: 'Single Core FR PVC Wire 2.5mm²' };
    if (amps <= 26) return { gauge: '4.0 sq.mm', maxAmps: 26, mcb: '32A', color: 'Red / Blue / Yellow', item: 'Single Core FR PVC Wire 4.0mm²' };
    if (amps <= 31) return { gauge: '6.0 sq.mm', maxAmps: 31, mcb: '40A', color: 'Red / Blue / Yellow / Black', item: 'Single Core FR PVC Wire 6.0mm²' };
    return { gauge: '10.0 sq.mm or Multicore Armoured', maxAmps: 42, mcb: '63A', color: '3-Core / 4-Core Cable', item: 'Tata Gold Heavy Duty Power Cable 10.0mm²' };
  };

  const recommendation = getRecommendation(amps);

  const handlePresetClick = (index: number) => {
    setSelectedPreset(index);
    setCustomWattage(String(PRESETS[index].loadKw * 1000));
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-gradient-to-b from-teal-50/40 via-white to-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-brand-orange text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Wire Load Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Find the Perfect <span className="text-brand-orange">Tata Gold Wire Size</span>
          </h2>
          <p className="text-base text-slate-600">
            Never risk short circuits or wire overheating. Calculate your electrical wattage load to get the exact safe wire gauge recommended by IS:694 standards.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Preset Load Selectors */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Step 1: Select Application or Appliance</h3>
              <p className="text-xs text-slate-500">Pick a preset appliance to auto-fill estimated wattage:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRESETS.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handlePresetClick(index)}
                  className={`text-left p-4 rounded-xl border text-sm transition-all flex flex-col justify-between ${
                    selectedPreset === index
                      ? 'bg-teal-50/80 border-brand-teal ring-2 ring-brand-teal/20 shadow-sm'
                      : 'bg-slate-50/50 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-extrabold text-slate-900">{preset.label}</span>
                      <span className="text-xs font-bold text-brand-teal bg-teal-100 px-2 py-0.5 rounded">
                        {preset.loadKw * 1000} W
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{preset.desc}</p>
                  </div>
                  <div className="mt-3 text-[11px] font-bold text-brand-orange">
                    Recommended: {preset.defaultGauge}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Wattage Input */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <label className="block text-sm font-bold text-slate-900">
                Step 2: Or enter custom Load Wattage (Watts):
              </label>
              <div className="flex items-center gap-3">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={customWattage}
                    onChange={(e) => {
                      setSelectedPreset(null);
                      setCustomWattage(e.target.value);
                    }}
                    placeholder="e.g. 2000"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-extrabold text-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:bg-white transition-all"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                    Watts (W)
                  </span>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  @ 230V AC Single Phase
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Calculated Recommendation Display Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-teal to-brand-teal-dark text-white rounded-2xl p-6 sm:p-8 shadow-xl space-y-6 relative overflow-hidden">
            
            {/* Background Accent Decorative Circle */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex justify-between items-center border-b border-teal-500/40 pb-4">
              <span className="text-xs font-bold text-teal-200 uppercase tracking-widest">
                Electrical Recommendation
              </span>
              <span className="bg-brand-orange text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                IS: 694 Standard
              </span>
            </div>

            {/* Main Result Display */}
            <div className="space-y-2">
              <span className="text-xs text-teal-200 font-medium">Calculated Wire Size:</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-2">
                <span>{recommendation.gauge}</span>
              </div>
              <p className="text-xs text-teal-100 flex items-center gap-1 pt-1">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Safe for continuous current load up to <strong>{recommendation.maxAmps} Amperes</strong></span>
              </p>
            </div>

            {/* Spec Breakdown */}
            <div className="bg-teal-900/40 rounded-xl p-4 border border-teal-500/30 space-y-2.5 text-xs text-teal-100">
              <div className="flex justify-between">
                <span>Calculated Current (Amps):</span>
                <strong className="text-white font-bold">{amps.toFixed(1)} A</strong>
              </div>
              <div className="flex justify-between">
                <span>Max Wire Amp Capacity:</span>
                <strong className="text-white font-bold">{recommendation.maxAmps} A</strong>
              </div>
              <div className="flex justify-between">
                <span>Recommended MCB Breaker:</span>
                <strong className="text-brand-orange font-bold">{recommendation.mcb}</strong>
              </div>
              <div className="flex justify-between">
                <span>Standard Wiring Colors:</span>
                <strong className="text-white font-bold">{recommendation.color}</strong>
              </div>
            </div>

            {/* Selected Product Card */}
            <div className="bg-white/10 rounded-xl p-4 border border-white/20 space-y-1">
              <span className="text-[10px] text-teal-200 uppercase tracking-wider font-extrabold">Product to Order:</span>
              <p className="font-extrabold text-white text-sm">{recommendation.item}</p>
              <p className="text-[11px] text-teal-200">100% Pure Copper • Flame Retardant PVC</p>
            </div>

            {/* Action CTA */}
            <button
              onClick={() => onSelectGauge(recommendation.gauge)}
              className="w-full bg-brand-orange hover:bg-brand-orange-hover text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group text-sm"
            >
              <span>Order {recommendation.gauge} Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
