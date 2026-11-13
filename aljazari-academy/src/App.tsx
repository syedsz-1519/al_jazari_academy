import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const Courses = lazy(() => import('./pages/Courses'))
const CourseDetail = lazy(() => import('./pages/CourseDetail'))
const IlmHub = lazy(() => import('./pages/IlmHub'))
const Achievements = lazy(() => import('./pages/Achievements'))
const About = lazy(() => import('./pages/About'))
const Enroll = lazy(() => import('./pages/Enroll'))
const Contact = lazy(() => import('./pages/Contact'))
const FaqFees = lazy(() => import('./pages/FaqFees'))
const Portal = lazy(() => import('./pages/Portal'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/ilm-hub" element={<IlmHub />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/about" element={<About />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq-fees" element={<FaqFees />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}
