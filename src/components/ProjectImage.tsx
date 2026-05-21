type ProjectImageProps = {
  src: string
  alt: string
}

/** Feature/gallery images — sizing handled in site-theme.css (.feature .image img) */
export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  )
}
