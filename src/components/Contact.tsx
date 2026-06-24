import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Globe, ExternalLink } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const contactInfo = [
  {
    icon: MapPin, title: 'Flagship Store',
    details: ['Royelle House, Phoenix Towers', 'Bandra Kurla Complex', 'Mumbai 400051, India']
  },
  {
    icon: Phone, title: 'Concierge',
    details: ['+91 22 4023 4567', '+91 98765 43210 (WhatsApp)']
  },
  {
    icon: Mail, title: 'Email',
    details: ['concierge@royelle.com', 'orders@royelle.com']
  },
  {
    icon: Clock, title: 'Hours',
    details: ['Mon – Sat: 10 AM – 8 PM', 'Sunday: 11 AM – 6 PM']
  }
];

const floatingProducts = [
  { src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=280&h=280&fit=crop', x: '6%', y: '12%', size: 90, delay: 0, duration: 5 },
  { src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=280&h=280&fit=crop', x: '85%', y: '18%', size: 80, delay: 1, duration: 6 },
  { src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=280&h=280&fit=crop', x: '90%', y: '60%', size: 100, delay: 0.5, duration: 7 },
  { src: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=280&h=280&fit=crop', x: '2%', y: '65%', size: 85, delay: 1.5, duration: 5.5 },
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=280&h=280&fit=crop', x: '72%', y: '82%', size: 75, delay: 2, duration: 6.5 },
  { src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=280&h=280&fit=crop', x: '18%', y: '88%', size: 95, delay: 0.8, duration: 5 },
  { src: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=280&h=280&fit=crop', x: '48%', y: '6%', size: 70, delay: 1.2, duration: 7 },
  { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=280&h=280&fit=crop', x: '42%', y: '88%', size: 80, delay: 1.8, duration: 6 },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
      {/* Floating product background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {floatingProducts.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full overflow-hidden shadow-xl border-[3px] border-white opacity-80 hover:opacity-100 transition-opacity duration-500"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 0.85,
              scale: 1,
              y: [0, -15, 0, 10, 0],
              x: [0, 8, -5, 0],
              rotate: [0, 5, -3, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: p.delay },
              scale: { duration: 1, delay: p.delay },
              y: { duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
              x: { duration: p.duration * 1.3, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
              rotate: { duration: p.duration * 1.5, repeat: Infinity, ease: 'easeInOut', delay: p.delay },
            }}
          >
            <img
              src={p.src}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Subtle decorative shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-brand-pink/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-luxury relative z-10">
        <ScrollReveal className="text-center mb-14">
          <span className="text-brand-teal text-xs uppercase tracking-[0.25em] font-medium">Get in Touch</span>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light mt-3 mb-4 text-slate-800">
            We Would Love to <span className="text-brand-teal italic font-medium">Hear From You</span>
          </h2>
          <div className="accent-line w-16 mx-auto" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <StaggerItem key={info.title}>
                    <motion.div whileHover={{ y: -3 }}
                      className="p-5 rounded-sm bg-white/80 backdrop-blur-sm border border-slate-100 hover:shadow-card-hover hover:border-brand-teal/20 transition-all duration-500 group">
                      <Icon className="w-4 h-4 text-brand-teal mb-2 group-hover:text-brand-pink transition-colors" strokeWidth={1.2} />
                      <h3 className="font-[Cormorant_Garamond] text-base font-semibold text-slate-800 mb-2">{info.title}</h3>
                      {info.details.map((d, i) => <p key={i} className="text-xs text-slate-400 leading-[1.7]">{d}</p>)}
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </div>
            <div className="mt-5 flex items-center gap-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider">Follow:</span>
              {[Globe, ExternalLink].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.08 }}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-brand-teal transition-all border border-slate-100 shadow-sm">
                  <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </StaggerContainer>

          <ScrollReveal direction="right">
            <form className="bg-white/80 backdrop-blur-sm rounded-sm p-6 sm:p-8 border border-slate-100 shadow-card">
              <h3 className="font-[Cormorant_Garamond] text-xl font-semibold text-slate-800 mb-5">Send a Message</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-brand-teal uppercase tracking-[0.15em] font-medium mb-1.5">First Name</label>
                    <input type="text" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-slate-400 placeholder:text-sm rounded-sm"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-teal uppercase tracking-[0.15em] font-medium mb-1.5">Last Name</label>
                    <input type="text" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-slate-400 placeholder:text-sm rounded-sm"
                      placeholder="Your surname" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-brand-teal uppercase tracking-[0.15em] font-medium mb-1.5">Email</label>
                  <input type="email" className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-brand-teal transition-all placeholder:text-slate-400 placeholder:text-sm rounded-sm"
                    placeholder="you@email.com" />
                </div>
                <div>
                  <label className="block text-xs text-brand-teal uppercase tracking-[0.15em] font-medium mb-1.5">Message</label>
                  <textarea rows={4} className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 text-sm focus:outline-none focus:border-brand-teal transition-all resize-none placeholder:text-slate-400 placeholder:text-sm rounded-sm"
                    placeholder="How can we help?" />
                </div>
                <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full btn-primary justify-center rounded-sm">
                  Send Message
                </motion.button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
