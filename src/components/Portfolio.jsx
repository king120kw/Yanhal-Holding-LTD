import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";


const projects = [
    {
        title: "The Golden Heights",
        category: "Residential Architecture",
        image: "/15_residential.webp",
    },
    {
        title: "Skyline Corporate Hub",
        category: "Commercial Development",
        image: "/11_commercial.webp",
    },
    {
        title: "Eco-Industrial Complex",
        category: "Industrial Infrastructure",
        image: "/13_workplace.webp",
    },
    {
        title: "Azure Infinity Oasis",
        category: "Hydro-Engineering",
        image: "/4_pool.webp",
    },
    {
        title: "Historical Restoration",
        category: "Heritage Architecture",
        image: "/8_renovation.webp",
    },
    {
        title: "Manhattan Penthouse",
        category: "Interior Architecture",
        image: "/5_interior_showcase.webp",
    },
];

export default function Portfolio() {
    return (
        <SectionWrapper id="portfolio" className="bg-[#0A0A0A]">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase">Archive & Landmarks</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white uppercase tracking-tighter leading-none">
                        ARCHITECTURAL <span className="text-neutral-500">LEGACIES</span>
                    </h2>
                </div>
                <div className="flex gap-10 border-b border-white/5 pb-2">
                    {["All", "Residential", "Commercial", "Interiors", "Technical"].map(filter => (
                        <button key={filter} className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-neutral-500 hover:text-[#C5A059] transition-colors relative group">
                            {filter}
                            <span className="absolute -bottom-[9px] left-0 w-0 h-[1px] bg-[#C5A059] transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/5">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[4/5] overflow-hidden border-[0.5px] border-white/5 bg-[#141414]"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <div className="overflow-hidden mb-2">
                                <span className="text-[#C5A059] text-[9px] font-display font-bold uppercase tracking-[0.4em] translate-y-full block group-hover:translate-y-0 transition-transform duration-500">{project.category}</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider mb-6 leading-tight translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                {project.title}
                                <span className="block w-12 h-[1px] bg-[#C5A059] mt-4 group-hover:w-full transition-all duration-700"></span>
                            </h3>
                            <a href="#" className="inline-flex items-center gap-4 text-white text-[9px] font-display font-bold uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                VIEW CASE <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <button className="px-16 py-6 border border-white/10 hover:border-[#C5A059]/50 text-white font-display font-bold uppercase tracking-[0.5em] text-[10px] transition-all bg-white/5 group relative overflow-hidden">
                    <span className="relative z-10">EXPLORE FULL ARCHIVE</span>
                    <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="absolute inset-0 z-20 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-neutral-900">EXPLORE FULL ARCHIVE</span>
                </button>
            </div>
        </SectionWrapper>
    );
}
