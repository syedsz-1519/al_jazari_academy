import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/site'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
}

export default function Drawer({ isOpen, onClose }: DrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-200"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-surface-container shadow-modal transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-outline">
            <h2 className="font-display font-bold text-on-surface">Menu</h2>
            <button onClick={onClose} className="p-2 hover:bg-surface-variant rounded-lg">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {siteConfig.nav.items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-lg text-on-surface hover:bg-surface-variant transition-colors font-label"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="border-t border-outline p-4 space-y-3">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="block text-center px-4 py-2 bg-primary text-on-primary rounded-md font-label font-semibold hover:opacity-90"
            >
              Call Us
            </a>
            <a
              href={siteConfig.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center px-4 py-2 bg-surface-variant text-on-surface rounded-md font-label font-semibold hover:bg-outline"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
