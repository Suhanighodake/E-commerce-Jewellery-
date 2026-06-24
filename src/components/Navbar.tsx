import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Search, Menu, X, Diamond, ChevronDown, Gift, Truck, Phone, MapPin } from 'lucide-react';

const categoryLinks = [
  { name: 'Rings', href: '#shop' },
  { name: 'Earrings', href: '#shop' },
  { name: 'Bracelets & Bangles', href: '#shop' },
  { name: 'Solitaires', href: '#shop' },
  { name: 'Mangalsutras', href: '#shop' },
  { name: 'Necklaces', href: '#shop' },
  { name: 'Collections', href: '#collections' },
];

const serviceLinks = [
  { name: 'Try at Home', icon: Gift, href: '#' },
  { name: 'Video Call', icon: Phone, href: '#' },
  { name: 'Free Shipping', icon: Truck, href: '#' },
  { name: 'Contact', icon: MapPin, href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [cartCount] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      {/* Top utility bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* Brand row - taller */}
        <div className="bg-white border-b border-slate-100">
          <div className="container-luxury">
            <div className="flex items-center justify-between h-20 md:h-24">
              {/* Left - Search icon */}
              <div className="flex items-center gap-3 flex-1">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2.5 text-slate-500 hover:text-brand-teal transition-colors rounded-full hover:bg-slate-50"
                >
                  <Search className="w-5 h-5" strokeWidth={1.5} />
                </motion.button>
              </div>

              {/* Center - Logo (large) */}
              <a href="#home" className="flex flex-col items-center justify-center flex-shrink-0 group">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="mb-1"
                >
                  <Diamond className="w-7 h-7 text-brand-teal" strokeWidth={1.2} />
                </motion.div>
                <span className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold tracking-[0.2em] leading-none text-slate-800">
                  ROYELLE
                </span>
                <span className="text-[11px] md:text-[10px] uppercase tracking-[0.3em] text-slate-400 font-light mt-1">
                  Fine Jewellery
                </span>
              </a>

              {/* Right - Cart + Mobile toggle */}
              <div className="flex items-center justify-end gap-3 flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2.5 text-slate-500 hover:text-brand-teal transition-colors rounded-full hover:bg-slate-50"
                >
                  <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
                  {cartCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-brand-pink text-white text-[11px] rounded-full flex items-center justify-center font-bold">
                      {cartCount}
                    </span>
                  )}
                </motion.button>
                <button
                  className="lg:hidden p-2.5 text-slate-600"
                  onClick={() => setMobileOpen(!mobileOpen)}
                >
                  {mobileOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category nav - purple centered bar */}
        <div className={`hidden lg:block bg-royal-purple text-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
          <div className="container-luxury">
            <div className="flex items-center justify-center h-12 md:h-14">
                  <div className="flex items-center gap-1">
                {categoryLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-300 tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Vertical divider */}
              <div className="w-px h-5 bg-white/20 mx-2" />

              {/* Services dropdown */}
              <div ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1.5 px-4 py-3 text-sm font-medium text-white/90 hover:text-white hover:bg-white/10 transition-colors tracking-wide"
                >
                  Services <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full w-56 bg-white shadow-xl rounded-b-lg overflow-hidden z-50 border-t-2 border-brand-teal"
                    >
                      {serviceLinks.map((s) => {
                        const Icon = s.icon;
                        return (
                          <a key={s.name} href={s.href} className="flex items-center gap-3 px-5 py-3 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-teal transition-colors border-b border-slate-50 last:border-0">
                            <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                            {s.name}
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[152px] md:top-[168px] left-0 right-0 z-40"
          >
            <div className="mx-4 md:mx-6 lg:mx-auto lg:max-w-3xl">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-brand-teal via-brand-pink to-royal-purple" />
                <div className="p-4 md:p-5">
                  <div className="relative flex items-center">
                    <Search className="absolute left-4 w-5 h-5 text-slate-400" strokeWidth={1.5} />
                    <input
                      type="text"
                      placeholder="Search rings, earrings, mangalsutra..."
                      autoFocus
                      className="w-full pl-12 pr-24 py-3.5 bg-slate-50 text-slate-800 text-base rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:bg-white transition-all placeholder:text-slate-400"
                    />
                    <button className="absolute right-2 px-5 py-2 bg-brand-teal text-white text-sm font-semibold rounded-lg hover:bg-brand-teal/90 transition-colors">
                      Search
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Rings', 'Earrings', 'Bangles', 'Necklaces', 'Mangalsutra'].map((tag) => (
                      <button key={tag} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs rounded-full hover:bg-brand-teal hover:text-white transition-colors">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-[96px]"
          >
            <div className="py-2 flex flex-col">
              {categoryLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-5 py-4 text-base text-slate-700 hover:bg-slate-50 hover:text-brand-teal transition-colors border-b border-slate-100 flex items-center justify-between"
                >
                  {link.name}
                  <ChevronDown className="w-3.5 h-3.5 rotate-[-90deg] text-slate-300" />
                </motion.a>
              ))}
              <div className="px-5 py-3 mt-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Services</p>
              </div>
              {serviceLinks.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.name}
                    href="#"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-3 px-5 py-3.5 text-base text-slate-500 hover:bg-slate-50 transition-colors border-b border-slate-50"
                >
                    <Icon className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
                    {s.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
