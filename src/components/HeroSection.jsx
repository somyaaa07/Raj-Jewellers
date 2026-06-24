import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-start overflow-hidden">

      {/* ── Background images ── */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Mobile banner (shown below md) */}
        <motion.img
          src="/mobileBanner1.png"
          alt="Luxury jewellery"
          className="block md:hidden w-full h-full object-cover object-top"
        />

        {/* Desktop banner (shown md and up) */}
        <motion.img
          src="/banner6.png"
          alt="Luxury jewellery"
          className="hidden md:block w-full h-full object-cover object-center"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-left px-7 sm:px-8 md:px-14 w-full max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl pt-24 md:pt-0 md:mt-8">

        {/* ── MOBILE heading & copy ── */}
        <div className="block md:hidden text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-[9px] tracking-[0.25em] uppercase text-[#8B6914]/80 mb-4"
          >
            Raj Jewellers and Sons &nbsp;·&nbsp; Est. 1999
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[#1A1410]/92 text-[2.5rem] leading-[1.15] tracking-wide mb-3 gold-glow"
          >
            <span className="text-gold">Piece</span> Tells Every
            <br />
            Story of Trust
          </motion.h1>



      
        </div>

        {/* ── DESKTOP heading & copy ── */}
        <div className="hidden md:block">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-[#1A1410]/80 text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-wide mb-4 sm:mb-5 gold-glow"
          >
            The Name of the
            <br />
            <span className="text-gold">Crafted for</span>
            <br />
            Trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#1A1410]/70 text-sm md:text-base tracking-wide max-w-sm md:max-w-md mb-6 sm:mb-8 font-light leading-relaxed"
          >
            Discover handcrafted jewellery where artistry meets luxury.
            Each piece is a testament to generations of mastery.
          </motion.p>

          {/* ── Desktop CTA ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex gap-3 justify-start"
          >
            <Link to="/gallery" className="btn-gold text-sm w-fit">
              Explore Collection
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}