import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Star } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setTimeout(() => { setSubmitted(false); setEmail(''); }, 4000); }
  };

  return (
    <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Decorative gradient blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-royal-purple/5 blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-royal-gold/5 blur-3xl pointer-events-none"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-luxury relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden"
          >
            <div className="p-8 md:p-12 lg:p-14">
              {/* Header section */}
              <div className="text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-6xl font-light mb-5 text-slate-800 leading-tight"
                >
                  Join the <span className="text-royal-purple italic font-medium">Royelle Circle</span>
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-slate-500 text-lg md:text-xl leading-[1.8] mb-10 font-light max-w-xl mx-auto"
                >
                  Early access to new collections, executive styling tips, private trunk show invitations,
                  and exclusive member-only pricing.
                </motion.p>
              </div>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <motion.div
                  className="flex-1 relative"
                  whileFocus={{ scale: 1.02 }}
                >
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" strokeWidth={1.5} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 text-slate-700 text-base focus:outline-none focus:border-royal-purple focus:ring-2 focus:ring-royal-purple/10 transition-all placeholder:text-slate-400 placeholder:text-base rounded-xl"
                    required
                  />
                </motion.div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 bg-gradient-to-r from-royal-purple to-royal-purple-light text-white text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-royal-purple/25 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  {submitted ? (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2"
                    >
                      <Star className="w-5 h-5 text-royal-gold fill-royal-gold" strokeWidth={1.5} />
                      Welcome!
                    </motion.span>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="w-5 h-5" strokeWidth={2} />
                    </>
                  )}
                </motion.button>
              </motion.form>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center justify-center gap-6 mt-8 flex-wrap"
              >
                <span className="text-sm text-slate-400 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  No spam
                </span>
                <span className="text-sm text-slate-400 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Unsubscribe anytime
                </span>
                <span className="text-sm text-slate-400 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Exclusive access
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
