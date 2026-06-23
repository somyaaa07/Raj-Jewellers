import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import CTASection from './CTASection'

const processSteps = [
  {
    number: '01',
    title: 'Design & Sketch',
    description:
      'Every piece begins as a vision. Our designers work closely with you to translate emotion and intention into refined hand-drawn sketches, refining each line until the design feels inevitable.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22L10 16L16 20L24 8" /><circle cx="24" cy="6" r="2" /><path d="M2 26h24" /><path d="M8 18l-4 4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Gemstone Selection',
    description:
      'We source only ethically-certified gemstones, examined under expert eyes for brilliance, clarity, and character. Each stone is chosen to become the heart of something extraordinary.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="14,3 25,10 25,20 14,26 3,20 3,10" /><line x1="14" y1="3" x2="14" y2="26" /><line x1="3" y1="10" x2="25" y2="10" /><line x1="3" y1="20" x2="25" y2="20" /><line x1="3" y1="10" x2="14" y2="3" /><line x1="25" y1="10" x2="14" y2="3" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Handcrafted Creation',
    description:
      'Master goldsmiths bring the design to life entirely by hand — setting each stone, shaping every curve, and applying finishing techniques passed down through generations of artisans.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 22V12l-4 2V8l8-4 8 4v6l-4-2v10" /><path d="M10 22h8" /><circle cx="14" cy="16" r="2" /><path d="M7 8l7 3 7-3" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Quality Inspection',
    description:
      'Before it reaches your hands, each piece passes through rigorous quality control — measured, magnified, and tested to ensure it carries the Raj Jewellers mark of perfection and longevity.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13" cy="13" r="8" /><line x1="19" y1="19" x2="25" y2="25" /><path d="M10 13l2 2 4-4" />
      </svg>
    ),
  },
]

const contactDetails = [
  { icon: MapPin, label: 'Visit Us', lines: ['main market, nearby kisan medical store, Unchagaon Dist- Bulandshahr Pincode- 203398 State- Uttar Pradesh'] },
  { icon: Phone, label: 'Call Us', lines: ['+91 9761560132', '+91 9927667814' , '+91 6397113855', '+91 8273193330', '+91 7060587403'], },
  { icon: Mail, label: 'Email Us', lines: ['Rajjewellers9927@gmail.com'] },
  { icon: Clock, label: 'Hours', lines: ['Mon – Sat: 10am – 7pm', 'Sunday: By Appointment'] },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-40px' },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }
}

