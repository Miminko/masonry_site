import { useState } from 'react'
import { Icon } from './components/Icon'
import { ProjectImage } from './components/ProjectImage'
import ProjectGalleryModal from './components/ProjectGalleryModal'
import { projectFeatures } from './data/projects'
import type { ProjectFeature } from './data/projects'

type OpenGallery = {
  project: ProjectFeature
  initialIndex: number
}

function Container() {
  const [openGallery, setOpenGallery] = useState<OpenGallery | null>(null)

  const openProjectGallery = (project: ProjectFeature, initialIndex = 0) => {
    if (project.images.length === 0) return
    setOpenGallery({ project, initialIndex })
  }

  return (
    <main className="relative z-10 bg-stone-bg py-24 before:pointer-events-none before:absolute before:top-0 before:left-1/2 before:-z-10 before:h-full before:w-px before:bg-stone-border/75 max-md:py-8 max-sm:px-4">
      <header className="relative z-10 mx-auto mb-24 max-w-[38.25em] border-y border-stone-border/75 bg-white px-6 py-16 text-center max-md:mb-12 max-md:py-12">
        <span
          className="pointer-events-none absolute top-2.5 right-0 left-0 block h-px bg-stone-border/75"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute right-0 bottom-2.5 left-0 block h-px bg-stone-border/75"
          aria-hidden
        />
        <h2 className="mb-0 text-center text-3xl text-stone-heading max-md:text-2xl">
          Artisanal masonry
        </h2>
        <h2 className="mb-0 text-center text-3xl text-stone-heading max-md:text-2xl">
          in natural stone
        </h2>
        <p className="mx-auto mt-6 inline-block max-w-2xl border-t border-stone-border/75 px-6 pt-6 text-center text-2xl leading-relaxed text-stone-text max-md:text-base">
          Trained in Ireland for generational craft. Specializing in new builds, cultural
          restoration, and structural stone work.
        </p>
      </header>

      <div className="mx-auto max-w-[51em] max-xl:max-w-[48em] max-lg:w-[95%] max-md:w-[90%]">
        {projectFeatures.map((project) => {
          const thumbnail = project.images[0]

          return (
            <section
              key={project.title}
              className={`mb-8 flex flex-col last:mb-0 md:mb-0 md:h-80 md:items-stretch md:flex-row ${
                project.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              <button
                type="button"
                onClick={() => openProjectGallery(project)}
                className="group/image relative block aspect-[4/3] w-full min-w-0 cursor-pointer overflow-hidden border-0 bg-stone-border p-0 text-left max-md:aspect-[16/10] md:aspect-auto md:h-full md:w-1/2 md:shrink-0"
                aria-label={`View photos for ${project.title}`}
              >
                {thumbnail && (
                  <ProjectImage src={thumbnail.src} alt={thumbnail.alt} />
                )}
                <span
                  className="pointer-events-none absolute inset-0 bg-black/30 opacity-40 transition-opacity group-hover/image:opacity-60"
                  aria-hidden
                />
                <Icon
                  name={project.icon}
                  className="pointer-events-none absolute top-1/2 left-1/2 z-10 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-white transition-transform duration-100 group-hover/image:scale-110"
                />
                {project.images.length > 1 && (
                  <span className="pointer-events-none absolute right-3 bottom-3 z-10 rounded bg-stone-footer/85 px-2 py-1 text-xs font-bold tracking-wider text-white uppercase">
                    {project.images.length} photos
                  </span>
                )}
              </button>
              <div className="relative z-10 flex w-full min-w-0 flex-col justify-center border border-stone-border bg-white p-8 text-center md:w-1/2 md:border-0 md:p-14 md:text-left">
                <h3 className="mb-2 text-left text-2xl font-bold tracking-[0.125em] text-stone-heading uppercase">
                  {project.title}
                </h3>
                <p className="mb-0 text-left">{project.description}</p>
              </div>
            </section>
          )
        })}
      </div>

      {openGallery && (
        <ProjectGalleryModal
          key={openGallery.project.title}
          title={openGallery.project.title}
          images={openGallery.project.images}
          initialIndex={openGallery.initialIndex}
          onClose={() => setOpenGallery(null)}
        />
      )}
    </main>
  )
}

export default Container
