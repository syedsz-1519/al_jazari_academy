import { ReactNode } from 'react'
import TopAppBar from './TopAppBar'
import BottomTabBar from './BottomTabBar'
import Footer from './Footer'
import FloatingWhatsApp from './FloatingWhatsApp'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopAppBar />
      
      <main className="flex-1 w-full">
        {children}
      </main>
      
      <Footer />
      
      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden">
        <BottomTabBar />
      </div>
      
      {/* Floating WhatsApp button */}
      <FloatingWhatsApp />
    </div>
  )
}
