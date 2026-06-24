import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const jewelryImages = [
  { src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=800&fit=crop', title: 'Rings' },
  { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=800&fit=crop', title: 'Earrings' },
  { src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=800&fit=crop', title: 'Bangles' },
  { src: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=800&fit=crop', title: 'Bracelets' },
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=800&fit=crop', title: 'Necklaces' },
  { src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=800&fit=crop', title: 'Mangalsutra' },
];

export default function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <section ref={containerRef} className="relative py-16 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container-luxury mb-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <span className="text-royal-purple text-[10px] uppercase tracking-[0.4em] font-medium">The Collection</span>
            <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light mt-2 text-slate-800">
              Every Piece, <span className="text-royal-purple italic font-medium">A Masterwork</span>
            </h2>
          </div>
          <span className="text-[9px] text-slate-400 uppercase tracking-[0.3em] hidden sm:block">Scroll to explore</span>
        </div>
      </div>

      <div className="overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 px-5">
          {jewelryImages.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="flex-shrink-0 w-[220px] sm:w-[260px] md:w-[280px]"
            >
              <div className="relative overflow-hidden rounded-sm img-zoom shadow-card">
                <img src={item.src} alt={item.title} className="w-full h-[320px] sm:h-[380px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[10px] text-royal-gold uppercase tracking-[0.3em] font-medium">{item.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
