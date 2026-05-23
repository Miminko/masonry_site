import { useCallback, useEffect, useRef, useState } from 'react'
import type { ProjectImage } from '../data/projects'

type ProjectGalleryModalProps = {
  title: string
  images: ProjectImage[]
  initialIndex: number
  onClose: () => void
}

function ProjectGalleryModal({
  title,
  images,
  initialIndex,
  onClose,
}: ProjectGalleryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  const hasMultiple = images.length > 1
  const safeIndex =
    images.length === 0
      ? 0
      : ((activeIndex % images.length) + images.length) % images.length
  const current = images[safeIndex]

  const goToPrevious = useCallback(() => {
    if (!hasMultiple) return
    setActiveIndex((i) => (i - 1 + images.length) % images.length)
  }, [hasMultiple, images.length])

  const goToNext = useCallback(() => {
    if (!hasMultiple) return
    setActiveIndex((i) => (i + 1) % images.length)
  }, [hasMultiple, images.length])

  useEffect(() => {
    closeButtonRef.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft') {
        goToPrevious()
      } else if (event.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [goToNext, goToPrevious, onClose])

  if (!current) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default border-0 bg-black/75"
        aria-label="Close gallery"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-title"
        aria-describedby="gallery-counter"
        className="relative z-10 flex w-full max-w-5xl flex-col"
      >
        <div className="mb-3 flex items-start justify-between gap-4 px-1">
          <div className="text-left">
            <h2
              id="gallery-title"
              className="mb-0 text-left text-lg tracking-[0.125em] text-white uppercase md:text-xl"
            >
              {title}
            </h2>
            <p
              id="gallery-counter"
              className="mb-0 mt-1 text-sm text-white/70"
            >
              {safeIndex + 1} of {images.length}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-stone-footer text-xl text-white no-underline transition-colors hover:bg-white/15"
            aria-label="Close gallery"
          >
            <i className="fas fa-times not-italic" aria-hidden />
          </button>
        </div>

        <div className="relative overflow-hidden rounded bg-stone-heading shadow-lg">
          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            className="mx-auto max-h-[min(75vh,720px)] w-full object-contain"
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                className="absolute top-1/2 left-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-stone-footer/90 text-lg text-white no-underline transition-colors hover:bg-stone-moss max-sm:left-1 max-sm:h-9 max-sm:w-9"
                aria-label="Previous image"
              >
                <i className="fas fa-chevron-left not-italic" aria-hidden />
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="absolute top-1/2 right-2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-stone-footer/90 text-lg text-white no-underline transition-colors hover:bg-stone-moss max-sm:right-1 max-sm:h-9 max-sm:w-9"
                aria-label="Next image"
              >
                <i className="fas fa-chevron-right not-italic" aria-hidden />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div
            className="mt-4 flex justify-center gap-2"
            role="tablist"
            aria-label={`${title} gallery thumbnails`}
          >
            {images.map((image, imageIndex) => (
              <button
                key={image.src}
                type="button"
                role="tab"
                aria-selected={imageIndex === safeIndex}
                aria-label={`View image ${imageIndex + 1}: ${image.alt}`}
                onClick={() => setActiveIndex(imageIndex)}
                className={`h-2 w-2 rounded-full border-0 p-0 transition-colors ${
                  imageIndex === safeIndex
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectGalleryModal
