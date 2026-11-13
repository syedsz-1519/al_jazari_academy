import { MessageCircle } from 'lucide-react'
import { siteConfig } from '../../config/site'

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=Hi%20Al-Jazari%20Academy%2C%20I%20would%20like%20to%20know%20more%20about%20your%20courses.`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 md:bottom-6 right-6 w-14 h-14 bg-success rounded-full flex items-center justify-center shadow-lifted hover:scale-110 transition-transform z-40"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />
    </a>
  )
}
