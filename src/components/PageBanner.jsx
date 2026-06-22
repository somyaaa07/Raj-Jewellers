import { motion } from 'framer-motion'

export default function PageBanner({ title, subtitle, image }) {
  return (
    <section className="relative h-[45vh] sm:h-[55vh] min-h-[280px] sm:min-h-[380px] flex items-end pb-12 sm:pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4"
        >
          <div className="h-px w-8 sm:w-10 bg-gold" />
          <span className="section-label text-gold/80">{subtitle}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-ivory text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}