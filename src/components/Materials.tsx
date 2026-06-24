import { motion } from 'framer-motion';
import { Award, Check } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const materialsList = [
  {
    purity: '14K',
    gold: '58.3%',
    alloy: '41.7%',
    priceFrom: '₹1,200',
    description: 'The sweet spot of durability and luxury. Our 14K pieces are engineered for daily wear — resilient through commutes, coffee runs, and conquering calendars.',
    features: ['Daily Wear Ready', 'Scratch Resistant', 'Effortless Polish', 'Smart Investment'],
    accent: '#D4AF37'
  },
  {
    purity: '18K',
    gold: '75%',
    alloy: '25%',
    priceFrom: '₹9,800',
    description: 'Three-quarters pure gold radiates warmth that no alloy can replicate. Rich, luminous, and unmistakably premium — for moments when only the finest will do.',
    features: ['Rich Luminosity', 'Premium Heirloom', 'Deeper Gold Tone', 'Appreciating Value'],
    accent: '#B76E79'
  }
];

export default function Materials() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-white via-slate-50/60 to-white overflow-hidden">
      <div className="container-luxury relative z-10">
        <ScrollReveal className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-royal-purple/5 border border-royal-purple/10 rounded-full mb-8">
            <Award className="w-4 h-4 text-royal-purple" strokeWidth={1.5} />
            <span className="text-sm text-royal-purple tracking-[0.18em] uppercase font-medium">BIS Hallmarked</span>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl lg:text-7xl font-light mb-6 text-slate-800">
            Pure <span className="text-royal-purple italic font-medium">Gold Standards</span>
          </h2>
          <div className="accent-line w-20 mx-auto mb-6" />
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Every Royelle creation carries the BIS hallmark — your guarantee of purity, authenticity, and trust.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto" staggerDelay={0.2}>
          {materialsList.map((m) => (
            <StaggerItem key={m.purity}>
              <motion.div
                whileHover={{ y: -8 }}
                className="relative p-8 md:p-10 rounded-3xl bg-white border border-slate-100 shadow-card hover:shadow-card-hover transition-all duration-700 overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1.5"
                  style={{ background: `linear-gradient(90deg, ${m.accent}, ${m.accent}66)` }}
                />

                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3
                      className="font-[Cormorant_Garamond] text-[4.5rem] md:text-[5.5rem] font-semibold leading-none"
                      style={{ color: m.accent }}
                    >
                      {m.purity}
                    </h3>
                    <span className="text-sm md:text-base text-slate-400 uppercase tracking-[0.2em] mt-2 block">Gold Purity</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-400 uppercase tracking-wider mb-1">From</p>
                    <p className="text-royal-purple font-semibold text-2xl md:text-3xl">{m.priceFrom}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="h-2 rounded-full overflow-hidden flex bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.gold }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${m.accent}, ${m.accent}88)` }}
                    />
                  </div>
                  <div className="flex justify-between mt-3 text-sm md:text-base uppercase tracking-[0.15em]">
                    <span style={{ color: m.accent }}>Gold {m.gold}</span>
                    <span className="text-slate-400">Alloy {m.alloy}</span>
                  </div>
                </div>

                <p className="text-slate-600 text-base md:text-lg leading-[1.8] mb-7 font-light">
                  {m.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {m.features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${m.accent}22` }}
                      >
                        <Check className="w-3 h-3" style={{ color: m.accent }} strokeWidth={2.5} />
                      </div>
                      <span className="text-sm md:text-base text-slate-600">{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
