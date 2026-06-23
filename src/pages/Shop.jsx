import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, X, ChevronDown, SlidersHorizontal } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import { products, allCategories, getProductsByMetal } from '../data/Product'

/* ── Filter config ──────────────────────────────── */
const filterOptions = [
  { id: 'all',         label: 'All' },
  { id: 'gold',        label: 'Gold' },
  { id: 'silver',      label: 'Silver' },
  { id: 'lightweight', label: 'Lightweight' },
  { id: 'daily-wear',  label: 'Daily Wear' },
  { id: 'party-wear',  label: 'Party Wear' },
  { id: 'bridal',      label: 'Bridal' },
  { id: 'traditional', label: 'Traditional' },
]

const sortOptions = [
  { id: 'default',    label: 'Featured' },
  { id: 'alpha-asc',  label: 'A → Z' },
  { id: 'alpha-desc', label: 'Z → A' },
]

/* ── Metal hero card ─────────────────────────────── */
function MetalHeroCard({ metal, image, count, label, tagline, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: metal === 'gold' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onSelect}
      className="group relative overflow-hidden cursor-pointer h-72 sm:h-96"
    >
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-7">
        <span className="section-label text-gold/80 mb-2 block">{tagline}</span>
        <h3 className="font-display text-ivory text-3xl mb-1.5">{label}</h3>
        <p className="text-ivory/45 text-xs tracking-widest mb-5">{count} pieces available</p>
        <button className="btn-gold py-2.5 text-xs">Explore {label.split(' ')[0]}</button>
      </div>
    </motion.div>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialMetal = searchParams.get('metal')

  const [activeFilter, setActiveFilter] = useState(
    initialMetal === 'gold' ? 'gold' : initialMetal === 'silver' ? 'silver' : 'all'
  )
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')
  const [sortOpen, setSortOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]
    if (activeFilter !== 'all') list = list.filter(p => p.tags.includes(activeFilter))
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q)
      )
    }
    if (sort === 'alpha-asc') list.sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'alpha-desc') list.sort((a, b) => b.name.localeCompare(a.name))
    return list
  }, [activeFilter, search, sort])

  const goldCount = products.filter(p => p.metal === 'gold').length
  const silverCount = products.filter(p => p.metal === 'silver').length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Shop"
        subtitle="Fine Jewellery"
        image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=90"
      />

      {/* ── Metal hero cards ───────────────────── */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
              Shop by Metal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-5"
            >
              Gold & Silver Jewellery
            </motion.h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <MetalHeroCard
              metal="gold" label="Gold Jewellery" tagline="22K & 18K Gold"
              image="https://i.pinimg.com/1200x/9c/6c/7f/9c6c7f4beb0ae1710647d3c44134f6ea.jpg"
              count={goldCount * 8}
              onSelect={() => { setActiveFilter('gold'); document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
            />
            <MetalHeroCard
              metal="silver" label="Silver Jewellery" tagline="92.5 Sterling Silver"
              image="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=90"
              count={silverCount * 6}
              onSelect={() => { setActiveFilter('silver'); document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
            />
          </div>
        </div>
      </section>

      {/* ── Category showcase strips ───────────── */}
      <section className="py-16 px-6 bg-espresso">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label text-gold/80">Browse by Category</span>
            <h3 className="font-display text-ivory text-3xl mt-3">All Categories</h3>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {allCategories.slice(0, 12).map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  to={`/shop?cat=${cat.slug}`}
                  className="group block p-3 border border-white/10 hover:border-gold/50 text-center transition-all duration-300"
                >
                  <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${cat.metal === 'gold' ? 'bg-gold' : 'bg-white/40'}`} />
                  <div className="text-ivory/70 group-hover:text-gold text-[0.65rem] tracking-wide transition-colors leading-snug">
                    {cat.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
  
        </div>
      </section>

      {/* ── Main shop grid ─────────────────────── */}
      <section id="shop-grid" className="py-20 px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/40" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search jewellery..."
                className="w-full bg-ivory border border-espresso/15 pl-9 pr-9 py-3 text-sm text-espresso placeholder-espresso/35 outline-none focus:border-gold transition-colors tracking-wide font-body"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-gold">
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-espresso/40 text-xs tracking-widest">{filtered.length} items</span>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 border border-espresso/20 px-4 py-3 text-xs tracking-widest uppercase text-espresso hover:border-gold hover:text-gold transition-all"
                >
                  {sortOptions.find(s => s.id === sort)?.label}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-1 bg-ivory border border-espresso/10 shadow-lg w-40 z-30"
                    >
                      {sortOptions.map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => { setSort(opt.id); setSortOpen(false) }}
                          className={`w-full text-left px-4 py-3 text-xs tracking-wide transition-colors ${
                            sort === opt.id ? 'text-gold bg-espresso/5' : 'text-espresso/70 hover:text-gold'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filterOptions.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeFilter === f.id
                    ? 'bg-espresso text-ivory'
                    : 'bg-transparent text-espresso border border-espresso/25 hover:border-gold hover:text-gold'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
              <p className="font-display text-espresso/40 text-2xl mb-4">No items found</p>
              <button onClick={() => { setSearch(''); setActiveFilter('all') }} className="btn-outline-gold">
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  )
}