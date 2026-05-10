import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import RestorationSlider from "./RestorationSlider";

function Typewriter({ texts }: { texts: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentIndex];
    const getRandomSpeed = (base: number, variation: number) => base + Math.random() * variation;

    if (!isDeleting) {
      if (displayedText.length < currentFullText.length) {
        const timer = setTimeout(() => {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        }, getRandomSpeed(48, 38));
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1650);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayedText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, getRandomSpeed(28, 18));
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, [displayedText, isDeleting, currentIndex, texts]);

  return (
    <div className="min-h-[360px] md:min-h-[280px] mb-12">
      <p className="text-lg md:text-xl text-zinc-100 font-sans font-medium leading-relaxed tracking-tight">
        {displayedText}
        <span className="inline-block w-[3px] h-[1.1em] bg-primary align-middle ml-2 animate-[blink_0.75s_step-end_infinite]" />
      </p>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

interface Project {
  title: string;
  location: string;
  description: string;
  details: string;
  keyPoints: string[];
  result: string;
  image: string;
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isRestorationModalOpen, setIsRestorationModalOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const restorationContent = [
    "THE ART OF REBIRTH THROUGH PURPOSEFUL RENOVATION",
    "At Yanhal Holdings Ltd, transformation is not just about changing how a space looks—it is about restoring its purpose, improving its functionality, and extending its value. Many spaces lose efficiency over time due to outdated layouts, worn materials, or changing needs. Our role is to identify these limitations and turn them into opportunities for improvement.",
    "Every renovation project begins with a careful assessment of the existing structure. We look at what is no longer working—whether it is poor space utilization, outdated finishes, or structural wear—and develop a practical plan to upgrade the space without unnecessary reconstruction. This allows clients to achieve meaningful improvements while maintaining cost efficiency.",
    "Our approach focuses on refining what already exists rather than replacing it entirely. By reworking layouts, upgrading finishes, and improving structural elements where necessary, we are able to create spaces that feel renewed, more efficient, and better aligned with modern use.",
    "The transformation process is guided by three key priorities:",
    "Restoration of Functionality: Ensuring the space works better for its intended purpose through improved layout and usability",
    "Modernization of Finishes: Replacing outdated materials with cleaner, more durable, and visually consistent alternatives",
    "Value Enhancement: Increasing the overall usability and long-term worth of the property without unnecessary rebuilding",
    "Through this process, spaces are not just renovated—they are repositioned to serve their purpose more effectively, offering clients a renewed environment that is practical, efficient, and ready for continued use."
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const projects: Project[] = [
    {
      title: "Modern Retail Kiosk Development",
      location: "Commercial Project",
      description: "Design and construction of a compact retail kiosk optimized for high-traffic commercial use and efficient workflow.",
      details: "This project involved the design and construction of a compact retail kiosk intended for high-traffic commercial use. The initial structure lacked visual appeal and was not optimized for customer interaction or efficient workflow. The objective was to transform it into a functional and attractive business space that could support daily operations while drawing customer attention.\n\nThe approach focused on maximizing limited space while ensuring durability and ease of use. The layout was carefully structured to allow smooth movement within the kiosk, while the exterior was designed to create a strong visual presence. Finishing materials were selected based on both appearance and long-term usability, ensuring that the kiosk could withstand continuous use.",
      keyPoints: [
        "Redesigning the internal layout to improve workflow efficiency",
        "Upgrading exterior finishing to enhance visibility and branding",
        "Using durable materials suitable for daily commercial activity",
        "Ensuring the structure was compact yet fully functional"
      ],
      result: "The final result was a modern, well-structured kiosk that not only improved operational efficiency but also created a more professional and inviting presence for customers.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEaeFV-7KNBpps2-ELWn3KUvW7uFq7zlkDp2UR0JZ1fotpCQU5pnDn51g6xWJCASKsABXVdbItcamjtlpJaMebg9sd8IEPSsrfP92GrTOBvZOR553mIksZmLejdjmfFWkpqU6xwePrx5INhavcV6sWU1daQ_R4vURLD7D4hEfT2TNCbkKL5yXQ8JxRWqKw8jlo7IUVVUllNt8CC-aZDdbIVpKxAyF3AunTl4FrSrzw8Mu0X7KxdjKAejvlprI84Sh69_HrPajLNS8"
    },
    {
      title: "Interior Space Transformation",
      location: "Commercial Use",
      description: "Upgrading an outdated commercial interior to improve functionality, organization, and visual appeal for better customer retention.",
      details: "This project focused on upgrading an existing commercial interior that was outdated and underutilized. The space did not effectively support business operations and lacked the visual appeal needed to attract and retain customers.\n\nThe goal was to redesign the space to make it more functional, organized, and visually modern. This involved rethinking the layout, improving lighting, and applying updated finishes that aligned with current design standards.\n\nA major part of the transformation was ensuring that the space was not just visually improved, but also practical for everyday use. Movement within the space was optimized, and key functional areas were clearly defined to support business activities.",
      keyPoints: [
        "Reorganizing the layout to improve usability and flow",
        "Enhancing lighting to create a brighter and more welcoming environment",
        "Applying modern finishes to walls, floors, and ceilings",
        "Creating a cleaner and more professional overall appearance"
      ],
      result: "The completed space became more efficient for operations and significantly more appealing to customers, directly improving its usability and value.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyhLfJI6qcVsd547X9vsbARSrm5GpwUKhF1HoFXKBBL9kGpzmc7HstQP6ak-NEl0EiBxou5nIkozYkc69mjhRrHNQqpt2wXTgn2GEaofQLgJzWUHMWaftvsLI1iM4nsMtqS_SDB_IlDqVuRRvxRw86jBhuoZNwqftw_526fbrIl6pL2TgzpMCeya4hcS6dJVY5sgsBz-YkI6jIxAyweo84J_rdvcfjE2OF69UVBk5pKFk1M9xbZazpWqXms6QDsi1_61fxmjOOMMw"
    },
    {
      title: "Residential Interior Upgrade",
      location: "Residential Project",
      description: "Modernizing a residential interior with a focus on better space utilization, refined finishes, and overall comfort.",
      details: "This project involved improving a residential interior that required modernization and better space utilization. The existing setup was functional but lacked cohesion, comfort, and a refined finish.\n\nThe approach taken was to enhance both the aesthetic and practical aspects of the space. This included updating surfaces, improving layout balance, and ensuring that each area served its intended purpose more effectively.\n\nAttention was given to details such as finishing quality, color consistency, and spatial organization. The goal was to create a space that felt complete, comfortable, and visually aligned.",
      keyPoints: [
        "Updating interior finishes for a cleaner and more modern look",
        "Improving spatial arrangement for better functionality",
        "Enhancing overall comfort and livability",
        "Ensuring consistency in design across the space"
      ],
      result: "The result was a well-balanced residential interior that felt more organized, modern, and suitable for everyday living.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfwlau3HJ5dxfSxI6IMFl_i59YPCeUTuNOmUEb3Y14OeQemBQqkZAKks3SVhgITJxGuAWP_elxuY4lMB0i5-_qcGAuQWEUQNR_lHuuERE6aDo4Al0TfsSp7vOBVOKg2voPtQWM08Ib4zEu6b_ZQtj4mxpy7potvRYXktCnF1U9f5dxJmX23To6GqYjO6TDFVs3glb1Jb991qYt01-aPkCvExQF6mHLJB2qAgbcf8YAQJwcOjLEA4HXOPxwh3XtbinxFi9suCwPc_E"
    },
    {
      title: "Renovation & Structural Improvement",
      location: "Structural Project",
      description: "Strategically restoring and upgrading an existing structure to improve functionality and extend its usability.",
      details: "This project involved the renovation of an existing structure that had begun to show signs of wear and inefficiency. The objective was to restore the space while also improving its functionality and extending its usability.\n\nRather than rebuilding entirely, the focus was on identifying weak points and upgrading them strategically. This included repairing structural elements, replacing outdated materials, and improving the overall layout where necessary.\n\nThe challenge was to work within the existing structure while achieving a noticeable transformation. This required careful planning and execution to ensure that improvements were both effective and cost-efficient.",
      keyPoints: [
        "Assessing and addressing structural weaknesses",
        "Replacing worn-out materials with more durable alternatives",
        "Improving layout functionality without major reconstruction",
        "Enhancing the overall appearance of the space"
      ],
      result: "The final outcome was a renewed structure that was safer, more functional, and visually improved, without the need for complete redevelopment.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBU5rrJrv0XSO0txUIddgRLI4hOVJqCIxPZDcr32giPrLr3EoRik0_-YfPdnc_KtgpzJJm-_45B588EmCsQfjwNwaKxT4PysG9Of6wAyO-byQ3Xn48JvYeevNUaKaK3FY8K-kEftEFLykf5-RLZ0uvao4s9GOUtehJnukMTc-hy-VsI2ob7M114D4l_LsJ5zllEmHvTse1DkBNqRiWe7j7eK-Wj_K6o0gADqR25ghBDDp_8_HZNwJmgTJt0f7a3Rl_AgfdIFSfp3OE"
    },
    {
      title: "Custom Business Setup",
      location: "Small Commercial Space",
      description: "Creating a tailored, practical, and visually presentable business environment for small-scale commercial operations.",
      details: "This project focused on creating a tailored business environment for a small-scale commercial operation. The client required a space that was practical, visually presentable, and aligned with their business needs.\n\nThe design process centered around understanding how the business operates on a daily basis. This allowed for the creation of a layout that supported workflow efficiency while also maintaining a professional appearance.\n\nConstruction and finishing were handled with attention to both durability and presentation, ensuring that the space could handle regular use while still appealing to customers.",
      keyPoints: [
        "Custom layout tailored to business operations",
        "Efficient use of limited space",
        "Durable construction suitable for daily use",
        "Clean and professional finishing"
      ],
      result: "The completed setup provided the client with a ready-to-use business space that supported both functionality and customer engagement.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4WjWo8QINsAcQrYNWldg-_yGtyRXcaY9GxuqfxqqJUNjJKGVKJK9k6BzdvAdOzlrFc0qGytCm7nFfkPVpw2UlXE0TD5jpBgQTsdfZnze6HPKR-F_LIJU5GB6vFn6scCUpiJeERFbPfixe-j6ROpmSAdI1CdlLIAY80wEX0mhEBON0ym3N7POBq2yiTBXEz4MzKsTFVLNow8pdkmwATpc0EgppXhpFChCjd0QtqA3nJNn-BlEaoP5KLBdor2BL9MWporxSU7Evb2s"
    }
  ];

  return (
    <>
    <section id="portfolio" className="bg-charcoal py-20 sm:py-32 overflow-hidden border-y border-white/5">
      <div className="px-6 sm:px-10 mb-12 sm:mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
        <div>
          <span className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] mb-3 sm:mb-4 block uppercase leading-none">The Portfolio</span>
          <h3 className="font-display text-3xl sm:text-4xl text-white tracking-tighter uppercase leading-none">Project Showcase</h3>
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <button 
            onClick={() => scroll('left')}
            className="flex-1 sm:w-14 sm:h-14 py-4 sm:py-0 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="flex-1 sm:w-14 sm:h-14 py-4 sm:py-0 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar gap-6 sm:gap-8 px-6 sm:px-10 pb-10 snap-x snap-mandatory"
      >
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedProject(project)}
            className="snap-center min-w-[85vw] sm:min-w-[65vw] lg:min-w-[45vw] group relative h-[60vh] sm:h-[75vh] border border-white/5 transition-all duration-500 hover:border-primary/50 overflow-hidden cursor-pointer rounded-sm"
          >
            <img 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              src={project.image}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 sm:p-12 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
              <div className="max-w-md">
                <span className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2 sm:mb-3 block">{project.location}</span>
                <h4 className="text-white font-display text-3xl sm:text-5xl font-bold tracking-tighter uppercase leading-tight">{project.title}</h4>
                <p className="text-white/40 text-[10px] sm:text-[11px] mt-3 sm:mt-4 max-w-xs uppercase tracking-widest leading-relaxed hidden sm:block">{project.description}</p>
              </div>
              <button className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shrink-0">
                <span className="material-symbols-outlined text-primary group-hover:text-black">arrow_outward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 text-white/50 hover:text-primary transition-colors bg-black/20 p-2 sm:p-0 rounded-full sm:bg-transparent"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 sm:h-[400px] lg:h-full relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover grayscale-[0.5]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface-dark to-transparent lg:hidden"></div>
                </div>
                
                <div className="p-6 sm:p-12 space-y-8 sm:space-y-10">
                  <div>
                    <div className="flex items-center gap-4 mb-4 sm:mb-6">
                      <span className="text-primary font-display text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase leading-none">{selectedProject.location}</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-display font-bold text-white uppercase tracking-tighter mb-6 sm:mb-8 leading-tight">
                      {selectedProject.title}
                    </h2>
                    <p className="text-slate-300 text-sm leading-relaxed font-light whitespace-pre-line">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <h4 className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.3em] uppercase border-b border-primary/20 pb-2">Key Highlights</h4>
                    <ul className="space-y-3">
                      {selectedProject.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                          <span className="text-primary mt-1 text-[8px]">●</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 p-6 sm:p-8 border-l-2 border-primary">
                    <h4 className="text-white font-bold text-xs sm:text-sm mb-1 sm:mb-2">Final Result</h4>
                    <p className="text-slate-400 text-xs sm:text-sm italic">"{selectedProject.result}"</p>
                  </div>

                  <div className="pt-4 pb-8 sm:pb-0">
                    <button 
                      onClick={() => setSelectedProject(null)}
                      className="bg-primary text-black px-10 py-5 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all w-full"
                    >
                      Close Showcase
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Restoration Detail Modal */}
      <AnimatePresence>
        {isRestorationModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0, 0.2, 1] }}
              className="bg-surface-dark w-full sm:max-w-4xl h-full sm:h-auto sm:max-h-[90vh] overflow-y-auto border-0 sm:border sm:border-white/10 relative no-scrollbar p-8 sm:p-16"
            >
              <button 
                onClick={() => setIsRestorationModalOpen(false)}
                className="absolute top-6 right-6 z-50 text-white/50 hover:text-primary transition-colors bg-black/20 p-2 sm:p-0 rounded-full sm:bg-transparent"
              >
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>

              <div className="space-y-10 sm:space-y-12">
                <div>
                  <span className="text-primary font-display text-[10px] tracking-[0.5em] mb-4 block uppercase leading-none">The Manifesto</span>
                  <h2 className="text-3xl sm:text-5xl font-display font-bold text-white uppercase tracking-tighter leading-tight">
                    The Art of <br/><span className="text-primary italic">Rebirth</span>
                  </h2>
                </div>

                <div className="space-y-6 sm:space-y-8">
                  {restorationContent.map((paragraph, idx) => (
                    <p 
                      key={idx} 
                      className={`text-slate-300 leading-relaxed font-light ${
                        idx === 0 ? "text-lg sm:text-xl font-medium text-white border-l-2 border-primary pl-4 sm:pl-6 py-2" : "text-sm sm:text-base"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/10 pb-8 sm:pb-0">
                  <button 
                    onClick={() => setIsRestorationModalOpen(false)}
                    className="bg-primary text-black px-12 py-5 font-display text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-all w-full"
                  >
                    Close Manifesto
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
    {/* Restoration slider: full-width, outside the portfolio section */}
    <RestorationSlider />
    </>
  );
}
