import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  const videoSrc = "/yanhal.mp4";

  return (
    <section id="home" className="relative min-h-screen flex flex-col lg:flex-row w-full overflow-hidden bg-white" style={{ minHeight: '100svh' }}>
       {/* Left Content Side */}
       <div className="w-full lg:w-1/2 bg-[#fcfcfc] relative flex flex-col justify-center py-20 px-6 sm:px-16 overflow-hidden border-b lg:border-b-0 lg:border-r border-black/5">
          {/* Technical sketch background - Subtly placed */}
          <div className="absolute -top-20 -left-20 w-3/4 h-full opacity-[0.03] pointer-events-none select-none">
             <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3Kh4cBNo-xTnJNFjiYI8LuHn-7X_erkRVIPN3LEY-OX07Zt3yjaVMViGcPmk0ocyzcB4SjuUqiB34AaI4i4ridyCQEGYoH_JInFi0P4GZdjMVQXu477EBrq-m3DOxPPDctP0a_rLbQkEqIFDnBXiGtxp0rqPXPgpdSp78u_EkU5QEEk3OVbdQNUn7KqzIiEl6mqIoZlh7_8e7r8-8F2SvMeBXmkgfqGC3GLN73cZYK5HWxVWGHZ66IuI2uNiqw9kRpG0p6jOtm58"
              className="w-full h-full object-contain object-left-top"
              referrerPolicy="no-referrer"
             />
          </div>

          <div className="max-w-xl mx-auto lg:mx-0 w-full relative z-10">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }}
               transition={{ duration: 0.8 }}
               className="flex items-center gap-6 mb-8"
             >
                <div className="w-12 h-[2px] bg-primary"></div>
                <span className="text-primary font-display text-[10px] sm:text-[11px] tracking-[0.5em] uppercase font-black">Holdings Excellence • 2024</span>
             </motion.div>

             <div className="flex flex-col gap-0 mb-12">
               <AnimatedHeading delay={0.1}>
                 <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-display font-extrabold text-charcoal leading-[1.1] tracking-tighter uppercase m-0">
                   ENGINEERING
                 </h1>
               </AnimatedHeading>
               <AnimatedHeading delay={0.2}>
                 <h1 className="text-[clamp(2.5rem,8vw,4rem)] font-display font-extrabold text-charcoal/20 leading-[1.1] tracking-tighter uppercase m-0">
                   WITH INTEGRITY
                 </h1>
               </AnimatedHeading>
             </div>

             <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
               transition={{ duration: 1.2, delay: 0.2 }}
               className="text-charcoal/60 text-sm sm:text-base max-w-md mb-12 font-medium leading-relaxed"
             >
                Pioneering sustainable luxury through architectural precision and innovative engineering solutions for a global legacy.
             </motion.p>

             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }}
               transition={{ duration: 1.2, delay: 0.4 }}
             >
                <a href="#services" className="inline-flex items-center gap-8 bg-charcoal text-white px-10 py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-primary hover:text-black transition-all group duration-500">
                   Explore Services
                   <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">north_east</span>
                </a>
             </motion.div>
          </div>
       </div>

       {/* Right Video Side */}
       <div className="w-full lg:w-1/2 relative bg-charcoal group overflow-hidden" style={{ minHeight: 'min(50vw, 100vh)', height: '100%' }}>
          <video 
            src={videoSrc}
            autoPlay
            loop 
            muted 
            playsInline
            preload="auto"
            x-webkit-airplay="deny"
            className="absolute inset-0 w-full h-full object-cover z-20"
            style={{ WebkitTransform: 'translateZ(0)', transform: 'translateZ(0)' }}
            onCanPlay={(e) => {
               (e.target as HTMLVideoElement).play().catch(() => {});
            }}
          />

          {/* Video Metadata Labels */}
          <div className="absolute top-10 left-6 sm:left-12 right-6 sm:right-12 flex justify-between items-start z-40 pointer-events-none">
             <div className="flex gap-8 sm:gap-12 items-start">
                <div className="flex flex-col">
                   <span className="text-[10px] sm:text-[11px] text-white tracking-[0.4em] font-black uppercase mb-1">Architecture</span>
                   <div className="w-8 h-[1px] bg-primary/50"></div>
                </div>
                <span className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.4em] font-black uppercase">Interiors</span>
                <span className="text-[10px] sm:text-[11px] text-white/30 tracking-[0.4em] font-black uppercase">Development</span>
             </div>
          </div>

          {/* Side Label */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none z-40">
             <span className="text-[10px] text-white/20 tracking-[1.2em] font-black [writing-mode:vertical-lr] rotate-180 uppercase">Innovation Hub</span>
          </div>
       </div>

       {/* Floating Navigation / Watermark Element */}
       <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 flex flex-col gap-4 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="w-[1px] h-20 bg-charcoal/20 mx-auto"></div>
          <span className="text-[9px] font-black text-charcoal [writing-mode:vertical-lr] tracking-[0.5em] uppercase">Yanhal 2024</span>
       </div>
    </section>
  );
}
