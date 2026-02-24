import { motion } from "framer-motion";

export default function InteriorShowcase() {
    return (
        <section id="interior-gallery" className="py-24 bg-[#0A0A0A] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-4 mb-4">
                            <div className="w-10 h-[1px] bg-[#C5A059]"></div>
                            <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase">Material Alchemy</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-display font-bold text-white tracking-tighter">
                            INTERIOR <span className="text-transparent" style={{ WebkitTextStroke: '1px #C5A059' }}>DESIGN</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-md text-neutral-400 font-light text-sm"
                    >
                        We harmonize texture, light, and materiality to create interiors of unparalleled elegance. Every surface and detail is curated for sensory perfection.
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="group relative h-[500px] overflow-hidden"
                    >
                        <img src="/5_interior_showcase.webp" alt="Luxury Living Room" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase tracking-wide">Living Spaces</h3>
                                <p className="text-[#C5A059] font-display text-[10px] tracking-[0.3em] uppercase">Bespoke Curation</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-rows-2 gap-6 h-[500px]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="group relative h-full overflow-hidden"
                        >
                            <img src="/15_residential.webp" alt="Kitchen Design" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                                <div>
                                    <h3 className="text-xl font-display font-bold text-white mb-1 uppercase tracking-wide">Culinary Form</h3>
                                    <p className="text-[#C5A059] font-display text-[9px] tracking-[0.3em] uppercase">Material Engineering</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="group relative h-full overflow-hidden bg-[#c8a328]"
                        >
                            <div className="absolute inset-0 bg-[#0A0A0A] border border-white/10 m-2 flex flex-col items-center justify-center p-8 text-center transition-colors duration-500 group-hover:bg-[#151515]">
                                <span className="material-symbols-outlined text-[#C5A059] text-4xl mb-6">chair</span>
                                <h3 className="text-2xl font-display font-bold text-white leading-tight uppercase tracking-widest mb-4">Request<br />Portfolio</h3>
                                <button className="text-[9px] font-display font-bold uppercase tracking-[0.4em] text-neutral-500 group-hover:text-[#C5A059] transition-colors flex items-center gap-2">
                                    View Lookbook <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
