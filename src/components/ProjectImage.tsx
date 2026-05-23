type ProjectImageProps = {
  src: string
  alt: string
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className="absolute inset-0 h-full w-full object-cover object-center"
    />
  )
}
