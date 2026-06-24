import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const timelineEvents = [
  { year: '1999', title: 'Brand Founded', desc: 'Raj Jewellers was born from a passion to blend traditional goldsmithing with contemporary design sensibilities.' },
  { year: '2015', title: 'Other Expansion', desc: 'We opened our first studio in Noida, bringing our handcrafted legacy to a global clientele.' },
  { year: '2020', title: 'Luxury Collection Launch', desc: 'Our most ambitious collection yet — 50 one-of-a-kind pieces that redefined what bespoke jewellery could be.' },
  { year: '2025', title: 'Modern Design Evolution', desc: 'A new era of Raj Jewellers begins, merging heritage craftsmanship with bold, contemporary aesthetics.' },
]

const craftsmanshipImages = [
  'https://i.pinimg.com/736x/26/9a/22/269a22394fffb2cba3eedd2520bf4970.jpg',
  'https://i.pinimg.com/736x/7f/b1/6d/7fb16d88f8fb1ba027513ff6d49f1ec4.jpg',
  'https://i.pinimg.com/1200x/90/b9/c3/90b9c3d7cbb00380c70624fc3f14bc6e.jpg',
  'https://i.pinimg.com/736x/8c/ad/73/8cad7328de1c9f3ea1f3ec1db6e82501.jpg',
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Our Story"
        subtitle="Heritage & Craft"
        image="/banner1.png"
      />

      {/* ── Story Section ── */}
      <section className="py-12 sm:py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <motion.div {...fadeUp()}>
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-espresso text-2xl sm:text-4xl lg:text-5xl mt-4 mb-4 sm:mb-6 leading-tight">
                Artisans of
                <br /><span className="text-gold">Extraordinary Beauty</span>
              </h2>
              <div className="gold-divider-left mb-5 sm:mb-7" />
              <p className="text-espresso/65 text-sm leading-relaxed mb-4">
                Welcome to RAJ JEWELLERS & SONS, where timeless craftsmanship meets uncompromising trust. Since 1999, we have been dedicated to creating and delivering exquisite jewellery that celebrates life's most precious moments.
              </p>
              <p className="text-espresso/65 text-sm leading-relaxed">
                Built on a foundation of honesty, quality, and customer satisfaction, RAJ JEWELLERS & SONS has become a trusted name for families who seek elegance, authenticity, and lasting value. Every piece in our collection reflects exceptional artistry, meticulous attention to detail, and the rich heritage of Indian jewellery. We take pride in offering BIS Hallmarked Jewellery, ensuring purity, transparency, and complete peace of mind with every purchase. Whether it is a wedding, a special occasion, or a cherished investment, our jewellery is designed to be treasured for generations.
              </p>
            </motion.div>

            {/* ── Shop image — responsive at every breakpoint ── */}
          <motion.div {...fadeUp(0.2)}>
  <div className="w-full aspect-[4/3] sm:aspect-[2/3] md:aspect-[4/3] lg:aspect-auto lg:h-[450px] xl:h-[540px] overflow-hidden">
    <img
      src="/shop.png"
      alt="Jewellery artisan"
      className="w-full h-full object-cover object-center"
    />
  </div>
</motion.div>

          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-12 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-espresso/10">
            {[
              {
                label: 'Our Mission', title: 'Jewellery That Endures',
                text: 'To craft pieces of extraordinary beauty that outlast generations — heirlooms imbued with meaning, memory, and mastery. We believe every person deserves to own something genuinely timeless.',
                bg: 'bg-espresso', textColor: 'text-ivory/60', titleColor: 'text-ivory', labelColor: 'text-gold/80',
              },
              {
                label: 'Our Vision', title: 'Our Promise',
                text: 'To deliver unmatched quality, authentic craftsmanship, and a luxurious jewellery experience that reflects the prestige, elegance, and trust our name has represented for over two decades.',
                bg: 'bg-gold', textColor: 'text-espresso/70', titleColor: 'text-espresso', labelColor: 'text-espresso/60',
              },
            ].map(({ label, title, text, bg, textColor, titleColor, labelColor }) => (
              <motion.div
                key={label}
                {...fadeUp(0.1)}
                className={`${bg} p-8 sm:p-10 lg:p-14`}
              >
                <span className={`section-label ${labelColor}`}>{label}</span>
                <h3 className={`font-display text-2xl sm:text-3xl mt-4 mb-4 ${titleColor}`}>{title}</h3>
                <div className={`h-px w-12 mb-5 ${bg === 'bg-espresso' ? 'bg-gold/50' : 'bg-espresso/30'}`} />
                <p className={`text-sm leading-relaxed ${textColor}`}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-12 sm:py-20 lg:py-28 px-4 sm:px-6 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="font-display text-espresso text-2xl sm:text-4xl lg:text-5xl mt-4 mb-5">
              A Legacy in the Making
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-6 sm:space-y-10">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`flex items-start gap-4 sm:gap-6 md:items-center md:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="md:hidden font-display text-gold text-2xl flex-shrink-0 w-14 sm:w-16 pt-0.5">
                    {event.year}
                  </div>

                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="hidden md:block font-display text-gold text-3xl lg:text-4xl mb-2">{event.year}</div>
                    <h4 className="font-display text-espresso text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{event.title}</h4>
                    <p className="text-espresso/60 text-xs sm:text-sm leading-relaxed">{event.desc}</p>
                  </div>

                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gold border-4 border-cream flex-shrink-0 relative z-10" />
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-12 sm:py-20 lg:py-28 bg-ivory px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="section-label">Why Choose Us</span>
            <h2 className="font-display text-espresso text-2xl sm:text-4xl lg:text-5xl mt-4 mb-5">
              The <span className="text-gold">Raj Jewellers</span> Difference
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-espresso/10">
            {[
              {
                icon: '✦',
                title: 'BIS Hallmarked Purity',
                desc: 'Established Legacy Since 1999, BIS Hallmarked Gold Jewellery',
              },
              {
                icon: '✦',
                title: 'Bespoke Craftsmanship',
                desc: 'Exceptional Craftsmanship & Premium Designs, Wide Range of Traditional & Contemporary Jewellery Collections',
              },
              {
                icon: '✦',
                title: '25+ Years of Legacy',
                desc: '100% Transparency & Fair Pricing, Trusted by Generations of Families',
              },
              {
                icon: '✦',
                title: 'Made to be Cherished',
                desc: 'Customer-First Service & Integrity, Assured Buyback Policy',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(i * 0.1)}
                className="bg-ivory p-8 sm:p-8 text-center"
              >
                <span className="text-gold text-2xl block mb-4">{item.icon}</span>
                <h4 className="font-display text-espresso text-base sm:text-lg mb-3">{item.title}</h4>
                <p className="text-espresso/60 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      {/* ── Team Section ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

        {/* ── Team image — fixed height on mobile, full stretch on desktop ── */}
     <motion.div
  className="overflow-hidden h-100 sm:h-100 md:h-[480px] lg:h-auto"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <img
    src="/team2.png"
    alt="Raj Jewellers team"
    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
  />
</motion.div>

        {/* Text */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-espresso flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-20"
        >
          <span className="text-gold/80 text-[11px] uppercase tracking-[0.2em] mb-4">
            Team Management
          </span>
          <h2 className="font-display text-ivory text-2xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            Built on <span className="text-gold">Passion</span>,
            <br />Driven by <span className="text-gold">Purpose</span>
          </h2>
          <div className="w-12 h-px bg-gold mb-6" />
          <p className="text-ivory/60 text-sm leading-relaxed mb-4">
            Behind every piece of jewellery is a team of dedicated artisans, designers, and dreamers
            who pour their heart into what they create.
          </p>
          <p className="text-ivory/60 text-sm leading-relaxed">
            At Raj Jewellers, our people are our greatest strength — united by a shared love for
            craft and an unwavering commitment to excellence that has defined us since 1999.
          </p>

          <div className="mt-8 border-l-2 border-gold pl-5">
            <p className="text-ivory/75 text-sm italic leading-relaxed font-display">
              We don't just make jewellery — we create legacies that last for generations.
            </p>
            <span className="block mt-3 text-[10px] uppercase tracking-[0.18em] text-gold">
              — Raj Soni, Founder
            </span>
          </div>
        </motion.div>

      </section>

      {/* ── Founder Section ── */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

            <motion.div {...fadeUp()}>
              <h1 className="text-gold text-[11px] sm:text-xs mb-3 uppercase tracking-widest">Our Founder</h1>
              <h2 className="font-display text-espresso text-2xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight">
                Meet the Visionary
                <br />Behind Raj Jewellery
              </h2>
              <div className="space-y-3 sm:space-y-5">
                <p className="text-sm text-espresso/60 leading-relaxed">
                  Raj Jewellery was founded on a single principle: that true luxury lies not in excess, but in restraint, intention, and mastery. Each piece we create is the result of hundreds of hours of design, selection, and hand-finishing.
                </p>
                <p className="text-sm text-espresso/60 leading-relaxed">
                  He founded Raj Jewellery with a singular vision: to create pieces that embody timeless elegance, exceptional craftsmanship, and lasting value. Believing that true luxury is found in precision, intention, and artistry, he has dedicated himself to preserving the finest traditions of jewellery making while embracing contemporary design. Under his leadership, every creation reflects an unwavering commitment to quality, where meticulous attention to detail and the world's most exquisite materials come together to form heirlooms that endure across generations.
                </p>
              </div>

              <div className="mt-7 sm:mt-10 bg-cream border border-espresso/60 p-5 sm:p-8 relative">
                <span className="absolute top-3 left-4 sm:top-4 sm:left-5 text-4xl sm:text-5xl text-gold leading-none">❝</span>
                <p className="pt-6 sm:pt-8 text-sm sm:text-base lg:text-lg italic leading-7 sm:leading-8 text-espresso">
                  Every piece of jewellery carries a story, an emotion, and a legacy that
                  lasts for generations.
                </p>
                <p className="mt-4 sm:mt-6 text-right text-[0.65rem] sm:text-xs uppercase tracking-[0.2em] text-gold">
                  — Raj Soni
                </p>
              </div>
            </motion.div>

            {/* ── Founder image — capped height on small screens, natural on large ── */}
       <motion.div {...fadeUp(0.2)} className="order-first lg:order-none">
  <img
    src="/owner1.jpeg"
    alt="Raj Jewellery founder"
    className="w-full h-auto object-contain"
    style={{ display: 'block' }}
  />
</motion.div>

          </div>
        </div>
      </section>

    </motion.div>
  )
}