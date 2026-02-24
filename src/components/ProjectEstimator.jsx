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
        <SectionWrapper id="estimator" className="bg-[#C5A059] py-32 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img src="/16_estimator.webp" className="w-full h-full object-cover grayscale brightness-200" alt="Background" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1.5px] bg-neutral-900"></div>
                            <span className="text-neutral-900 font-display text-[10px] tracking-[0.5em] uppercase font-bold">Investment Framework</span>
                        </div>
                        <h2 className="text-6xl md:text-8xl font-display font-bold text-neutral-950 uppercase tracking-tighter leading-[0.9] mb-10">
                            PROJECT <br /> <span className="opacity-40">ESTIMATOR</span>
                        </h2>
                        <p className="text-neutral-900 text-lg md:text-xl font-light mb-12 max-w-md leading-relaxed">
                            Generate an instantaneous baseline valuation for your architectural vision. PRECISION-ENGINEERED ESTIMATION.
                        </p>
                        <div className="inline-flex items-center gap-4 px-8 py-4 bg-neutral-950 text-[#C5A059] font-display font-bold uppercase text-[10px] tracking-[0.4em] shadow-2xl">
                            <span className="material-symbols-outlined text-lg">calculate</span> TECHNICAL ACCURACY VERIFIED
                        </div>
                    </div>

                    <div className="bg-[#141414] p-12 md:p-16 border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                        <div className="space-y-12">
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <label className="text-white/40 font-display font-bold uppercase text-[10px] tracking-[0.3em]">Project Scale (M²)</label>
                                    <span className="text-[#C5A059] font-display font-bold text-3xl tracking-tight">{area.toLocaleString()}</span>
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
                                <label className="text-white/40 font-display font-bold uppercase text-[10px] tracking-[0.3em] block mb-6">Execution Tier</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.keys(baseRates).map((k) => (
                                        <button
                                            key={k}
                                            onClick={() => setType(k)}
                                            className={`py-4 px-6 text-[9px] font-display font-bold uppercase tracking-[0.3em] transition-all border ${type === k
                                                ? "bg-[#C5A059] text-neutral-900 border-[#C5A059]"
                                                : "bg-transparent text-neutral-500 border-white/5 hover:border-white/20"
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
                                        <div className="text-neutral-500 font-display font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Baseline Valuation</div>
                                        <div className="text-5xl md:text-7xl font-display font-bold text-white tracking-tighter">
                                            <span className="text-[#C5A059] text-2xl mr-2">$</span>{(estimate * 10).toLocaleString()}
                                        </div>
                                    </div>
                                    <div className="text-right hidden md:block">
                                        <span className="text-[9px] text-white/20 font-display font-bold tracking-[0.2em] uppercase">Valid for Q1 2024</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-6 bg-[#C5A059] text-neutral-900 font-display font-bold uppercase tracking-[0.4em] text-[10px] hover:bg-white transition-all shadow-xl shadow-[#C5A059]/10"
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
