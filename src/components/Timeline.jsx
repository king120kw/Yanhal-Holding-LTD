import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Search, PenTool, HardHat, ShieldCheck } from "lucide-react";

const steps = [
    {
        title: "Conceptual Architecture",
        desc: "We analyze site context and user requirements to formulate the primary architectural language.",
        iconName: "search_insights",
        image: "/9_house_plan.webp",
    },
    {
        title: "Technical Detailing",
        desc: "Precision drafting and structural engineering integrated with regulatory compliance strategies.",
        iconName: "architecture",
        image: "/16_estimator.webp",
    },
    {
        title: "Structural Execution",
        desc: "Advanced construction methodology utilizing premium materials and expert craftsmanship.",
        iconName: "engineering",
        image: "/1_services_showcase.webp",
    },
    {
        title: "Quality Assurance",
        desc: "Meticulous final inspections ensuring all structural and aesthetic standards are exceeded.",
        iconName: "verified",
        image: "/14_portfolio.webp",
    },
];

export default function Timeline() {
    return (
        <SectionWrapper id="process" className="bg-[#0A0A0A] relative overflow-hidden">
            {/* CAD Background Layer */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                        <pattern id="diagonal" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M-1,1 l2,-2 M0,10 l10,-10 M9,11 l2,-2" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-24">
                    <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">Our Methodology</span>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
                        THE <span className="text-neutral-500">CONSTRUCTION</span> JOURNEY
                    </h2>
                    <div className="w-20 h-1 bg-[#C5A059] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/5">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative p-12 border-l border-white/5 group"
                        >
                            {/* Large Outline Number */}
                            <div className="absolute top-4 right-6 z-20">
                                <span className="font-display text-[80px] font-bold leading-none opacity-5 transition-all duration-700 group-hover:opacity-30 select-none"
                                    style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
                                    {index + 1}
                                </span>
                            </div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="h-48 w-full bg-[#141414] mb-8 overflow-hidden rounded-sm border border-white/10 group-hover:border-[#C5A059] transition-colors duration-500">
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                </div>
                                <span className="text-[#C5A059] font-display text-[10px] tracking-[0.3em] font-bold mb-4 block uppercase leading-none">
                                    Phase 0{index + 1}
                                </span>
                                <h3 className="text-lg font-display font-bold text-white uppercase tracking-widest mb-4 leading-tight group-hover:text-[#C5A059] transition-colors duration-500">
                                    {step.title}
                                </h3>
                                <div className="w-8 h-[1px] bg-[#C5A059] mb-4 group-hover:w-full transition-all duration-700"></div>
                                <p className="text-neutral-500 text-sm leading-relaxed font-light mt-auto">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
