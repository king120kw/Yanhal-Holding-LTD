import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import AnimatedBlock from "./AnimatedBlock";

interface ServiceDetail {
  id: string;
  title: string;
  overview: string;
  scope: string[];
  clients: string[];
  process: string[];
  outcome: string;
  icon: string;
  image: string;
}

const services: ServiceDetail[] = [
  {
    id: "01",
    title: "Construction Services",
    overview: "When you choose Yanhal Holdings for construction, you are working with a team that manages the building process from initial planning to final completion. This service is designed for clients who want to develop residential or commercial structures without dealing with the complexity of coordinating multiple parties.\n\nWe handle the full scope of construction, starting with understanding your project requirements, reviewing your site, and aligning on the type of structure you want to build. This includes small to medium-scale projects such as residential units, rental spaces, retail shops, and standalone commercial buildings.\n\nFrom the beginning, we focus on proper planning and execution, ensuring that the structure is not only visually acceptable but also structurally sound and practical for long-term use. We coordinate the workflow on-site, manage labor, and ensure that materials are used efficiently to avoid unnecessary costs.\n\nThroughout the project, you are kept informed of progress, key milestones, and any necessary adjustments. Our goal is to make the construction process predictable, transparent, and manageable for you.",
    scope: [
      "Full scope construction management",
      "Residential or commercial structures",
      "Small to medium-scale projects",
      "Rental spaces and retail shops",
      "Standalone commercial buildings"
    ],
    clients: [
      "Residential developers",
      "Commercial property owners",
      "Rental space investors",
      "Business owners"
    ],
    process: [
      "Project Requirement Alignment",
      "Site Review & Planning",
      "Workflow Coordination",
      "Labor & Material Management",
      "Progress & Milestone Tracking"
    ],
    outcome: "By the end of the project, you receive a completed structure that is ready for use, built according to agreed specifications, and aligned with your intended purpose—whether that is living, renting, or running a business.",
    icon: "architecture",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4WjWo8QINsAcQrYNWldg-_yGtyRXcaY9GxuqfxqqJUNjJKGVKJK9k6BzdvAdOzlrFc0qGytCm7nFfkPVpw2UlXE0TD5jpBgQTsdfZnze6HPKR-F_LIJU5GB6vFn6scCUpiJeERFbPfixe-j6ROpmSAdI1CdlLIAY80wEX0mhEBON0ym3N7POBq2yiTBXEz4MzKsTFVLNow8pdkmwATpc0EgppXhpFChCjd0QtqA3nJNn-BlEaoP5KLBdor2BL9MWporxSU7Evb2s"
  },
  {
    id: "02",
    title: "Interior Design & Finishing",
    overview: "This service focuses on transforming internal spaces into environments that are both functional and visually appealing. It is ideal for clients who already have a structure but need to improve how the space looks and works.\n\nWe begin by understanding how you intend to use the space. Whether it is a shop, office, or residential interior, the design is tailored to support your daily activities while also improving the overall appearance.\n\nOur work includes layout adjustments, finishing selections, lighting improvements, and surface treatments such as flooring, ceilings, and wall finishes. The goal is not just decoration, but creating a space that works better for you.\n\nWe pay close attention to how different elements come together—ensuring that movement within the space is smooth, lighting is effective, and the final result feels complete rather than pieced together.",
    scope: [
      "Internal space transformation",
      "Layout adjustments",
      "Finishing selections",
      "Lighting improvements",
      "Surface treatments (flooring, ceilings, walls)"
    ],
    clients: [
      "Shop and retail owners",
      "Office facility managers",
      "Residential clients",
      "Business owners"
    ],
    process: [
      "Usage Intent Analysis",
      "Tailored Design Development",
      "Layout & Finishing Selection",
      "Lighting & Movement Optimization",
      "Final Result Integration"
    ],
    outcome: "For business owners, this often means creating a space that attracts customers and supports operations. For residential clients, it means making the home more comfortable and organized. The final outcome is a space that is cleaner, more modern, and better suited to its purpose.",
    icon: "chair_alt",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJgMhD7gZWYj9nwCwAFa-s_MoIKJaAnmbe-zn3uBPh48eBIKvCEch2bMTbhJUPuyiGd3xOAaHMgOxV4wAuxxpzfEQgYQp2nVdmKxWuFOxOHzxiTBU_8aHJbCdrz2gLUnOtlqhEf_fW64XTmQM517tep7HZP8zDhABYK0kkq81z7izN8oogn9qs2dgWo0GQGK2n3fEpTpc3UT72jM5V1f_qlOZDg4xVYqazE9EzCsqqR_8NJDkTNURHO3-hXixe5EteZZE-VjGkCkk"
  },
  {
    id: "03",
    title: "Renovation & Remodeling",
    overview: "Renovation services are designed for clients who already have an existing structure but need to improve, upgrade, or repurpose it.\n\nWe start by assessing the current condition of the space and identifying what is not working—this could be outdated finishes, poor layout, structural wear, or underutilized areas.\n\nBased on this, we propose practical improvements that enhance both functionality and appearance. This may involve redesigning certain sections, replacing materials, upgrading finishes, or reconfiguring the layout entirely.\n\nThe focus is on maximizing the value of what you already have, rather than starting from scratch. This makes renovation a cost-effective option for improving property value and usability.\n\nWe carefully manage the process to minimize disruption, especially for spaces that are still in use, such as shops or offices.",
    scope: [
      "Existing structure improvement",
      "Structural wear repair",
      "Layout reconfiguration",
      "Material replacement",
      "Property repurposing"
    ],
    clients: [
      "Owners of existing structures",
      "Property value seekers",
      "Shop and office owners",
      "Repurposing clients"
    ],
    process: [
      "Current Condition Assessment",
      "Practical Improvement Proposal",
      "Redesign & Material Selection",
      "Disruption-Minimized Management",
      "Efficiency & Look Modernization"
    ],
    outcome: "At completion, the space feels renewed, more efficient, and aligned with current needs—whether that means modernizing the look or improving how the space functions.",
    icon: "foundation",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU5rrJrv0XSO0txUIddgRLI4hOVJqCIxPZDcr32giPrLr3EoRik0_-YfPdnc_KtgpzJJm-_45B588EmCsQfjwNwaKxT4PysG9Of6wAyO-byQ3Xn48JvYeevNUaKaK3FY8K-kEftEFLykf5-RLZ0uvao4s9GOUtehJnukMTc-hy-VsI2ob7M114D4l_LsJ5zllEmHvTse1DkBNqRiWe7j7eK-Wj_K6o0gADqR25ghBDDp_8_HZNwJmgTJt0f7a3Rl_AgfdIFSfp3OE"
  },
  {
    id: "04",
    title: "Custom Commercial Projects",
    overview: "This service is specifically designed for entrepreneurs and businesses that need functional, ready-to-use commercial spaces such as kiosks, booths, or small retail setups.\n\nWe understand that for business owners, the space is not just a structure—it directly affects visibility, customer experience, and daily operations.\n\nThe process begins by understanding your business type, location, and operational needs. From there, we design a setup that fits your brand, supports your workflow, and makes efficient use of available space.\n\nWe handle both the design and construction, ensuring that the final setup is durable, practical, and visually appealing to customers. This includes structural work, finishing, and layout optimization.\n\nFor example, kiosk projects are designed to be compact but efficient, allowing for smooth service delivery while maintaining a professional appearance.",
    scope: [
      "Kiosks and booths",
      "Small retail setups",
      "Ready-to-use commercial spaces",
      "Brand-aligned setup design",
      "Layout optimization"
    ],
    clients: [
      "Entrepreneurs",
      "Retail businesses",
      "Small setup operators",
      "Brand managers"
    ],
    process: [
      "Business Type & Needs Analysis",
      "Brand-Aligned Setup Design",
      "Efficient Space Planning",
      "Design & Construction Execution",
      "Operational Readiness Handover"
    ],
    outcome: "The final result is a business space that is ready for immediate use, designed to support your operations and attract customers.",
    icon: "business",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEaeFV-7KNBpps2-ELWn3KUvW7uFq7zlkDp2UR0JZ1fotpCQU5pnDn51g6xWJCASKsABXVdbItcamjtlpJaMebg9sd8IEPSsrfP92GrTOBvZOR553mIksZmLejdjmfFWkpqU6xwePrx5INhavcV6sWU1daQ_R4vURLD7D4hEfT2TNCbkKL5yXQ8JxRWqKw8jlo7IUVVUllNt8CC-aZDdbIVpKxAyF3AunTl4FrSrzw8Mu0X7KxdjKAejvlprI84Sh69_HrPajLNS8"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="bg-background-dark py-20 sm:py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <header className="pb-16 sm:pb-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="h-[1px] w-8 sm:w-12 bg-primary"></div>
                <h2 className="text-primary font-display text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase">Professional Solutions</h2>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] uppercase tracking-tighter text-white">
                Our <br/> <span className="text-primary">Services</span>
              </h1>
            </div>
            <AnimatedBlock delay={0.1}>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-light">
                We deliver a comprehensive range of construction and engineering services, focusing on technical precision and reliable project execution for every client.
              </p>
            </AnimatedBlock>
          </div>
        </header>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
              onClick={() => setSelectedService(service)}
              className="service-card group relative overflow-hidden bg-charcoal aspect-[4/5] sm:aspect-[3/4] cursor-pointer"
            >
              <img 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
                src={service.image}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent transition-opacity duration-500"></div>
              <div className="absolute inset-0 border-primary/0 sm:group-hover:border-primary/20 sm:border-8 transition-all duration-700 pointer-events-none"></div>
              <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="font-display text-3xl sm:text-4xl text-primary/40 group-hover:text-primary transition-colors duration-500 font-bold">{service.id}</span>
                  <span className="material-symbols-outlined text-primary/60 text-2xl sm:text-3xl transform -rotate-45 group-hover:rotate-0 transition-transform duration-700">{service.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl text-white mb-3 sm:mb-4 uppercase tracking-wider leading-tight">{service.title}</h3>
                  <p className="text-slate-400 text-[11px] sm:text-[12px] leading-relaxed font-light opacity-100 sm:opacity-0 sm:group-hover:opacity-100 translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-all duration-700">
                    {service.overview.substring(0, 100)}...
                  </p>
                  <div className="mt-6 flex items-center gap-4 sm:group-hover:gap-6 transition-all duration-500">
                    <div className="h-[1px] w-6 sm:w-8 bg-primary"></div>
                    <span className="text-[8px] sm:text-[9px] font-display tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-700">Explore Detail</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
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
              className="bg-surface-dark w-full sm:max-w-6xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto border-0 sm:border sm:border-white/10 relative no-scrollbar"
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 z-50 text-white/50 hover:text-primary transition-colors bg-black/20 p-2 sm:p-0 rounded-full sm:bg-transparent"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-full sm:min-h-0">
                <div className="h-64 sm:h-[400px] lg:h-full relative">
                  <img 
                    src={selectedService.image} 
                    alt={selectedService.title} 
                    className="w-full h-full object-cover grayscale-[0.5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-dark to-transparent lg:hidden"></div>
                </div>
                
                <div className="p-6 sm:p-12 md:p-16 space-y-10 sm:space-y-12">
                  <div>
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <span className="text-primary font-display text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">{selectedService.id} / SERVICE DETAIL</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white uppercase tracking-tighter mb-6 sm:mb-8">
                      {selectedService.title}
                    </h2>
                    <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
                      {selectedService.overview}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
                    <div className="space-y-4 sm:space-y-6">
                      <h4 className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase border-b border-primary/20 pb-2">What We Do</h4>
                      <ul className="space-y-3">
                        {selectedService.scope.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-xs sm:text-sm text-slate-400">
                            <span className="text-primary mt-1 text-[8px]">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4 sm:space-y-6">
                      <h4 className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase border-b border-primary/20 pb-2">Ideal Clients</h4>
                      <ul className="space-y-3">
                        {selectedService.clients.map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-xs sm:text-sm text-slate-400">
                            <span className="text-primary mt-1 text-[8px]">●</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <h4 className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase border-b border-primary/20 pb-2">Our Execution Process</h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4">
                      {selectedService.process.map((step, i) => (
                        <div key={i} className="space-y-2">
                          <span className="text-white/20 font-display text-lg sm:text-xl">0{i+1}</span>
                          <p className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-widest leading-tight">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 p-6 sm:p-8 border-l-2 border-primary">
                    <h4 className="text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2">Expected Outcome</h4>
                    <p className="text-slate-400 text-xs sm:text-sm italic">"{selectedService.outcome}"</p>
                  </div>

                  <div className="pt-4 sm:pt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 pb-8 sm:pb-0">
                    <button className="w-full sm:w-auto bg-primary text-black px-8 sm:px-10 py-4 sm:py-5 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase hover:bg-white transition-all">
                      Start Your Project
                    </button>
                    <button className="w-full sm:w-auto border border-white/10 text-white px-8 sm:px-10 py-4 sm:py-5 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase hover:border-primary transition-all">
                      Request Consultation
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
