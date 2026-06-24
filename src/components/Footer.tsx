import { motion } from 'framer-motion';
import { Diamond, Globe, ExternalLink, Heart } from 'lucide-react';

const linkGroups = {
  collections: [
    { name: 'Office Everyday', href: '#shop' },
    { name: 'Meeting Power', href: '#shop' },
    { name: 'Evening Glamour', href: '#shop' },
    { name: 'Modern Mangalsutra', href: '#shop' }
  ],
  jewellery: [
    { name: 'Rings', href: '#shop' },
    { name: 'Earrings', href: '#shop' },
    { name: 'Bangles', href: '#shop' },
    { name: 'Bracelets', href: '#shop' },
    { name: 'Necklaces', href: '#shop' },
    { name: 'Mangalsutra', href: '#shop' }
  ],
  company: [
    { name: 'Our Story', href: '#about' },
    { name: 'Craftsmanship', href: '#about' },
    { name: 'Careers', href: '#' },
    { name: 'Press', href: '#' }
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Size Guide', href: '#' }
  ]
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white border-t border-white/5">
      <div className="container-luxury py-14">
        <div className="grid-footer mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-3">
              <Diamond className="w-4 h-4 text-royal-gold" strokeWidth={1.2} />
              <div className="flex flex-col">
                <span className="font-[Cormorant_Garamond] text-base font-semibold text-white tracking-[0.15em]">ROYELLE</span>
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400 font-light">Fine Jewellery</span>
              </div>
            </a>
            <p className="text-xs text-slate-400 leading-[1.9] mb-5 max-w-[240px] font-light">
              14K & 18K gold jewellery for the modern professional woman.
              Handcrafted in Mumbai. Starting at ₹1,000.
            </p>
            <div className="flex gap-2">
              {[Globe, ExternalLink].map((Icon, i) => (
                <motion.a key={i} href="#" whileHover={{ scale: 1.1, y: -2 }}
                  className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-royal-gold transition-all border border-white/5">
                  <Icon className="w-3 h-3" strokeWidth={1.5} />
                </motion.a>
              ))}
            </div>
          </div>

          {Object.entries(linkGroups).map(([key, items]) => (
            <div key={key}>
              <h4 className="text-xs font-semibold text-royal-gold uppercase tracking-[0.15em] mb-3">{key}</h4>
              <ul className="space-y-2">
                {items.map(l => (
                  <li key={l.name}>
                    <a href={l.href} className="text-xs text-slate-400 hover:text-white transition-colors duration-300 font-light">{l.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-5 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-500 tracking-wide">&copy; 2025 Royelle Fine Jewellery. All rights reserved.</p>
          <p className="text-xs text-slate-500 flex items-center gap-1 tracking-wide">
            Handcrafted with <Heart className="w-2.5 h-2.5 text-royal-rose fill-royal-rose" strokeWidth={1.5} /> in Mumbai
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-slate-500 hover:text-royal-gold transition-colors tracking-wide">Privacy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-royal-gold transition-colors tracking-wide">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