function ProcessStep({ step, index }) {
  const isEven = index % 2 === 0
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex gap-4 sm:gap-6"
    >
      {/* Left: icon + connector */}
      <div className="flex flex-col items-center flex-shrink-0">
        {/* FIX: w-10 h-10 mobile, w-14 h-14 sm+ */}
        <div className="w-10 h-10 sm:w-14 sm:h-14 border border-gold/40 flex items-center justify-center text-gold relative group-hover:border-gold transition-all duration-400 bg-ivory group-hover:bg-gold/5">
          <span className="scale-75 sm:scale-100">{step.icon}</span>
          <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/30 scale-110 transition-all duration-500" />
        </div>
        {index < processSteps.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-gold/30 to-transparent mt-3 min-h-[2rem] sm:min-h-[3rem]" />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-8 sm:pb-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
          <span className="font-display text-gold/40 text-xs sm:text-sm tracking-widest">{step.number}</span>
          <div className="h-px w-4 sm:w-5 bg-gold/30" />
          <h4 className="font-display text-espresso text-base sm:text-xl tracking-wide">{step.title}</h4>
        </div>
        <p className="text-espresso/60 text-xs sm:text-sm leading-relaxed max-w-xs sm:max-w-sm">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

function LuxuryContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (errors[name]) setErrors(er => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center py-12 sm:py-16 text-center"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gold flex items-center justify-center mb-5 sm:mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B08D57" strokeWidth="1.5" strokeLinecap="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="font-display text-espresso text-xl sm:text-2xl mb-3 tracking-wide">Message Received</h3>
        <div className="h-px w-12 bg-gold mx-auto mb-5" />
        <p className="text-espresso/55 text-sm tracking-wide">We will reach out within 24 hours.</p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Full Name *</label>
          <input name="name" type="text" value={form.name} onChange={handleChange}
            placeholder="Your name"
            className={`input-luxury w-full ${errors.name ? 'border-b-red-400' : ''}`} />
          {errors.name && <p className="text-red-400 text-[0.65rem] mt-1 tracking-wide">{errors.name}</p>}
        </div>
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            className={`input-luxury w-full ${errors.email ? 'border-b-red-400' : ''}`} />
          {errors.email && <p className="text-red-400 text-[0.65rem] mt-1 tracking-wide">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-7">
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Phone Number</label>
          <input name="phone" type="tel" value={form.phone} onChange={handleChange}
            placeholder="+91 00000 00000" className="input-luxury w-full" />
        </div>
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Subject</label>
          <input name="subject" type="text" value={form.subject} onChange={handleChange}
            placeholder="How can we help you?" className="input-luxury w-full" />
        </div>
      </div>

      <div>
        <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Your Message *</label>
        <textarea name="message" value={form.message} onChange={handleChange}
          placeholder="Tell us about the piece you dream of, or ask us anything..."
          rows={5}
          className={`input-luxury resize-none w-full ${errors.message ? 'border-b-red-400' : ''}`} />
        {errors.message && <p className="text-red-400 text-[0.65rem] mt-1 tracking-wide">{errors.message}</p>}
      </div>

      {/* FIX: stack on mobile */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
        <button type="submit" className="btn-gold w-full sm:w-auto">
          Send Message
        </button>
        <span className="text-espresso/30 text-xs tracking-widest">* Required fields</span>
      </div>
    </form>
  )
}

export default function CraftsmanshipAndContactSection() {
  return (
    <>
      {/* ── PART A — Process ── */}
      {/* FIX: py-16 mobile, px-5 mobile */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.span
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="section-label"
            >
              Our Atelier
            </motion.span>
            <motion.h2
              {...fadeUp(0.1)}
              className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mt-4 mb-5 leading-tight"
            >
              How We Make
              <br />
              <span className="text-gold">Our Jewellery</span>
            </motion.h2>
            <div className="gold-divider mb-6" />
            <motion.p
              {...fadeUp(0.2)}
              className="text-espresso/60 text-sm max-w-xl mx-auto leading-relaxed tracking-wide px-4"
            >
              Every Raj Jewellers piece follows a sacred four-step journey — from the first pencil mark
              to the final polish — guided by hands that have mastered the art of forever.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-20 items-start">
            {/* Steps */}
            <div>
              {processSteps.map((step, i) => (
                <ProcessStep key={step.number} step={step} index={i} />
              ))}
            </div>

            {/* Image — FIX: not sticky on mobile, stat card pulled in on mobile */}
            <motion.div {...fadeUp(0.3)} className="relative lg:sticky lg:top-28">
              <div className="relative overflow-hidden">
                <img
                  src="https://i.pinimg.com/736x/8f/45/d4/8f45d440ea2cfe1228b1779f2a8267c9.jpg"
                  alt="Jewellery artisan at work"
                  className="w-full h-64 sm:h-80 lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />

                {/* FIX: stat card — inset on mobile so it doesn't overflow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.55, duration: 0.7 }}
                  className="absolute bottom-4 left-4 lg:-bottom-6 lg:-left-6 bg-espresso p-5 sm:p-8 w-40 sm:w-52"
                >
                  <div className="font-display text-3xl sm:text-4xl text-gold mb-1">250+</div>
                  <div className="text-ivory/55 text-[0.6rem] sm:text-xs tracking-widest uppercase">Exclusive</div>
                  <div className="text-ivory text-[0.6rem] sm:text-xs tracking-widest uppercase">Designs Created</div>
                </motion.div>
              </div>

              {/* FIX: gold frame hidden on mobile (would clip) */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border border-gold/35 pointer-events-none hidden sm:block" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />

      {/* ── PART C — Contact Form ── */}
      <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 lg:px-12 bg-ivory overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 sm:gap-14 lg:gap-20">

            {/* Left context */}
            <motion.div {...fadeUp(0)} className="lg:col-span-2 flex flex-col justify-center">
              <span className="section-label mb-4">Write to Us</span>
              <h2 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
                Begin a
                <br />
                <span className="text-gold">Conversation</span>
              </h2>
              <div className="gold-divider-left mb-6 sm:mb-7" />
              <p className="text-espresso/60 text-sm leading-relaxed mb-8 sm:mb-10 max-w-xs">
                Whether you have a question, a dream, or simply wish to say hello —
                our team responds to every message personally within 24 hours.
              </p>
              <div className="relative hidden lg:block">
                <img
                  src="https://i.pinimg.com/1200x/a4/6f/b9/a46fb9a37346cbc5497ce7803a88a52a.jpg"
                  alt="Luxury jewellery detail"
                  className="w-full h-52 object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-14 h-14 border border-gold/40" />
              </div>
            </motion.div>

            {/* Right form — FIX: p-6 mobile, p-10 sm, p-14 lg */}
            <motion.div
              {...fadeUp(0.18)}
              className="lg:col-span-3 bg-cream p-6 sm:p-10 lg:p-14"
            >
              <LuxuryContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map + Info ── */}
      <section className="bg-espresso overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* FIX: stacked on mobile, side by side on lg */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">

            {/* Map */}
            <div className="lg:col-span-2 relative h-72 sm:h-96 lg:h-full lg:min-h-[480px]">
              <iframe
                title="Raj Jewellers Location"
                src="https://maps.google.com/maps?q=28.4904375,78.1571875&z=15&output=embed"
                width="100%" height="100%"
                style={{ border: 0, filter: 'grayscale(40%) contrast(1.1) brightness(0.85)' }}
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              />
              <div className="absolute inset-0 pointer-events-none bg-espresso/10" />
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-espresso/90 backdrop-blur-sm px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
                <MapPin size={14} className="text-gold flex-shrink-0" strokeWidth={1.5} />
                <div>
                  <div className="text-ivory text-xs font-display tracking-wider">Raj Jewellers & Sons</div>
                  <div className="text-ivory/50 text-[0.6rem] tracking-wide mt-0.5">Connaught Place, New Delhi</div>
                </div>
              </div>
            </div>

            {/* Info card — FIX: px-5 mobile, border-top on mobile instead of left */}
            <motion.div
              {...fadeUp(0.15)}
              className="bg-espresso px-5 sm:px-8 lg:px-10 py-10 lg:py-16 flex flex-col justify-center border-t lg:border-t-0 border-l-0 lg:border-l border-white/8"
            >
              <span className="section-label text-gold/80 mb-4">Find Us</span>
              <h3 className="font-display text-ivory text-2xl sm:text-3xl mb-2 leading-tight">Our Studio</h3>
              <div className="h-px w-12 bg-gold/40 mb-6 sm:mb-8" />

              {/* FIX: 2-col grid on sm so 4 items fit nicely on tablet */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6 lg:gap-7">
                {contactDetails.map(({ icon: Icon, label, lines }) => (
                  <div key={label} className="flex gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="section-label text-[0.6rem] text-gold/60 mb-1">{label}</div>
                      {lines.map((line, i) => (
                        <div key={i} className="text-ivory/60 text-xs sm:text-sm leading-relaxed">{line}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}