import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedBlock from "./AnimatedBlock";
import LeadershipCard from "./LeadershipCard";

const TypewriterLoop = ({ mainText, subText }: { mainText: string, subText: string }) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = mainText + "|" + subText;

  useEffect(() => {
    const typingSpeed = 60;
    const deletingSpeed = 30;
    const pauseBeforeDelete = 4000;
    const pauseBeforeType = 1000;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && displayText === "") {
      timer = setTimeout(() => setIsDeleting(false), pauseBeforeType);
    } else {
      const nextChar = isDeleting 
        ? fullText.slice(0, displayText.length - 1)
        : fullText.slice(0, displayText.length + 1);

      timer = setTimeout(() => {
        setDisplayText(nextChar);
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, fullText]);

  const parts = displayText.split("|");
  const renderedMain = parts[0];
  const renderedSub = parts[1];

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <p className="italic min-h-[40px] sm:min-h-[24px]">
        {renderedMain}
        {renderedSub === undefined && <span className="animate-pulse border-r-[1.5px] border-primary ml-0.5 inline-block h-[0.9em] translate-y-[0.1em]"></span>}
      </p>
      <p className="text-[10px] text-primary uppercase tracking-widest min-h-[15px]">
        {renderedSub !== undefined ? renderedSub : ""}
        {renderedSub !== undefined && <span className="animate-pulse border-r-[1.5px] border-primary ml-0.5 inline-block h-[0.9em] translate-y-[0.1em]"></span>}
      </p>
    </div>
  );
};

