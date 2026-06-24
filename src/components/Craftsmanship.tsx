import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Gem, Shield, Sparkles, Award } from 'lucide-react';

const bentoCards = [
  {
    id: 1,
    title: 'Ethical Sourcing',
    desc: 'Responsibly sourced gold, traced from certified mines to our Mumbai atelier.',
    icon: Shield,
    bg: 'bg-royal-purple/10',
    textColor: 'text-royal-purple-deep',
    accent: 'bg-royal-purple',
    span: 'md:col-span-1 md:row-span-2',
    layout: 'tall',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&h=900&fit=crop',
    imageFallback: 'bg-gradient-to-b from-royal-purple/20 to-royal-purple/35',
  },
  {
    id: 5,
    title: '30+ Years of Tradition',
    desc: 'Heritage craftsmanship refined for the modern professional woman.',
    icon: Sparkles,
    bg: 'bg-royal-purple/15',
    textColor: 'text-royal-purple-deep',
    accent: 'bg-royal-purple-light',
    span: 'md:col-span-2 md:row-span-1',
    layout: 'wide',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=700&h=400&fit=crop',
    imageFallback: 'bg-gradient-to-br from-royal-purple/25 to-royal-purple/40',
  },
  {
    id: 3,
    title: 'Stone Selection',
    desc: 'Only the finest cubic zirconia, pearls, and lab-grown diamonds make the cut.',
    icon: Gem,
    bg: 'bg-royal-purple/20',
    textColor: 'text-royal-purple-deep',
    accent: 'bg-royal-purple-light',
    span: 'md:col-span-1 md:row-span-1',
    layout: 'small',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=320&fit=crop',
    imageFallback: 'bg-gradient-to-br from-royal-purple/30 to-royal-purple/45',
  },
  {
    id: 4,
    title: 'BIS Hallmarked',
    desc: 'Every creation carries the BIS hallmark — your guarantee of purity and trust.',
    icon: Award,
    bg: 'bg-royal-purple/20',
    textColor: 'text-royal-purple-deep',
    accent: 'bg-royal-purple-light',
    span: 'md:col-span-1 md:row-span-1',
    layout: 'small',
    image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=400&h=320&fit=crop',
    imageFallback: 'bg-gradient-to-br from-royal-purple/35 to-royal-purple/50',
  },
];

export default function Craftsmanship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-10 md:py-14 bg-slate-50 overflow-hidden">
      <motion.div
        className="absolute top-10 right-10 w-28 h-28 rounded-full bg-royal-purple/15 blur-3xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-36 h-36 rounded-full bg-royal-purple-light/20 blur-3xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="container-luxury relative z-10">
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-3">
            Crafted With <span className="text-royal-purple italic font-medium">Intention</span>
          </h2>
          <div className="w-14 h-0.5 bg-royal-purple mx-auto mb-4" />
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-light">
            Four promises that define every Royelle piece.
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 auto-rows-[minmax(220px,1fr)]">
          {bentoCards.map((card, i) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ delay: 0.08 + i * 0.08, duration: 0.5, ease: 'easeOut' }}
                className={`relative overflow-hidden rounded-3xl ${card.bg} ${card.span} group hover:shadow-xl transition-shadow duration-500`}
              >
                {/* Tall card: image fills top, text sits at bottom */}
                {card.layout === 'tall' && (
                  <div className="flex flex-col h-full">
                    <div className={`relative flex-1 min-h-0 ${card.imageFallback}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5 md:p-6">
                      <motion.div
                        className={`w-10 h-10 rounded-xl ${card.accent} flex items-center justify-center mb-3 shadow-md`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className={`font-[Cormorant_Garamond] text-2xl md:text-3xl font-bold ${card.textColor} mb-1`}>
                        {card.title}
                      </h3>
                      <p className="text-slate-700 text-base md:text-lg leading-snug">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                )}

                {/* Wide card: text left, image right */}
                {card.layout === 'wide' && (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="p-6 md:p-7 flex flex-col justify-center md:w-1/2 lg:w-5/12">
                      <motion.div
                        className={`w-11 h-11 rounded-xl ${card.accent} flex items-center justify-center mb-4 shadow-md`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className={`font-[Cormorant_Garamond] text-2xl md:text-3xl font-bold ${card.textColor} mb-2`}>
                        {card.title}
                      </h3>
                      <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                    <div className={`relative md:w-1/2 lg:w-7/12 h-48 md:h-auto min-h-[180px] ${card.imageFallback}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}

                {/* Small cards: text top, image bottom */}
                {card.layout === 'small' && (
                  <div className="flex flex-col h-full">
                    <div className="p-5 md:p-6">
                      <motion.div
                        className={`w-10 h-10 rounded-xl ${card.accent} flex items-center justify-center mb-3 shadow-md`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className={`font-[Cormorant_Garamond] text-xl md:text-2xl font-bold ${card.textColor} mb-1`}>
                        {card.title}
                      </h3>
                      <p className="text-slate-700 text-base leading-snug line-clamp-3">
                        {card.desc}
                      </p>
                    </div>
                    <div className={`relative mt-auto h-44 md:h-56 ${card.imageFallback}`}>
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
