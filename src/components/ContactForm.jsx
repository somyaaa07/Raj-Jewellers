import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center px-4">
        <div className="w-14 h-14 sm:w-16 sm:h-16 border border-gold flex items-center justify-center mb-5 sm:mb-6">
          <span className="text-gold text-xl sm:text-2xl">✓</span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl text-espresso mb-3">Message Received</h3>
        <p className="text-espresso/60 text-sm tracking-wide">We will be in touch within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      {/* Name + Email — stacked on mobile, side-by-side on sm+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="input-luxury w-full"
          />
        </div>
        <div>
          <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Email Address</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="input-luxury w-full"
          />
        </div>
      </div>

      <div>
        <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Phone Number</label>
        <input
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 00000 00000"
          className="input-luxury w-full"
        />
      </div>

      <div>
        <label className="section-label text-[0.65rem] block mb-2 sm:mb-3">Your Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about the piece you dream of..."
          rows={5}
          required
          className="input-luxury resize-none w-full"
        />
      </div>

      {/* FIX: full-width on mobile always, auto on sm+ */}
      <button type="submit" className="btn-gold w-full sm:w-auto sm:px-12">
        Send Message
      </button>
    </form>
  )
}