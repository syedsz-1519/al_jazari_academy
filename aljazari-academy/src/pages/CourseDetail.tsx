import { useParams } from 'react-router-dom'

export default function CourseDetail() {
  const { slug } = useParams()

  return (
    <div className="py-12 md:py-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Course: {slug}</h1>
        <p className="text-body-lg text-on-surface-variant mb-8">Detailed course information coming soon.</p>
      </div>
    </div>
  )
}
