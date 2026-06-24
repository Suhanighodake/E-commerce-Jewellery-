import { motion } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Subtle ambient texture */}
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          {/* Left: Overlapping circular images */}
          <ScrollReveal direction="left" className="lg:w-[48%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-md mx-auto lg:mx-0"
            >
              {/* Decorative circle behind */}
              <div className="absolute -top-8 -left-8 w-full h-full rounded-t-full rounded-b-[3rem] bg-royal-purple/5 -z-10" />
              
              {/* Main large image — vertical pill/arch shape */}
              <div className="relative overflow-hidden rounded-t-full rounded-b-[3rem] aspect-[3/4] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop"
                  alt="Royelle gold jewellery collection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small overlapping circle — bottom right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                className="absolute -bottom-8 -right-4 md:-right-8 w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80"
                  alt="Royelle statement rings"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Decorative ring around small circle */}
              <div className="absolute -bottom-10 -right-6 md:-right-10 w-36 h-36 md:w-48 md:h-48 rounded-full border border-royal-purple/10 -z-10" />
            </motion.div>
          </ScrollReveal>

          {/* Right: Text content */}
          <ScrollReveal direction="right" className="lg:w-[52%] text-center lg:text-left mt-12 lg:mt-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-royal-purple-light text-xs uppercase tracking-[0.3em] font-medium mb-6"
              >
                Our Story
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-[Cormorant_Garamond] text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-light text-slate-900 leading-[1.05] mb-8"
              >
                Where Heritage<br />
                <span className="italic font-normal text-royal-purple">Meets Ambition</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 h-[1px] bg-royal-purple mx-auto lg:mx-0 origin-left mb-8"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="text-slate-600 text-base md:text-lg leading-[1.9] mb-6 font-light"
              >
                Royelle was born from a simple truth: the modern working woman deserved jewellery
                that matched her ambition. Not flashy. Not forgettable. But precisely calibrated
                for power dressing, boardroom confidence, and celebration evenings.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-slate-400 text-sm md:text-base leading-[1.9] font-light"
              >
                From our first corporate-friendly mangalsutra to our diamond-accented statement rings,
                every creation honors tradition while speaking the language of contemporary leadership.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
