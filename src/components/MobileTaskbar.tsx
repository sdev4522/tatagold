'use client';

import React from 'react';
import { Phone, MessageSquare, Layers, FileText } from 'lucide-react';

interface MobileTaskbarProps {
  onOpenQuote: () => void;
}

export default function MobileTaskbar({ onOpenQuote }: MobileTaskbarProps) {
  return (
    <nav 
      aria-label="Mobile Navigation Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-taskbar px-2 py-2"
    >
      <div className="grid grid-cols-4 gap-1 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:text-brand-teal hover:bg-teal-50/60 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-teal-100/80 text-brand-teal flex items-center justify-center mb-1">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Call Us</span>
        </a>

        {/* WhatsApp Chat Button */}
        <a
          href="https://wa.me/919876543210?text=Hello%20Tata%20Gold%20Team,%20I%20am%20interested%20in%20your%20PVC%20Wires%20and%20Cables."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:text-emerald-600 hover:bg-emerald-50/60 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-1">
            <MessageSquare className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Products Scroll Button */}
        <a
          href="#products"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-slate-700 hover:text-brand-teal hover:bg-teal-50/60 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center mb-1">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Products</span>
        </a>

        {/* Quick Quote Trigger Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-brand-orange hover:bg-orange-50 active:scale-95 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-orange to-amber-500 text-white flex items-center justify-center mb-1 shadow-sm">
            <FileText className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold tracking-tight text-brand-orange">Get Quote</span>
        </button>
      </div>
    </nav>
  );
}
