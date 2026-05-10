import { useState } from "react";
import Dock from './Dock';
import { Home, Hammer, Building, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dockItems = [
    { label: 'Home', href: '#home', icon: <Home size={20} /> },
    { label: 'Services', href: '#services', icon: <Hammer size={20} /> },
    { label: 'Project', href: '#portfolio', icon: <Building size={20} /> },
    { label: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background-dark/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 md:h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-8 h-8 sm:w-10 sm:h-10 border border-primary/50 flex items-center justify-center p-1.5 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/d/1FPJeLDpbqU634Yi8bbe2n7BsJrxNXMd4" 
              alt="Logo" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="font-display font-bold text-base sm:text-lg tracking-[0.2em]">
            YANHAL <span className="text-primary">HOLDINGS</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Dock 
            items={dockItems}
            panelHeight={64}
            baseItemSize={48}
            magnification={72}
          />
        </div>

        <div className="flex items-center gap-4">

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown & Blur Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Immersive Blur Overlay - Transitions main screen to background layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-lg z-[60] md:hidden"
            />

            {/* Premium Side-Panel Dropdown - Right-aligned and shimmery */}
            <motion.div
              initial={{ 
                opacity: 0, 
                scale: 0, 
                x: '100%', 
                y: '-100%',
                clipPath: 'circle(0% at 100% 0%)' 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: 0, 
                y: 0,
                clipPath: 'circle(150% at 100% 0%)' 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0, 
                x: '100%', 
                y: '-100%',
                clipPath: 'circle(0% at 100% 0%)' 
              }}
              transition={{ 
                type: 'spring', 
                damping: 28, 
                stiffness: 180,
                duration: 0.8
              }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-surface-dark/95 backdrop-blur-3xl border-l border-primary/20 z-[70] md:hidden shadow-[-20px_0_60px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Shimmer Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="relative h-full flex flex-col pt-32 px-8 pb-12 z-10">
                <div className="flex flex-col gap-10">
                  {dockItems.map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-black group-hover:scale-105 transition-all duration-500 shadow-[0_0_15px_rgba(197,160,89,0.15)]">
                        {item.icon}
                      </div>
                      <span className="text-xl sm:text-2xl font-display font-bold tracking-[0.2em] sm:tracking-[0.4em] uppercase text-primary/80 group-hover:text-primary transition-colors duration-500">
                        {item.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-auto pt-10 border-t border-white/5">
                </div>

                {/* Vertical Label Branding */}
                <div className="absolute right-4 bottom-32 pointer-events-none">
                  <span className="text-[9px] text-white/5 font-black tracking-[1.5em] [writing-mode:vertical-lr] rotate-180 uppercase">
                    Yanhal Holdings Excellence
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
