import ContactForm from './components/ContactForm'
import SiteCopyright from './components/SiteCopyright'

function Footer() {
  return (
    <footer className="relative z-10 bg-stone-footer px-6 py-16 pb-24 text-center text-white/80 max-md:py-12 max-md:pb-12">
      <div className="mx-auto max-w-[38.25em]">
        <header className="mb-8">
          <h2 className="mb-4 text-center text-3xl text-white">
            Let&apos;s get in touch
          </h2>
        </header>

        <p className="mb-0">
          Send me a message about your project needs, and I&apos;ll get back to you
          as soon as I can.
        </p>

        <ContactForm />

        <p className="mb-0">
          I also run a Cape Breton Strongman community page if you&apos;d like
          to check it out.
        </p>

        <ul className="mt-8 flex list-none justify-center gap-2 p-0">
          <li>
            <a
              href="https://www.facebook.com/capebretonstrongman"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xl text-white no-underline transition-colors hover:border-white hover:bg-white/15"
            >
              <i className="fab fa-facebook-f not-italic" aria-hidden />
              <span className="sr-only">Cape Breton Strongman on Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/rupunzel__"
              target="_blank"
              rel="noopener noreferrer"
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
