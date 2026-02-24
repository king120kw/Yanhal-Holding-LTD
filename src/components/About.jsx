import { motion } from "framer-motion";
import Stats from "./Stats"; // Import existing Stats to render within About or sequentially

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-10 h-[1px] bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase">About Yanhal</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight tracking-tighter">
                        COMPANY <span className="text-[#C5A059]">LEGACY</span>
                    </h2>
                    <p className="text-neutral-400 font-light leading-relaxed mb-6">
                        Yanhal Holding LTD stands at the intersection of architectural brilliance and engineering precision. We don't just build structures; we curate environments that redefine modern living.
                    </p>
                    <p className="text-neutral-400 font-light leading-relaxed mb-10">
                        With a legacy rooted in luxury construction and sustainable innovation, our firm has consistently delivered award-winning projects. Our vision is to harmonize the raw beauty of natural landscapes with the sophisticated requirements of contemporary design.
                    </p>
                    <div className="border-l border-[#C5A059] pl-6">
                        <h4 className="text-white font-display font-bold text-xs tracking-widest uppercase mb-2">Design Studio</h4>
                        <p className="text-neutral-500 font-light text-sm">Quebec, Canada</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                    {/* Embedded Stats Cards */}
                    <div className="p-10 border border-white/5 bg-white/[0.02] text-center group">
                        <span className="material-symbols-outlined text-[#C5A059] text-3xl mb-4 group-hover:scale-110 transition-transform">rewarded_ads</span>
                        <div className="text-4xl font-display font-bold text-white mb-2">24</div>
                        <div className="text-[9px] font-display font-bold uppercase tracking-widest text-neutral-500">Awards</div>
                    </div>
                    <div className="p-10 border border-white/5 bg-white/[0.02] text-center group">
                        <span className="material-symbols-outlined text-[#C5A059] text-3xl mb-4 group-hover:scale-110 transition-transform">public</span>
                        <div className="text-4xl font-display font-bold text-white mb-2">140+</div>
                        <div className="text-[9px] font-display font-bold uppercase tracking-widest text-neutral-500">Projects</div>
                    </div>
                    <div className="p-10 border border-white/5 bg-white/[0.02] text-center group">
                        <span className="material-symbols-outlined text-[#C5A059] text-3xl mb-4 group-hover:scale-110 transition-transform">groups</span>
                        <div className="text-4xl font-display font-bold text-white mb-2">3K+</div>
                        <div className="text-[9px] font-display font-bold uppercase tracking-widest text-neutral-500">Clients</div>
                    </div>
                    <div className="p-10 border border-white/5 bg-white/[0.02] text-center group">
                        <span className="material-symbols-outlined text-[#C5A059] text-3xl mb-4 group-hover:scale-110 transition-transform">engineering</span>
                        <div className="text-4xl font-display font-bold text-white mb-2">85</div>
                        <div className="text-[9px] font-display font-bold uppercase tracking-widest text-neutral-500">Engineers</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
