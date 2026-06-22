import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const seasons = [
  {
    id: 'spring',
    label: 'Spring Collection',
    subtitle: 'Bloom & Blossom',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&q=90',
    accent: 'Rose Quartz & Tourmaline',
    description: 'Inspired by the first bloom after winter\'s quiet, our Spring Collection celebrates renewal through delicate floral motifs, pastel-hued gemstones, and gossamer-light gold settings.',
    pieces: '32 pieces',
    palette: ['#E8C4C4', '#D4A0A0', '#B08D57'],
  },
  {
    id: 'summer',
    label: 'Summer Collection',
    subtitle: 'Sun & Sea',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=90',
    accent: 'Aquamarine & Citrine',
    description: 'Bold, luminous, and unapologetically radiant. Our Summer Collection channels the energy of long golden afternoons — vivid stones, sun-kissed textures, and statement silhouettes.',
    pieces: '41 pieces',
    palette: ['#F5D089', '#E8B84B', '#B08D57'],
  },
  {
    id: 'autumn',
    label: 'Autumn Collection',
    subtitle: 'Amber & Earth',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=1000&q=90',
    accent: 'Amber, Garnet & Smoky Topaz',
    description: 'A rich tapestry of warmth and depth. Earthy gemstones meet burnished gold in pieces that carry the spirit of fallen leaves, harvest warmth, and quiet, elegant transformation.',
    pieces: '28 pieces',
    palette: ['#C4813A', '#A0612A', '#B08D57'],
  },
  {
    id: 'winter',
    label: 'Winter Collection',
    subtitle: 'Frost & Silence',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=90',
    accent: 'Diamonds & White Sapphire',
    description: 'Ice-bright diamonds and platinum settings capture winter\'s crystalline stillness. Each piece is a quiet declaration — restrained, precise, and breathtakingly luminous.',
    pieces: '37 pieces',
    palette: ['#E8E4F0', '#C8D4E0', '#B08D57'],
  },
]

function SeasonCard({ season, index, isActive, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={season.image}
          alt={season.label}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />
        <div className={`absolute inset-0 border transition-all duration-500 pointer-events-none ${
          isActive ? 'border-gold/60' : 'border-transparent group-hover:border-gold/30'
        }`} />

        {/* Corner accents — hidden on very small screens */}
        <div className="hidden sm:block absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
        <div className="hidden sm:block absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />

        {/* Year badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-espresso/80 backdrop-blur-sm px-2 sm:px-3 py-1">
          <span className="section-label text-gold/90 text-[0.55rem] sm:text-[0.6rem] tracking-[0.2em]">{season.year}</span>
        </div>

        {/* Bottom content — tighter padding on mobile */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5 lg:p-6">
          <p className="section-label text-gold/80 mb-1 sm:mb-2 text-[0.55rem] sm:text-[0.65rem]">{season.subtitle}</p>
          <h3 className="font-display text-ivory text-sm sm:text-base lg:text-xl tracking-wide mb-2 sm:mb-3 leading-tight">
            {season.label}
          </h3>

          {/* Gem accent — hidden on mobile to save space */}
          <div className="hidden sm:flex items-center gap-2 mb-3 sm:mb-4">
            <div className="h-px w-6 sm:w-8 bg-gold/50" />
            <span className="text-ivory/50 text-[0.55rem] sm:text-[0.65rem] tracking-[0.15em] uppercase">{season.accent}</span>
          </div>

          {/* Expandable description */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                {/* Description hidden on mobile — shown in panel below */}
                <p className="hidden sm:block text-ivory/60 text-xs leading-relaxed mb-3 sm:mb-4">
                  {season.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <span className="text-ivory/35 text-[0.55rem] sm:text-xs tracking-widest">{season.pieces}</span>
            <Link
              to="/gallery"
              onClick={e => e.stopPropagation()}
              className="hidden sm:flex items-center gap-1.5 text-gold text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-gold-light"
            >
              Explore <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function SeasonalCollectionsSection() {
  const [activeId, setActiveId] = useState('winter')

  const handleCardClick = (id) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 lg:mb-18">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="section-label"
          >
            Season Collection
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-4 mb-5 leading-tight"
          >
            Timeless Elegance
            <br />
            <span className="text-gold">For Every Season</span>
          </motion.h2>
          <div className="gold-divider mb-5 sm:mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-espresso/60 text-sm max-w-xl mx-auto leading-relaxed tracking-wide px-4"
          >
            Showcase our carefully curated jewellery collections designed to complement
            every occasion and season.
          </motion.p>
        </div>

        {/* Season Selector Tabs — FIX: full-width scrollable on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="flex overflow-x-auto gap-2 mb-8 sm:mb-14 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide"
        >
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => handleCardClick(s.id)}
              className={`flex-shrink-0 px-4 sm:px-6 py-2 sm:py-2.5 text-[0.65rem] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeId === s.id
                  ? 'bg-espresso text-ivory'
                  : 'bg-transparent text-espresso border border-espresso/25 hover:border-gold hover:text-gold'
              }`}
            >
              {s.subtitle}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid — 2-col on mobile, 4-col on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {seasons.map((season, i) => (
            <SeasonCard
              key={season.id}
              season={season}
              index={i}
              isActive={activeId === season.id}
              onClick={() => handleCardClick(season.id)}
            />
          ))}
        </div>

        {/* Featured Active Panel */}
        <AnimatePresence mode="wait">
          {activeId && (() => {
            const active = seasons.find(s => s.id === activeId)
            return (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                // FIX: stacked on mobile, side-by-side on lg
                className="mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
              >
                {/* Image panel */}
                <div className="relative h-100  overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/40" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 flex gap-2">
                    {active.palette.map((color, i) => (
                      <div
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-white/30"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Text panel — FIX: p-6 mobile, p-10 sm, p-14 lg */}
                <div className="bg-espresso p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                  <span className="section-label text-gold/80 mb-3 sm:mb-4">{active.subtitle}</span>
                  <h3 className="font-display text-ivory text-2xl sm:text-3xl lg:text-4xl mb-2 leading-tight">
                    {active.label}
                  </h3>
                  <div className="h-px w-12 bg-gold/50 mb-4 sm:mb-6" />
                  <p className="text-ivory/55 text-sm leading-relaxed mb-4">
                    {active.description}
                  </p>
                  <div className="flex items-center gap-2 mb-6 sm:mb-8">
                    <div className="h-px w-8 bg-gold/40" />
                    <span className="text-ivory/40 text-[0.6rem] sm:text-[0.65rem] tracking-[0.2em] uppercase">
                      {active.accent}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5">
                    <Link to="/gallery" className="btn-gold w-full sm:w-auto text-center">
                      View Collection
                    </Link>
                    <span className="text-ivory/30 text-xs tracking-widest">{active.pieces}</span>
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mt-10 sm:mt-14"
        >
          <Link to="/gallery" className="btn-outline-gold text-xs sm:text-sm">
            View All Collections
          </Link>
        </motion.div>

      </div>
    </section>
  )
}