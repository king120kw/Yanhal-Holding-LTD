import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function Hero() {
    const videoRef = useRef(null);
    const isInView = useInView(videoRef, { margin: "-100px" });
    const [isTouched, setIsTouched] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(e => console.log("Playback prevented", e));
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-32">
            {/* Background pattern layer */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dotGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                        <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#dotGrid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-20"
                >
                    <div className="inline-flex items-center gap-4 mb-8">
                        <div className="w-10 h-[1px] bg-[#C5A059]"></div>
                        <span className="text-[#C5A059] font-display text-[10px] tracking-[0.6em] uppercase">Premium Architecture • NY</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-10 tracking-tighter">
                        WE BUILD <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #C5A059' }}>
                            LEGACIES
                        </span>
                        <br />
                        NOT STRUCTURES
                    </h1>

                    <p className="text-neutral-500 text-lg md:text-xl max-w-lg mb-12 leading-relaxed font-light">
                        Transforming bold visions into architectural landmarks. Our legacy is defined by technical precision and aesthetic brilliance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="w-full sm:w-auto px-10 py-5 bg-[#C5A059] hover:bg-white text-neutral-900 font-display font-bold text-[10px] tracking-[0.4em] uppercase transition-all flex items-center justify-center gap-4 active:scale-95 group">
                            START PROJECT <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </button>
                        <button className="w-full sm:w-auto px-10 py-5 border border-white/10 hover:border-[#C5A059]/50 text-white font-display font-bold text-[10px] tracking-[0.4em] uppercase transition-all active:scale-95 bg-white/5">
                            VIEW PORTFOLIO
                        </button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div
                        className="aspect-[4/5] relative z-10 overflow-hidden border border-white/5 p-4 bg-[#141414] group cursor-pointer"
                        onClick={() => setIsTouched(!isTouched)}
                    >
                        <div className="w-full h-full relative overflow-hidden">
                            <video
                                ref={videoRef}
                                src="/yanhal hero image (2).mp4"
                                muted
                                playsInline
                                loop
                                className={`w-full h-full object-cover transition-all duration-1000 ${isTouched
                                        ? "grayscale-0 brightness-100"
                                        : "grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100"
                                    }`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60 pointer-events-none" />
                        </div>

                        {/* Experience Badge */}
                        <div className="absolute top-12 right-0 left-auto z-20 translate-x-1/2 translate-y-[-50%] md:translate-x-1/3">
                            <div className="w-40 h-40 rounded-full bg-[#141414] border border-[#C5A059]/20 flex flex-col items-center justify-center p-4 backdrop-blur-xl group">
                                <div className="text-4xl font-display font-bold text-[#C5A059] group-hover:scale-110 transition-transform">25</div>
                                <div className="text-[8px] tracking-[0.3em] font-display font-bold text-white/40 text-center uppercase mt-2">Years of <br /> Excellence</div>
                                <div className="absolute inset-0 rounded-full border border-[#C5A059]/10 animate-ping opacity-20" />
                            </div>
                        </div>

                        {/* Image Caption */}
                        <div className="absolute bottom-12 left-12 z-20">
                            <div className="text-white font-display font-bold text-[10px] tracking-[0.3em] uppercase mb-1">Manhattan Sky Residence</div>
                            <div className="text-[#C5A059] text-[8px] tracking-[0.5em] uppercase opacity-60">Completed 2024</div>
                        </div>
                    </div>

                    {/* Decorative Frame */}
                    <div className="absolute -top-8 -left-8 w-32 h-32 border-t-2 border-l-2 border-[#C5A059]/30 z-0"></div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-12 z-20 flex flex-col items-center gap-4 cursor-pointer group"
                onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-[#C5A059] to-transparent"></div>
                <span className="text-[8px] font-display font-bold tracking-[0.5em] text-white/20 uppercase vertical-text group-hover:text-[#C5A059] transition-colors">Scroll</span>
            </motion.div>
        </section>
    );
}
