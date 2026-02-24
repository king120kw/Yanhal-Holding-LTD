import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const residentialDetails = [
    { name: "LIVING ROOM", area: "45.2 M²" },
    { name: "DINING AREA", area: "22.8 M²" },
    { name: "GOURMET KITCHEN", area: "18.5 M²" },
    { name: "MASTER SUITE", area: "30.2 M²" },
    { name: "GUEST SUITE 01", area: "18.5 M²" },
    { name: "HOME OFFICE", area: "14.0 M²" },
    { name: "PRIVATE TERRACE", area: "52.5 M²" },
    { name: "SPA BATHROOMS", area: "12.0 M²" },
];

export default function HousePlan() {
    return (
        <SectionWrapper id="house-plan" className="bg-[#0A0A0A] py-32">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[1px] bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-display text-[10px] tracking-[0.5em] uppercase">Architectural Excellence</span>
                    </div>
                    <h2 className="text-7xl md:text-8xl font-display font-bold text-white tracking-tighter leading-none">
                        HOUSE <span className="text-neutral-800" style={{ WebkitTextStroke: '2px white' }}>PLAN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Stats Card */}
                    <div className="lg:col-span-4 bg-[#141414] p-12 border border-white/5 relative overflow-hidden group">
                        <div className="relative z-10">
                            <h3 className="text-4xl font-display font-bold text-[#C5A059] mb-4">
                                245 <span className="text-sm tracking-widest text-white/40">M² TOTAL</span>
                            </h3>
                            <p className="text-neutral-500 text-[10px] tracking-widest uppercase mb-12 leading-relaxed">
                                Masterfully curated living space with high-contrast architectural details.
                            </p>

                            <div className="space-y-0">
                                {residentialDetails.map((item, index) => (
                                    <div key={item.name} className="flex justify-between py-4 border-b border-[#C5A059]/10 group/row hover:bg-white/[0.02] transition-colors">
                                        <span className="text-[10px] font-display font-bold text-white/50 tracking-widest group-hover/row:text-white transition-colors">{item.name}</span>
                                        <span className="text-[10px] font-display font-bold text-[#C5A059] tracking-widest">{item.area}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="w-full mt-12 py-5 bg-[#C5A059] text-neutral-900 font-display font-bold text-[10px] tracking-[0.4em] uppercase hover:bg-white transition-all">
                                View Specifications +
                            </button>
                        </div>
                    </div>

                    {/* Right: 3D Visualization */}
                    <div className="lg:col-span-8 relative">
                        <div className="relative aspect-square md:aspect-video lg:aspect-square xl:aspect-video bg-[#141414] border border-white/5 p-4 group">
                            <div className="absolute top-8 left-8 z-20 bg-[#C5A059] px-4 py-2">
                                <span className="text-neutral-900 font-display text-[8px] font-bold tracking-[0.3em] uppercase">Unit 302 • Phase II</span>
                            </div>

                            <div className="w-full h-full relative overflow-hidden">
                                <motion.img
                                    src="/9_house_plan.webp"
                                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                    alt="3D Floor Plan"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="absolute bottom-8 left-8 z-20">
                                <span className="text-white/20 font-display text-[8px] tracking-[0.5em] uppercase">Architectural Visualization</span>
                            </div>

                            {/* View Controls Overlay */}
                            <div className="absolute bottom-8 right-8 z-20 flex gap-4">
                                <button className="w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                                    <span className="material-symbols-outlined text-white text-lg">zoom_in</span>
                                </button>
                                <button className="w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-[#C5A059] transition-colors">
                                    <span className="material-symbols-outlined text-white text-lg">3d_rotation</span>
                                </button>
                            </div>
                        </div>

                        {/* Bottom Info labels */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                            <div className="flex flex-col gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#C5A059]">
                                    <span className="material-symbols-outlined font-extralight">eco</span>
                                </div>
                                <h4 className="text-white font-display text-[10px] font-bold tracking-widest uppercase">Sustainable Design</h4>
                                <p className="text-neutral-600 text-[10px] leading-relaxed">Advanced thermal regulation and energy-efficient systems integrated into the structural core.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#C5A059]">
                                    <span className="material-symbols-outlined font-extralight">workspace_premium</span>
                                </div>
                                <h4 className="text-white font-display text-[10px] font-bold tracking-widest uppercase">Premium Materials</h4>
                                <p className="text-neutral-600 text-[10px] leading-relaxed">Custom charcoal finishes, brushed gold fixtures, and hand-selected natural stone surfaces.</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-[#C5A059]">
                                    <span className="material-symbols-outlined font-extralight">verified</span>
                                </div>
                                <h4 className="text-white font-display text-[10px] font-bold tracking-widest uppercase">Precision Build</h4>
                                <p className="text-neutral-600 text-[10px] leading-relaxed">Every measurement executed with sub-millimeter accuracy by our elite engineering division.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
