import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gem, Shield, Hand, Award, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const steps = [
  {
    number: '01',
    title: 'Ethical Sourcing',
    desc: 'Every gram of gold is responsibly sourced, traced from certified mines to our Mumbai atelier. We believe beauty should never cost the earth.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=300&fit=crop',
  },
  {
    number: '02',
    title: 'Master Artisans',
    desc: 'Our goldsmiths train for over a decade. Each piece passes through twelve hands before it reaches yours — cast, filed, polished, set, inspected.',
    icon: Hand,
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=300&fit=crop',
  },
  {
    number: '03',
    title: 'Stone Selection',
    desc: 'Only the finest cubic zirconia, freshwater pearls, and lab-grown diamonds make the cut. Luminous. Flawless. Ethically created.',
    icon: Gem,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=300&fit=crop',
  },
];

export default function Craftsmanship() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-purple-50 via-white to-purple-50 overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-purple-100/50 blur-xl"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-100/50 blur-xl"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-rose-100/50 blur-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-14">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-4 h-4 text-royal-purple" strokeWidth={1.5} />
            <span className="text-sm text-royal-purple font-medium uppercase tracking-wider">The Atelier</span>
          </motion.div>
          <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl lg:text-5xl font-light text-slate-800 mb-4">
            Crafted With <span className="text-royal-purple italic font-medium">Intention</span>
          </h2>
          <div className="w-16 h-0.5 bg-royal-purple mx-auto mb-6" />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed font-light">
            In our Mumbai atelier, gold is not merely shaped — it is coaxed into form by hands
            that understand its secrets, refined through generations of mastery.
          </p>
        </ScrollReveal>

        {/* Steps with Images */}
        <div ref={ref} className="space-y-12 md:space-y-16">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: 'easeOut' }}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-10`}
              >
                {/* Image */}
                <motion.div
                  className="w-full md:w-2/5 flex-shrink-0"
                  whileHover={{ scale: 1.03, rotate: isEven ? 1 : -1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative group">
                    <div className="overflow-hidden rounded-2xl shadow-lg">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    {/* Floating badge */}
                    <motion.div
                      className="absolute -bottom-3 -right-3 bg-white rounded-full p-3 shadow-lg border border-purple-50"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3 + i, repeat: Infinity }}
                    >
                      <Icon className="w-5 h-5 text-royal-purple" strokeWidth={1.5} />
                    </motion.div>
                    {/* Decorative corner */}
                    <div className={`absolute -top-2 -${isEven ? 'left' : 'right'}-2 w-12 h-12 border-2 border-royal-purple/20 rounded-xl pointer-events-none`} />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={`w-full md:w-3/5 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${isEven ? '' : 'md:justify-end'}`}>
                      <motion.div
                        className="w-10 h-10 rounded-full bg-royal-purple text-white flex items-center justify-center font-bold text-sm"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {step.number}
                      </motion.div>
                      <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-semibold text-slate-800">
                        {step.title}
                      </h3>
                    </div>
                    <div className={`w-16 h-0.5 bg-royal-purple/30 mb-4 ${isEven ? '' : 'md:ml-auto'}`} />
                    <p className="text-slate-500 text-base leading-relaxed font-light mb-4 max-w-lg">
                      {step.desc}
                    </p>
                    <motion.div
                      className={`flex items-center gap-2 ${isEven ? '' : 'md:justify-end'}`}
                      whileHover={{ x: isEven ? 5 : -5 }}
                    >
                      <Sparkles className="w-4 h-4 text-royal-purple" strokeWidth={1.5} />
                      <span className="text-sm text-royal-purple font-medium">Premium Quality</span>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {[
            { value: '30+', label: 'Years Heritage' },
            { value: '12', label: 'Artisan Hands' },
            { value: '100%', label: 'BIS Hallmarked' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-white rounded-xl shadow-sm border border-purple-50"
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: 'spring' }}
            >
              <motion.span
                className="block font-[Cormorant_Garamond] text-3xl md:text-4xl font-bold text-royal-purple mb-1"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1 + i * 0.1, type: 'spring' }}
              >
                {stat.value}
              </motion.span>
              <span className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
