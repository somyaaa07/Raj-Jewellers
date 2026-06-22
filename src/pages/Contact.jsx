import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ContactForm from '../components/ContactForm'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Visit Us',
    lines: ['12, Jewellers Row, Connaught Place', 'New Delhi – 110001, India'],
  },
  {
    icon: Phone,
    label: 'Call Us',
    lines: ['+91 98765 43210', '+91 11 2345 6789'],
  },
  {
    icon: Mail,
    label: 'Email Us',
    lines: ['hello@rajjewellers.co.in', 'bespoke@raj.co.in'],
  },
  {
    icon: Clock,
    label: 'Business Hours',
    lines: ['Monday – Saturday: 10am – 7pm', 'Sunday: By Appointment'],
  },
]

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Contact Us"
        subtitle="Let's Connect"
        image="https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=1800&q=90"
      />

      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="section-label">Get in Touch</span>
                <h2 className="font-display text-espresso text-3xl sm:text-4xl mt-4 mb-4 leading-tight">
                  We'd Love to
                  <br /><span className="text-gold">Hear From You</span>
                </h2>
                <div className="gold-divider-left mb-8" />
                <p className="text-espresso/60 text-sm leading-relaxed mb-10 lg:mb-12">
                  Whether you're looking to commission a bespoke piece, visit our studio, 
                  or simply have a question — we're always happy to connect.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
                  {contactInfo.map(({ icon: Icon, label, lines }) => (
                    <div key={label} className="flex gap-4 sm:gap-5">
                      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={16} className="text-gold" strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="section-label text-[0.65rem] mb-2">{label}</div>
                        {lines.map((line, i) => (
                          <div key={i} className="text-espresso/70 text-sm">{line}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-ivory p-6 sm:p-10 lg:p-14"
              >
                <span className="section-label">Send a Message</span>
                <h3 className="font-display text-espresso text-2xl sm:text-3xl mt-4 mb-8 lg:mb-10">
                  Begin a Conversation
                </h3>
                <ContactForm />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-64 sm:h-80 bg-espresso/10 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1800&q=80"
          alt="Location"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-center">
            <MapPin className="text-gold mx-auto mb-3" size={36} strokeWidth={1.5} />
            <div className="font-display text-espresso text-lg sm:text-xl">12, Jewellers Row, New Delhi</div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}