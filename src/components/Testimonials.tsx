import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { useLenis } from './LenisProvider';

const testimonials = [
  {
    id: 1, name: 'Priya Sharma', role: 'Marketing Director', initial: 'P',
    text: 'The modern mangalsutra from Royelle is a revelation. I wear it to client meetings and it is so contemporary that no one realizes it is a mangalsutra — yet it carries all the meaning for me.',
    rating: 5
  },
  {
    id: 2, name: 'Ananya Reddy', role: 'Investment Banker', initial: 'A',
    text: 'I have been searching for office-appropriate gold jewellery for years. Royelle nails the balance between elegant and modern. The 14K office collection starts at just ₹3,200 and looks premium.',
    rating: 5
  },
  {
    id: 3, name: 'Kavita Menon', role: 'Startup Founder', initial: 'K',
    text: 'From my first pitch to our series A party, Royelle has been with me. The 18K pieces are genuinely premium — you can feel the weight and quality. And everything is under ₹20,000? Unbelievable.',
    rating: 5
  },
  {
    id: 4, name: 'Dr. Sarah Thomas', role: 'Cardiologist', initial: 'S',
    text: 'As a senior physician, I need jewellery that is subtle, hygienic, and professional. The slim 14K bangles and pearl studs are perfect for long hospital shifts. Beautiful and practical.',
    rating: 5
  },
  {
    id: 5, name: 'Ritu Kapoor', role: 'Operations Head, MNC', initial: 'R',
    text: 'I travel constantly between Singapore, Dubai, and Mumbai. Royelle pieces transition seamlessly from morning meetings to evening client dinners. The investment in 18K gold makes financial sense too.',
    rating: 5
  },
  {
    id: 6, name: 'Meera Joshi', role: 'Corporate Lawyer', initial: 'M',
    text: 'Finally, jewellery that matches my power suits. The diamond-accented studs are subtle enough for court yet elegant enough for post-work events. Royelle understands the working woman.',
    rating: 5
  }
];

function TestimonialCard({ t, index }: { t: typeof testimonials[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="flex-shrink-0 w-[340px] sm:w-[380px] group"
    >
      <div className="relative h-full bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-card hover:shadow-xl hover:border-royal-purple/20 transition-all duration-500">
        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-royal-purple/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote icon */}
        <Quote className="w-8 h-8 text-royal-purple/10 mb-4" strokeWidth={1.5} />

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 text-royal-gold fill-royal-gold" strokeWidth={1.5} />
          ))}
        </div>

        {/* Text */}
        <p className="text-slate-600 text-[15px] leading-[1.75] mb-6 font-light line-clamp-4">
          "{t.text}"
        </p>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
          <div className="w-11 h-11 rounded-full flex items-center justify-center bg-royal-purple-light shadow-sm">
            <span className="font-[Cormorant_Garamond] text-lg font-semibold text-white">{t.initial}</span>
          </div>
          <div>
            <h4 className="font-[Cormorant_Garamond] text-base font-semibold text-slate-800">{t.name}</h4>
            <p className="text-[11px] text-royal-purple uppercase tracking-[0.15em] font-medium">{t.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPosRef = useRef(0);
  const { scrollVelocity } = useLenis();

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    const baseSpeed = 0.6;

    const animate = () => {
      if (!isHovered) {
        // Speed increases with scroll velocity for interactive feel
        const velocityBoost = Math.abs(scrollVelocity) * 0.15;
        const speed = baseSpeed + velocityBoost;

        scrollPosRef.current += speed;
        const firstChild = marquee.firstElementChild as HTMLElement;
        if (firstChild && scrollPosRef.current >= firstChild.offsetWidth + 24) {
          scrollPosRef.current = 0;
          marquee.appendChild(marquee.firstElementChild!);
        }
        marquee.style.transform = `translateX(-${scrollPosRef.current}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered, scrollVelocity]);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-slate-50">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-14">
          <span className="text-royal-purple-light text-xs uppercase tracking-[0.25em] font-medium">Voices</span>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-light mt-3 mb-4 text-slate-800">
            Loved by <span className="text-royal-purple italic font-medium">Leaders</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-royal-purple to-transparent mx-auto" />
        </ScrollReveal>
      </div>

      {/* Marquee container with Lenis-aware velocity */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="overflow-hidden py-4">
          <div ref={marqueeRef} className="flex gap-6 pl-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} t={t} index={i} />
            ))}
            {/* Duplicate for seamless loop */}
            {testimonials.map((t, i) => (
              <TestimonialCard key={`dup-${t.id}`} t={t} index={i + testimonials.length} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative elements */}
      <div className="container-luxury mt-12">
        <div className="flex items-center justify-center gap-8">
          <div className="h-px w-12 bg-slate-200" />
          <span className="text-slate-400 text-xs uppercase tracking-[0.2em]">Trusted by 10,000+ Women</span>
          <div className="h-px w-12 bg-slate-200" />
        </div>
      </div>
    </section>
  );
}
