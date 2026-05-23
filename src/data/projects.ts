export type ProjectFeature = {
  title: string
  description: string
  image: string
  alt: string
  icon: string
  side: 'left' | 'right'
}

export const heroImage = '/images/stone-walkway-header.jpeg'
export const heroImageAlt = 'Natural stone walkway and garden masonry'

export const projectFeatures: ProjectFeature[] = [
  {
    title: 'Heritage & restoration',
    description:
      'Lime mortar repointing, structural repairs, and traditional techniques for churches and historic architecture.',
    image: '/images/ballendaggin-church-wall.jpg',
    alt: 'Restored stone church wall in Ballendaggin',
    icon: 'fa-church',
    side: 'left',
  },
  {
    title: 'Fireplaces & interior projects',
    description:
      'Hand-cut natural stone fireplaces, mantles, and interior features built for lasting character.',
    image: '/images/rustic-fireplace.jpeg',
    alt: 'Hand-built stone fireplace',
    icon: 'fa-fire',
    side: 'right',
  },
  {
    title: 'Walls, arches & structural work',
    description:
      'Retaining walls, archways, and load-bearing stone construction using real timeless stone throughout.',
    image: '/images/stone-archway.jpeg',
    alt: 'Stone archway construction',
    icon: 'fa-dungeon',
    side: 'left',
  },
  {
    title: 'Pillars, stone patios & exterior builds',
    description:
      'Patios, walkways, pillars and more.',
    image: '/images/house-patio.jpeg',
    alt: 'Patio construction',
    icon: 'fa-store-alt',
    side: 'right',
  },
  {
    title: 'Bridges & Stairs',
    description:
      'Large-scale projects on hills, over water, and even cantelever designs.',
    image: '/images/dublin-doublearch-bridge.jpg',
    alt: 'Dublin bridge construction',
    icon: 'fa-archway',
    side: 'left',
  },
]
