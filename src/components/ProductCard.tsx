import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [liked, setLiked] = useState(false);
  const [showAddToCart, setShowAddToCart] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleAddToCart = () => {
    setShowAddToCart(true);
    setTimeout(() => setShowAddToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowAddToCart(false);
      }}
      className="group relative bg-white rounded-sm overflow-hidden flex flex-col h-full shadow-card hover:shadow-card-hover transition-shadow duration-500 border border-slate-100"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-50">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.06 : 1 }}
          transition={{ duration: 0.7 }}
        />

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-end pb-5 pr-5"
        >
          <motion.button
            initial={{ y: 15, opacity: 0 }}
            animate={isHovered ? { y: 0, opacity: 1 } : { y: 15, opacity: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-md text-slate-800 hover:bg-royal-purple hover:text-white transition-all duration-300 overflow-hidden"
            style={{ height: '40px' }}
          >
            <div className="flex items-center justify-center w-10 h-10 flex-shrink-0">
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <motion.span
              initial={false}
              animate={{ width: showAddToCart ? 'auto' : 0, opacity: showAddToCart ? 1 : 0, paddingRight: showAddToCart ? 16 : 0 }}
              transition={{ duration: 0.25 }}
              className="whitespace-nowrap text-xs uppercase tracking-wider font-semibold overflow-hidden"
            >
              Add to Cart
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && (
            <span className="px-2 py-0.5 bg-royal-rose text-white text-xs font-semibold uppercase tracking-wider">
              New
            </span>
          )}
          {product.isBestseller && (
            <span className="px-2 py-0.5 bg-royal-gold text-royal-charcoal text-xs font-bold uppercase tracking-wider flex items-center gap-1">
              <Star className="w-2.5 h-2.5" fill="currentColor" /> Bestseller
            </span>
          )}
          {product.badge && (
            <span className="px-2 py-0.5 bg-slate-800/70 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
              {product.badge}
            </span>
          )}
        </div>

        {/* Like */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLiked(!liked)}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center"
        >
          <Heart className={`w-3.5 h-3.5 transition-colors ${liked ? 'text-royal-rose fill-royal-rose' : 'text-slate-400 hover:text-royal-rose'}`} strokeWidth={1.5} />
        </motion.button>

        {/* Material badge */}
        <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-white/80 backdrop-blur-sm">
          <span className="text-xs text-slate-700 uppercase tracking-[0.15em] font-medium">{product.material} Gold</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-[Cormorant_Garamond] text-lg font-semibold text-slate-800 group-hover:text-royal-purple transition-colors duration-500 mb-1 truncate">
          {product.name}
        </h3>
        <p className="text-base text-slate-500 mb-2 line-clamp-2 leading-relaxed font-light flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-auto">
          <span className="text-royal-gold font-semibold text-lg">{formatPrice(product.price)}</span>
          <span className="text-xs text-slate-400 uppercase tracking-[0.15em] px-2 py-0.5 border border-slate-100">
            {product.type}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
