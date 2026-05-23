import { heroImage } from './data/projects'

function Header() {
  return (
    <header
      className="relative bg-stone-heading bg-cover bg-center bg-fixed px-8 py-40 pb-80 text-center text-white/90 max-md:bg-scroll max-md:py-24 max-md:pb-56 max-sm:px-6"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[rgba(30,28,26,0.65)]"
        aria-hidden
      />
      <div className="relative z-10">
        <h1 className="mb-0 text-center text-4xl text-white max-md:text-3xl max-sm:text-xl">
          Ryan Eavis
        </h1>
        <h1 className="mb-0 text-center text-4xl text-white max-md:text-3xl max-sm:text-xl">
          Traditional Stonemason
        </h1>
        <p className="mx-auto mt-1 max-w-3xl text-center text-2xl leading-snug text-white max-md:text-xl max-sm:text-base">
          Stone shaped by hand, set for generations.
        </p>
        <p className="mx-auto mt-1 max-w-3xl text-center text-2xl leading-snug text-white max-md:text-xl max-sm:text-base">
          Specializing in natural stone construction and restoration.
        </p>
        <p className="mx-auto mt-1 max-w-3xl text-center text-2xl leading-snug text-white max-md:text-xl max-sm:text-base">
          Currently based in Cape Breton, Nova Scotia.
        </p>
        <span
          className="mt-3 inline-grid h-[2.35em] w-[2.35em] cursor-default place-items-center rounded-full bg-stone-moss text-[2.25em] leading-none max-md:text-2xl"
          aria-hidden
        >
          <i className="fas fa-map-marker-alt text-white not-italic" />
        </span>
      </div>
    </header>
  )
}

export default Header
