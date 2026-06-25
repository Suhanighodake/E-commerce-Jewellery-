import { useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Mail, ArrowRight, Check, Gem, Sparkles, Crown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

function FloatingGem({ delay, x, size = 12 }: { delay: number; x: string; size?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none text-royal-gold/30"
      style={{ left: x, top: '100%' }}
      animate={{ y: ['0%', '-800%'], opacity: [0, 0.6, 0], rotate: [0, 180] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'linear' }}
    >
      <Gem size={size} strokeWidth={1} />
    </motion.div>
  );
}

function SuccessParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full"
          style={{ backgroundColor: i % 2 === 0 ? '#D4AF37' : '#4B0082' }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{
            x: (Math.random() - 0.5) * 300,
            y: (Math.random() - 0.5) * 300 - 50,
            opacity: 0,
            scale: 0,
          }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      ))}
    </div>
  );
}

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 150, damping: 20 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => { setSubmitted(false); setEmail(''); }, 4000);
    }
  };

  const headingWords = ['Join', 'the', 'Royelle', 'Circle'];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-royal-purple/[0.04] blur-[100px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-royal-gold/[0.06] blur-[100px] pointer-events-none"
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-royal-purple/5 border border-royal-purple/10 rounded-full mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
              >
                <Crown className="w-3.5 h-3.5 text-royal-purple" strokeWidth={1.5} />
                <span className="text-xs text-royal-purple tracking-[0.2em] uppercase font-medium">Members Only</span>
              </motion.div>

              {/* Animated heading */}
              <h2 className="font-[Cormorant_Garamond] text-5xl md:text-6xl lg:text-7xl font-light text-slate-800 leading-[1.05] mb-6">
                {headingWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block mr-3 ${word === 'Royelle' || word === 'Circle' ? 'italic font-normal text-royal-purple' : ''}`}
                    initial={{ opacity: 0, y: 30, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring' as const, stiffness: 200, damping: 18, delay: 0.1 + i * 0.08 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>

              <motion.p
                className="text-slate-500 text-lg md:text-xl leading-[1.8] mb-10 font-light max-w-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Early access to collections, styling tips, trunk show invites, and member-only pricing.
              </motion.p>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-royal-purple transition-colors" strokeWidth={1.5} />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 text-slate-700 text-base focus:outline-none focus:border-royal-purple focus:ring-4 focus:ring-royal-purple/10 transition-all placeholder:text-slate-400 rounded-xl"
                      required
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={submitted}
                    className="relative overflow-hidden px-8 py-4 bg-royal-purple text-white text-base font-semibold rounded-xl hover:shadow-lg hover:shadow-royal-purple/25 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-90"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {/* Shimmer sweep */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity"
                      style={{
                        background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0.2) 55%, transparent 60%)',
                        backgroundSize: '200% 100%',
                      }}
                      animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
                    />
                    {submitted ? (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-10 flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                        Welcome!
                      </motion.span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-2">
                        Subscribe
                        <ArrowRight className="w-5 h-5" strokeWidth={2} />
                      </span>
                    )}
                  </motion.button>
                </div>
                {submitted && <SuccessParticles />}
              </motion.form>

              {/* Benefit badges */}
              <motion.div
                className="flex flex-wrap items-center gap-4 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                {[
                  { icon: Check, text: 'No spam' },
                  { icon: Sparkles, text: 'Exclusive access' },
                  { icon: Check, text: 'Unsubscribe anytime' },
                ].map((item, i) => (
                  <motion.span
                    key={i}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-xs text-slate-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    whileHover={{ scale: 1.05, borderColor: 'rgba(75, 0, 130, 0.2)' }}
                  >
                    <item.icon className="w-3.5 h-3.5 text-royal-purple" strokeWidth={2} />
                    {item.text}
                  </motion.span>
                ))}
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right: 3D Card */}
          <motion.div
            ref={cardRef}
            className="relative hidden lg:block"
            style={{ perspective: 1000, rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 shadow-2xl p-8 overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Inner glow follows mouse */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: useTransform(
                    [mouseX, mouseY],
                    ([x, y]) => `radial-gradient(circle at ${(Number(x) + 0.5) * 100}% ${(Number(y) + 0.5) * 100}%, rgba(212, 175, 55, 0.08), transparent 60%)`
                  ),
                }}
              />

              {/* Floating gems inside card */}
              <FloatingGem delay={0} x="15%" size={10} />
              <FloatingGem delay={2} x="75%" size={8} />
              <FloatingGem delay={4} x="45%" size={12} />

              {/* Decorative ring */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-royal-purple/10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-royal-gold/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              />

              {/* Image */}
              <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden shadow-lg mb-6">
                <motion.img
                  src="https://i.pinimg.com/736x/5a/f5/92/5af592e1a651d6269d56e043f0bda2b2.jpg"
                  alt="Royelle jewellery"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

              </div>

              {/* Card content */}
              <div className="relative z-10 text-center">
                <p className="font-[Cormorant_Garamond] text-2xl font-semibold text-slate-800 mb-1">
                  12,000+ Members
                </p>
                <p className="text-sm text-slate-400 font-light">
                  Already part of our inner circle
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
