import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const timelineEvents = [
  { year: '1999', title: 'Brand Founded', desc: 'Raj Jewellers was born from a passion to blend traditional goldsmithing with contemporary design sensibilities.' },
  { year: '2015', title: 'Other Expansion', desc: 'We opened our first  studio in Noida, bringing our handcrafted legacy to a global clientele.' },
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
        image="https://i.pinimg.com/736x/22/14/1e/22141ed6d68c74bd8fe84734d26fc9bf.jpg"
      />

      {/* ── Story Section ── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-cream">
        {/* FIX: double px removed — outer px-5, inner px-0 */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            <motion.div {...fadeUp()}>
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5 sm:mb-6 leading-tight">
                Artisans of
                <br /><span className="text-gold">Extraordinary Beauty</span>
              </h2>
              <div className="gold-divider-left mb-6 sm:mb-7" />
              <p className="text-espresso/65 text-sm leading-relaxed mb-4 sm:mb-5">
                Raj Jewellery was founded on a single principle: that true luxury lies not in excess,
                but in restraint, intention, and mastery. Each piece we create is the result of hundreds of
                hours of design, selection, and hand-finishing.
              </p>
              <p className="text-espresso/65 text-sm leading-relaxed">
                Our artisans are the fourth generation of jewellers whose families have practiced this craft
                for over a century. They bring irreplaceable skill to every commission, whether a simple
                gold band or an elaborate diamond parure.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <img
                src="https://i.pinimg.com/736x/22/14/1e/22141ed6d68c74bd8fe84734d26fc9bf.jpg"
                alt="Jewellery artisan"
                className="w-full h-64 sm:h-80 lg:h-[480px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-1">
          {[
            {
              label: 'Our Mission', title: 'Jewellery That Endures',
              text: 'To craft pieces of extraordinary beauty that outlast generations — heirlooms imbued with meaning, memory, and mastery. We believe every person deserves to own something genuinely timeless.',
              bg: 'bg-espresso', textColor: 'text-ivory/60', titleColor: 'text-ivory', labelColor: 'text-gold/80',
            },
            {
              label: 'Our Vision', title: 'Redefining Luxury',
              text: 'To lead the world in ethical luxury jewellery — where beauty and responsibility coexist. We envision a future where every gemstone can be traced to its source, and every artisan is celebrated.',
              bg: 'bg-gold', textColor: 'text-espresso/70', titleColor: 'text-espresso', labelColor: 'text-espresso/60',
            },
          ].map(({ label, title, text, bg, textColor, titleColor, labelColor }) => (
            <motion.div
              key={label}
              {...fadeUp(0.1)}
              // FIX: p-8 mobile, p-10 sm, p-14 lg
              className={`${bg} p-8 sm:p-10 lg:p-14`}
            >
              <span className={`section-label ${labelColor}`}>{label}</span>
              <h3 className={`font-display text-2xl sm:text-3xl mt-4 mb-4 sm:mb-5 ${titleColor}`}>{title}</h3>
              <div className={`h-px w-12 mb-5 sm:mb-6 ${bg === 'bg-espresso' ? 'bg-gold/50' : 'bg-espresso/30'}`} />
              <p className={`text-sm leading-relaxed ${textColor}`}>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">
              A Legacy in the Making
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
            <div className="space-y-8 sm:space-y-12">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  // FIX: always flex-row on mobile (no alternating), alternates on md+
                  className={`flex items-start md:items-center gap-5 sm:gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Mobile: year left, content right */}
                  <div className="md:hidden font-display text-gold text-2xl sm:text-3xl flex-shrink-0 w-16">
                    {event.year}
                  </div>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="hidden md:block font-display text-gold text-4xl mb-2">{event.year}</div>
                    <h4 className="font-display text-espresso text-base sm:text-xl mb-1 sm:mb-2">{event.title}</h4>
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

      <CTASection />

      {/* ── Craftsmanship collage ── */}
      <section className="py-16 sm:py-20 lg:py-28 bg-espresso px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <span className="section-label text-gold/80">Behind Each Piece</span>
            <h2 className="font-display text-ivory text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5">
              The Art of Craftsmanship
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
            {craftsmanshipImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                <img
                  src={src}
                  alt={`Craftsmanship ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Section ── */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">

            <motion.div {...fadeUp()}>
              <h1 className="text-gold text-[12px] mb-3 uppercase tracking-wide">Our Founder</h1>
              {/* FIX: text-[55px] → responsive clamp */}
              <h2 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-5 leading-tight">
                Meet the Visionary
                <br />Behind Raj Jewellery
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-sm text-espresso/60 leading-relaxed">
                  Raj Jewellery was founded on a single principle: that true luxury lies not in excess, but in restraint, intention, and mastery. Each piece we create is the result of hundreds of hours of design, selection, and hand-finishing.
                </p>
                <p className="text-sm text-espresso/60 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam iste corporis voluptatum, molestiae ea tenetur dicta, consequatur fuga ducimus officiis dolores odio sapiente cupiditate fugit eveniet libero est ipsam placeat.
                </p>
                <p className="text-sm text-espresso/60 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cumque reiciendis adipisci vel dolore odio voluptatum asperiores molestiae deleniti unde velit est soluta mollitia accusamus saepe, numquam sapiente consequuntur quia!
                </p>
              </div>

              {/* Quote card — FIX: rounded corners removed (inconsistent with brand), padding responsive */}
              <div className="mt-8 sm:mt-10 bg-cream border border-espresso/60 p-6 sm:p-8 relative">
                <span className="absolute top-4 left-5 text-4xl sm:text-5xl text-gold leading-none">❝</span>
                <p className="pt-7 sm:pt-8 text-base sm:text-lg italic leading-7 sm:leading-8 text-espresso">
                  Every piece of jewellery carries a story, an emotion, and a legacy that
                  lasts for generations.
                </p>
                <p className="mt-4 sm:mt-6 text-right text-xs sm:text-sm uppercase tracking-[0.2em] text-gold">
                  — Raj Sharma
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <img
                src="https://i.pinimg.com/736x/a0/18/3e/a0183e01ba50404f0796597c57e7f320.jpg"
                alt="Raj Jewellery founder"
                className="object-cover w-full aspect-[4/5]"
              />
            </motion.div>

          </div>
        </div>
      </section>

    </motion.div>
  )
}