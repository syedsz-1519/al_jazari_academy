import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="py-24 pb-32 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-2xl text-on-surface mb-8">Page Not Found</p>
        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
