import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white pt-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-25 pointer-events-none z-0">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 100">
          <path 
            d="M0,100 L0,80 L20,80 L20,70 L40,70 L40,90 L60,90 L60,60 L80,60 L80,85 L100,85 L100,50 L130,50 L130,90 L160,90 L160,40 L200,40 L200,90 L230,90 L230,70 L250,70 L250,95 L300,95 L300,60 L350,60 L350,85 L400,85 L400,30 L450,30 L450,90 L500,90 L500,75 L550,75 L550,95 L600,95 L600,40 L650,40 L650,80 L700,80 L700,55 L750,55 L750,90 L800,90 L800,20 L850,20 L850,85 L900,85 L900,60 L950,60 L950,95 L1000,95 L1000,45 L1050,45 L1050,85 L1100,85 L1100,70 L1150,70 L1150,95 L1200,95 L1200,100 Z" 
            fill="#252525"
          ></path>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pb-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-primary/30 flex items-center justify-center p-2 rounded-lg bg-white/5">
                <img 
                  src="https://lh3.googleusercontent.com/d/1FPJeLDpbqU634Yi8bbe2n7BsJrxNXMd4" 
                  alt="Logo" 
                  className="w-full h-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold tracking-tight text-white">YANHAL</h3>
                <p className="text-[10px] tracking-[0.4em] text-primary uppercase mt-1">Holdings Ltd</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
              Professional construction and engineering firm delivering high-performance structural solutions and professional interior finishing since 2020.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.tiktok.com/@yanhal.holdings.lt" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary text-primary transition-colors group" aria-label="TikTok">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/yanhalholdings/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:border-primary text-primary transition-colors group" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6 sm:mb-8 uppercase tracking-widest text-[10px] sm:text-xs border-b border-white/10 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {["Construction Services", "Interior Design", "Renovation & Remodeling", "Commercial Projects", "Structural Engineering"].map((service, idx) => (
                <li key={idx}>
                  <a className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group" href="#services">
                    <span className="w-0 group-hover:w-2 h-[1px] bg-primary transition-all"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6 sm:mb-8 uppercase tracking-widest text-[10px] sm:text-xs border-b border-white/10 pb-2 inline-block">Navigation</h4>
            <ul className="space-y-3 sm:space-y-4 text-sm">
              {["About Us", "Our Projects", "Process", "Estimator", "Contact"].map((nav, idx) => (
                <li key={idx}>
                  <a className="text-gray-400 hover:text-white transition-colors" href={`#${nav.toLowerCase().replace(' ', '')}`}>{nav}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pl-8">
            <h4 className="text-white font-bold mb-6 sm:mb-8 uppercase tracking-widest text-[10px] sm:text-xs border-b border-white/10 pb-2 inline-block">Contact</h4>
            <div className="space-y-4 sm:space-y-6 text-sm text-gray-400">
              <div className="flex items-start space-x-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0">location_on</span>
                <a href="https://www.google.com/maps/search/?api=1&query=South+C,+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className="leading-relaxed hover:text-white transition-colors cursor-pointer">South C, Behind Masjid As Salaam, Nairobi</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0">call</span>
                <a href="tel:0724093256" className="hover:text-white transition-colors cursor-pointer">0724093256</a>
                <span className="text-white/20 mx-1">/</span>
                <a href="tel:+254740895374" className="hover:text-white transition-colors cursor-pointer">+254 740 895374</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="material-symbols-outlined text-primary text-xl shrink-0">mail</span>
                <a href="mailto:Yanhalholdingslimited@gmail.com" className="hover:text-white transition-colors cursor-pointer break-all">Yanhalholdingslimited@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6 text-[9px] sm:text-[10px] text-gray-500 uppercase tracking-widest text-center md:text-left">
          <p>© 2024 Yanhal Holdings Ltd. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
