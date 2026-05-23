const fieldClass =
  'w-full rounded border border-white/30 bg-transparent px-3 py-3 text-inherit outline-none transition-colors placeholder:text-white/50 focus:border-white focus:bg-white/10'

function Footer() {
  return (
    <footer className="relative z-10 bg-stone-footer px-6 py-16 pb-24 text-center text-white/80 max-md:py-12 max-md:pb-12">
      <div className="mx-auto max-w-[38.25em]">
        <header className="mb-8">
          <h2 className="mb-4 text-center text-3xl text-white">
            Questions or comments?
          </h2>
        </header>

        <p className="mb-0">
          Send a message about your project needs, and I&apos;ll get back to you
          as soon as I can.
        </p>

        <form method="post" action="#" className="my-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={fieldClass}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={fieldClass}
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              className={`${fieldClass} sm:col-span-2`}
            />
            <div className="sm:col-span-2">
              <input
                type="submit"
                value="Send Message"
                className="inline-block min-w-[15em] cursor-pointer rounded border-0 bg-white px-6 py-0 text-sm font-bold tracking-[0.125em] text-stone-moss uppercase transition-colors hover:bg-white/15 hover:text-white max-sm:w-full max-sm:leading-[3.25em]"
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

        <ul className="mt-12 flex list-none flex-wrap justify-center gap-x-4 gap-y-3 p-0 text-sm text-white/50">
          <li>&copy; Ryan Eavis. All rights reserved.</li>
          <li className="before:mr-4 before:border-l before:border-dotted before:border-white/50 before:pl-4 max-sm:before:hidden max-sm:pl-0">
            Design:{' '}
            <a
              href="https://html5up.net"
              className="border-0 text-inherit no-underline hover:text-white"
            >
              HTML5 UP
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
