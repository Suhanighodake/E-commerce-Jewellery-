import { ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

interface SectionDef {
  id: string;
  title: string;
  subtitle: string;
  category: 'office' | 'meeting' | 'party';
  bgColor: string;
  borderColor: string;
}

const sections: SectionDef[] = [
  {
    id: 'office-wear',
    title: 'Office Wear Jewellery',
    subtitle: 'Subtle elegance for everyday workwear',
    category: 'office',
    bgColor: 'bg-white',
    borderColor: 'border-brand-teal',
  },
  {
    id: 'office-meetings',
    title: 'Office Meetings',
    subtitle: 'Make an impression in every boardroom',
    category: 'meeting',
    bgColor: 'bg-slate-50',
    borderColor: 'border-purple-500',
  },
  {
    id: 'party',
    title: 'Party Collection',
    subtitle: 'Statement pieces for celebration evenings',
    category: 'party',
    bgColor: 'bg-white',
    borderColor: 'border-brand-pink',
  },
  {
    id: 'daily-wear',
    title: 'Daily Wear',
    subtitle: 'Effortless pieces for every moment',
    category: 'office',
    bgColor: 'bg-slate-50',
    borderColor: 'border-teal-600',
  },
];

const officeWearIds = [1, 2, 3, 4, 5, 6, 7, 8];
const dailyWearIds = [9, 10, 11, 12, 13, 14, 15, 16];

export default function ProductSections() {
  return (
    <section id="shop" className="relative">
      {sections.map((section) => {
        let sectionProducts: typeof products;
        if (section.id === 'office-wear') {
          sectionProducts = products.filter((p) => officeWearIds.includes(p.id));
        } else if (section.id === 'daily-wear') {
          sectionProducts = products.filter((p) => dailyWearIds.includes(p.id));
        } else {
          sectionProducts = products.filter((p) => p.category === section.category).slice(0, 8);
        }

        return (
          <div key={section.id} className={`${section.bgColor} py-8 md:py-12`}>
            <div className="container-luxury">
              <ScrollReveal className="flex items-end justify-between mb-5">
                <div className="flex items-center gap-4">
                  <div className={`w-1 h-10 rounded-full ${section.borderColor} bg-current`} />
                  <div>
                    <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl font-semibold text-slate-800">
                      {section.title}
                    </h2>
                    <p className="text-base text-slate-500 mt-1">{section.subtitle}</p>
                  </div>
                </div>
                <a
                  href="#shop"
                  className="hidden md:inline-flex items-center gap-1 text-base font-semibold text-brand-teal hover:text-brand-teal/80 transition-colors"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </a>
              </ScrollReveal>

              <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-5" staggerDelay={0.06}>
                {sectionProducts.map((product, i) => (
                  <StaggerItem key={product.id}>
                    <ProductCard product={product} index={i} />
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        );
      })}
    </section>
  );
}