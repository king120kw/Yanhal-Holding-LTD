import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import AnimatedBlock from "./AnimatedBlock";

const Counter = ({ target, duration, suffix }: { target: number; duration: number, suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (time: number) => {
      if (startTime === null) startTime = time;
      const progress = Math.min((time - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * target));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      viewport={{ amount: 0.1 }}
    >
      {count}{suffix}
    </motion.span>
  );
};

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { label: "Projects Delivered", value: 25, suffix: "+", duration: 2.5 },
    { label: "Years of Experience", value: 3, suffix: "+", duration: 1.5 },
    { label: "Clients Served", value: 15, suffix: "+", duration: 2.0 },
    { label: "KES Project Value Managed", value: 10, suffix: "M+", duration: 2.2 },
  ];

  const fullContent = [
    {
      title: "Our Purpose",
      text: "Yanhal Holdings Ltd exists to bridge the gap between design ideas and real-world execution by providing clients with structured, reliable, and results-driven construction services. At its core, the company is built around the idea that every space has a purpose, and that purpose should be reflected in how it is designed, built, and used."
    },
    {
      title: "Practical Execution",
      text: "Whether working on a new construction project, transforming an existing interior, or upgrading a commercial space, the focus remains on creating environments that are not only visually presentable but also efficient, durable, and aligned with the client’s actual needs. We prioritize practical implementation that can be delivered within real-world constraints such as budget, materials, and location."
    },
    {
      title: "Hands-On Management",
      text: "The company operates with a hands-on approach, meaning every project is actively managed from the initial consultation stage through to final completion. This includes understanding the client’s vision, assessing the site conditions, planning the structure or design, and ensuring that execution follows a clear and structured process."
    },
    {
      title: "Transparency & Communication",
      text: "Yanhal Holdings places strong emphasis on communication and transparency throughout the project lifecycle. Clients are kept informed at key stages of development so that expectations remain aligned and decisions are made with clarity. This reduces uncertainty and ensures that each project progresses in a controlled and predictable manner."
    },
    {
      title: "Service Excellence",
      text: "Our work covers a range of services including construction of small to medium-scale structures, interior design and finishing, renovation of existing spaces, and custom commercial setups such as kiosks and retail environments. Each service is approached with the same level of care, focusing on functionality, structural integrity, and long-term usability."
    }
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-4 sm:px-10 lg:px-24 py-20 sm:py-32 bg-charcoal relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="space-y-10 sm:space-y-12"
        >
          <div>
            <span className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase block mb-4 sm:mb-6">Established Expertise</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-[1.1] text-white">
              ABOUT <br/>
              <span className="text-primary">YANHAL</span> <br/>
              HOLDINGS
            </h1>
          </div>
          <div className="max-w-xl space-y-6 sm:space-y-8">
            <AnimatedBlock delay={0.1} index={0}>
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                Yanhal Holdings Ltd is a construction and interior design company based in Nairobi, Kenya, focused on delivering practical, functional, and well-executed building solutions.
              </p>
            </AnimatedBlock>
            <AnimatedBlock delay={0.1} index={1}>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                We bridge the gap between design ideas and real-world execution, providing structured, reliable, and results-driven services for residential, commercial, and custom development projects.
              </p>
            </AnimatedBlock>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 text-primary font-display text-[9px] sm:text-[10px] font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase hover:text-white transition-colors"
            >
              Explore Our Story
              <span className="w-8 sm:w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-white transition-all"></span>
            </button>
          </div>
          <div className="space-y-10 pt-10 border-t border-white/10">
            <div className="grid grid-cols-2 gap-y-10 sm:gap-y-12 gap-x-6 sm:gap-x-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="group">
                  <div className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-primary mb-2 sm:mb-3 tracking-tighter">
                    <Counter target={stat.value} duration={stat.duration} suffix={stat.suffix} />
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-display uppercase tracking-[0.3em] text-gray-500 group-hover:text-primary transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-4 p-4 bg-white/5 border-l border-primary/30">
              <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">verified_user</span>
              <p className="text-[10px] sm:text-xs text-gray-400 font-light leading-relaxed italic">
                Actively engaged in large-scale residential developments, including overseeing high-value apartment projects with construction costs exceeding <span className="text-white/80 font-medium">100M KES.</span>
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0"
        >
          <div className="absolute -inset-4 border border-primary/10 translate-x-4 sm:translate-x-6 translate-y-4 sm:translate-y-6 -z-10 hidden sm:block"></div>
          <div className="overflow-hidden bg-black aspect-[4/5] relative group shadow-2xl rounded-sm">
            <img 
              alt="Professional Architectural Project" 
              className="w-full h-full object-cover transition-all duration-1000 scale-105 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTqcc2ApLv-RX_qf9lurkf5yjntaZ9f_sP_ZtsvpH_TM-SPqwqFAa3sus9i-Ppj7AQODDKc1hg_KsIAfwH0Ztra0-X-GntWQHHnyw4WGPwgNcurptufRqWun_FzrgLMA2NZOhCxirdhBGx2w0zmEaNB0lOJ_y7-5ybIGKusyv6cIhdYuf8OLRyr92vZayE-CkevcBn66MP73wBx__-vY5UCwautMiOzls53qHN29lF-2s_CGdF0x4CdvioGAtw8786G_nt_dXbzeQ"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
              <div className="flex items-center gap-4 sm:gap-5">
                <img 
                  src="https://lh3.googleusercontent.com/d/1FPJeLDpbqU634Yi8bbe2n7BsJrxNXMd4" 
                  alt="Logo" 
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-white font-display text-[9px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] mb-1">DESIGN STUDIO</p>
                  <p className="text-primary text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Detailed Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-12"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={() => setIsModalOpen(false)}></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-surface-dark border border-white/10 w-full max-w-4xl max-h-[85vh] overflow-y-auto relative z-10 custom-scrollbar"
            >
              <div className="sticky top-0 z-20 flex justify-end p-6 bg-surface-dark/80 backdrop-blur-md">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="w-12 h-12 flex items-center justify-center border border-white/10 text-white hover:bg-primary hover:text-black transition-all group"
                >
                  <span className="material-symbols-outlined text-xl group-hover:rotate-90 transition-transform">close</span>
                </button>
              </div>

              <div className="p-10 md:p-20 pt-0">
                <div className="mb-16">
                  <span className="text-primary font-display text-[10px] tracking-[0.6em] uppercase block mb-6">In-Depth Philosophy</span>
                  <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-tight">
                    The Yanhal <br/> <span className="text-primary italic">Identity</span>
                  </h2>
                </div>

                <div className="space-y-16">
                  {fullContent.map((item, idx) => (
                    <div key={idx} className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 border-t border-white/5 pt-12">
                      <h4 className="text-primary font-display text-[10px] font-bold tracking-[0.3em] uppercase pt-1">
                        {item.title}
                      </h4>
                      <p className="text-white/60 text-lg font-light leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-20 pt-12 border-t border-white/10 text-center">
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.5em] mb-8">Ready to build your masterpiece?</p>
                  <button 
                    onClick={() => {
                      setIsModalOpen(false);
                      document.getElementById('estimator')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-primary text-black px-12 py-5 font-display text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white transition-all"
                  >
                    Start Your Estimate
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
