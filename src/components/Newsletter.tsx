import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setTimeout(() => { setSubmitted(false); setEmail(''); }, 3000); }
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50" />
      <div className="relative z-10 container-luxury">
        <ScrollReveal className="max-w-xl mx-auto text-center">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 300 }} className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-royal-purple/5 mb-8 border border-royal-purple/10">
            <Sparkles className="w-6 h-6 text-royal-purple" strokeWidth={1} />
          </motion.div>

          <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-light mb-4 text-slate-800">
            Join the <span className="text-royal-purple italic font-medium">Royelle Circle</span>
          </h2>
          <p className="text-slate-500 text-base leading-[1.8] mb-8 font-light">
            Early access to new collections, executive styling tips, private trunk show invitations,
            and exclusive member-only pricing.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" strokeWidth={1.5} />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 text-slate-700 placeholder:text-slate-400 placeholder:text-sm focus:outline-none focus:border-royal-purple transition-all text-sm rounded-sm"
                required />
            </div>
            <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary flex items-center justify-center gap-2 rounded-sm">
              {submitted ? 'Welcome!' : <><span className="text-xs">Subscribe</span><ArrowRight className="w-3.5 h-3.5" /></>}
            </motion.button>
          </form>
          <p className="text-xs text-slate-400 mt-4 uppercase tracking-wider">No spam. Only gold.</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
