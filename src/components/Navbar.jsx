import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

/* ── Data ───────────────────────────────────────────── */
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
  { label: 'Lightweight', slug: 'lightweight', desc: 'Effortless daily elegance' },
  { label: 'Daily Wear', slug: 'daily-wear', desc: 'Crafted for every day' },
  { label: 'Party Wear', slug: 'party-wear', desc: 'Make every entrance' },
  { label: 'Bridal', slug: 'bridal', desc: 'Your once-in-a-lifetime look' },
  { label: 'Traditional', slug: 'traditional', desc: 'Heritage reimagined' },
]

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/collection', label: 'Collections' },
  { to: '/contact', label: 'Contact' },
  { to: '/shop', label: 'Shop', hasMega: true },
]

/* ── Mobile accordion section ───────────────────────── */
function MobileSection({ title, items, onClose, isLink = false }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-ivory/70 text-xs tracking-[0.15em] uppercase"
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
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="pb-4 grid grid-cols-2 gap-x-4 gap-y-0.5">
              {items.map(item => (
                <Link
                  key={item.slug}
                  to={isLink ? `/collections#${item.slug}` : `/shop?cat=${item.slug}`}
                  onClick={onClose}
                  className="text-ivory/45 hover:text-gold text-[0.7rem] py-2 tracking-wide transition-colors border-b border-white/5 leading-snug"
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

/* ── Desktop Mega Menu ───────────────────────────────── */
function MegaMenu({ onClose }) {
  const [activeTab, setActiveTab] = useState('gold')

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 bg-ivory border-t border-espresso/10 shadow-2xl z-50"
      style={{ top: '64px' }}
    >
      <div className="flex border-b border-espresso/10">
        {[
          { id: 'gold', label: 'Gold Jewellery' },
          { id: 'silver', label: 'Silver Jewellery' },
          // { id: 'collections', label: 'Collections' },
        ].map(tab => (
          <button
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-xs tracking-[0.15em] uppercase font-body transition-all duration-200 ${
              activeTab === tab.id
                ? 'bg-espresso text-ivory'
                : 'text-espresso/60 hover:text-gold hover:bg-espresso/4'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 max-h-[70vh] overflow-y-auto">
        {activeTab === 'gold' && (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="section-label">Gold Jewellery</span>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-0.5">
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
            <div className="mt-5 pt-4 border-t border-espresso/8 flex flex-wrap gap-3">
              <Link to="/shop?metal=gold" onClick={onClose} className="btn-gold py-2.5 text-[0.65rem]">View All Gold</Link>
              <Link to="/shop?cat=gold-bridal" onClick={onClose} className="btn-outline-gold py-2.5 text-[0.65rem]">Bridal Collection</Link>
            </div>
          </div>
        )}

        {activeTab === 'silver' && (
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-gold" />
              <span className="section-label">Silver Jewellery</span>
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-0.5">
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
            <div className="mt-5 pt-4 border-t border-espresso/8 flex flex-wrap gap-3">
              <Link to="/shop?metal=silver" onClick={onClose} className="btn-gold py-2.5 text-[0.65rem]">View All Silver</Link>
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
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClick(e) {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
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
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* ── Header bar ── */}
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-5 flex items-center justify-between h-20">

          {/* ── Logo ── */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo2.png"
              alt="Raj Jewellers logo"
              className="w-auto object-contain transition-all duration-500"
              style={{
                height: scrolled ? '80px' : '85px',
              }}
            />
          </Link>

          {/* ── Desktop nav — lg (1024px) and above ── */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 mx-6 xl:mx-10 space-x-2">
            {navLinks.map(({ to, label, hasMega }) =>
              hasMega ? (
                <div key={to} className="relative">
                  <button
                    onMouseEnter={() => setMegaOpen(true)}
                    onClick={() => setMegaOpen(v => !v)}
                    className={`nav-link flex items-center gap-1 text-xs tracking-[0.12em] uppercase font-body whitespace-nowrap ${
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
                    {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link text-xs tracking-[0.12em] uppercase font-body whitespace-nowrap ${
                      isActive ? 'active text-gold' : 'text-espresso'
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* ── Desktop CTA ── */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact" className="btn-gold text-xs whitespace-nowrap px-4 xl:px-5">
              Book Consultation
            </Link>
          </div>

          {/* ── Hamburger — visible below lg ── */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors text-espresso hover:text-gold"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile / Tablet full-screen menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)] bg-espresso flex flex-col lg:hidden overflow-hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img
                    src="/logo.png"
                    alt="Raj Jewellers"
                    className="h-10 w-auto object-contain brightness-0 invert"
                  />
                </Link>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-ivory/60 hover:text-gold transition-colors p-1"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <nav className="flex flex-col mb-2">
                  {navLinks
                    .filter(link => !link.hasMega)
                    .map(({ to, label }) => (
                      <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        onClick={() => setMenuOpen(false)}
                        className={({ isActive }) =>
                          `py-3.5 text-sm tracking-[0.12em] uppercase font-body border-b border-white/8 transition-colors duration-200 ${
                            isActive ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                          }`
                        }
                      >
                        {label}
                      </NavLink>
                    ))}
                </nav>

                <div className="mt-2">
                  <p className="text-gold/60 text-[0.6rem] tracking-[0.2em] uppercase mb-3 mt-2">Shop</p>
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
              </div>

              {/* Drawer footer */}
              <div className="flex-shrink-0 px-6 py-5 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-gold w-full text-center block text-xs tracking-[0.15em]"
                >
                  Book Consultation
                </Link>
                <p className="text-ivory/25 text-[0.6rem] text-center mt-3 tracking-wide">
                  Raj Jewellers · Est. 1999
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}