import { Link } from 'react-router-dom'

type SiteCopyrightProps = {
  variant?: 'light' | 'dark'
}

function SiteCopyright({ variant = 'light' }: SiteCopyrightProps) {
  const textClass =
    variant === 'dark' ? 'text-white/50' : 'text-sm text-white/50'
  const linkClass =
    variant === 'dark'
      ? 'border-0 text-inherit no-underline hover:text-white'
      : 'border-0 text-inherit no-underline hover:text-white'

  return (
    <ul
      className={`flex list-none flex-wrap justify-center gap-x-4 gap-y-3 p-0 ${textClass}`}
    >
      <li>&copy; Ryan Eavis. All rights reserved.</li>
      <li>
        <Link to="/privacy" className={linkClass}>
          Privacy Policy
        </Link>
      </li>
      <li className="before:mr-4 before:border-l before:border-dotted before:border-white/50 before:pl-4 before:content-[''] max-sm:before:hidden max-sm:pl-0">
        Design:{' '}
        <a
          href="https://html5up.net"
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          HTML5 UP
        </a>
      </li>
    </ul>
  )
}

export default SiteCopyright
