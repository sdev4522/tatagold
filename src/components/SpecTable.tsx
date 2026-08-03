'use client';

import React from 'react';
import { Table, Shield, Info, Download, Award } from 'lucide-react';

const SPEC_DATA = [
  {
    area: '0.75 sq.mm',
    stranding: '24 / 0.20 mm',
    thickness: '0.60 mm',
    conduitAmps: '7 Amps',
    unclippedAmps: '8 Amps',
    resistance: '26.0 Ω/km',
    app: 'Light points, Fans & LED fittings',
  },
  {
    area: '1.00 sq.mm',
    stranding: '14 / 0.30 mm',
    thickness: '0.70 mm',
    conduitAmps: '11 Amps',
    unclippedAmps: '12 Amps',
    resistance: '18.10 Ω/km',
    app: 'Mobile charging, TV, Computers',
  },
  {
    area: '1.50 sq.mm',
    stranding: '22 / 0.30 mm',
    thickness: '0.70 mm',
    conduitAmps: '14 Amps',
    unclippedAmps: '15 Amps',
    resistance: '12.10 Ω/km',
    app: 'Power sockets, Refrigerator, Iron',
  },
  {
    area: '2.50 sq.mm',
    stranding: '36 / 0.30 mm',
    thickness: '0.80 mm',
    conduitAmps: '19 Amps',
    unclippedAmps: '20 Amps',
    resistance: '7.41 Ω/km',
    app: '1.5 Ton AC, Microwave, Washing Machine',
  },
  {
    area: '4.00 sq.mm',
    stranding: '56 / 0.30 mm',
    thickness: '0.80 mm',
    conduitAmps: '26 Amps',
    unclippedAmps: '27 Amps',
    resistance: '4.95 Ω/km',
    app: 'Geysers, Water Heaters, Induction Cooker',
  },
  {
    area: '6.00 sq.mm',
    stranding: '84 / 0.30 mm',
    thickness: '1.00 mm',
    conduitAmps: '31 Amps',
    unclippedAmps: '34 Amps',
    resistance: '3.30 Ω/km',
    app: 'Main DB panel feed, Submersible Pump',
  },
];

export default function SpecTable() {
  return (
    <section id="specs" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-brand-teal text-xs font-extrabold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Table className="w-4 h-4 text-brand-orange" />
            <span>Printed Packaging Box Specifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Technical Specification Matrix
          </h2>
          <p className="text-base text-slate-600">
            Single Core PVC Insulated (Unsheathed) Cables in Voltage Grade 1100V. Manufactured as per IS: 694 standards.
          </p>
        </div>

        {/* Spec Table Container */}
        <div className="mt-12 bg-slate-50/80 rounded-2xl border border-slate-200 shadow-card overflow-hidden">
          
          <div className="bg-gradient-to-r from-brand-teal to-brand-teal-dark p-4 sm:p-6 text-white flex flex-wrap justify-between items-center gap-4">
            <div>
              <h3 className="font-extrabold text-lg sm:text-xl font-heading">
                TATA GOLD PVC WIRES & CABLES - SPEC CHART
              </h3>
              <p className="text-xs text-teal-100">
                100% Electrolytic Annealed Plain Copper Conductor • Voltage Grade 1100 Volts
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="bg-brand-orange text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                <Award className="w-4 h-4" />
                IS: 694 Certified
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-200/70 text-slate-900 font-extrabold border-b border-slate-300 uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-4 sm:px-6">Nominal Area</th>
                  <th className="py-4 px-4">No. / Dia. of Wire</th>
                  <th className="py-4 px-4">Insulation Thickness</th>
                  <th className="py-4 px-4">Current (Conduit)</th>
                  <th className="py-4 px-4">Current (Unenclosed)</th>
                  <th className="py-4 px-4">Max Resistance @ 20°C</th>
                  <th className="py-4 px-4 sm:px-6">Ideal Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 text-slate-700">
                {SPEC_DATA.map((row, index) => (
                  <tr key={index} className="hover:bg-white transition-colors">
                    <td className="py-4 px-4 sm:px-6 font-extrabold text-brand-teal whitespace-nowrap">
                      {row.area}
                    </td>
                    <td className="py-4 px-4 font-semibold text-slate-900 whitespace-nowrap">{row.stranding}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.thickness}</td>
                    <td className="py-4 px-4 font-bold text-brand-orange whitespace-nowrap">{row.conduitAmps}</td>
                    <td className="py-4 px-4 font-bold text-emerald-600 whitespace-nowrap">{row.unclippedAmps}</td>
                    <td className="py-4 px-4 whitespace-nowrap">{row.resistance}</td>
                    <td className="py-4 px-4 sm:px-6 text-slate-600">{row.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-2 text-xs text-slate-500">
            <div className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-brand-teal shrink-0" />
              <span>Conductor resistance values are as per IS 8130. Standard coil lengths supplied in 90 meter spools.</span>
            </div>
            <span className="font-semibold text-slate-700">Mfg By: TATA GOLD CABLES PVT LTD</span>
          </div>

        </div>

      </div>
    </section>
  );
}
