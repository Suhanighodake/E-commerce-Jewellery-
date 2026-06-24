import { motion } from 'framer-motion';
import { Compass, Heart, Crown, TrendingUp } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const values = [
  {
    icon: Compass,
    title: 'Intentional Design',
    desc: 'Every curve is planned. Every setting is purposeful. We design for the woman who chooses her jewellery as deliberately as she chooses her words.'
  },
  {
    icon: Heart,
    title: 'Made for Her',
    desc: 'Not too loud for the office. Not too quiet for the party. Just right for the woman who moves between worlds with effortless grace.'
  },
  {
    icon: Crown,
    title: 'Timeless Style',
    desc: 'Trends fade. Style endures. Our pieces are designed to be worn for decades — becoming signatures, then heirlooms.'
  },
  {
    icon: TrendingUp,
    title: 'Smart Investment',
    desc: 'Gold holds value. A Royelle piece appreciates in worth while it adorns your wrist, neck, or finger. Beauty that bankrolls itself.'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-white">
      <div className="container-luxury">
        <div className="grid-responsive-2 items-center">
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&h=1000&fit=crop"
                  alt="Fine gold jewellery collection"
                  className="w-full aspect-jewelry object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-5 left-5 right-5 bg-white p-4 rounded-sm shadow-card border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-royal-gold to-royal-rose flex items-center justify-center flex-shrink-0">
                      <Crown className="w-5 h-5 text-white" strokeWidth={1.2} />
                    </div>
                    <div>
                      <p className="font-[Cormorant_Garamond] text-lg text-slate-800">30+ Years</p>
                      <p className="text-xs text-slate-400 uppercase tracking-[0.15em]">Heritage of Craft</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="absolute -top-2 -left-2 w-12 h-12 border border-royal-purple/10 rounded-sm pointer-events-none" />
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <span className="text-royal-purple text-xs uppercase tracking-[0.25em] font-medium">Our Story</span>
              <h2 className="font-[Cormorant_Garamond] text-3xl md:text-4xl lg:text-5xl font-light mt-3 mb-5 text-slate-800">
                Where <span className="text-royal-purple italic font-medium">Heritage</span> Meets <span className="text-royal-purple italic font-medium">Ambition</span>
              </h2>
              <div className="accent-line w-12 mb-5" />
              <p className="text-slate-500 text-base leading-[1.9] mb-4 font-light">
                Royelle was born from a simple truth: the modern working woman deserved jewellery
                that matched her ambition. Not flashy. Not forgettable. But precisely calibrated
                for power dressing, boardroom confidence, and celebration evenings.
              </p>
              <p className="text-slate-400 text-base leading-[1.9] mb-8 font-light">
                From our first corporate-friendly mangalsutra to our diamond-accented statement rings,
                every creation honors tradition while speaking the language of contemporary leadership.
              </p>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3" staggerDelay={0.1}>
              {values.map((v) => {
                const Icon = v.icon;
                return (
                  <StaggerItem key={v.title}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="p-4 rounded-sm bg-white border border-slate-100 hover:border-royal-purple/20 hover:shadow-card transition-all duration-500 group"
                    >
                      <Icon className="w-4 h-4 text-royal-purple mb-2 group-hover:text-royal-rose transition-colors" strokeWidth={1.2} />
                      <h3 className="font-[Cormorant_Garamond] text-base font-semibold text-slate-800 mb-1">{v.title}</h3>
                      <p className="text-xs text-slate-400 leading-[1.6]">{v.desc}</p>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
