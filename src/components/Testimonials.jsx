import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Richardson",
        role: "CEO, Richardson Estates",
        text: "Yanhal Holding transformed our vision for a luxury apartment complex into a breathtaking reality. Their attention to detail is truly world-class.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
        name: "James Marshall",
        role: "Director, Global Tech Hub",
        text: "The speed and precision of their work during our office expansion was impressive. They are definitely the best in the commercial sector.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
    {
        name: "Olivia Chen",
        role: "Homeowner",
        text: "Our dream villa wouldn't have been the same without Yanhal. The interior design team is genius—they made every corner feel like home.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    },
];

export default function Testimonials() {
    return (
        <SectionWrapper id="testimonials" className="bg-[#0A0A0A] overflow-hidden">
            <div className="text-center mb-24">
                <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase mb-4 block">Client Feedback</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter">
                    TRUSTED BY <span className="text-[#C5A059]">VISIONARIES</span>
                </h2>
                <div className="w-20 h-1 bg-[#C5A059] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4" style={{ perspective: "2000px" }}>
                {testimonials.map((t, index) => (
                    <motion.div
                        key={t.name}
                        initial={{ opacity: 0, rotateY: 20, z: -100 }}
                        whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
                        transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        whileHover={{
                            translateZ: 50,
                            rotateX: 5,
                            rotateY: -5,
                            transition: { duration: 0.3 }
                        }}
                        className="relative p-12 bg-[#141414] border border-white/5 group overflow-hidden transition-all duration-500 hover:border-[#C5A059]/30 hover:bg-[#1A1A1A]"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Quote Icon Overlay */}
                        <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700">
                            <span className="material-symbols-outlined text-[160px] font-thin">
                                format_quote
                            </span>
                        </div>

                        <div className="relative z-10">
                            <div className="flex gap-1 mb-8">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined text-[#C5A059] text-xs font-fill">
                                        star
                                    </span>
                                ))}
                            </div>

                            <p className="text-neutral-400 font-light leading-relaxed mb-12 text-lg italic tracking-wide">
                                "{t.text}"
                            </p>

                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <img src={t.image} alt={t.name} className="w-16 h-16 rounded-sm object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute inset-0 border border-white/10 group-hover:border-[#C5A059]/50 transition-colors"></div>
                                </div>
                                <div>
                                    <div className="text-white font-display font-bold text-xs uppercase tracking-widest mb-1 group-hover:text-[#C5A059] transition-colors">{t.name}</div>
                                    <div className="text-[#C5A059] text-[9px] font-bold uppercase tracking-[0.3em] opacity-60">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