export default function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const leaders = [
    {
      name: "Ismail Abdirahman",
      role: "Chief Executive Officer (CEO)",
      coverUrl: "/leaders/isma.jpg",
      characterUrl: "/leaders/isma2.jpg",
      modalImageUrl: "/leaders/isma2.jpg",
      bio: [
        "Ismail Abdirahman is the Chief Executive Officer of Yanhal Holdings Ltd, providing strategic leadership and overall direction for the company’s operations in construction and project development. As the driving force behind the organization, he is responsible for shaping the company’s vision, establishing operational standards, and ensuring that every project reflects a balance of quality, efficiency, and long-term value.",
        "With a strong foundation in project coordination and construction oversight, Ismail plays an active role in guiding projects from initial concept through to completion. His leadership approach is centered on precision, accountability, and structured execution, ensuring that all aspects of a project—from planning and budgeting to resource allocation and delivery—are managed effectively.",
        "He works closely with engineers, site managers, and stakeholders to align technical execution with client expectations, maintaining clear communication and transparency throughout the project lifecycle. His ability to oversee multiple moving parts while maintaining a focus on detail enables Yanhal Holdings to deliver consistent and reliable results across its portfolio.",
        "Ismail’s leadership is defined by a commitment to building not just structures, but lasting relationships with clients through trust, professionalism, and performance. Under his direction, the company continues to grow its presence in both residential and commercial construction, with a focus on delivering projects that meet modern standards and practical functionality."
      ]
    },
    {
      name: "Dahir Yusuf",
      role: "Project Manager – Buildings & Road Construction",
      coverUrl: "/leaders/dahir1.jpg",
      characterUrl: "/leaders/dahir2.jpg",
      modalImageUrl: "/leaders/dahir2.jpg",
      bio: [
        "Dahir Yusuf serves as Project Manager at Yanhal Holdings Ltd, where he oversees the day-to-day execution of construction projects, ensuring that all site activities are carried out efficiently, safely, and in accordance with engineering standards. With strong on-site experience, he plays a central role in turning project plans into tangible, well-constructed outcomes.",
        "In his role, Dahir is responsible for supervising site operations, coordinating with contractors and labor teams, and monitoring progress to ensure that timelines and project milestones are met. He maintains strict oversight of construction quality, ensuring that materials, structural elements, and workmanship adhere to required specifications and industry standards.",
        "His expertise spans across structural construction and infrastructure development, including foundations, reinforced concrete works, and road-related projects. Dahir is also actively involved in problem-solving on-site, addressing challenges in real time to keep projects moving forward without compromising quality or safety.",
        "With a disciplined and detail-oriented approach, he ensures that every stage of construction is executed with accuracy and consistency. His ability to manage teams, track progress, and maintain clear communication between all parties involved makes him a key contributor to the successful delivery of projects at Yanhal Holdings."
      ]
    }
  ];

  return (
    <section id="leadership" className="py-24 sm:py-32 px-6 lg:px-20 bg-background-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-24">
          <AnimatedBlock delay={0}>
            <div className="flex items-center justify-center gap-4 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-px bg-primary/50"></span>
              <span className="text-primary font-display text-[10px] sm:text-xs tracking-[0.4em] sm:tracking-[0.5em] uppercase">Executive Team</span>
              <span className="w-8 sm:w-12 h-px bg-primary/50"></span>
            </div>
          </AnimatedBlock>
          
          <AnimatedHeading>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter mb-6 sm:mb-8">
              Leadership <span className="text-primary">At Yanhal</span>
            </h2>
          </AnimatedHeading>
          
          <AnimatedBlock delay={0.1}>
            <p className="text-lg sm:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto px-4">
              Driven by vision and executed with precision. Meet the minds steering Yanhal Holdings toward structural excellence and sustainable growth.
            </p>
          </AnimatedBlock>
        </div>

        <div className="relative group/scroll">
          <div className="flex sm:grid sm:grid-cols-2 gap-8 sm:gap-16 lg:gap-24 overflow-x-auto sm:overflow-x-visible pb-8 sm:pb-0 snap-x snap-mandatory scrollbar-hide px-4 -mx-4 sm:px-0 sm:mx-0">
            {leaders.map((leader, index) => (
              <div key={index} className="flex flex-col min-w-[280px] sm:min-w-0 snap-center">
                <LeadershipCard 
                  index={index}
                  name={leader.name}
                  role={leader.role}
                  coverUrl={leader.coverUrl}
                  characterUrl={leader.characterUrl}
                  onClick={() => setExpandedIndex(index)}
                />
              </div>
            ))}
          </div>
          
          {/* Mobile Scroll Indicator */}
          <div className="flex sm:hidden justify-center gap-2 mt-4">
            {leaders.map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/30"></div>
            ))}
          </div>
        </div>
        
        <AnimatedBlock delay={0.4}>
          <div className="mt-20 text-center">
             <div className="text-xs sm:text-sm text-gray-400 max-w-lg mx-auto font-light">
               <TypewriterLoop 
                 mainText="“And that there is not for man except that [good] for which he strives.”" 
                 subText="— Surah An-Najm (53:39)" 
               />
             </div>
          </div>
        </AnimatedBlock>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {expandedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ pointerEvents: 'auto' }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
              onClick={() => setExpandedIndex(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-5xl bg-surface-dark border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setExpandedIndex(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-primary transition-colors border border-white/10"
                aria-label="Close modal"
              >
                <span className="material-symbols-outlined">close</span>
              </button>

              {/* Left side: Image */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative bg-charcoal flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10 pointer-events-none"></div>
                <img 
                  src={leaders[expandedIndex].modalImageUrl || leaders[expandedIndex].coverUrl} 
                  alt={leaders[expandedIndex].name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right side: Content */}
              <div className="w-full md:w-3/5 p-6 sm:p-10 overflow-y-auto scrollbar-hide">
                <h3 className="text-3xl sm:text-4xl font-display font-bold text-white uppercase tracking-wider mb-2">
                  {leaders[expandedIndex].name}
                </h3>
                <p className="text-primary text-xs sm:text-sm tracking-[0.3em] uppercase font-bold mb-8 pb-4 border-b border-white/10">
                  {leaders[expandedIndex].role}
                </p>
                
                <div className="space-y-4">
                  {leaders[expandedIndex].bio.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-gray-300 font-light leading-relaxed text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
