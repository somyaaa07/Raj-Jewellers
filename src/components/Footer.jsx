import { Link } from 'react-router-dom'
import { Instagram, Facebook, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-charcoal text-ivory/70">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand — FIX: col-span-2 on sm so it gets full row, then normal on md */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Raj Jewellers logo"
                className="w-auto object-contain h-20"
              />
            </Link>
            <p className="text-sm leading-relaxed text-ivory/50 max-w-xs">
              Handcrafted luxury jewellery where timeless artistry meets modern elegance.
              Each piece tells a story of devotion.
            </p>
            <div className="flex gap-3 mt-6">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="#"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Contact'].map(page => (
                <li key={page}>
                  <Link
                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                    className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Diamond Rings', 'Gold Necklaces', 'Luxury Bracelets', 'Wedding Collection', 'Earrings'].map(item => (
                <li key={item}>
                  <a href="/gallery" className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300 tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — FIX: col-span-2 on sm so input doesn't get squished */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Newsletter</h4>
            <p className="text-sm text-ivory/50 mb-5 leading-relaxed">
              Receive exclusive previews and invitations to private events.
            </p>
            {subscribed ? (
              <p className="text-gold text-sm tracking-wide">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm text-ivory placeholder-ivory/30 outline-none focus:border-gold transition-colors font-body"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light px-4 py-3 text-white transition-colors flex items-center flex-shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar — FIX: text-center on mobile */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-center md:text-left">
        <p className="text-xs text-ivory/30 tracking-widest">
          © 2025 RAJ JEWELLERS & SONS . ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs text-ivory/20 tracking-wider">
          CRAFTED WITH DEVOTION
        </p>
      </div>
    </footer>
  )
}