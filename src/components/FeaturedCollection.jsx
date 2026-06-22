import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    title: 'Gold Rings',
    subtitle: 'Eternal Promise',
    image: 'https://i.pinimg.com/736x/79/3f/f2/793ff22b39190c2950e6fa6d0380bc44.jpg',
    count: '48 pieces',
  },
  {
    title: 'Gold Necklaces',
    subtitle: 'Radiant Grace',
    image: 'https://i.pinimg.com/736x/34/05/d5/3405d537ff3b914eea5bb59ae6aa319d.jpg',
    count: '36 pieces',
  },
  {
    title: 'Silver Bracelets',
    subtitle: 'Wrist Artistry',
    image: 'https://i.pinimg.com/736x/2d/6c/9d/2d6c9d40e2821775ca5d5c61459d9dd7.jpg',
    count: '29 pieces',
  },
  {
    title: 'Silver Rings',
    subtitle: 'Once in a Lifetime',
    image: 'https://i.pinimg.com/736x/4f/15/17/4f15179988068daf435999820c9f096e.jpg',
    count: '54 pieces',
  },
]

const silk = [0.25, 0.46, 0.45, 0.94]

function CollectionCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.75, delay: index * 0.18, ease: silk }}
      className="group flex flex-col items-center cursor-pointer"
    >
      <Link to="/gallery" className="flex flex-col items-center w-full">

        {/* Circle + dotted ring wrapper */}
        {/* FIX: p-[6px] mobile, p-[10px] sm+ */}
        <div className="relative p-[6px] sm:p-[10px]">

          {/* Dotted ring */}
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#7e664f]/80
                        transition-[transform,border-color] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        group-hover:rotate-180 group-hover:border-[#7e664f]"
          />

          {/* Image circle — FIX: w-28 h-28 on mobile, scales up */}
          <div
            className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden
                        ring-1 ring-gold/20
                        transition-[box-shadow,ring] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        group-hover:ring-gold/50 group-hover:shadow-[0_0_28px_0px_rgba(180,148,92,0.18)]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover scale-105
                         transition-[transform,filter,brightness] duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                         group-hover:scale-110 group-hover:blur-[2px] group-hover:brightness-50"
              loading="lazy"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent
                          transition-opacity duration-500 group-hover:opacity-40"
            />
            <div
              className="absolute inset-0 flex items-center justify-center
                          opacity-0 translate-y-2
                          group-hover:opacity-100 group-hover:translate-y-0
                          transition-[opacity,transform] duration-400 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            >
              <span
                className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase
                             text-cream/90 bg-charcoal/40 backdrop-blur-md
                             px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-cream/20"
              >
                View <ArrowRight size={11} />
              </span>
            </div>
          </div>
        </div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.18 + 0.25, ease: silk }}
          className="text-center mt-3 sm:mt-5"
        >
          <p className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase text-gold/70 mb-1 sm:mb-1.5">
            {item.subtitle}
          </p>
          {/* FIX: text-sm mobile, text-base sm, text-lg lg */}
          <h3 className="font-display text-espresso text-sm sm:text-base lg:text-lg tracking-wide mb-1
                          transition-colors duration-300 group-hover:text-espresso/80">
            {item.title}
          </h3>
          <span className="text-espresso/40 text-[9px] sm:text-[10px] tracking-widest">{item.count}</span>
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function FeaturedCollection() {
  return (
    // FIX: py-16 mobile, py-28 lg+
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.15em' }}
            whileInView={{ opacity: 1, letterSpacing: '0.22em' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: silk }}
            className="section-label"
          >
            Curated for You
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.1, ease: silk }}
            className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5"
          >
            Featured Collections
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.25, ease: silk }}
            style={{ originX: 0.5 }}
            className="gold-divider"
          />
        </div>

        {/* Grid — FIX: gap-4 mobile, gap-8 sm, gap-10 lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-10">
          {collections.map((item, i) => (
            <CollectionCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45, duration: 0.65, ease: silk }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link
            to="/collection"
            className="btn-outline-gold relative inline-flex items-center gap-2 overflow-hidden
                        transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        hover:-translate-y-[2px] hover:shadow-[0_6px_24px_-4px_rgba(180,148,92,0.28)]
                        group/cta text-xs sm:text-sm"
          >
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full
                          bg-gradient-to-r from-transparent via-gold/15 to-transparent
                          transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                          group-hover/cta:translate-x-full"
            />
            <span className="relative">View All Collections</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}