import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
    <section className="relative py-20 md:py-28 bg-white">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-100 rounded-sm mb-7">
            <Award className="w-3.5 h-3.5 text-royal-purple" strokeWidth={1.5} />
            <span className="text-xs text-royal-purple tracking-[0.2em] uppercase font-medium">BIS Hallmarked</span>
          </div>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light mb-5 text-slate-800">
            Pure <span className="text-royal-purple italic font-medium">Gold Standards</span>
          </h2>
          <div className="accent-line w-16 mx-auto mb-5" />
          <p className="text-slate-500 max-w-md mx-auto text-base leading-relaxed font-light">
            Every Royelle creation carries the BIS hallmark — your guarantee of purity, authenticity, and trust.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.2}>
          {materialsList.map((m) => (
            <StaggerItem key={m.purity}>
              <motion.div whileHover={{ y: -6 }} className="p-8 rounded-sm bg-white border border-slate-100 hover:shadow-card-hover transition-all duration-700">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-[Cormorant_Garamond] text-[3.5rem] font-semibold leading-none" style={{ color: m.accent }}>{m.purity}</h3>
                    <span className="text-xs text-slate-400 uppercase tracking-[0.2em] mt-1 block">Gold Purity</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-400 uppercase tracking-wider">From</p>
                    <p className="text-royal-purple font-semibold text-lg">{m.priceFrom}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="h-[3px] rounded-full overflow-hidden flex bg-slate-100">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: m.gold }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${m.accent}, ${m.accent}88)` }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs uppercase tracking-[0.15em]">
                    <span style={{ color: m.accent }}>Gold {m.gold}</span>
                    <span className="text-slate-400">Alloy {m.alloy}</span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-[1.9] mb-5 font-light">{m.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {m.features.map((f) => (
                    <div key={f} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ backgroundColor: m.accent }} />
                      <span className="text-xs text-slate-500">{f}</span>
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
