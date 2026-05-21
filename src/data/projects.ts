export type ProjectFeature = {
  title: string
  description: string
  image: string
  alt: string
  icon: string
  side: 'left' | 'right'
}

export const heroImage = '/images/ireland-stone-bridge.jpg'
export const heroImageAlt =
  'Traditional stone bridge masonry in Ireland'

export const projectFeatures: ProjectFeature[] = [
  {
    title: 'Heritage & restoration',
    description:
      'Lime mortar repointing, structural repairs, and traditional techniques for churches and historic walls.',
    image: '/images/ballendaggin-church-wall.jpg',
    alt: 'Restored stone church wall in Ballendaggin',
    icon: 'fa-monument',
    side: 'left',
  },
  {
    title: 'Fireplaces & interior stone',
    description:
      'Hand-cut natural stone fireplaces and interior features built for lasting character.',
    image: '/images/stone-fireplace.jpeg',
    alt: 'Hand-built stone fireplace',
    icon: 'fa-fire',
    side: 'right',
  },
  {
    title: 'Walls, arches & structural work',
    description:
      'Retaining walls, archways, and load-bearing stone construction using real stone throughout.',
    image: '/images/stone-archway.jpeg',
    alt: 'Stone archway construction',
    icon: 'fa-archway',
    side: 'left',
  },
]
