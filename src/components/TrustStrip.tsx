import { Truck, ShieldCheck, Headphones, Gift, RefreshCcw } from 'lucide-react';

const trustItems = [
  { icon: Truck, label: 'Free Shipping', sub: 'On orders above ₹3,000', color: 'text-royal-purple' },
  { icon: ShieldCheck, label: 'BIS Hallmarked', sub: '100% certified gold', color: 'text-royal-purple' },
  { icon: Headphones, label: '24/7 Support', sub: 'Expert concierge', color: 'text-royal-purple' },
  { icon: RefreshCcw, label: 'Easy Returns', sub: '30-day policy', color: 'text-royal-purple' },
  { icon: Gift, label: 'Gift Wrapping', sub: 'Complimentary', color: 'text-royal-purple' },
];

export default function TrustStrip() {
  return (
    <section className="bg-purple-50">
      <div className="container-luxury">
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-8 py-3 md:py-5">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2 md:gap-3 py-2 px-1 md:px-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-royal-purple" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-sm md:text-base font-bold text-royal-purple">{item.label}</p>
                  <p className="text-xs md:text-sm text-purple-900/60">{item.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
