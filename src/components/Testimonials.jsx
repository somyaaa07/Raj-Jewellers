import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Divyanshi Jha',
    role: 'Bride ,Delhi',
    avatar: 'https://i.pinimg.com/736x/5d/8d/bc/5d8dbc142730d928f94c07a688262d36.jpg',
    text: 'My bridal set from Raj Jewellers is beyond words. The craftsmanship is unparalleled — every detail, every stone was placed with such precision and love. I receive compliments every single day.',
    rating: 5,
  },
  {
    name: 'Harshita Singh',
    role: 'Mumbai',
    avatar: 'https://i.pinimg.com/1200x/7f/71/38/7f7138a48a0f47359a3d0bf30671d912.jpg',
    text: "I've purchased three pieces from Raj Jewellers over the years. Each one is a work of art. The gold necklace I commissioned for my anniversary has become an heirloom our family will treasure forever.",
    rating: 5,
  },
  {
    name: 'Anshita Mishra',
    role: 'Bangalore',
    avatar: 'https://i.pinimg.com/736x/5e/78/4a/5e784ab6c6257e55f69b0f7a49077110.jpg',
    text: 'Raj Jewellers understands luxury in the truest sense. Not just beautiful jewellery, but an experience — from consultation to delivery. The attention to detail is extraordinary.',
    rating: 5,
  },
  {
    name: 'Shambhavi Jha',
    role: 'Jaipur',
    avatar: 'https://i.pinimg.com/736x/a7/91/08/a7910817754a95b2b559b3d573c9c015.jpg',
    text: 'The diamond ring I designed with the Raj Jewellery team was exactly what I envisioned — and somehow even more beautiful. A truly bespoke experience that I would recommend to everyone.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-4 sm:mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-sm sm:text-base">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-espresso overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-gold/80"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-ivory text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5"
          >
            Voices of Trust
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 2, spaceBetween: 32 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            style={{ paddingBottom: '48px' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                {/* FIX: p-5 mobile, p-8 sm+ */}
                <div className="bg-white/5 border border-white/10 p-5 sm:p-8 h-full relative">
                  <Stars count={t.rating} />
                  <p className="text-ivory/60 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 relative z-10">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <div className="text-ivory text-xs sm:text-sm font-display tracking-wide">{t.name}</div>
                      <div className="text-ivory/40 text-[0.65rem] sm:text-xs tracking-wide mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

      </div>
    </section>
  )
}