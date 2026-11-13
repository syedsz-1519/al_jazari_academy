import { Link } from 'react-router-dom'
import { Menu, Phone, User } from 'lucide-react'
import { useState } from 'react'
import Drawer from './Drawer'
import { siteConfig } from '../../config/site'

export default function TopAppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-surface-container border-b border-outline shadow-subtle">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-on-primary font-bold text-lg">ع</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-primary tracking-tight">Al-Jazari</span>
              <span className="text-caption text-on-surface-variant text-xs">Academy</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low p-1 rounded-full">
            {siteConfig.nav.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-4 py-2 rounded-full text-label font-label text-on-surface-variant hover:text-on-surface transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Phone (desktop) */}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="hidden xl:flex items-center gap-2 text-label font-label text-on-surface-variant hover:text-primary transition-colors"
            >
              <Phone className="w-5 h-5 text-secondary" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Enroll Button */}
            <Link
              to="/enroll"
              className="btn-primary text-sm md:text-base"
            >
              Enroll
            </Link>

            {/* Profile / Menu Button */}
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center lg:hidden" onClick={() => setDrawerOpen(true)}>
              <Menu className="w-5 h-5 text-on-primary" />
            </button>
            <button className="hidden lg:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
              <User className="w-5 h-5 text-on-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
