import { useState } from "react";
import SectionWrapper from "./SectionWrapper";


export default function ProjectEstimator() {
    const [area, setArea] = useState(245);
    const [type, setType] = useState("RESIDENTIAL");

    const baseRates = {
        RESIDENTIAL: 1500,
        COMMERCIAL: 2500,
        RESTORATION: 1800,
        TECHNICAL: 3200,
    };

    const estimate = area * baseRates[type];

    return (
        <SectionWrapper id="estimator" className="bg-[#C5A059] py-24 md:py-32 overflow-hidden relative">
            {/* The background image /16_estimator.webp was removed here because it contains flattened UI text that was visually hallucinating and overlapping directly under the HTML text, causing confusion */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C5A059] to-[#A88748] opacity-50 z-0"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-[2px] bg-neutral-900"></div>
                            <span className="text-neutral-900 font-display text-sm tracking-[0.5em] uppercase font-bold">Investment Framework</span>
                        </div>
                        <h2 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-neutral-950 uppercase tracking-tighter leading-[1.1] mb-8 lg:mb-10 text-nowrap">
                            PROJECT <br /> <span className="opacity-40">ESTIMATOR</span>
                        </h2>
                        <p className="text-neutral-900 text-lg md:text-xl font-medium mb-12 max-w-md leading-relaxed">
                            Generate an instantaneous baseline valuation for your architectural vision. PRECISION-ENGINEERED ESTIMATION.
                        </p>
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-neutral-950 text-[#C5A059] font-display font-bold uppercase text-xs tracking-[0.4em] shadow-2xl">
                            <span className="material-symbols-outlined text-xl">calculate</span> TECHNICAL ACCURACY VERIFIED
                        </div>
                    </div>

                    <div className="bg-[#141414] p-12 md:p-16 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        <div className="space-y-12">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <label className="text-white/60 font-display font-bold uppercase text-xs tracking-[0.3em]">Project Scale (M²)</label>
                                    <span className="text-[#C5A059] font-display font-bold text-4xl tracking-tight">{area.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="5000"
                                    step="50"
                                    value={area}
                                    onChange={(e) => setArea(parseInt(e.target.value))}
                                    className="w-full h-1 bg-neutral-800 appearance-none cursor-pointer accent-[#C5A059]"
                                />
                            </div>

                            <div>
                                <label className="text-white/60 font-display font-bold uppercase text-xs tracking-[0.3em] block mb-6">Execution Tier</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.keys(baseRates).map((k) => (
                                        <button
                                            key={k}
                                            onClick={() => setType(k)}
                                            className={`py-4 px-6 text-xs font-display font-bold uppercase tracking-[0.3em] transition-all border ${type === k
                                                ? "bg-[#C5A059] text-neutral-900 border-[#C5A059]"
                                                : "bg-transparent text-neutral-300 border-white/10 hover:border-white/30"
                                                }`}
                                        >
                                            {k}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/5">
                                <div className="flex justify-between items-end mb-10">
                                    <div>
                                        <div className="text-neutral-400 font-display font-bold uppercase text-xs tracking-[0.4em] mb-4">Baseline Valuation</div>
                                        <div className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                                            <span className="text-[#C5A059] text-3xl mr-2">$</span>{(estimate * 10).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <span className="text-xs text-white/40 font-display font-bold tracking-[0.2em] uppercase">Valid for Q1 2024</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-6 bg-[#C5A059] text-neutral-900 font-display font-bold uppercase tracking-[0.4em] text-sm hover:bg-white transition-all shadow-xl shadow-[#C5A059]/10"
                                >
                                    INITIATE CONSULTATION
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
