import { Link } from 'react-router-dom'
import SiteCopyright from '../components/SiteCopyright'

function NotFound() {
  return (
    <div className="min-h-screen bg-stone-bg text-stone-text">
      <header className="border-b border-stone-border/75 bg-stone-footer px-6 py-8 text-center">
        <p className="mb-2 text-sm tracking-widest text-white/60 uppercase">
          Ryan Eavis Traditional Stonemasonry
        </p>
        <h1 className="mb-0 text-3xl text-white">Page not found</h1>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 text-center max-sm:px-4">
        <p className="mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <Link
          to="/"
          className="inline-block rounded border border-stone-moss px-6 py-3 text-sm font-bold tracking-[0.125em] text-stone-moss uppercase no-underline transition-colors hover:bg-stone-moss hover:text-white"
        >
          Back to home
        </Link>
      </article>

      <footer className="border-t border-stone-border/75 bg-stone-footer px-6 py-8">
        <SiteCopyright />
      </footer>
    </div>
  )
}

export default NotFound
