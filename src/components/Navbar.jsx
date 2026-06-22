import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

/* ── Mega menu data ─────────────────────────────────── */
const goldCategories = [
  { label: 'Rings', sub: 'Men & Women', slug: 'gold-rings' },
  { label: 'Neck Chains', sub: 'Men & Women', slug: 'gold-chains' },
  { label: 'Lockets', sub: 'Om, Maa, Gurjar', slug: 'gold-lockets' },
  { label: 'Kundal', sub: 'Traditional', slug: 'gold-kundal' },
  { label: 'Earrings', sub: 'Men & Women', slug: 'gold-earrings' },
  { label: 'Nose Rings', sub: 'Classic Designs', slug: 'gold-nose-rings' },
  { label: 'Nose Pins', sub: 'Elegant Styles', slug: 'gold-nose-pins' },
  { label: 'Necklaces', sub: 'Luxury Pieces', slug: 'gold-necklaces' },
  { label: 'Chokers', sub: 'Statement Pieces', slug: 'gold-chokers' },
  { label: 'Rani Haar', sub: 'Bridal Style', slug: 'gold-rani-haar' },
  { label: 'Bali', sub: 'Men & Women', slug: 'gold-bali' },
  { label: 'Om Collection', sub: 'Sacred Designs', slug: 'gold-om' },
  { label: 'Bracelets', sub: 'Men & Women', slug: 'gold-bracelets' },
  { label: 'Chudi', sub: 'Traditional', slug: 'gold-chudi' },
  { label: 'Kade', sub: 'Men & Women', slug: 'gold-kade' },
  { label: 'Mangalsutra', sub: 'Bridal Wear', slug: 'gold-mangalsutra' },
  { label: 'Kanthi', sub: 'Devotional', slug: 'gold-kanthi' },
  { label: 'Nath', sub: 'Bridal Nose Ring', slug: 'gold-nath' },
  { label: 'Bridal Jewellery', sub: 'Complete Sets', slug: 'gold-bridal' },
  { label: 'Kids Jewellery', sub: 'Delicate Pieces', slug: 'gold-kids' },
  { label: 'Jhumki', sub: 'Traditional Style', slug: 'gold-jhumki' },
  { label: 'Tops', sub: 'Modern Studs', slug: 'gold-tops' },
  { label: 'Gold Coins', sub: 'Investment', slug: 'gold-coins' },
  { label: 'Temple Jewellery', sub: 'Sacred Art', slug: 'gold-temple' },
]

const silverCategories = [
  { label: 'Payal', sub: 'Ankle Bracelets', slug: 'silver-payal' },
  { label: 'Toe Rings', sub: 'Classic Styles', slug: 'silver-toe-rings' },
  { label: 'Neck Chains', sub: 'Men & Women', slug: 'silver-chains' },
  { label: 'Rings', sub: 'Men & Women', slug: 'silver-rings' },
  { label: 'Kade', sub: 'Bold Cuffs', slug: 'silver-kade' },
  { label: 'Bracelets', sub: 'Daily Wear', slug: 'silver-bracelets' },
  { label: 'Jhumke', sub: 'Traditional Drops', slug: 'silver-jhumke' },
  { label: 'Earrings', sub: 'All Styles', slug: 'silver-earrings' },
  { label: 'Baby Sets', sub: 'Chanda, Suraj', slug: 'silver-baby' },
  { label: 'Pendants', sub: 'Elegant Drops', slug: 'silver-pendants' },
  { label: 'Kids Kade', sub: 'Tiny Treasures', slug: 'silver-kids-kade' },
  { label: 'Silver Coins', sub: 'Pure Silver', slug: 'silver-coins' },
  { label: 'Gift Items', sub: 'Premium Gifting', slug: 'silver-gifts' },
]

