

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#0A0A0A] border-t border-white/5 pt-32 pb-12 px-6 md:px-12 overflow-hidden relative">
            {/* Background branding */}
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 opacity-[0.02] pointer-events-none">
                <span className="text-[300px] font-display font-bold text-white leading-none tracking-tighter">YANHAL</span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 mb-24 relative z-10">
                <div className="col-span-1 md:col-span-5">
                    <div className="flex items-center gap-4 mb-10 group">
                        <div className="w-14 h-14 bg-[#C5A059] flex items-center justify-center transition-transform group-hover:rotate-12">
                            <span className="material-symbols-outlined text-neutral-900 text-3xl font-light">architecture</span>
                        </div>
                        <span className="text-3xl font-display font-bold tracking-[0.2em] text-white">
                            YANHAL<span className="text-[#C5A059]">.</span>
                        </span>
                    </div>
                    <p className="text-neutral-500 leading-relaxed max-w-sm mb-12 text-sm font-light">
                        Pioneering the next generation of architectural landmarks. From structural integrity to aesthetic perfection, we build the future of luxury.
                    </p>
                    <div className="flex gap-6">
                        {['instagram', 'facebook', 'linkedin'].map(social => (
                            <a key={social} href="#" className="w-12 h-12 border border-white/5 flex items-center justify-center text-white/40 hover:text-[#C5A059] hover:border-[#C5A059]/30 transition-all bg-white/5">
                                <span className="material-symbols-outlined text-xl">{social === 'linkedin' ? 'partner_reports' : (social === 'facebook' ? 'public' : 'photo_camera')}</span>
                            </a>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-display font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Architecture</h4>
                    <ul className="space-y-6 text-neutral-500 text-[10px] font-display font-bold uppercase tracking-[0.2em]">
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Residential</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Commercial</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Interior</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Technical</a></li>
                    </ul>
                </div>

                <div className="md:col-span-2">
                    <h4 className="text-white font-display font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Enterprise</h4>
                    <ul className="space-y-6 text-neutral-500 text-[10px] font-display font-bold uppercase tracking-[0.2em]">
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Archive</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Process</a></li>
                        <li><a href="#" className="hover:text-[#C5A059] transition-colors">Careers</a></li>
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h4 className="text-white font-display font-bold mb-10 uppercase tracking-[0.4em] text-[10px]">Contact Info</h4>
                    <ul className="space-y-8 text-neutral-500">
                        <li className="flex gap-4 items-start">
                            <span className="material-symbols-outlined text-[#C5A059] text-xl font-light">location_on</span>
                            <span className="text-xs font-light leading-relaxed">Fifth Avenue Architecture Tower, <br /> Manhatten, NY 10001</span>
                        </li>
                        <li className="flex gap-4 items-center">
                            <span className="material-symbols-outlined text-[#C5A059] text-xl font-light">call</span>
                            <span className="text-xs font-light tracking-widest text-white">+1 (212) 888-2500</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                <div className="text-neutral-600 text-[9px] font-display font-bold uppercase tracking-[0.3em] flex items-center gap-4">
                    <span>© 2026 YANHAL HOLDING LTD</span>
                    <span className="w-1 h-1 bg-[#C5A059] rounded-full"></span>
                    <span>NEW YORK CITY</span>
                </div>
                <div className="flex gap-12 text-neutral-600 text-[9px] font-display font-bold uppercase tracking-[0.3em]">
                    <a href="#" className="hover:text-white transition-colors">Privacy Framework</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Engagement</a>
                </div>
            </div>
        </footer>
    );
}
