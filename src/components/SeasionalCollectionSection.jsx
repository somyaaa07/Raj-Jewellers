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
    image: 'https://i.pinimg.com/736x/61/33/01/613301a1c0d852afbc11ebdd05378ffa.jpg',
    accent: 'Rose Quartz & Tourmaline',
    description: "Inspired by the first bloom after winter's quiet, our Spring Collection celebrates renewal through delicate floral motifs, pastel-hued gemstones, and gossamer-light gold settings.",
    pieces: '32 pieces',
    palette: ['#E8C4C4', '#D4A0A0', '#B08D57'],
  },
  {
    id: 'summer',
    label: 'Summer Collection',
    subtitle: 'Sun & Sea',
    year: '2025',
    image: 'https://i.pinimg.com/736x/cb/9b/39/cb9b3910c6eb475e65a1b0899ec92b20.jpg',
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
    image: 'https://i.pinimg.com/736x/e6/bb/a2/e6bba224e2298e1eb5e701a826e1a43c.jpg',
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
    image: 'https://i.pinimg.com/736x/3e/66/eb/3e66eb85071e7ddee9ffbcaff1ca5e0e.jpg',
    accent: 'Diamonds & White Sapphire',
    description: "Ice-bright diamonds and platinum settings capture winter's crystalline stillness. Each piece is a quiet declaration — restrained, precise, and breathtakingly luminous.",
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
      {/* Aspect ratio: taller on mobile for better image display */}
      <div className="relative overflow-hidden aspect-[2/3] xs:aspect-[3/4]">
        <img
          src={season.image}
          alt={season.label}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />

        {/* Active / hover border */}
        <div
          className={`absolute inset-0 border transition-all duration-500 pointer-events-none ${
            isActive ? 'border-gold/60' : 'border-transparent group-hover:border-gold/30'
          }`}
        />

        {/* Year badge */}
        <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 bg-espresso/80 backdrop-blur-sm px-2 py-0.5 sm:px-3 sm:py-1">
          <span className=" text-gold/90 text-[0.5rem] sm:text-[0.6rem] tracking-[0.2em]">
            {season.year}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-2.5 xs:p-3 sm:p-5 lg:p-6">
          <p className="section-label text-gold/80 mb-0.5 sm:mb-2 text-[0.5rem] xs:text-[0.55rem] sm:text-[0.65rem] leading-none">
            {season.subtitle}
          </p>
          <h3 className="font-display text-ivory text-xs xs:text-sm sm:text-base lg:text-xl tracking-wide mb-1.5 sm:mb-3 leading-tight">
            {season.label}
          </h3>

          {/* Gem accent — hidden on smallest screens */}
          <div className="hidden xs:flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-4">
            <div className="h-px w-5 sm:w-8 bg-gold/50" />
            <span className="text-ivory/50 text-[0.5rem] sm:text-[0.65rem] tracking-[0.12em] sm:tracking-[0.15em] uppercase truncate">
              {season.accent}
            </span>
          </div>

          {/* Expandable description — desktop cards only */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <p className="hidden sm:block text-ivory/60 text-xs leading-relaxed mb-3 sm:mb-4">
                  {season.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <span className="text-ivory/35 text-[0.5rem] xs:text-[0.55rem] sm:text-xs tracking-widest">
              {season.pieces}
            </span>
            <Link
              to="/gallery"
              onClick={(e) => e.stopPropagation()}
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
    setActiveId((prev) => (prev === id ? null : id))
  }

  const active = seasons.find((s) => s.id === activeId)

  return (
    <section className="py-12 sm:py-20 lg:py-28 px-3 xs:px-4 sm:px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-8 sm:mb-14 lg:mb-18">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Season Collection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-espresso text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mt-3 mb-4 leading-tight"
          >
            Timeless Elegance
            <br />
            <span className="text-gold">For Every Season</span>
          </motion.h2>

          <div className="gold-divider mb-4 sm:mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-espresso/60 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed tracking-wide px-2"
          >
            Showcase our carefully curated jewellery collections designed to complement
            every occasion and season.
          </motion.p>
        </div>

        {/* ── Season Selector Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          /* Scrollable row on mobile; wrapping centred on sm+ */
          className="flex overflow-x-auto gap-2 mb-6 sm:mb-14 pb-2 sm:pb-0 sm:flex-wrap sm:justify-center scrollbar-hide -mx-3 xs:-mx-4 sm:mx-0 px-3 xs:px-4 sm:px-0"
        >
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => handleCardClick(s.id)}
              className={`flex-shrink-0 px-3 xs:px-4 sm:px-6 py-2 sm:py-2.5 text-[0.6rem] xs:text-[0.65rem] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${
                activeId === s.id
                  ? 'bg-espresso text-ivory'
                  : 'bg-transparent text-espresso border border-espresso/25 hover:border-gold hover:text-gold'
              }`}
            >
              {s.subtitle}
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ──
            320–479px : 1 col
            480–767px : 2 col
            768–1023px: 2 col
            1024px+   : 4 col
        */}
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 gap-2.5 xs:gap-3 sm:gap-4 lg:gap-5">
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

        {/* ── Featured Active Panel ── */}
        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              /* Stack on mobile/tablet, side-by-side on lg+ */
              className="mt-5 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 overflow-hidden"
            >
              {/* Image panel */}
              <div className="relative h-52 xs:h-64 sm:h-80 lg:h-[560px] overflow-hidden">
                <img
                  src={active.image}
                  alt={active.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-charcoal/40" />
                {/* Palette swatches */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex gap-2">
                  {active.palette.map((color, i) => (
                    <div
                      key={i}
                      className="w-4 h-4 sm:w-6 sm:h-6 rounded-full border border-white/30"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Text panel */}
              <div className="bg-espresso p-5 xs:p-6 sm:p-10 lg:p-14 flex flex-col justify-center">
                <span className="section-label text-gold/80 mb-2 sm:mb-4 text-[0.6rem] sm:text-xs">
                  {active.subtitle}
                </span>
                <h3 className="font-display text-ivory text-xl xs:text-2xl sm:text-3xl lg:text-4xl mb-2 leading-tight">
                  {active.label}
                </h3>
                <div className="h-px w-10 sm:w-12 bg-gold/50 mb-3 sm:mb-6" />
                <p className="text-ivory/55 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                  {active.description}
                </p>
                <div className="flex items-center gap-2 mb-5 sm:mb-8">
                  <div className="h-px w-6 sm:w-8 bg-gold/40" />
                  <span className="text-ivory/40 text-[0.55rem] sm:text-[0.65rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                    {active.accent}
                  </span>
                </div>
                {/* CTA row — stacked on small, inline on sm+ */}
                <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-5">
                  <Link
                    to="/collections"
                    className="btn-gold text-center text-xs sm:text-sm px-5 sm:px-6 py-2.5 sm:py-3"
                  >
                    View Collection
                  </Link>
                  <span className="text-ivory/30 text-[0.6rem] sm:text-xs tracking-widest text-center xs:text-left">
                    {active.pieces}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center mt-8 sm:mt-14"
        >
          <Link to="/shop" className="btn-outline-gold text-xs sm:text-sm">
            Shop now with us
          </Link>
        </motion.div>

      </div>
    </section>
  )
}