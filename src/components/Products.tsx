import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, X } from 'lucide-react';
import { products, jewelryTypes } from '../data/products';
import ProductCard from './ProductCard';
import { ScrollReveal } from './ScrollReveal';

type CatFilter = 'all' | 'office' | 'meeting' | 'party' | 'daily';
type TypeFilter = 'all' | 'ring' | 'earring' | 'bangle' | 'bracelet' | 'chain' | 'mangalsutra';
type MatFilter = 'all' | '14k' | '18k';

export default function Products() {
  const [catFilter, setCatFilter] = useState<CatFilter>('all');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [matFilter, setMatFilter] = useState<MatFilter>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filtered = products.filter((p) => {
    return (catFilter === 'all' || p.category === catFilter)
      && (typeFilter === 'all' || p.type === typeFilter)
      && (matFilter === 'all' || p.material === matFilter);
  });

  const activeFilters = [
    catFilter !== 'all' && { label: catFilter, clear: () => setCatFilter('all') },
    typeFilter !== 'all' && { label: typeFilter, clear: () => setTypeFilter('all') },
    matFilter !== 'all' && { label: matFilter, clear: () => setMatFilter('all') },
  ].filter(Boolean) as { label: string; clear: () => void }[];

  return (
    <section id="shop" className="relative py-16 md:py-24 bg-white">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-12">
          <span className="text-royal-purple text-[10px] uppercase tracking-[0.4em] font-medium">The Boutique</span>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl font-light mt-4 mb-4 text-slate-800">
            Every Piece, A Statement
          </h2>
          <div className="accent-line w-16 mx-auto mb-5" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed font-light">
            Handcrafted by master artisans. Priced for the woman who invests in herself.
          </p>
        </ScrollReveal>

        {/* Filter Bar */}
        <ScrollReveal>
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-3 flex-wrap">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 text-slate-700 text-[10px] uppercase tracking-[0.2em] font-medium hover:border-royal-purple hover:text-royal-purple transition-all rounded-sm"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" strokeWidth={1.5} />
                  Filter
                  {activeFilters.length > 0 && (
                    <span className="w-5 h-5 bg-royal-purple text-white text-[9px] rounded-full flex items-center justify-center font-bold ml-1">
                      {activeFilters.length}
                    </span>
                  )}
                </button>

                {activeFilters.map((f) => (
                  <motion.button
                    key={f.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={f.clear}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 text-[10px] uppercase tracking-wider border border-slate-200 hover:border-royal-rose hover:text-royal-rose transition-colors rounded-sm"
                  >
                    {f.label} <X className="w-3 h-3" />
                  </motion.button>
                ))}
              </div>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="bg-slate-50 border border-slate-100 rounded-sm p-6 mb-6">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-[10px] text-brand-teal uppercase tracking-[0.25em] font-medium mb-3">Collection</h4>
                        <div className="flex flex-wrap gap-2">
                          {(['all', 'office', 'meeting', 'party', 'daily'] as const).map((c) => (
                            <button key={c} onClick={() => setCatFilter(c)}
                              className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm ${
                                catFilter === c ? 'bg-brand-teal text-white font-bold' : 'bg-white text-slate-500 border border-slate-200 hover:text-brand-teal hover:border-brand-teal'
                              }`}>
                              {c === 'all' ? 'All' : c.charAt(0).toUpperCase() + c.slice(1)}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] text-royal-purple uppercase tracking-[0.25em] font-medium mb-3">Category</h4>
                        <div className="flex flex-wrap gap-2">
                          <button onClick={() => setTypeFilter('all')}
                            className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm ${
                              typeFilter === 'all' ? 'bg-royal-purple text-white font-bold' : 'bg-white text-slate-500 border border-slate-200 hover:text-royal-purple hover:border-royal-purple'
                            }`}>All</button>
                          {jewelryTypes.map((t) => (
                            <button key={t.id} onClick={() => setTypeFilter(t.id as TypeFilter)}
                              className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm ${
                                typeFilter === t.id ? 'bg-royal-purple text-white font-bold' : 'bg-white text-slate-500 border border-slate-200 hover:text-royal-purple hover:border-royal-purple'
                              }`}>{t.name}</button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-[10px] text-royal-purple uppercase tracking-[0.25em] font-medium mb-3">Gold</h4>
                        <div className="flex flex-wrap gap-2">
                          {['all', '14k', '18k'].map((m) => (
                            <button key={m} onClick={() => setMatFilter(m as MatFilter)}
                              className={`px-3.5 py-2 text-[10px] uppercase tracking-[0.15em] transition-all rounded-sm ${
                                matFilter === m ? 'bg-royal-purple text-white font-bold' : 'bg-white text-slate-500 border border-slate-200 hover:text-royal-purple hover:border-royal-purple'
                              }`}>
                              {m === 'all' ? 'All' : m}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </ScrollReveal>

        {/* Count bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">
            {filtered.length} exquisite pieces
          </span>
          <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em]">
            Price range: ₹1,200 — ₹19,800
          </span>
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-slate-400 text-base font-light mb-6">No pieces match your selection.</p>
            <button onClick={() => { setCatFilter('all'); setTypeFilter('all'); setMatFilter('all'); }}
              className="btn-secondary">View All</button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
