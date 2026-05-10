import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const mediaItems = [
  { type: 'image', url: '/media-loop/photo_11_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_12_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_12_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_12_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_13_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_13_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_13_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_14_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_14_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_14_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_15_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_15_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_15_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_16_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_16_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_16_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_17_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_17_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_17_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_18_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_18_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_18_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_19_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_19_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_19_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_1_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_1_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_1_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_20_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_20_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_20_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_21_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_21_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_22_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_22_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_2_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_2_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_2_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_3_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_3_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_3_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_4_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_4_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_4_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_5_2026-04-30_08-27-39.jpg' },
  { type: 'image', url: '/media-loop/photo_5_2026-04-30_08-28-30.jpg' },
  { type: 'image', url: '/media-loop/photo_5_2026-04-30_08-31-22.jpg' },
  { type: 'image', url: '/media-loop/photo_6_2026-04-30_08-27-39.jpg' },
  { type: 'video', url: '/media-loop/video_2026-04-30_08-31-22 (2).mp4', thumb: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
  { type: 'video', url: '/media-loop/video_2026-04-30_08-31-22 (3).mp4', thumb: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
  { type: 'video', url: '/media-loop/video_2026-04-30_08-31-22 (4).mp4', thumb: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
  { type: 'video', url: '/media-loop/video_2026-04-30_08-31-22 (5).mp4', thumb: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
  { type: 'video', url: '/media-loop/video_2026-04-30_08-31-22.mp4', thumb: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' }
];

export default function InfiniteMediaLoop() {
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [isPaused, setIsPaused] = useState(false);
  const requestRef = useRef<number>(0);

  useEffect(() => {
    if (modalOpen && activeVideo && videoRef.current) {
      // Audio fix for "one side only" issue
      try {
        if (!audioCtxRef.current) {
          audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();

        const source = ctx.createMediaElementSource(videoRef.current);
        const merger = ctx.createChannelMerger(1);
        const splitter = ctx.createChannelSplitter(2);

        // Connect both L and R channels to the single mono merger channel
        source.connect(splitter);
        splitter.connect(merger, 0, 0); // Left to mono
        splitter.connect(merger, 1, 0); // Right to mono
        
        merger.connect(ctx.destination);

        return () => {
          source.disconnect();
          merger.disconnect();
          splitter.disconnect();
        };
      } catch (e) {
        console.error("Audio correction failed:", e);
      }
    }
  }, [modalOpen, activeVideo]);


  useEffect(() => {
    const updateActive = () => {
      const center = window.innerWidth / 2;
      
      itemsRef.current.forEach((item) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        
        if (Math.abs(center - itemCenter) < rect.width / 2) {
          item.classList.add("scale-125", "opacity-100", "z-10");
          item.classList.remove("opacity-50", "z-0");
        } else {
          item.classList.remove("scale-125", "opacity-100", "z-10");
          item.classList.add("opacity-50", "z-0");
        }
      });
      requestRef.current = requestAnimationFrame(updateActive);
    };
    
    requestRef.current = requestAnimationFrame(updateActive);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Duplicate items for the seamless loop
  const loopItems = [...mediaItems, ...mediaItems, ...mediaItems];

  return (
    <div className="w-full py-24 sm:py-32 bg-transparent overflow-hidden relative">
      <style>{`
        @keyframes scroll-left-to-right {
          0% { transform: translateX(-66.66%); }
          100% { transform: translateX(0%); }
        }
        .media-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: scroll-left-to-right 100s linear infinite;
        }
        .media-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className={`media-track ${isPaused || modalOpen ? 'paused' : ''}`} 
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {loopItems.map((item, idx) => (
          <div 
            key={idx}
            ref={el => { itemsRef.current[idx] = el; }}
            className="relative min-w-[240px] sm:min-w-[320px] h-[160px] sm:h-[220px] transition-all duration-300 ease-out cursor-pointer opacity-50 z-0 origin-center rounded-xl overflow-hidden shadow-2xl border border-white/5"
            onClick={() => {
              if (item.type === 'video') {
                setActiveVideo(item.url);
                setModalOpen(true);
              }
            }}
          >
            {item.type === 'video' ? (
              <video 
                src={item.url} 
                className="w-full h-full object-cover pointer-events-none"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            ) : (
              <img 
                src={item.url} 
                alt="Media Asset" 
                className="w-full h-full object-cover pointer-events-none" 
                referrerPolicy="no-referrer" 
              />
            )}
          </div>
        ))}
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-md cursor-pointer"
              onClick={() => { setModalOpen(false); setActiveVideo(""); }}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl z-10 rounded-2xl overflow-hidden shadow-2xl bg-charcoal border border-white/10"
            >
              <button 
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-primary text-white rounded-full p-2 w-10 h-10 flex items-center justify-center transition-colors border border-white/10"
                onClick={() => { setModalOpen(false); setActiveVideo(""); }}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
              <video ref={videoRef} src={activeVideo} controls autoPlay className="w-full h-auto max-h-[80vh] outline-none" />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
