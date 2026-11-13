import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <div className="py-12 md:py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Courses</h1>
        <p className="text-body-lg text-on-surface-variant mb-12">
          Explore our comprehensive Quranic curriculum tailored to all levels and lifestyles.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {['All', 'Hifz', 'Tajweed', 'Recitation', 'Islamic Studies'].map((cat) => (
            <button key={cat} className="chip bg-primary-container text-primary hover:bg-primary hover:text-on-primary">
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { id: 'hifz-1', title: 'Essential Hifz', price: 2499 },
            { id: 'tajweed-1', title: 'Tajweed & Makhraj', price: 1999 },
            { id: 'recitation-1', title: 'Quran Recitation', price: 1499 },
          ].map((course) => (
            <div key={course.id} className="card">
              <div className="h-40 bg-gradient-to-br from-primary-container to-primary-container/50 rounded-lg mb-4"></div>
              <h3 className="text-headline-md text-primary font-bold mb-2">{course.title}</h3>
              <p className="text-body-sm text-on-surface-variant mb-4">Professional certification program</p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-label font-label text-secondary">₹{course.price}/mo</span>
                <span className="text-caption bg-surface-variant px-2 py-1 rounded-full">Beginner</span>
              </div>
              <Link to={`/courses/${course.id}`} className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