const collectionLinks = [
  { label: 'Lightweight Collection', slug: 'lightweight', desc: 'Effortless daily elegance' },
  { label: 'Daily Wear Collection', slug: 'daily-wear', desc: 'Crafted for every day' },
  { label: 'Party Wear Collection', slug: 'party-wear', desc: 'Make every entrance' },
  { label: 'Bridal Collection', slug: 'bridal', desc: 'Your once-in-a-lifetime look' },
  { label: 'Traditional Collection', slug: 'traditional', desc: 'Heritage reimagined' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/collection', label: 'Collections' },
  { to: '/contact', label: 'Contact' },
  { to: '/shop', label: 'Shop', hasMega: true },
]

/* ── Mobile accordion ───────────────────────────────── */
function MobileSection({ title, items, onClose, isLink = false }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10 w-full">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-3 text-ivory/80 text-sm tracking-[0.1em] uppercase"
      >
        {title}
        <ChevronDown
          size={14}
          className={`text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 grid grid-cols-2 gap-1">
              {items.map(item => (
                <Link
                  key={item.slug}
                  to={isLink ? `/collections#${item.slug}` : `/shop?cat=${item.slug}`}
                  onClick={onClose}
                  className="text-ivory/50 hover:text-gold text-xs py-1.5 px-2 tracking-wide transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Mega Menu Panel ─────────────────────────────────── */
function MegaMenu({ onClose }) {
  const [activeTab, setActiveTab] = useState('gold')

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      // FIX: left-0 on tablet instead of centering, full width on small screens
      className="absolute top-full left-1/2 -translate-x-1/2 w-[min(96vw,900px)] bg-ivory border border-espresso/8 shadow-2xl z-50 mt-2"
    >
      {/* Tab row */}
      <div className="flex border-b border-espresso/10">
        {[
          { id: 'gold', label: 'Gold Jewellery' },
          { id: 'silver', label: 'Silver Jewellery' },
          { id: 'collections', label: 'Collections' },
        ].map(tab => (
          <button
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            onClick={() => setActiveTab(tab.id)}
            // FIX: text wrapping on tablet — allow text-[0.65rem] on md, xs on lg
            className={`flex-1 py-3 text-[0.6rem] lg:text-xs tracking-[0.1em] lg:tracking-[0.15em] uppercase font-body transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-espresso text-ivory'
                : 'text-espresso/60 hover:text-gold hover:bg-espresso/4'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Panels */}
      {/* FIX: padding responsive */}
      <div className="p-4 lg:p-6 max-h-[70vh] overflow-y-auto">
        {activeTab === 'gold' && (
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="section-label">Gold Jewellery</span>
            </div>
            {/* FIX: 2 cols on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-1">
              {goldCategories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/shop?cat=${cat.slug}`}
                  onClick={onClose}
                  className="group flex items-start gap-2 py-2 border-b border-espresso/6 hover:border-gold/40 transition-colors duration-200"
                >
                  <ChevronRight size={11} className="text-gold/50 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors" />
                  <div>
                    <div className="text-espresso text-xs font-body tracking-wide group-hover:text-gold transition-colors leading-snug">{cat.label}</div>
                    <div className="text-espresso/40 text-[0.6rem] tracking-wide leading-snug">{cat.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 lg:mt-5 pt-4 border-t border-espresso/8 flex flex-wrap gap-3">
              <Link to="/shop?metal=gold" onClick={onClose} className="btn-gold py-2.5 text-[0.65rem]">
                View All Gold
              </Link>
              <Link to="/shop?cat=gold-bridal" onClick={onClose} className="btn-outline-gold py-2.5 text-[0.65rem]">
                Bridal Collection
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'silver' && (
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="section-label">Silver Jewellery</span>
            </div>
            {/* FIX: 2 cols on tablet, 4 on desktop */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-1">
              {silverCategories.map(cat => (
                <Link
                  key={cat.slug}
                  to={`/shop?cat=${cat.slug}`}
                  onClick={onClose}
                  className="group flex items-start gap-2 py-2 border-b border-espresso/6 hover:border-gold/40 transition-colors duration-200"
                >
                  <ChevronRight size={11} className="text-gold/50 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors" />
                  <div>
                    <div className="text-espresso text-xs font-body tracking-wide group-hover:text-gold transition-colors leading-snug">{cat.label}</div>
                    <div className="text-espresso/40 text-[0.6rem] tracking-wide leading-snug">{cat.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 lg:mt-5 pt-4 border-t border-espresso/8 flex flex-wrap gap-3">
              <Link to="/shop?metal=silver" onClick={onClose} className="btn-gold py-2.5 text-[0.65rem]">
                View All Silver
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'collections' && (
          <div>
            <div className="flex items-center gap-3 mb-4 lg:mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="section-label">Shop by Collection</span>
            </div>
            {/* FIX: 1 col on small, 2 on md, 5 on lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {collectionLinks.map(col => (
                <Link
                  key={col.slug}
                  to={`/collections#${col.slug}`}
                  onClick={onClose}
                  className="group relative overflow-hidden bg-cream p-4 lg:p-5 border border-espresso/8 hover:border-gold/50 transition-all duration-300"
                >
                  <div className="font-display text-espresso text-sm mb-1 group-hover:text-gold transition-colors">{col.label}</div>
                  <div className="text-espresso/45 text-[0.6rem] tracking-wide leading-relaxed">{col.desc}</div>
                  <div className="mt-3 flex items-center gap-1 text-gold/0 group-hover:text-gold text-[0.6rem] tracking-widest uppercase transition-all duration-300">
                    Explore <ChevronRight size={10} />
                  </div>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold group-hover:w-full transition-all duration-400" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ── Main Navbar ─────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const megaRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClick(e) {
      if (megaRef.current && !megaRef.current.contains(e.target)) {
        setMegaOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-2 md:py-3 shadow-sm' : 'py-3 md:py-5 bg-transparent'
        }`}
      >
        {/* FIX: px-4 on mobile, px-6 on md+ */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-12">

          {/* Logo — FIX: constrain height on mobile so it doesn't overflow */}
          <Link to="/" className="flex flex-col items-start group flex-shrink-0">
            <img
              src="/logo.png"
              alt="Raj Jewellers logo"
              className="w-auto object-contain transition-all duration-500"
              style={{
                height: scrolled ? '56px' : '64px',
                maxHeight: scrolled ? '56px' : '72px',
              }}
            />
          </Link>

          {/* Desktop Nav — FIX: gap-6 on md, gap-8 on lg, gap-10 on xl */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navLinks.map(({ to, label, hasMega }) =>
              hasMega ? (
                <div key={to} className="relative" ref={megaRef}>
                  <button
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen(v => !v)}
                    className={`nav-link flex items-center gap-1 ${
                      megaOpen ? 'text-gold' : 'text-espresso'
                    }`}
                  >
                    {label}
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${megaOpen ? 'rotate-180 text-gold' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <MegaMenu onClose={() => setMegaOpen(false)} />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'active text-gold' : 'text-espresso'}`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA — hidden on md if space is tight, show on lg+ */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact" className="btn-gold text-xs whitespace-nowrap">
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-espresso hover:text-gold transition-colors p-1"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            // FIX: overflow-y-auto + pt for status bar + pb for safe-area
            className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-start pt-24 pb-10 px-8 overflow-y-auto"
          >
            {/* Regular nav links */}
            <div className="flex flex-col items-center gap-5 w-full">
              {navLinks
                .filter(link => !link.hasMega)
                .map(({ to, label }) => (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    // FIX: text-2xl on small phones, 3xl on normal
                    className={({ isActive }) =>
                      `font-display text-2xl sm:text-3xl tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ))}
            </div>

            {/* Shop accordions */}
            <div className="w-full max-w-xs mt-6">
              <MobileSection
                title="Gold Jewellery"
                items={goldCategories}
                onClose={() => setMenuOpen(false)}
              />
              <MobileSection
                title="Silver Jewellery"
                items={silverCategories}
                onClose={() => setMenuOpen(false)}
              />
              <MobileSection
                title="Collections"
                items={collectionLinks}
                onClose={() => setMenuOpen(false)}
                isLink
              />
            </div>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-6"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}