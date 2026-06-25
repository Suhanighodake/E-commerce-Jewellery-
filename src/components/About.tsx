import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from './ScrollReveal';

function TypewriterHeading() {
  const fullText = 'Where Heritage\nMeets Ambition';
  const [displayed, setDisplayed] = useState('');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!inView) return;

    let cancelled = false;
    let display = '';

    const wait = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

    async function loop() {
      while (!cancelled) {
        for (let i = 0; i <= fullText.length; i++) {
          if (cancelled) return;
          display = fullText.slice(0, i);
          setDisplayed(display);
          await wait(85);
        }
        await wait(1000);
        for (let i = display.length; i >= 0; i--) {
          if (cancelled) return;
          display = fullText.slice(0, i);
          setDisplayed(display);
          await wait(40);
        }
        await wait(1000);
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [inView, fullText]);

  const lines = displayed.split('\n');

  return (
    <div ref={ref} className="mb-4 md:mb-5">
      <h2 className="font-[Cormorant_Garamond] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-[1.05]">
        {lines.map((line, idx) => (
          <span key={idx} className="block min-h-[1.1em]">
            {idx === 1 ? (
              <span className="italic font-normal text-royal-purple">{line}</span>
            ) : (
              <span>{line}</span>
            )}
            {idx === lines.length - 1 && (
              <motion.span
                className="inline-block w-[2px] md:w-[3px] h-[0.6em] md:h-[0.75em] bg-royal-purple ml-1 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
              />
            )}
          </span>
        ))}
      </h2>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139,92,246,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(168,85,247,0.06) 0%, transparent 50%)' }} />

      <div className="container-luxury relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left: Images */}
          <ScrollReveal direction="left" className="lg:w-[48%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-sm md:max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute -top-6 -left-4 md:-top-8 md:-left-8 w-full h-full rounded-t-full rounded-b-[3rem] bg-royal-purple/5 -z-10" />

              <div className="relative overflow-hidden rounded-t-full rounded-b-[3rem] aspect-[3/4] shadow-2xl">
                <motion.img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=750&fit=crop"
                  alt="Royelle gold jewellery collection"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Small overlapping circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -right-2 md:-bottom-8 md:-right-8 w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&q=80"
                  alt="Royelle statement rings"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              {/* Decorative ring */}
              <motion.div
                className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border border-royal-purple/10 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal direction="right" className="lg:w-[52%] text-center lg:text-left mt-6 lg:mt-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-block text-royal-purple-light text-xs uppercase tracking-[0.3em] font-medium mb-3 md:mb-4"
              >
                Our Story
              </motion.span>

              <TypewriterHeading />

              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="w-16 h-[1px] bg-royal-purple mx-auto lg:mx-0 origin-left mb-5"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="text-slate-600 text-base md:text-lg leading-[1.8] mb-3 font-light"
              >
                Royelle was born from a simple belief: the modern working woman deserves jewellery
                that matches her ambition — refined pieces for power dressing, boardroom confidence,
                and celebration evenings.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="text-slate-400 text-sm md:text-base leading-[1.8] font-light"
              >
                Tradition, reimagined for the modern leader.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
