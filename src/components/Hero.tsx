import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1600&h=700&fit=crop',
    title: 'FLAT 10% OFF',
    subtitle: 'On Diamond Jewellery',
    cta: 'Shop Now',
    align: 'left',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&h=700&fit=crop',
    title: 'Upto 50% Off',
    subtitle: 'Mangalsutra Collection',
    cta: 'Explore',
    align: 'right',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1600&h=700&fit=crop',
    title: 'New Arrivals',
    subtitle: 'Office Everyday Range',
    cta: 'View Collection',
    align: 'center',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((p) => (p + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((p) => (p + 1) % banners.length);
  const prev = () => setCurrent((p) => (p - 1 + banners.length) % banners.length);

  const b = banners[current];

  return (
    <section id="home" className="relative pt-[152px] md:pt-[168px] bg-white">
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <img src={b.image} alt={b.title} className="w-full h-full object-cover" />
            <div className={`absolute inset-0 ${b.align === 'left' ? 'bg-gradient-to-r from-black/60 via-black/30 to-transparent' : b.align === 'right' ? 'bg-gradient-to-l from-black/60 via-black/30 to-transparent' : 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'}`} />

            <div className={`absolute inset-0 flex flex-col justify-center container-luxury ${b.align === 'left' ? 'items-start' : b.align === 'right' ? 'items-end text-right' : 'items-center text-center'}`}>
              <motion.span initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="text-white/80 text-sm uppercase tracking-[0.25em] font-medium mb-3">Exclusive Offer</motion.span>
              <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.6 }} className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-2">{b.title}</motion.h1>
              <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="text-white/90 text-lg md:text-xl mb-6 font-light">{b.subtitle}</motion.p>
              <motion.a href="#shop" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="inline-flex items-center justify-center px-7 py-3 bg-brand-teal text-white text-sm font-semibold uppercase tracking-[0.15em] hover:bg-brand-teal/90 transition-all duration-300 rounded-sm">{b.cta}</motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"><ChevronLeft className="w-5 h-5" strokeWidth={1.5} /></button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors"><ChevronRight className="w-5 h-5" strokeWidth={1.5} /></button>

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {banners.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-[3px] rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
