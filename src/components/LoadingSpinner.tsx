import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond } from 'lucide-react';

const ringImages = [
  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=120&h=120&fit=crop',
  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=120&h=120&fit=crop',
];

interface LoadingSpinnerProps {
  onComplete: () => void;
}

export default function LoadingSpinner({ onComplete }: LoadingSpinnerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2200;
    const interval = 30;
    const steps = duration / interval;
    let current = 0;

    const timer = setInterval(() => {
      current += 1;
      setProgress(Math.min((current / steps) * 100, 100));
      if (current >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Rotating ring of jewelry images */}
      <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8">
        <AnimatePresence>
          {ringImages.map((src, i) => {
            const angle = (i / ringImages.length) * 360;
            const radius = 64;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: x - 20,
                  y: y - 20,
                }}
                transition={{
                  delay: 0.15 + i * 0.1,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 200,
                }}
              >
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shadow-lg border-2 border-white"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.3,
                  }}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Center logo */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <Diamond className="w-8 h-8 text-brand-teal mb-1" strokeWidth={1.2} />
          <span className="font-[Cormorant_Garamond] text-lg font-semibold tracking-[0.15em] text-slate-800">
            ROYELLE
          </span>
        </motion.div>


      </div>

      {/* Progress bar */}
      <div className="w-48 md:w-56 h-[3px] bg-slate-100 rounded-full overflow-hidden mb-4">
        <motion.div
          className="h-full bg-brand-teal rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="text-xs text-slate-400 uppercase tracking-[0.2em] font-medium"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading Collection
      </motion.p>
    </motion.div>
  );
}
