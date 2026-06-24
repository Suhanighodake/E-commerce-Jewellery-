import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

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
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => { setDirection(1); setCurrent(p => (p + 1) % testimonials.length); }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => { setDirection(1); setCurrent(p => (p + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent(p => (p - 1 + testimonials.length) % testimonials.length); };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 60 : -60, opacity: 0 })
  };

  const t = testimonials[current];

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-50">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-12">
          <span className="text-royal-purple text-xs uppercase tracking-[0.25em] font-medium">Voices</span>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light mt-3 mb-4 text-slate-800">
            Loved by <span className="text-royal-purple italic font-medium">Leaders</span>
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </ScrollReveal>

        <div className="max-w-3xl mx-auto relative">
          <Quote className="absolute -top-2 left-2 sm:left-4 w-10 h-10 text-royal-purple/10" strokeWidth={1} />

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current} custom={direction} variants={variants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-sm p-6 sm:p-8 md:p-10 border border-slate-100 shadow-card"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex-shrink-0"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-gradient-to-br from-royal-purple to-royal-rose">
                      <span className="font-[Cormorant_Garamond] text-2xl sm:text-3xl font-semibold text-white">{t.initial}</span>
                    </div>
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <p className="text-slate-600 text-base leading-[1.8] italic mb-5 font-light">"{t.text}"</p>
                    <h4 className="font-[Cormorant_Garamond] text-lg font-semibold text-slate-800">{t.name}</h4>
                    <p className="text-xs text-royal-purple uppercase tracking-[0.15em] font-medium mt-1">{t.role}</p>
                    <div className="flex items-center gap-1 mt-2.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.05 }}>
                          <svg className="w-3.5 h-3.5 text-royal-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={prev}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white transition-all border border-slate-100 shadow-sm">
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-[2px] rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-royal-purple' : 'w-2 bg-slate-300 hover:bg-slate-400'}`} />
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} onClick={next}
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-royal-purple hover:bg-royal-purple hover:text-white transition-all border border-slate-100 shadow-sm">
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
