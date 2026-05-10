import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface ProcessStep {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string;
  gains: string[];
  icon: string;
  image: string;
}

export default function Process() {
  const [selectedStep, setSelectedStep] = useState<ProcessStep | null>(null);

  const steps: ProcessStep[] = [
    {
      id: "01",
      title: "Consultation & Project Understanding",
      subtitle: "Initial Briefing / Site Visit",
      description: "We engage in a detailed discussion to gather key information such as the purpose of the project, budget expectations, and preferred design direction.",
      details: "When a client initiates a project, the first step is understanding exactly what they need—not just at surface level, but in terms of how the space will actually be used.\n\nDuring this stage, we engage in a detailed discussion to gather key information such as the purpose of the project, budget expectations, preferred design direction, and any constraints related to the site or timeline. If necessary, we conduct a site visit to assess physical conditions, measurements, accessibility, and any existing structures.\n\nThis stage is critical because it sets the foundation for everything that follows. Instead of rushing into design or construction, we ensure that all requirements are clearly defined and aligned from the beginning. This reduces misunderstandings, prevents costly changes later, and ensures that the final result matches what the client actually needs.",
      gains: [
        "Clear understanding of what is possible",
        "Early guidance on budget and feasibility",
        "Confidence that their project is being properly understood"
      ],
      icon: "architecture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwuefG8ovmHcp1ksm51UibxCLOFP-7cUa2NMuubmMGdd7tenYlY9AM7t-tgiQgRRv_regxsdy_dtnU2utCc5plt6OXQJHMBvUgOx3Q5PV9TefXWw7RrAZHwqvbLT1yVpzHFt_jnp67hboBqW0nq5XKWMtnN7K8_VBPGcsDNpzPonIHUJ6LEIDiw-jbLGJxV2UumtURYXCCpgk6njU5Yt8X8omFr-0Z9vy1YG9-no-hbh6tsDaAYlBskB6Xh1ss7Zce0Xvx1Tub7oU"
    },
    {
      id: "02",
      title: "Planning & Design Development",
      subtitle: "Structured Planning / Space Optimization",
      description: "We translate ideas into practical plans, focusing on creating a vision that is not only visually appealing but also functional and realistic to execute.",
      details: "Once the project requirements are clear, we move into structured planning and design.\n\nAt this stage, we translate ideas into practical plans. This may include layout structuring, space optimization, and design direction depending on whether the project is construction, interior design, or renovation.\n\nThe focus here is on creating a plan that is not only visually appealing but also functional and realistic to execute. Every design decision is made with practicality in mind—ensuring that the final outcome works efficiently in real-world use.\n\nWe also define the scope of work in detail, outlining what will be done, what materials may be used, and how the project will progress.",
      gains: [
        "A clear vision of the final outcome",
        "Structured plan before any work begins",
        "Reduced risk of unexpected changes"
      ],
      icon: "polyline",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzLfBQZzuRiGwuyupMX2bekVgnzAhh0MlGIWNwJ4VrzaQHgQtHrToU0z92nWKb4nQJLvYJXTB7bJysmxY0XoAsetmaDWi7cScEUOV_97-yh6txWTThsw-bMKoYwtzO6rxo4jEnyRdvXBRxZS3Uw_SCouxq3Mfdc5O5VM6IF3hb_CMp3Z11QOP0JXEW_Mf7NskQTvh-oSf-3dNxc_WsRZWo3Uk9_05uuefLHe5GH6GnIaLua8xfHYZDWTqM7ZZX8RbzqegoDBmWTck"
    },
    {
      id: "03",
      title: "Material Selection & Preparation",
      subtitle: "Quality Sourcing / Site Readiness",
      description: "We focus on selecting the right materials guided by durability and cost-effectiveness, while ensuring the site is fully prepared for work.",
      details: "Before construction or installation begins, we focus on selecting the right materials and preparing the site.\n\nMaterial selection is guided by durability, cost-effectiveness, and suitability for the specific project. Rather than choosing materials purely for appearance, we ensure they are appropriate for long-term use and aligned with the project’s purpose.\n\nAt the same time, site preparation is carried out to ensure that the environment is ready for work. This may involve clearing the space, organizing tools and resources, and ensuring that all necessary elements are in place before execution begins.\n\nThis stage ensures that the project starts on a solid foundation, both in terms of materials and readiness.",
      gains: [
        "Assurance of quality materials",
        "Better cost control",
        "Smooth transition into execution"
      ],
      icon: "texture",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCSvc_JWwFQKxZb0krnnZjt8Rl9FxkH69izRW6Cnxh3ahmIgreuWraWQehKNCM2mYlVZorIr6E9YeoU3u8__ex_-ZyIlsdmuvG4z6VuKDGsKqCC47d_5phtGxnfXIFSiIdVZZDFn6t4BfH2GBzz0SV2s0quIp-pDWjMl3jcQPE0VXWUF-6EcWBgvEj1td3GPDiBMZKNtbHlAd1_CRL-L_WtmCuS_0oJI1bsS9a-sAdiEpGzzhVUTkUM9-GAaDsRVbn-QvduFrICoc"
    },
    {
      id: "04",
      title: "Construction / Execution Phase",
      subtitle: "On-site Building / Managed Workflow",
      description: "The actual building or transformation takes place. We coordinate labor and manage workflow to ensure progress remains consistent with the timeline.",
      details: "This is where the actual building or transformation takes place.\n\nDuring this phase, all plans are put into action. The team handles on-site work including structural building, installations, finishing, and adjustments as required. Each stage of execution is carried out with attention to detail to ensure that the work meets the agreed standards.\n\nWe coordinate labor, manage workflow, and ensure that progress remains consistent with the timeline. Any necessary adjustments are communicated clearly to the client to maintain transparency.\n\nThe focus is not just on completing the work, but on doing it correctly and efficiently.",
      gains: [
        "Visible progress on their project",
        "Managed workflow without needing to supervise everything",
        "Confidence that work is being handled professionally"
      ],
      icon: "foundation",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTSpFOhNJgjfRj1_kbIdc2Rgmd9-LXp-RbdlrY2uEiExMn4ZgXPxWiDBnUj4aOkClXvjghxDWDOosR0pZYftJEAjdbpwVKKHmRwJAVZZVxXnHoPlXh5dj31zp6CWA9msP5JrhG24fEKjkQ5mLaNCj0WwR1qUxq91kjQTy08hYnnSG5p8_4Ft0vK9rZua-t1EdAn54jKxL6iBn39PJ6wdRE_hJb-1OP61LC0iGviD5fS-x7dhQzIFLbIvKo6GSL3bLAuTbLethcKAE"
    },
    {
      id: "05",
      title: "Quality Check & Final Touches",
      subtitle: "Standard Review / Detailed Adjustments",
      description: "We carry out a thorough review to ensure everything meets the expected standard, correcting minor issues and making final adjustments.",
      details: "Before handing over the project, we carry out a thorough review to ensure everything meets the expected standard.\n\nThis includes checking structural elements, finishes, fittings, and overall presentation. Any minor issues are corrected, and final adjustments are made to ensure the space is fully complete and ready for use.\n\nAttention is given to details that may not be obvious during construction but are important in the final result—such as alignment, finishing consistency, and usability.",
      gains: [
        "Assurance that the work is complete and properly finished",
        "A polished final result",
        "Reduced need for post-completion fixes"
      ],
      icon: "verified",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000"
    },
    {
      id: "06",
      title: "Project Handover & Client Support",
      subtitle: "Final Delivery / Continued Guidance",
      description: "We formally hand over the space and remain available for follow-up support to ensure confidence in using and maintaining the space.",
      details: "Once the project is complete, we formally hand over the space to the client.\n\nAt this stage, the client is guided through the completed work to ensure everything aligns with expectations. Any final clarifications are addressed, and the client is given full access to the finished space.\n\nWe also remain available for follow-up support if needed, especially for minor adjustments or guidance related to the completed work.\n\nThe goal is to ensure that the client is not just satisfied at handover, but confident in using and maintaining the space moving forward.",
      gains: [
        "A fully completed, ready-to-use project",
        "Clarity on what has been delivered",
        "Continued support if needed"
      ],
      icon: "key",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCK1GIwimSG3fdYlbBSojjOJqJUa71iOeRcRLzPHmyt_zCRn70D1hQpgqe0szONBPtxSPVAhGzhA9c2f96wUp0yvB81CUC8r_4CCgrORaWnorx0XowRgqmmzfCMIPRDqnpIpKqmaVv-83AKwXAmaGy43rvoQLjzQ7nQ4s6-xfrDp_cqrdRPhcw8hUDTwCoEAMruuZ534bmFpwz_oMMDDEhHRvFIK6GLhw7-X2BWDROibw_93iPH6pW2Y3bCgJFiGtDwqQsubaQCGpg"
    }
  ];

  return (
    <section id="process" className="relative bg-background-dark py-24 sm:py-32">
      <header className="relative min-h-[50vh] sm:min-h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80')] bg-cover"></div>
        <div className="relative z-10 max-w-5xl">
          <h2 className="text-primary font-mono text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.6em] mb-4 sm:mb-6 uppercase leading-none">The Yanhal Method</h2>
          <h1 className="font-display text-white text-3xl sm:text-6xl lg:text-7xl mb-6 sm:mb-8 leading-tight tracking-tighter uppercase">
            How We <span className="text-primary">Build</span> Masterpieces
          </h1>
          <p className="max-w-xl mx-auto text-slate-400 font-light text-base sm:text-lg leading-relaxed">
            A structured, transparent journey from technical precision to breathtaking architectural reality.
          </p>
        </div>
      </header>

      <main className="relative py-20 sm:py-32 px-6 max-w-7xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary via-primary/30 to-transparent hidden lg:block transform -translate-x-1/2"></div>
        <div className="space-y-32 sm:space-y-48 relative">
          {steps.map((step, idx) => (
            <motion.section 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.2, 0, 0.2, 1] }}
              className={`relative flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-5/12 order-2 lg:order-1">
                <div 
                  onClick={() => setSelectedStep(step)}
                  className="relative group overflow-hidden bg-white/5 cursor-pointer rounded-sm"
                >
                  <img 
                    alt={step.title} 
                    className="w-full aspect-video object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000" 
                    src={step.image}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-primary/20 pointer-events-none group-hover:border-primary/50 transition-colors"></div>
                  <div className={`absolute top-4 ${idx % 2 !== 0 ? 'right-4' : 'left-4'}`}>
                    <span className="material-symbols-outlined text-2xl sm:text-3xl opacity-50 group-hover:opacity-100 text-primary">{step.icon}</span>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-display text-white text-[9px] tracking-[0.3em] border border-white/40 px-5 sm:px-6 py-3 uppercase">Explore Stage</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center z-20">
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(197,160,89,0.8)]"></div>
              </div>
              <div className={`w-full lg:w-5/12 order-1 lg:order-2 ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
                <div className={`flex items-center gap-4 mb-2 sm:mb-4 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <span className="font-display text-5xl sm:text-7xl text-transparent [-webkit-text-stroke:1px_rgba(197,160,89,0.4)] leading-none">{step.id}</span>
                  <div className="h-[1px] flex-grow bg-primary/20"></div>
                </div>
                <h3 className="font-display text-xl sm:text-2xl mb-3 sm:mb-4 tracking-widest uppercase text-white leading-tight">{step.title}</h3>
                <p className="text-primary/70 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-4 sm:mb-6">{step.subtitle}</p>
                <p className={`text-slate-400 font-light text-sm sm:text-base leading-relaxed max-w-md ${idx % 2 !== 0 ? 'lg:ml-auto' : ''}`}>
                  {step.description}
                </p>
                <button 
                  onClick={() => setSelectedStep(step)}
                  className={`mt-6 sm:mt-8 flex items-center gap-4 group-hover:gap-6 transition-all duration-500 text-primary font-display text-[9px] tracking-[0.3em] uppercase ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="h-[1px] w-8 bg-primary"></div>
                  <span>Explore Stage</span>
                </button>
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      {/* Process Detail Modal */}
      <AnimatePresence>
        {selectedStep && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 md:p-10 bg-black/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
              className="bg-surface-dark w-full sm:max-w-5xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto border-0 sm:border sm:border-white/10 relative no-scrollbar"
            >
              <button 
                onClick={() => setSelectedStep(null)}
                className="absolute top-6 right-6 z-50 text-white/50 hover:text-primary transition-colors bg-black/20 p-2 sm:p-0 rounded-full sm:bg-transparent"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-60 sm:h-[400px] lg:h-full relative">
                  <img 
                    src={selectedStep.image} 
                    alt={selectedStep.title} 
                    className="w-full h-full object-cover grayscale-[0.5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-dark to-transparent lg:hidden"></div>
                </div>
                
                <div className="p-6 sm:p-12 space-y-8 sm:space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <span className="text-primary font-display text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase leading-none">{selectedStep.id} / PROCESS STAGE</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
                      {selectedStep.title}
                    </h2>
                    <div className="text-slate-300 text-sm leading-relaxed font-light whitespace-pre-line">
                      {selectedStep.details}
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 sm:p-8 border-l-2 border-primary">
                    <h4 className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase mb-4 sm:mb-6 leading-none">What You Gain</h4>
                    <ul className="space-y-3 sm:space-y-4">
                      {selectedStep.gains.map((gain, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                          <span className="text-primary mt-1 text-[8px]">●</span>
                          {gain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 pb-8 sm:pb-0">
                    <button 
                      onClick={() => setSelectedStep(null)}
                      className="bg-primary text-black px-10 py-5 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all w-full"
                    >
                      Close Stage
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

