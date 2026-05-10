import { motion } from "motion/react";
import AnimatedPortfolioGrid from "./AnimatedPortfolioGrid";
import AnimatedSiteProgressGrid from "./AnimatedSiteProgressGrid";
import AnimatedHeading from "./AnimatedHeading";
import AnimatedBlock from "./AnimatedBlock";

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: { icon: string; title: string; desc: string }[];
  reverse?: boolean;
  dark?: boolean;
  animatedGallery?: boolean;
  siteProgressGallery?: boolean;
}

export default function FeatureSection({ title, subtitle, description, image, features, reverse, dark, animatedGallery, siteProgressGallery }: FeatureSectionProps) {
  return (
    <section className={`py-12 sm:py-24 px-6 lg:px-20 ${dark ? 'bg-background-dark' : 'bg-surface-dark'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.2, 0, 0.2, 1] }}
            className={`w-full lg:w-1/2 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {animatedGallery ? (
              <AnimatedPortfolioGrid />
            ) : siteProgressGallery ? (
              <AnimatedSiteProgressGrid />
            ) : (
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-40 sm:h-64 rounded-xl overflow-hidden shadow-2xl">
                    <img className="w-full h-full object-cover" src={image} alt={title} referrerPolicy="no-referrer" />
                  </div>
                  <div className="h-48 sm:h-80 rounded-xl overflow-hidden shadow-2xl bg-white/5 border border-white/5"></div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-8 sm:pt-12">
                  <div className="h-48 sm:h-80 rounded-xl overflow-hidden shadow-2xl bg-white/5 border border-white/5"></div>
                  <div className="h-40 sm:h-64 rounded-xl overflow-hidden shadow-2xl bg-white/5 border border-white/5"></div>
                </div>
              </div>
            )}
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.2, 0, 0.2, 1], delay: 0.2 }}
            className={`w-full lg:w-1/2 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <span className="text-primary text-[10px] sm:text-sm font-bold tracking-[0.3em] uppercase mb-3 sm:mb-4 block leading-none">{subtitle}</span>
            <AnimatedHeading delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-black text-white leading-[1.2] sm:leading-tight mb-6 sm:mb-8 tracking-tighter uppercase font-display">
                {title}
              </h2>
            </AnimatedHeading>
            <AnimatedBlock delay={0.05}>
              <p className="text-sm sm:text-lg text-slate-400 mb-8 sm:mb-10 leading-relaxed max-w-xl font-light">
                {description}
              </p>
            </AnimatedBlock>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              {features.map((f, idx) => (
                <AnimatedBlock key={idx} index={idx} delay={0.1}>
                  <div className="flex gap-4 sm:gap-6">
                    <div className="shrink-0 text-primary">
                      <span className="material-symbols-outlined text-2xl sm:text-4xl">{f.icon}</span>
                    </div>
                    <div>
                      <h5 className="text-base sm:text-xl font-bold text-white mb-1 sm:mb-2 font-display uppercase tracking-tight">{f.title}</h5>
                      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </AnimatedBlock>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
