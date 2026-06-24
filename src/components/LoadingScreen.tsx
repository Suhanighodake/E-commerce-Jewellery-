import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Diamond } from 'lucide-react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
            >
              <Diamond className="w-10 h-10 text-[#D4AF37]" strokeWidth={1} />
            </motion.div>
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="font-[Cormorant_Garamond] text-4xl tracking-[0.3em] gold-text uppercase"
              >
                Royelle
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-[9px] text-[#9E9E9E] tracking-[0.4em] uppercase mt-3 font-medium"
              >
                Fine Jewellery
              </motion.p>
            </div>
          </motion.div>

          {/* Progress Line */}
          <motion.div
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[rgba(212,175,55,0.1)]"
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#B76E79]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

