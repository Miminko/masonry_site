import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

const FORMSPREE_FORM_ID = 'xaqkbpqo'

const fieldClass =
  'w-full rounded border border-white/30 bg-transparent px-3 py-3 text-inherit outline-none transition-colors placeholder:text-white/50 focus:border-white focus:bg-white/10'

const errorClass = 'mt-1 block text-left text-sm text-red-200'

const submitClass =
  'inline-block min-w-[15em] cursor-pointer rounded border-0 bg-white px-6 py-2 text-sm font-bold tracking-[0.125em] text-stone-moss uppercase transition-colors hover:bg-white/15 hover:text-white disabled:cursor-not-allowed disabled:opacity-60 max-sm:w-full max-sm:leading-[3.25em]'

function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)

  if (state.succeeded) {
    return (
      <p
        className="my-12 text-lg leading-relaxed text-white"
        role="status"
        aria-live="polite"
      >
        Thanks for the message! I&apos;ll get back to you as soon as I can.
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="my-12" noValidate>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="name"
            required
            disabled={state.submitting}
            className={fieldClass}
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className={errorClass}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="email"
            required
            disabled={state.submitting}
            className={fieldClass}
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className={errorClass}
          />
        </div>
        <div className="sm:col-span-2">
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            required
            disabled={state.submitting}
            className={fieldClass}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className={errorClass}
          />
        </div>
        <p className="text-left text-sm leading-relaxed text-white/70 sm:col-span-2">
          By sending this form, you agree that I may use your name, email, and
          message to respond to your inquiry, as described in the{' '}
          <Link
            to="/privacy"
            className="border-0 text-white underline decoration-white/40 underline-offset-2 hover:text-white hover:decoration-white"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="sm:col-span-2">
          <ValidationError errors={state.errors} className={errorClass} />
          <button type="submit" disabled={state.submitting} className={submitClass}>
            {state.submitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  )
}

export default ContactForm
