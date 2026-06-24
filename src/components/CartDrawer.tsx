import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalItems, totalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeCart}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 z-[100] h-full w-full max-w-md bg-[#0D0D0D] border-l border-[rgba(212,175,55,0.1)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-[rgba(212,175,55,0.08)]">
              <div>
                <h2 className="font-[Cormorant_Garamond] text-2xl font-semibold text-[#FFFFF0] tracking-wide">
                  Your Selection
                </h2>
                <p className="text-[10px] text-[#9E9E9E] uppercase tracking-[0.2em] mt-1">
                  {totalItems} {totalItems === 1 ? 'Piece' : 'Pieces'}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeCart}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
              >
                <X className="w-4 h-4" strokeWidth={1.5} />
              </motion.button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto py-4 px-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center gap-4 text-center">
                  <ShoppingBag className="w-12 h-12 text-[#9E9E9E]/30" strokeWidth={1} />
                  <p className="text-sm text-[#9E9E9E]">Your selection is empty</p>
                  <button onClick={closeCart} className="btn-outline-premium text-[10px] py-3 px-6">
                    Continue Browsing
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={item.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      className="flex gap-4"
                    >
                      <div className="w-24 h-28 rounded-sm overflow-hidden flex-shrink-0 bg-gradient-to-br from-[#2C2C2C] to-[#1A1A1A]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-[Cormorant_Garamond] text-base font-semibold text-[#FFFFF0] truncate">
                          {item.product.name}
                        </h3>
                        <p className="text-[9px] text-[#9E9E9E] uppercase tracking-[0.15em] mt-1">
                          {item.product.material} Gold · {item.product.type}
                        </p>
                        <p className="text-sm text-[#D4AF37] font-medium mt-2">
                          {formatPrice(item.product.price)}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-sm glass-card flex items-center justify-center text-[#9E9E9E] hover:text-[#D4AF37] transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs text-[#FFFFF0] w-6 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-sm glass-card flex items-center justify-center text-[#9E9E9E] hover:text-[#D4AF37] transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-[10px] text-[#9E9E9E] hover:text-[#B76E79] uppercase tracking-[0.1em] transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-[rgba(212,175,55,0.08)] space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#9E9E9E]">Subtotal</span>
                  <span className="font-[Cormorant_Garamond] text-xl font-semibold gold-text">
                    {formatPrice(totalPrice)}
                  </span>
                </div>
                <p className="text-[10px] text-[#9E9E9E] leading-relaxed">
                  Shipping and taxes calculated at checkout. All pieces include complimentary insurance and white-glove delivery.
                </p>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-premium flex items-center justify-center gap-2"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

