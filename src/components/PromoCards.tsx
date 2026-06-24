import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './ScrollReveal';

const bigBanners = [
  {
    id: 1,
    title: 'SHAYA by ROYELLE',
    subtitle: 'Natural Diamonds in 14K Gold',
    price: 'From Rs. 80,000',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=400&fit=crop',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-900',
    accent: 'bg-purple-600',
  },
  {
    id: 2,
    title: 'DIAMONDS',
    subtitle: 'Natural Diamonds in Silver',
    price: 'From Rs. 80,000',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=400&fit=crop',
    bgColor: 'bg-pink-50',
    textColor: 'text-pink-900',
    accent: 'bg-pink-500',
  },
  {
    id: 3,
    title: 'LATEST',
    subtitle: 'New Designs Every Week',
    price: 'Shop the Trend',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-900',
    accent: 'bg-brand-teal',
  },
];

export default function PromoCards() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container-luxury">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5" staggerDelay={0.12}>
          {bigBanners.map((card) => (
            <StaggerItem key={card.id}>
              <motion.a
                href="#shop"
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`group flex relative overflow-hidden rounded-2xl h-[260px] md:h-[300px] shadow-sm hover:shadow-lg transition-shadow duration-500 cursor-pointer ${card.bgColor}`}
              >
                {/* Left - Text Content */}
                <div className="relative z-10 w-1/2 p-5 md:p-6 flex flex-col justify-between flex-shrink-0">
                  <div>
                    <div className={`inline-block px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider text-white mb-3 ${card.accent}`}>
                      New
                    </div>
                    <h3 className={`font-[Cormorant_Garamond] text-2xl md:text-[1.7rem] font-bold ${card.textColor} mb-1 leading-tight`}>
                      {card.title}
                    </h3>
                    <p className="text-base text-slate-600 font-medium mb-1 leading-snug">{card.subtitle}</p>
                    <p className="text-sm text-slate-500">{card.price}</p>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider">
                    <span className={`${card.textColor} group-hover:underline`}>Explore</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${card.textColor} group-hover:translate-x-1 transition-transform`} />
                  </div>
                </div>

                {/* Right - Image */}
                <div className="w-1/2 h-full">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
