import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const categories = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Wedding']

const images = [
  { src: 'https://i.pinimg.com/736x/2f/57/7e/2f577e44dc51080ff1c9bbbeca505bea.jpg', cat: 'Rings', title: 'Solitaire Diamond Ring', tall: true },
  { src: 'https://i.pinimg.com/webp/1200x/f7/ed/c7/f7edc72c9f34c0e5d6df6751a165b3a0.webp', cat: 'Necklaces', title: 'Gold Pendant Necklace' },
  { src: 'https://i.pinimg.com/736x/b1/87/10/b1871024948c5b1b0acef0cf67f8b38e.jpg', cat: 'Bracelets', title: 'Diamond Tennis Bracelet' },
  { src: 'https://i.pinimg.com/1200x/a1/2a/89/a12a89b422fc5394b6f66b410e1adf05.jpg', cat: 'Earrings', title: 'Drop Pearl Earrings', tall: true },
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=85', cat: 'Rings', title: 'Rose Gold Halo Ring' },
  { src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=85', cat: 'Necklaces', title: 'Layered Gold Chain' },
  { src: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=800&q=85', cat: 'Wedding', title: 'Bridal Jewellery Set', tall: true },
  { src: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=800&q=85', cat: 'Bracelets', title: 'Bangle Stack' },
  { src: 'https://images.unsplash.com/photo-1601121141418-36b7e19e2b1a?w=800&q=85', cat: 'Rings', title: 'Emerald Cut Ring' },
  { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=85', cat: 'Necklaces', title: 'Pearl Strand Necklace' },
  { src: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=800&q=85', cat: 'Earrings', title: 'Gold Stud Earrings' },
  { src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=85', cat: 'Wedding', title: 'Wedding Band Set', tall: true },
  { src: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=800&q=85', cat: 'Bracelets', title: 'Gold Cuff Bracelet' },
  { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=85', cat: 'Rings', title: 'Vintage Band Ring' },
  { src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=85', cat: 'Necklaces', title: 'Diamond Choker' },
  { src: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=85', cat: 'Earrings', title: 'Chandelier Earrings', tall: true },
  { src: 'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=800&q=85', cat: 'Wedding', title: 'Engagement Ring' },
  { src: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=800&q=85', cat: 'Bracelets', title: 'Charm Bracelet' },
  { src: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=85', cat: 'Rings', title: 'Sapphire Ring' },
  { src: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=800&q=85', cat: 'Necklaces', title: 'Emerald Necklace', tall: true },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Our Gallery"
        subtitle="The Collection"
        image="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=90"
      />

      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-14"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                  active === cat
                    ? 'bg-espresso text-ivory'
                    : 'bg-transparent text-espresso border border-espresso/30 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry gallery */}
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="masonry-item group relative cursor-pointer overflow-hidden"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3">
                    <ZoomIn className="text-ivory" size={28} strokeWidth={1.5} />
                    <span className="font-display text-ivory text-sm tracking-wider">{img.title}</span>
                    <span className="section-label text-gold/80 text-[0.6rem]">{img.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} strokeWidth={1.5} className="sm:hidden" />
              <X size={32} strokeWidth={1.5} className="hidden sm:block" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain"
              />
              <div className="mt-3 sm:mt-4 text-center">
                <div className="font-display text-ivory text-lg sm:text-xl tracking-wide">{lightbox.title}</div>
                <div className="section-label text-gold/70 mt-1">{lightbox.cat}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}