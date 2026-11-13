import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="pb-16 md:pb-24">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary-container/30 to-surface pt-12 md:pt-20 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left */}
            <div>
              <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-secondary-container text-on-surface rounded-full text-caption font-label">
                <span>📍</span>
                <span>Online Academy • Bangalore, India</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 leading-tight">
                Learn, Memorise and Live the Quran
              </h1>

              <p className="text-body-lg text-on-surface-variant mb-8 leading-relaxed max-w-md">
                Personalised one-to-one Hifz, Tajweed and Tafseer sessions with certified tutors. No age limit. Tailored to your pace, your lifestyle, and your spiritual aspirations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/enroll" className="btn-primary inline-flex items-center justify-center gap-2">
                  Enroll Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/courses" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Explore Courses
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pt-4 border-t border-outline">
                <div>
                  <div className="text-headline-sm text-primary font-bold">100%</div>
                  <div className="text-caption text-on-surface-variant">1-on-1 Attention</div>
                </div>
                <div>
                  <div className="text-headline-sm text-primary font-bold">30+</div>
                  <div className="text-caption text-on-surface-variant">Certified Scholars</div>
                </div>
                <div>
                  <div className="text-headline-sm text-primary font-bold">Global</div>
                  <div className="text-caption text-on-surface-variant">Students in 6+ Countries</div>
                </div>
              </div>
            </div>

            {/* Right - Mockup */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-80 h-96 bg-surface-container rounded-2xl shadow-lifted overflow-hidden border border-outline">
                <div className="p-6 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold text-sm">
                      AJ
                    </div>
                    <div>
                      <h3 className="text-headline-sm text-primary font-bold">Student Portal</h3>
                      <p className="text-caption text-on-surface-variant">Essential Hifz Track</p>
                    </div>
                  </div>

                  <div className="bg-surface-container-low p-4 rounded-lg">
                    <p className="text-label font-label text-secondary font-semibold mb-2">Daily Recitation</p>
                    <h4 className="text-headline-md text-primary font-bold">Surah Al-Mulk</h4>
                    <p className="text-caption text-on-surface-variant mt-1">Verses 1–18 Mastered</p>
                  </div>

                  <div className="w-full bg-surface-variant rounded-full h-2">
                    <div className="bg-primary h-full rounded-full w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Courses</h2>
          <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            Choose from our comprehensive curriculum tailored to your learning goals.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course Card 1 */}
            <div className="card">
              <div className="h-40 bg-gradient-to-br from-primary-container to-primary-container/50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-headline-xl text-primary font-bold">ع</span>
              </div>
              <h3 className="text-headline-md text-primary font-bold mb-2">Essential Hifz</h3>
              <p className="text-body-sm text-on-surface-variant mb-4">Customized Quran memorization with your work and studies</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-label font-label text-secondary font-semibold">₹2,499/mo</span>
                <span className="text-caption bg-secondary-container text-on-surface px-2 py-1 rounded-full">Beginner</span>
              </div>
              <Link to="/courses/hifz-1" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>

            {/* Course Card 2 */}
            <div className="card">
              <div className="h-40 bg-gradient-to-br from-secondary-container to-secondary-container/50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-headline-xl text-secondary font-bold">ت</span>
              </div>
              <h3 className="text-headline-md text-primary font-bold mb-2">Tajweed & Makhraj</h3>
              <p className="text-body-sm text-on-surface-variant mb-4">Perfect pronunciation and rules of Quran recitation</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-label font-label text-secondary font-semibold">₹1,999/mo</span>
                <span className="text-caption bg-secondary-container text-on-surface px-2 py-1 rounded-full">Intermediate</span>
              </div>
              <Link to="/courses/tajweed-1" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>

            {/* CTA Card */}
            <div className="card bg-gradient-to-br from-primary to-primary/90 text-on-primary flex flex-col justify-between">
              <div>
                <h3 className="text-headline-md font-bold mb-2">Ready to Start?</h3>
                <p className="text-body-sm text-on-primary/90 mb-6">Begin your Quranic journey with personalized guidance.</p>
              </div>
              <Link to="/enroll" className="btn-primary bg-on-primary text-primary w-full text-center">
                Enroll Now →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-on-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-body-lg text-on-primary/90 mb-8">
            Contact us via WhatsApp, phone, or visit our FAQ page for more information.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/919591250910`} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-on-primary text-primary rounded-md font-label font-semibold hover:opacity-90">
              Chat on WhatsApp
            </a>
            <Link to="/contact" className="px-6 py-3 border-2 border-on-primary rounded-md font-label font-semibold hover:bg-on-primary/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
