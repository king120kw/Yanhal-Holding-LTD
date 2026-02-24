import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { ArrowUpRight, Home, Building, PencilRuler, Droplets, HardHat, Warehouse } from "lucide-react";

const services = [
    {
        title: "Construction Excellence",
        desc: "High-end residential builds focusing on precision engineering and premium materials for a lasting legacy.",
        image: "/15_residential.webp",
        id: "construction",
    },
    {
        title: "Urban Development",
        desc: "Bespoke residential complexes that redefine urban luxury through thoughtful space and form.",
        image: "/11_commercial.webp",
        id: "urban",
    },
    {
        title: "Aqua & Landscape",
        desc: "Sculpting natural elements into refined outdoor experiences including infinity pools and gardens.",
        image: "/4_pool.webp",
        id: "aqua",
    },
    {
        title: "Corporate Structures",
        desc: "Strategic commercial landmarks that unify brand identity with architectural permanence.",
        image: "/13_workplace.webp",
        id: "corporate",
    },
    {
        title: "Modern Restoration",
        desc: "Infusing legacy structures with contemporary technology and aesthetic sophistication.",
        image: "/8_renovation.webp",
        id: "restoration",
    },
    {
        title: "Interior Curation",
        desc: "Harmonizing texture, light, and materiality to create interiors of unparalleled elegance.",
        image: "/5_interior_showcase.webp",
        id: "interior",
    },
];

export default function ServiceShowcase() {
    return (
        <SectionWrapper id="services" className="bg-[#0A0A0A] px-6">
            <div className="text-center mb-24 max-w-3xl mx-auto">
                <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">Our Expertise</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
                    THE <span className="text-[#C5A059]">CORE</span> SERVICES
                </h2>
                <div className="w-20 h-1 bg-[#C5A059] mx-auto mb-8"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative p-8 bg-[#141414] border-[0.5px] border-white/5 overflow-hidden cursor-pointer flex flex-col"
                        onClick={() => document.getElementById(service.id)?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        {/* Number Overlay */}
                        <div className="absolute top-4 right-6 z-20">
                            <span className="font-display text-5xl font-bold text-white/[0.05] group-hover:text-[#C5A059]/30 transition-colors duration-700">
                                0{index + 1}
                            </span>
                        </div>

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="h-56 w-full mb-8 overflow-hidden border border-white/5 rounded-sm">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                            </div>

                            <h3 className="text-xl font-display font-bold text-white mb-4 tracking-wide group-hover:text-[#C5A059] transition-colors duration-500">
                                {service.title}
                            </h3>

                            <div className="mt-auto flex flex-col">
                                <p className="text-neutral-500 leading-relaxed text-sm font-light mb-8">
                                    {service.desc}
                                </p>

                                <div className="inline-flex items-center gap-4 text-[10px] font-display font-bold text-[#C5A059] uppercase tracking-[0.4em] transition-all duration-500 group-hover:gap-6">
                                    EXPLORE <span className="w-12 h-[1px] bg-[#C5A059]"></span>
                                </div>
                            </div>
                        </div>

                        {/* Hover Background Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A059]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
