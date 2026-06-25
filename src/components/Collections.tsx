import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../data/products';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const collectionImages: Record<string, string> = {
  office: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=1100&fit=crop',
  meeting: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=900&h=1100&fit=crop',
  party: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&h=1100&fit=crop',
  daily: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&h=1100&fit=crop',
};

export default function Collections() {
  return (
    <section id="collections" className="relative py-16 md:py-24 bg-white">
      <div className="container-luxury">
        <ScrollReveal className="text-center mb-14">
          <span className="text-royal-purple text-[10px] uppercase tracking-[0.4em] font-medium">Curated For You</span>
          <h2 className="font-[Cormorant_Garamond] text-4xl md:text-5xl lg:text-[3.5rem] font-light mt-4 mb-5 text-slate-800">
            Four Moods. <span className="text-royal-purple italic font-medium">One You.</span>
          </h2>
          <div className="accent-line w-16 mx-auto mb-5" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed font-light">
            From your first coffee of the day to the last champagne of the night —
            every moment deserves its own kind of gold.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid-responsive-3" staggerDelay={0.15}>
          {categories.map((cat) => (
            <StaggerItem key={cat.id}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer rounded-sm"
              >
                <div className="absolute inset-0 img-zoom">
                  <img
                    src={collectionImages[cat.id]}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-end">
                  <div className="transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[9px] text-royal-gold uppercase tracking-[0.25em] font-medium px-2.5 py-1 border border-royal-gold/30 bg-black/20">
                        {cat.count} Pieces
                      </span>
                      <span className="text-[9px] text-white/70 uppercase tracking-[0.25em]">
                        From {cat.priceFrom}
                      </span>
                    </div>

                    <h3 className="font-[Cormorant_Garamond] text-2xl md:text-3xl font-semibold text-white mb-1 group-hover:text-royal-gold transition-colors duration-500">
                      {cat.name}
                    </h3>
                    <p className="text-white/80 text-[10px] font-medium uppercase tracking-[0.2em] mb-3">
                      {cat.subtitle}
                    </p>
                    <p className="text-white/70 text-xs leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-[280px]">
                      {cat.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-royal-gold text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Explore <ArrowUpRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 border border-transparent group-hover:border-royal-gold/25 transition-colors duration-700 rounded-sm pointer-events-none" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
