import { useLocation, Link } from 'react-router-dom'
import { Home, BookOpen, Lightbulb, UserCheck, Mail } from 'lucide-react'

const tabs = [
  { id: 'home', label: 'Home', href: '/', icon: Home },
  { id: 'courses', label: 'Courses', href: '/courses', icon: BookOpen },
  { id: 'ilm-hub', label: 'Ilm Hub', href: '/ilm-hub', icon: Lightbulb },
  { id: 'enroll', label: 'Enroll', href: '/enroll', icon: UserCheck },
  { id: 'contact', label: 'Contact', href: '/contact', icon: Mail },
]

export default function BottomTabBar() {
  const location = useLocation()
  
  return (
    <nav className="bg-surface-container border-t border-outline h-16 flex items-center justify-around px-2 gap-1">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.href || location.pathname.startsWith(tab.href + '/')
        const Icon = tab.icon
        
        return (
          <Link
            key={tab.id}
            to={tab.href}
            className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all text-xs font-label ${
              isActive
                ? 'bg-primary-container text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <Icon className="w-6 h-6" />
            <span className="hidden sm:inline">{tab.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
