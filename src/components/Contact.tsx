import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect, useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Construction Services",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append('form-name', 'contact');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('projectType', formData.projectType);
      data.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        body: data,
      });

      if (!response.ok) throw new Error('Submission failed');

      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "Construction Services", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Submission error:", err);
      alert("Submission failed. Please check your internet connection or server credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.error("Video play failed:", err));
    }
  }, []);

  return (
    <section id="contact" className="bg-background-dark py-20 sm:py-32 lg:py-40 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background-dark/60" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* ... (Left side remains same) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="space-y-10 sm:space-y-12"
        >
          {/* Omitted for brevity, assuming standard content */}
          <div>
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="h-[1px] w-8 sm:w-12 bg-primary"></div>
              <span className="text-primary font-display text-[9px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase">Connect With Us</span>
            </div>
            <div className="flex flex-col gap-0">
              <AnimatedHeading delay={0.1}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-white uppercase tracking-tighter leading-none m-0">
                  START YOUR
                </h2>
              </AnimatedHeading>
              <AnimatedHeading delay={0.2}>
                <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold text-primary uppercase tracking-tighter leading-none m-0">
                  PROJECT
                </h2>
              </AnimatedHeading>
            </div>
          </div>
          
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-lg">
            Ready to discuss your construction or design requirements? Our technical team is available for site assessments and project consultations.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">location_on</span>
              </div>
              <div>
                <h4 className="text-white font-display text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 leading-none font-bold">Headquarters</h4>
                <a href="https://www.google.com/maps/search/?api=1&query=South+C,+Nairobi,+Kenya" target="_blank" rel="noopener noreferrer" className="text-slate-500 text-xs sm:text-sm hover:text-white transition-colors block">South C, Behind Masjid As Salaam, Nairobi</a>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">call</span>
              </div>
              <div>
                <h4 className="text-white font-display text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 leading-none font-bold">Phone Number</h4>
                <a href="tel:0724093256" className="text-slate-500 text-xs sm:text-sm hover:text-white transition-colors block">0724093256</a>
                <a href="tel:+254740895374" className="text-slate-500 text-xs sm:text-sm hover:text-white transition-colors block">+254 740 895374</a>
              </div>
            </div>
            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">mail</span>
              </div>
              <div>
                <h4 className="text-white font-display text-[9px] sm:text-[10px] tracking-[0.2em] uppercase mb-1 leading-none font-bold">Email Inquiries</h4>
                <a href="mailto:Yanhalholdingslimited@gmail.com" className="text-slate-500 text-xs sm:text-sm break-all hover:text-white transition-colors block">Yanhalholdingslimited@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-surface-dark p-6 sm:p-8 md:p-12 border border-white/5 relative rounded-sm shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
          
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <span className="material-symbols-outlined text-primary text-6xl mb-6">check_circle</span>
                <h4 className="text-2xl text-white font-display uppercase tracking-tight mb-2">Message Received</h4>
                <p className="text-slate-500 text-sm">We'll get back to you within 24 hours.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-primary font-display text-[10px] uppercase tracking-widest hover:text-white"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <form className="space-y-6 sm:space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 font-bold">Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-light text-sm rounded-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 font-bold">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-light text-sm rounded-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 font-bold">Project Type</label>
                  <div className="relative">
                    <select 
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-light text-sm appearance-none rounded-sm"
                    >
                      <option className="bg-surface-dark">Construction Services</option>
                      <option className="bg-surface-dark">Interior Design</option>
                      <option className="bg-surface-dark">Renovation</option>
                      <option className="bg-surface-dark">Commercial Project</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">expand_more</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-slate-500 font-bold">Message</label>
                  <textarea 
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 p-4 text-white focus:outline-none focus:border-primary transition-colors font-light text-sm resize-none rounded-sm"
                    placeholder="Briefly describe your project requirements..."
                  ></textarea>
                </div>
                <button 
                  disabled={loading}
                  className="w-full bg-primary text-black font-display text-[9px] sm:text-[10px] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase py-4 sm:py-5 hover:bg-white transition-all rounded-sm disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
