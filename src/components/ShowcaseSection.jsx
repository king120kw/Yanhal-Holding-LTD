import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { CheckCircle2 } from "lucide-react";

export default function ShowcaseSection({
    id,
    title,
    subtitle,
    desc,
    image,
    features,
    reversed = false
}) {
    return (
        <SectionWrapper id={id} className={`py-32 ${reversed ? 'bg-neutral-900/50' : 'bg-neutral-900'}`}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center`}>
                <motion.div
                    initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={reversed ? "lg:order-last" : ""}
                >
                    <div className="inline-block px-4 py-1 rounded-full border border-[#c8a328]/20 bg-[#c8a328]/10 text-[#c8a328] text-[10px] font-black tracking-[0.2em] uppercase mb-8">
                        {subtitle}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter leading-none">
                        {title}
                    </h2>
                    <p className="text-neutral-400 text-lg mb-10 leading-relaxed max-w-xl">
                        {desc}
                    </p>
                    <div className="space-y-4 mb-10">
                        {features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3 text-neutral-300 font-bold text-sm">
                                <CheckCircle2 size={18} className="text-[#c8a328]" />
                                {feature}
                            </div>
                        ))}
                    </div>
                    <button className="px-10 py-4 bg-[#c8a328] hover:bg-[#b08e22] text-neutral-900 font-black rounded-xl transition-all shadow-lg shadow-[#c8a328]/10">
                        VIEW DETAILS
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-video rounded-[2.5rem] overflow-hidden border border-neutral-800 shadow-2xl">
                        <img src={image} alt={title} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950/40 to-transparent" />
                    </div>
                    {/* Decorative frame */}
                    <div className={`absolute -bottom-6 ${reversed ? '-left-6' : '-right-6'} w-32 h-32 border-4 border-[#c8a328]/20 rounded-full z-0`} />
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
