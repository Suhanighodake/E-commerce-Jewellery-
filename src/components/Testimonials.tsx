import { useEffect, useRef, useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

const actorTestimonials: Testimonial[] = [
  {
    id: 1, name: 'Aditi Rao', role: 'Bollywood Actress',
    text: 'Royelle understands the modern Indian woman. Their 18K gold pieces add just the right amount of elegance to every red carpet look.',
    image: 'https://i.pinimg.com/1200x/47/64/3a/47643ab7afda51126e3fc9876e09298e.jpg',
  },
  {
    id: 3, name: 'Kiara Advani', role: 'Leading Actress',
    text: 'I have collaborated with many jewellery brands, but Royelle stands apart. Heritage and contemporary design in perfect harmony.',
    image: 'https://i.pinimg.com/736x/a8/0f/22/a80f22e551df9d211c6437a7c185594b.jpg',
  },
  {
    id: 5, name: 'Sanya Malhotra', role: 'Film Actress',
    text: 'From morning shoots to evening premieres, Royelle transitions with me. The craftsmanship is extraordinary — every piece feels personal.',
    image: 'https://i.pinimg.com/736x/74/f4/19/74f419779c58ef9983c331baa920dc92.jpg',
  },
];

const businessTestimonials: Testimonial[] = [
  {
    id: 2, name: 'Priya Sharma', role: 'Marketing Director',
    text: 'The modern mangalsutra is a revelation. I wear it to client meetings and no one realizes it is a mangalsutra — yet it carries all the meaning.',
    image: 'https://i.pinimg.com/736x/d2/fa/a3/d2faa3339b31f500a1c5655ce21579a6.jpg',
  },
  {
    id: 4, name: 'Ananya Reddy', role: 'Investment Banker',
    text: 'Royelle nails the balance between elegant and modern. The 14K office collection looks incredibly premium and wears comfortably all day.',
    image: 'https://d28wu8o6itv89t.cloudfront.net/images/GhazalAlaghjpg-1709202924557.jpeg',
  },
  {
    id: 6, name: 'Kavita Menon', role: 'Startup Founder',
    text: 'From my first pitch to our series A celebration, Royelle has been with me. The quality and weight of 18K gold speaks for itself.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=300&h=300&fit=crop&crop=face&q=80',
  },
];

const allTestimonials = [...actorTestimonials, ...businessTestimonials];

const trustAvatars = [
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&q=80',
  'https://d28wu8o6itv89t.cloudfront.net/images/VineetaSinghjpg-1709202897464.jpeg',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=80',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=80',
  'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&h=80&fit=crop&crop=face&q=80',
  'https://d28wu8o6itv89t.cloudfront.net/images/GhazalAlaghjpg-1709202924557.jpeg',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face&q=80',
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="group bg-white rounded-2xl p-4 sm:p-6 shadow-card hover:shadow-xl transition-shadow duration-500 w-full flex-shrink-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
        {/* Image */}
        <motion.div
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md flex-shrink-0 mx-auto sm:mx-0"
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <img
            src={t.image}
            alt={t.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Name/role/stars + quote */}
        <div className="flex flex-col items-center sm:items-start gap-2 flex-1 w-full">
          <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between w-full gap-2">
            <div className="text-center sm:text-left">
              <h4 className="font-[Cormorant_Garamond] text-base sm:text-xl font-semibold text-slate-800 leading-tight">
                {t.name}
              </h4>
              <p className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-[0.12em] font-medium mt-0.5">
                {t.role}
              </p>
            </div>
            <div className="flex items-center gap-[2px] sm:gap-0.5 flex-shrink-0">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 sm:w-5 sm:h-5 text-royal-purple fill-royal-purple"
                  strokeWidth={0}
                />
              ))}
            </div>
          </div>
          <p className="text-slate-500 text-base sm:text-lg leading-[1.75] font-light text-center sm:text-left">
            {t.text}
          </p>
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center justify-center gap-[2px]">
      {[...Array(5)].map((_, j) => (
        <Star
          key={j}
          className="w-3.5 h-3.5 text-royal-purple fill-royal-purple"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

function SwipeableCoverflowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const dragOffset = useRef(0);

  const len = allTestimonials.length;

  // Auto-advance every 2.5s when not paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % len);
    }, 2500);
    return () => clearInterval(interval);
  }, [isPaused, len]);

  const next = () => setActiveIndex((prev) => (prev + 1) % len);
  const prev = () => setActiveIndex((prev) => (prev - 1 + len) % len);

  const handleDrag = (_: unknown, info: PanInfo) => {
    dragOffset.current = info.offset.x;
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    dragOffset.current = info.offset.x;
    if (info.offset.x < -60) next();
    else if (info.offset.x > 60) prev();
    setTimeout(() => { dragOffset.current = 0; }, 120);
  };

  const handleTap = () => {
    if (Math.abs(dragOffset.current) > 10) return;
    setIsPaused((p) => !p);
  };

  return (
    <div
      className="relative h-[420px] md:h-[480px] mx-auto cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: '1200px' }}
      onClick={handleTap}
    >
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {allTestimonials.map((t, i) => {
          // Normalize offset to take the shortest path around the loop
          let offset = i - activeIndex;
          if (offset > len / 2) offset -= len;
          if (offset < -len / 2) offset += len;

          const absOffset = Math.abs(offset);

          return (
            <motion.div
              key={t.id}
              className="absolute w-[280px] md:w-[340px] h-[360px] md:h-[400px] bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center"
              animate={{
                x: offset * 300,
                scale: 1 - absOffset * 0.1,
                rotateY: offset * -12,
                rotateX: offset * -4,
                opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.25,
                zIndex: 20 - absOffset,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 24 }}
              style={{ backfaceVisibility: 'hidden', zIndex: 20 - absOffset }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-4 shadow-md"
              />
              <h4 className="font-[Cormorant_Garamond] text-xl md:text-2xl font-semibold text-slate-800">
                {t.name}
              </h4>
              <p className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.12em] font-medium mt-1">
                {t.role}
              </p>
              <Stars />
              <p className="text-slate-600 text-sm md:text-base leading-[1.7] font-light mt-3 line-clamp-5">
                {t.text}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {isPaused && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-slate-400 uppercase tracking-widest whitespace-nowrap">
          Paused — tap to resume
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative pt-8 md:pt-10 pb-16 md:pb-20 overflow-hidden bg-slate-50">
      <div className="container-luxury">
        {/* Header */}
        <ScrollReveal className="text-center mb-10 md:mb-12">
          <span className="text-royal-purple-light text-xs uppercase tracking-[0.25em] font-medium">Voices</span>
          <h2 className="font-[Cormorant_Garamond] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mt-3 mb-4 text-slate-800">
            Loved by <span className="text-royal-purple italic font-medium">Leaders</span>
          </h2>
          <motion.div
            className="w-16 h-[2px] bg-gradient-to-r from-transparent via-royal-purple to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </ScrollReveal>

        {/* Trust avatars row */}
        <div className="flex flex-col items-center mb-14 md:mb-16">
          <div className="flex items-center justify-center -space-x-3 sm:-space-x-4 mb-5">
            {trustAvatars.map((src, i) => (
              <motion.div
                key={i}
                className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 sm:border-[3px] border-white shadow-md sm:shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.15, zIndex: 10 }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
          <span className="text-slate-500 text-xs sm:text-sm uppercase tracking-[0.2em]">Trusted by 10,000+ Women</span>
        </div>

        {/* Mobile: simple stacked cards */}
        <div className="md:hidden flex flex-col gap-4">
          {[...actorTestimonials, ...businessTestimonials].map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* Desktop+: readable swipeable 3D coverflow */}
        <div className="hidden md:block">
          <SwipeableCoverflowCarousel />
        </div>
      </div>
    </section>
  );
}
