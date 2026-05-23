import { Link } from 'react-router-dom'
import SiteCopyright from './components/SiteCopyright'

const fieldClass =
  'w-full rounded border border-white/30 bg-transparent px-3 py-3 text-inherit outline-none transition-colors placeholder:text-white/50 focus:border-white focus:bg-white/10'

function Footer() {
  return (
    <footer className="relative z-10 bg-stone-footer px-6 py-16 pb-24 text-center text-white/80 max-md:py-12 max-md:pb-12">
      <div className="mx-auto max-w-[38.25em]">
        <header className="mb-8">
          <h2 className="mb-4 text-center text-3xl text-white">
            Let's get in touch
          </h2>
        </header>

        <p className="mb-0">
          Send me a message about your project needs, and I&apos;ll get back to you
          as soon as I can.
        </p>

        <form method="post" action="#" className="my-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="name"
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="email"
              className={fieldClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className={`${fieldClass} sm:col-span-2`}
            />
            <p className="text-left text-sm leading-relaxed text-white/70 sm:col-span-2">
              By sending this form, you agree that I may use your name, email,
              and message to respond to your inquiry, as described in the{' '}
              <Link
                to="/privacy"
                className="border-0 text-white underline decoration-white/40 underline-offset-2 hover:text-white hover:decoration-white"
              >
                Privacy Policy
              </Link>
              .
            </p>
            <div className="sm:col-span-2">
              <input
                type="submit"
                value="Send Message"
                className="inline-block min-w-[15em] cursor-pointer rounded border-0 bg-white px-6 py-2 text-sm font-bold tracking-[0.125em] text-stone-moss uppercase transition-colors hover:bg-white/15 hover:text-white max-sm:w-full max-sm:leading-[3.25em]"
              />
            </div>
          </div>
        </form>

        <p className="mb-0">
          I also run a Cape Breton Strongman community page if you&apos;d like
          to check it out.
        </p>

        <ul className="mt-8 flex list-none justify-center gap-2 p-0">
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xl text-white no-underline transition-colors hover:border-white hover:bg-white/15"
            >
              <i className="fab fa-facebook-f not-italic" aria-hidden />
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xl text-white no-underline transition-colors hover:border-white hover:bg-white/15"
            >
              <i className="fab fa-instagram not-italic" aria-hidden />
              <span className="sr-only">Instagram</span>
            </a>
          </li>
        </ul>

        <div className="mt-12">
          <SiteCopyright />
        </div>
      </div>
    </footer>
  )
}

export default Footer
