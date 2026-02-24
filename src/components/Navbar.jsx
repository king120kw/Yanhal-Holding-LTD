import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-neutral-900/80 backdrop-blur-md py-4 border-b border-neutral-800"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center relative z-50">
                <a href="#home" className="flex items-center gap-3 group relative z-50">
                    <span className="material-symbols-outlined text-[#C5A059] text-6xl font-light transition-transform group-hover:rotate-12 drop-shadow-md">
                        architecture
                    </span>
                    <span className="text-3xl font-display font-bold tracking-[0.2em] text-white drop-shadow-md">
                        YANHAL<span className="text-[#C5A059]">.</span>
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-display font-bold uppercase tracking-[0.4em] text-neutral-400 hover:text-[#C5A059] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="hidden md:block px-10 py-3 bg-[#C5A059] hover:bg-white text-neutral-900 font-display font-bold text-[10px] tracking-[0.3em] uppercase transition-all active:scale-95 shadow-lg shadow-[#C5A059]/20"
                    >
                        ENQUIRE
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white flex items-center" onClick={() => setIsOpen(!isOpen)}>
                    <span className="material-symbols-outlined text-3xl">
                        {isOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-neutral-900 border-b border-neutral-800 overflow-hidden"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-display font-bold uppercase tracking-[0.3em] text-neutral-400 hover:text-[#C5A059]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                    setIsOpen(false);
                                }}
                                className="w-full py-5 bg-[#C5A059] text-neutral-900 font-display font-bold uppercase tracking-[0.4em] text-[10px] mt-4 shadow-xl shadow-[#C5A059]/20"
                            >
                                ENQUIRE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
