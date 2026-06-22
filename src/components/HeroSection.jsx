import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/banner.png"
          alt="Luxury jewellery"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-5 sm:px-10 md:px-14 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[#1A1410]/80 text-3xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.1] tracking-wide mb-4 sm:mb-5 gold-glow"
        >
          The Name of the
          <br />
          <span className="text-gold">Crafted for</span>
          <br />
          Trust
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#1A1410]/70 text-xs sm:text-sm md:text-base tracking-wide max-w-xs sm:max-w-sm md:max-w-md mb-6 sm:mb-8 font-light leading-relaxed"
        >
          Discover handcrafted jewellery where artistry meets luxury.
          Each piece is a testament to generations of mastery.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-start"
        >
          <Link to="/gallery" className="btn-gold text-xs sm:text-sm w-fit">
            Explore Collection
          </Link>
        </motion.div>
      </div>
    </section>
  )
}