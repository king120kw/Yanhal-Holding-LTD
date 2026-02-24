import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Users, Building2, Award, Briefcase } from "lucide-react";

const stats = [
    { label: "Architecture Awards", value: "24", iconName: "rewarded_ads" },
    { label: "Global Projects", value: "140+", iconName: "public" },
    { label: "Discerning Clients", value: "3K+", iconName: "groups" },
    { label: "Expert Engineers", value: "85", iconName: "engineering" },
];

export default function Stats() {
    return (
        <SectionWrapper id="stats" className="bg-[#0A0A0A] border-y border-white/5 py-0 px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="p-12 border-x border-white/5 group text-center flex flex-col items-center justify-center"
                    >
                        <div className="mb-6 text-[#C5A059] group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-4xl font-extralight">
                                {stat.iconName}
                            </span>
                        </div>
                        <div className="text-5xl font-display font-bold text-white mb-4 tracking-tighter group-hover:text-[#C5A059] transition-colors duration-500">
                            {stat.value}
                        </div>
                        <div className="text-neutral-500 font-display font-bold uppercase tracking-[0.3em] text-[8px] max-w-[120px]">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
}
