import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/cc/e3/3a/cce33a23dba23c633033b981b3927a44.jpg"
          alt="Jewellery craftsmanship"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <div className="h-px w-8 sm:w-12 bg-gold/60" />
          <span className="section-label text-gold/80">Bespoke Creations</span>
          <div className="h-px w-8 sm:w-12 bg-gold/60" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-ivory text-3xl sm:text-5xl lg:text-6xl mb-5 sm:mb-7 leading-tight"
        >
          Create Your Dream
          <br />
          <span className="text-gold">Jewellery Piece</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-ivory/55 text-sm sm:text-base tracking-wide mb-8 sm:mb-10 max-w-sm sm:max-w-lg mx-auto leading-relaxed"
        >
          Work directly with our master artisans to bring your vision to life.
          Every bespoke piece begins with a single conversation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link to="/contact" className="btn-gold text-xs sm:text-sm px-8 sm:px-10 py-3 sm:py-4">
            Begin Your Journey
          </Link>
        </motion.div>
      </div>
    </section>
  )
}