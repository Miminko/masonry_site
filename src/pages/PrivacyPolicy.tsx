import { Link } from 'react-router-dom'
import SiteCopyright from '../components/SiteCopyright'

const sectionClass = 'mb-10'
const headingClass =
  'mb-3 text-left text-xl font-bold tracking-[0.125em] text-stone-heading uppercase'
const paragraphClass = 'mb-4 text-left last:mb-0'

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-stone-bg text-stone-text">
      <header className="border-b border-stone-border/75 bg-stone-footer px-6 py-8 text-center">
        <p className="mb-2 text-sm tracking-widest text-white/60 uppercase">
          Ryan Eavis Traditional Stonemasonry
        </p>
        <h1 className="mb-0 text-3xl text-white">Privacy Policy</h1>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-16 max-sm:px-4">
        <p className={`${paragraphClass} text-sm text-stone-text/80`}>
          Last updated: May 23, 2026
        </p>

        <p className={paragraphClass}>
          This Privacy Policy describes how I collect, use, and protect any personal information submitted through my website.
        </p>

        <section className={sectionClass}>
          <h2 className={headingClass}>Information I collect</h2>
          <p className={paragraphClass}>
            <strong>Contact form.</strong> If you submit the contact form, we
            collect the information you provide: your name, email address, and
            message. I do not ask for more information than is needed to respond
            to your inquiry.
          </p>
          No other personal information is collected automatically.
          This website does not use cookies, tracking scripts, or advertising technologies.
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>How I use your information</h2>
          <p className={paragraphClass}>
            I use contact form information only to read and reply to your
            message about stonemasonry services, project questions, or related
            correspondence. I do not sell or share your personal information or use it for anything other than to respond to your inquiry.
          </p>
          <p className={paragraphClass}>
            Messages submitted through the contact form may be stored in my email inbox.
            Your message may also be temporarily processed by my hosting provider as part of normal website operation.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Contact Form Processing (Formspree)</h2>
          <p className={paragraphClass}>
            When you submit a message through the contact form on this site, the
            information you provide (your name, email address, and message) is
            processed by Formspree, the service that delivers form submissions to
            my email. Formspree temporarily handles your message for the sole
            purpose of forwarding it to me. They do not use your information for
            marketing or share it with third parties.
          </p>
          <p className={paragraphClass}>
            You can read Formspree&apos;s privacy practices in their{' '}
            <a
              href="https://formspree.io/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Legal basis and consent</h2>
          <p className={paragraphClass}>
            By submitting the contact form after reading this policy, you consent
            to my collection and use of the information you provide for the
            purposes described above.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Third-party services</h2>
          <p className={paragraphClass}>
            <strong>Google Fonts.</strong> This site loads the Source Sans Pro
            typeface from Google&apos;s servers (
            <a
              href="https://fonts.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              fonts.google.com
            </a>
            ). When your browser requests those font files, Google may receive
            data such as your IP address and browser information. Google&apos;s
            privacy practices are described in{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>
            .
          </p>
          <p className={paragraphClass}>
            <strong>Font Awesome (icons).</strong> Icons on this site are served
            from our own hosting (self-hosted CSS and font files), not from the
            Font Awesome CDN or Kit script. Loading icons from our server does
            not send your visit to Fonticons, Inc. for icon delivery.
          </p>
          <p className={paragraphClass}>
            If I later switch to Font Awesome&apos;s CDN or Kit, your browser may
            contact Fonticons servers and Fonticons may collect technical or usage
            data under their terms. I would update this policy if that changes.
            See{' '}
            <a
              href="https://fontawesome.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Font Awesome&apos;s privacy information
            </a>{' '}
            for details about their services.
          </p>
          <p className={paragraphClass}>
            <strong>Social links.</strong> Links to Facebook, Instagram, or other
            platforms leave this site. Those platforms have their own privacy
            policies and may collect information about you when you use them.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Retention</h2>
          <p className={paragraphClass}>
            I keep contact form messages and related email correspondence only as
            long as needed to respond, manage projects, and meet reasonable
            business or legal requirements.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Security</h2>
          <p className={paragraphClass}>
            I take reasonable steps to protect personal information, including
            using reputable hosting and email providers. No method of transmission
            over the Internet is completely secure; please avoid sending highly
            sensitive information through the contact form.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Your rights</h2>
          <p className={paragraphClass}>
            Depending on applicable law, you may ask me to access, correct, or
            delete personal information I hold about you, or to explain how I use
            it. To make a request, contact me using the same details you would use
            for a project inquiry (i.e. via the contact form on the home
            page).
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>Changes</h2>
          <p className={paragraphClass}>
            I may update this policy from time to time. The &ldquo;Last
            updated&rdquo; date at the top will change when I do. Continued use of
            the contact form after changes means you accept the updated policy for
            new submissions.
          </p>
        </section>

        <p className="mt-12 text-center">
          <Link
            to="/"
            className="inline-block rounded border border-stone-moss px-6 py-3 text-sm font-bold tracking-[0.125em] text-stone-moss uppercase no-underline transition-colors hover:bg-stone-moss hover:text-white"
          >
            Back to home
          </Link>
        </p>
      </article>

      <footer className="border-t border-stone-border/75 bg-stone-footer px-6 py-8">
        <SiteCopyright variant="dark" />
      </footer>
    </div>
  )
}

export default PrivacyPolicy
