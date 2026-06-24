import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../data/products';
import { useCart } from '../context/CartContext';

interface QuickViewProps {
  product: Product | null;
  onClose: () => void;
}

export default function QuickView({ product, onClose }: QuickViewProps) {
  const { addItem } = useCart();
  const [liked, setLiked] = useState(false);
  const [added, setAdded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (!product) return;
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <AnimatePresence>
      {product && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-[90] w-full md:max-w-4xl md:h-[auto] bg-[#0D0D0D] border border-[rgba(212,175,55,0.15)] rounded-sm overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>

            <div className="grid md:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto md:h-full bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/50 to-transparent md:bg-gradient-to-r" />

                {/* Badges */}
                <div className="absolute top-5 left-5 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1.5 bg-[#B76E79]/90 text-[#FFFFF0] text-[9px] font-medium tracking-[0.15em] uppercase">
                      New Arrival
                    </span>
                  )}
                  {product.isBestseller && (
                    <span className="px-3 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B76E79] text-[#0D0D0D] text-[9px] font-semibold tracking-[0.15em] uppercase flex items-center gap-1">
                      <Star className="w-2.5 h-2.5" fill="currentColor" /> Bestseller
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] text-[#D4AF37] uppercase tracking-[0.25em] font-medium px-3 py-1.5 glass-card border border-[rgba(212,175,55,0.15)]">
                    {product.material} Gold
                  </span>
                  <span className="text-[9px] text-[#9E9E9E] uppercase tracking-[0.2em] font-medium">
                    {product.type}
                  </span>
                </div>

                <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-[#FFFFF0] mb-3">
                  {product.name}
                </h2>

                <p className="text-sm text-[#E8D5A3] leading-[1.9] mb-6 font-light">
                  {product.description}
                </p>

                <div className="flex items-end gap-3 mb-8">
                  <span className="font-[Cormorant_Garamond] text-3xl font-semibold gold-text">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleAddToCart}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 transition-all duration-300 ${
                      added
                        ? 'bg-[#D4AF37] text-[#0D0D0D]'
                        : 'btn-premium'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">
                      {added ? 'Added to Bag' : 'Add to Bag'}
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setLiked(!liked)}
                    className="w-14 h-14 rounded-sm glass-card flex items-center justify-center border border-[rgba(212,175,55,0.15)]"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        liked ? 'text-[#B76E79] fill-[#B76E79]' : 'text-[#FFFFF0]/50 hover:text-[#B76E79]'
                      }`}
                      strokeWidth={1.5}
                    />
                  </motion.button>
                </div>

                <div className="mt-8 pt-6 border-t border-[rgba(212,175,55,0.08)] grid grid-cols-3 gap-4">
                  {[
                    { label: 'BIS Hallmarked', value: '100%' },
                    { label: 'Purity', value: product.material },
                    { label: 'Delivery', value: 'White Glove' },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[8px] text-[#9E9E9E] uppercase tracking-[0.2em] mb-1">{spec.label}</p>
                      <p className="text-xs text-[#D4AF37] font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

