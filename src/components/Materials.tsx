import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Award, Check, Sparkles } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const materialsList = [
  {
    purity: '14K',
    goldPct: 58.3,
    alloy: '41.7%',
    priceFrom: '₹1,200',
    shortDesc: 'Built for daily life. Durable, luminous, effortlessly elegant.',
    features: ['Daily Wear', 'Scratch Resistant', 'Smart Buy'],
    accent: '#D4AF37',
    image: 'https://i.pinimg.com/736x/5e/98/4e/5e984e85f3c50ca7cf0145e369368865.jpg',
    label: 'Everyday Luxury',
  },
  {
    purity: '18K',
    goldPct: 75,
    alloy: '25%',
    priceFrom: '₹9,800',
    shortDesc: 'Three-quarters pure gold. Rich warmth for life\'s finest moments.',
    features: ['Heirloom Grade', 'Deeper Tone', 'Appreciating'],
    accent: '#B76E79',
    image: 'https://i.pinimg.com/1200x/bb/7d/0b/bb7d0b6f04ce28e05099215484d833f5.jpg',
    label: 'Premium Splendor',
  },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => v.toFixed(1));

  useEffect(() => {
    if (inView) {
      const c = animate(count, value, { duration: 2, ease: 'easeOut' });
      return c.stop;
    }
  }, [inView, value, count]);

  return <span ref={ref}><motion.span>{rounded}</motion.span>%</span>;
}

function CircularRing({ pct, color, size = 70 }: { pct: number; color: string; size?: number }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true });
  const r = (size - 8) / 2;
  const c = 2 * Math.PI * r;
  const off = c - (pct / 100) * c;

  return (
    <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#ffffff33" strokeWidth="4" />
      <motion.circle
        cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round"
        strokeDasharray={c}
        initial={{ strokeDashoffset: c }}
        animate={inView ? { strokeDashoffset: off } : { strokeDashoffset: c }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.4 }}
      />
    </svg>
  );
}

function FloatingOrb({ color, size, x, y, delay }: { color: string; size: number; x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none blur-2xl opacity-20"
      style={{ width: size, height: size, backgroundColor: color, left: x, top: y }}
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 8, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

export default function Materials() {
  return (
    <section id="materials" className="relative py-14 md:py-20 overflow-hidden bg-white">
      {/* Ambient floating orbs */}
      <FloatingOrb color="#D4AF37" size={300} x="-5%" y="10%" delay={0} />
      <FloatingOrb color="#B76E79" size={250} x="80%" y="60%" delay={2} />
      <FloatingOrb color="#4B0082" size={200} x="40%" y="-5%" delay={4} />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14 md:mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-royal-purple/5 border border-royal-purple/10 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Award className="w-3.5 h-3.5 text-royal-purple" strokeWidth={1.5} />
            <span className="text-xs text-royal-purple tracking-[0.2em] uppercase font-medium">BIS Hallmarked</span>
          </motion.div>

          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl lg:text-7xl font-light mb-4 text-slate-800">
            Pure{' '}
            <span className="text-royal-purple italic font-medium">Gold</span>
          </h2>
          <motion.div
            className="accent-line w-16 mx-auto mb-5"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-slate-400 max-w-lg mx-auto text-base md:text-lg font-light tracking-wide">
            Hallmarked purity. Two standards. One promise.
          </p>
        </ScrollReveal>

        {/* Image Cards */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.2}>
          {materialsList.map((m) => (
            <StaggerItem key={m.purity}>
              <motion.div
                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] md:aspect-[16/13] overflow-hidden">
                  <motion.img
                    src={m.image}
                    alt={`${m.purity} Gold Jewellery`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    whileHover={{ scale: 1.08 }}
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-30 transition-opacity duration-700"
                    style={{ background: `linear-gradient(135deg, ${m.accent}88, transparent)` }}
                  />

                  {/* Shimmer sweep on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.15) 55%, transparent 60%)',
                      backgroundSize: '200% 100%',
                    }}
                    animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                  />

                  {/* Top label badge */}
                  <motion.div
                    className="absolute top-5 left-5"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: m.accent }} />
                      <span className="text-xs text-white font-medium tracking-wider uppercase">{m.label}</span>
                    </div>
                  </motion.div>

                  {/* Purity ring top-right */}
                  <motion.div
                    className="absolute top-5 right-5"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', delay: 0.6, stiffness: 200 }}
                  >
                    <div className="relative">
                      <CircularRing pct={m.goldPct} color={m.accent} size={64} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[10px] text-white/60 uppercase tracking-wider">Gold</span>
                        <span className="text-sm font-bold text-white"><AnimatedCounter value={m.goldPct} /></span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    {/* Purity big text */}
                    <motion.div
                      className="mb-3"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="font-[Cormorant_Garamond] text-6xl md:text-7xl font-semibold text-white leading-none">
                        {m.purity}
                      </h3>
                    </motion.div>

                    {/* Short desc */}
                    <motion.p
                      className="text-white/70 text-sm md:text-base font-light mb-4 max-w-xs leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {m.shortDesc}
                    </motion.p>

                    {/* Features row */}
                    <motion.div
                      className="flex flex-wrap gap-2 mb-5"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 }}
                    >
                      {m.features.map((f, i) => (
                        <motion.span
                          key={f}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-white/90 backdrop-blur-sm border border-white/15"
                          style={{ backgroundColor: `${m.accent}22` }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + i * 0.08 }}
                          whileHover={{ scale: 1.1, backgroundColor: `${m.accent}44` }}
                        >
                          <Check className="w-3 h-3" style={{ color: m.accent }} strokeWidth={3} />
                          {f}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Price + CTA */}
                    <motion.div
                      className="flex items-end justify-between"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                    >
                      <div>
                        <span className="text-xs text-white/40 uppercase tracking-[0.2em] block mb-0.5">Starting at</span>
                        <span className="text-2xl md:text-3xl font-bold text-white font-[Cormorant_Garamond]">{m.priceFrom}</span>
                      </div>
                      <motion.button
                        className="px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.15em] text-white border border-white/30 backdrop-blur-sm transition-colors"
                        style={{ backgroundColor: `${m.accent}33` }}
                        whileHover={{ backgroundColor: m.accent, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Explore
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
