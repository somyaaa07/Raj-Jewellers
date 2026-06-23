import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Shield, Award, Star, Check } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '../data/Product'
import { getWhatsAppUrl } from '../utils/whatsapp'
import ProductCard, { WhatsAppIcon } from '../components/ProductCard'

/* ── Image gallery ──────────────────────────────── */
function ImageGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const prev = () => {
    setDirection(-1)
    setActive(i => (i === 0 ? images.length - 1 : i - 1))
  }
  const next = () => {
    setDirection(1)
    setActive(i => (i === images.length - 1 ? 0 : i + 1))
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative overflow-hidden aspect-square bg-ivory">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.img
            key={active}
            src={images[active]}
            alt={name}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-ivory/80 backdrop-blur-sm border border-espresso/15 hover:border-gold flex items-center justify-center text-espresso hover:text-gold transition-all duration-300"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-ivory/80 backdrop-blur-sm border border-espresso/15 hover:border-gold flex items-center justify-center text-espresso hover:text-gold transition-all duration-300"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Index counter */}
        <div className="absolute bottom-3 right-3 bg-espresso/70 px-2.5 py-1">
          <span className="text-ivory text-[0.6rem] tracking-widest">{active + 1} / {images.length}</span>
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
              className={`aspect-square overflow-hidden border-2 transition-all duration-300 ${
                active === i ? 'border-gold' : 'border-transparent hover:border-gold/40'
              }`}
            >
              <img src={src} alt={`${name} view ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Trust badge ──────────────────────────────────── */
function TrustBadge({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 p-5 border border-espresso/8 hover:border-gold/30 transition-colors duration-300">
      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-display text-espresso text-sm tracking-wide">{title}</div>
        <div className="text-espresso/50 text-xs mt-0.5 leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────── */
export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product, 4)
  const waUrl = getWhatsAppUrl(product)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ── Breadcrumb ────────────────────────── */}
      <div className="pt-28 pb-4 px-6 bg-ivory border-b border-espresso/8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-espresso/40">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-espresso/70">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* ── Main detail section ───────────────── */}
      <section className="py-14 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: gallery */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <ImageGallery images={product.images} name={product.name} />
            </motion.div>

            {/* Right: info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col"
            >
              {/* Category & metal */}
              <div className="flex items-center gap-3 mb-4">
                <span className="section-label">{product.category}</span>
                <div className="h-px w-4 bg-gold/40" />
                <span className={`text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1 ${
                  product.metal === 'gold' ? 'bg-gold text-ivory' : 'bg-espresso text-ivory'
                }`}>
                  {product.metal}
                </span>
              </div>

              {/* Name */}
              <h1 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
                {product.name}
              </h1>

              {/* Rating placeholder */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-espresso/40 text-xs tracking-wide">Mastercraft Certified</span>
              </div>

              <div className="gold-divider-left mb-6" />

              {/* Short description */}
              <p className="text-espresso/65 text-sm leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Full description */}
              <p className="text-espresso/55 text-sm leading-relaxed mb-8 border-l-2 border-gold/30 pl-4">
                {product.fullDescription}
              </p>

              {/* Features */}
              {product.features && (
                <div className="mb-8">
                  <p className="section-label text-[0.65rem] mb-4">Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-gold flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-espresso/65 text-xs tracking-wide">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Collections */}
              {product.collections?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.collections.map(col => (
                    <Link
                      key={col}
                      to={`/collections#${col}`}
                      className="text-[0.6rem] tracking-[0.15em] uppercase border border-espresso/20 px-3 py-1.5 text-espresso/60 hover:border-gold hover:text-gold transition-all duration-300"
                    >
                      {col.replace('-', ' ')}
                    </Link>
                  ))}
                </div>
              )}

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 py-4 text-sm"
                >
                  <WhatsAppIcon   className="shrink-0" size={16} />
                  Enquire on WhatsApp
                </a>
                <Link to="/contact" className="btn-outline-gold flex items-center justify-center py-4 text-sm">
                  <span clasName="-mt-4">Book Consultation</span>
                </Link>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-1 gap-2">
                <TrustBadge icon={Award} title="Handcrafted Jewellery" desc="Each piece crafted by master artisans with decades of experience." />
                <TrustBadge icon={Shield} title="BIS Hallmarked & Certified" desc="All gold and silver pieces meet BIS certification standards." />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Full description block ────────────── */}
      <section className="py-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            About This Piece
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-espresso text-3xl sm:text-4xl mt-4 mb-5"
          >
            {product.name}
          </motion.h2>
          <div className="gold-divider mb-8" />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-espresso/65 text-sm leading-relaxed max-w-2xl mx-auto"
          >
            {product.fullDescription}
          </motion.p>
        </div>
      </section>

      {/* ── WhatsApp CTA band ─────────────────── */}
      <section className="py-14 px-6 bg-espresso">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-ivory text-2xl mb-1">Interested in {product.name}?</h3>
            <p className="text-ivory/50 text-sm tracking-wide">
              Chat with our jewellery experts for pricing, availability & customisation.
            </p>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2.5 flex-shrink-0"
          >
            <WhatsAppIcon size={16} />
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* ── Related products ──────────────────── */}
      {related.length > 0 && (
        <section className="py-24 px-6 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-label">You May Also Love</span>
              <h2 className="font-display text-espresso text-4xl mt-4 mb-5">Related Pieces</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}