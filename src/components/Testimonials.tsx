import { motion } from "motion/react";
import AnimatedHeading from "./AnimatedHeading";
import InfiniteMediaLoop from "./InfiniteMediaLoop";

export default function Testimonials() {
  const testimonials = [
    {
      id: "01",
      quote: "The project was handled with a high level of coordination and attention to detail. From planning to execution, the team ensured that everything was done according to expectations. The progress has been consistent, and communication throughout the process has been clear and professional.",
      author: "Ismail Abdullahi Siyad",
      role: "Supervisor – Muhoho Road",
      status: "Ongoing",
      rating: 5,
      rotate: "-rotate-1"
    },
    {
      id: "02",
      quote: "Working with Yanhal has been a structured and efficient experience. The site has been managed well, and the team maintains good control over both timelines and quality. Their approach makes it easier to keep the project on track.",
      author: "Hani Sheikh",
      role: "Site Manager – Off Muhoho",
      status: "Ongoing",
      rating: 5,
      rotate: "rotate-2",
      translateY: "md:translate-y-40"
    },
    {
      id: "03",
      quote: "The project was completed as expected, with good finishing and proper execution. The team was reliable and delivered a result that met the requirements without unnecessary delays.",
      author: "Garder & Roble",
      role: "Contractor – Kapiti South B",
      status: "Completed",
      rating: 5,
      rotate: "-rotate-3",
      translateY: "md:-translate-y-20"
    },
    {
      id: "04",
      quote: "The interior work delivered was clean, modern, and aligned with the intended commercial use. The improvements made a noticeable difference in both appearance and functionality of the space.",
      author: "BBS Mall",
      role: "Interior Design – Eastleigh",
      status: "Completed",
      rating: 5,
      rotate: "rotate-1",
      translateY: "md:translate-y-20"
    }
  ];

  return (
    <section id="testimonials" className="relative bg-background-dark py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(197, 160, 89, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(197, 160, 89, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 sm:mb-6">
            <div className="flex items-center space-x-4 leading-none">
              <div className="h-[1px] w-8 sm:w-12 bg-primary"></div>
              <span className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase">Testimonials</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full self-start sm:self-auto">
              <div className="flex text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-[10px] fill-1">star</span>
                ))}
              </div>
              <span className="text-white font-display text-[9px] font-bold">5.0 AVERAGE RATING</span>
            </div>
          </div>
          <div className="flex flex-col gap-0 mb-6 sm:mb-8">
            <AnimatedHeading delay={0.1}>
              <h1 className="font-display text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.2] sm:leading-[1.1] max-w-5xl text-white uppercase m-0">
                Redefining <span className="text-primary italic">Modern</span> Spaces Through
              </h1>
            </AnimatedHeading>
            <AnimatedHeading delay={0.2}>
              <h1 className="font-display text-2xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.2] sm:leading-[1.1] max-w-5xl text-white uppercase m-0">
                Real Client Experiences
              </h1>
            </AnimatedHeading>
          </div>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-lg font-light leading-relaxed">
            We work closely with clients across construction, interior design, and project supervision to deliver spaces that are practical, well-executed, and aligned with their intended purpose. The feedback we receive reflects our commitment to quality, reliability, and attention to detail in every project we handle.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-10 lg:perspective-[2000px]">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 60, scale: 0.92, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: idx * 0.15 
              }}
              className={`lg:col-span-5 ${t.translateY || ''} ${t.rotate || ''} ${idx % 2 === 0 ? '' : 'sm:translate-z-[20px] lg:translate-z-[40px]'} ${idx === 1 ? 'lg:col-start-7' : ''} ${idx === 2 ? 'lg:col-span-4' : ''} ${idx === 3 ? 'lg:col-span-5 lg:col-start-8' : ''} border border-white/10 p-6 sm:p-12 lg:p-14 bg-white/5 backdrop-blur-md transition-all duration-700 hover:border-primary/40 hover:bg-white/[0.08] shadow-2xl rounded-sm group`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="flex justify-between items-start mb-6 sm:mb-10">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1 text-primary">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`material-symbols-outlined text-[10px] sm:text-sm transition-all duration-500 group-hover:scale-110 ${i < (t.rating || 5) ? 'fill-1' : 'opacity-30'}`}
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-white font-display text-[10px] font-bold">5.0</span>
                </div>
                <div className={`text-[8px] tracking-[0.2em] font-display uppercase px-2 py-1 border border-white/10 ${t.status === 'Ongoing' ? 'text-primary/70' : 'text-green-500/70'}`}>
                  {t.status}
                </div>
              </div>
              <blockquote className="text-base sm:text-lg lg:text-xl font-light italic leading-relaxed mb-8 sm:mb-12 text-slate-200">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center justify-between pt-6 sm:pt-8 border-t border-white/10">
                <div>
                  <p className="font-display text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 text-white leading-none font-bold">{t.author}</p>
                  <p className="text-slate-500 text-[8px] sm:text-[9px] uppercase tracking-widest leading-none">{t.role}</p>
                </div>
                <span className="text-primary/40 font-display text-[10px] sm:text-xs">{t.id}</span>
              </div>
            </motion.div>
          ))}

          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-20 pointer-events-none -z-10">
            <img 
              alt="Abstract architectural details" 
              className="w-full h-full object-cover mix-blend-screen grayscale border border-primary/20 rounded-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4i6PlZkRei1TeI4RRMuGJYWZpIrAv0PoC1_hEj_PdcBrtAV4fcA5bn_aIyBGrZs2MheGQ2BnMVWfVS3lZII1_8CWQJhc2BQ-1qmLGr__HVqZTpmjBJF0wmtu1kCcobGt8iDpbHlAuRxrpGQEX28lo0hxhpC6vko6nFwsO-loWT_zzERjQsb6bPTZSk1MrRIVKizWWHGvTK9d_qgEOyKHNqsvIsz_AMl5I1I_86_XPoMxbAPuHvJaLCEvPNFhrPb2M1tTyosxcrk0" 
              style={{ maskImage: 'radial-gradient(circle, black, transparent 70%)' }}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="mt-24 sm:mt-48 pt-16 sm:pt-20 border-t border-white/5 overflow-hidden">
          <p className="text-center font-display text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase text-slate-500 mb-8 sm:mb-12">Partners in Excellence</p>
          
          <div 
            className="w-full overflow-hidden select-none flex bg-transparent"
            style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
          >
            <style>{`
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .marquee-content {
                display: flex;
                flex-direction: row;
                white-space: nowrap;
                animation: scroll-left 25s linear infinite;
              }
              .marquee-wrapper:hover .marquee-content {
                animation-play-state: paused;
              }
            `}</style>
            
            <div className="marquee-wrapper w-full">
              <div className="marquee-content w-max">
                {/* First Set */}
                {[...Array(4)].map((_, idx) => (
                  <div key={`set1-${idx}`} className="text-[clamp(2.5rem,8vw,5.5rem)] font-display font-black text-white/30 hover:text-primary uppercase px-[3vw] flex items-center tracking-tighter transition-colors duration-500 cursor-default leading-none">
                    Yanhal Holding Limited
                  </div>
                ))}
                {/* Cloned Set for Seamless Loop */}
                {[...Array(4)].map((_, idx) => (
                  <div key={`set2-${idx}`} className="text-[clamp(2.5rem,8vw,5.5rem)] font-display font-black text-white/30 hover:text-primary uppercase px-[3vw] flex items-center tracking-tighter transition-colors duration-500 cursor-default leading-none">
                    Yanhal Holding Limited
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* The new infinite left-to-right media loop goes right below the marquee */}
        <InfiniteMediaLoop />
      </div>
    </section>
  );
}
