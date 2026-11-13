import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '../../config/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-tertiary text-on-tertiary mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-on-tertiary rounded-lg flex items-center justify-center">
                <span className="text-tertiary font-bold">ع</span>
              </div>
              <div>
                <h3 className="font-display font-bold">Al-Jazari</h3>
                <p className="text-xs opacity-80">Academy</p>
              </div>
            </div>
            <p className="text-sm opacity-90">Learning Quran with excellence and integrity.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:underline opacity-90">Home</Link></li>
              <li><Link to="/courses" className="hover:underline opacity-90">Courses</Link></li>
              <li><Link to="/about" className="hover:underline opacity-90">About</Link></li>
              <li><Link to="/ilm-hub" className="hover:underline opacity-90">Ilm Hub</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq-fees" className="hover:underline opacity-90">FAQ & Fees</Link></li>
              <li><Link to="/contact" className="hover:underline opacity-90">Contact</Link></li>
              <li><Link to="/privacy" className="hover:underline opacity-90">Privacy</Link></li>
              <li><Link to="/terms" className="hover:underline opacity-90">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:underline">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-on-tertiary/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">© {year} Al-Jazari Academy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={siteConfig.contact.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
