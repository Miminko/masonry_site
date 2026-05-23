import { Link } from 'react-router-dom'

const linkClass = 'border-0 text-inherit no-underline hover:text-white'

function SiteCopyright() {
  return (
    <ul className="flex list-none flex-wrap justify-center gap-x-4 gap-y-3 p-0 text-sm text-white/50">
      <li>&copy; Ryan Eavis. All rights reserved.</li>
      <li>
        <Link to="/privacy" className={linkClass}>
          Privacy Policy
        </Link>
      </li>
      <li className="before:content-[''] max-sm:before:hidden max-sm:pl-0">
        Adapted from a template by{' '}
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
