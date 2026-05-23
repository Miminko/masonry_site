export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectFeature = {
  title: string
  description: string
  images: ProjectImage[]
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
    images: [
      {
        src: '/images/ballendaggin-church-wall.jpg',
        alt: 'Restored stone church wall in Ballendaggin',
      },
    ],
    icon: 'fa-church',
    side: 'left',
  },
  {
    title: 'Fireplaces & interior projects',
    description:
      'Hand-cut natural stone fireplaces, mantles, and interior features built for lasting character.',
    images: [
      {
        src: '/images/rustic-fireplace.jpeg',
        alt: 'Hand-built rustic stone fireplace',
      },
      {
        src: '/images/stone-fireplace.jpeg',
        alt: 'Natural stone fireplace detail',
      },
    ],
    icon: 'fa-fire',
    side: 'right',
  },
  {
    title: 'Walls, arches & structural work',
    description:
      'Retaining walls, archways, and load-bearing stone construction using real timeless stone throughout.',
    images: [
      {
        src: '/images/stone-archway.jpeg',
        alt: 'Stone archway construction',
      },
      {
        src: '/images/stone-retaining-wall.jpeg',
        alt: 'Stone retaining wall on a sloped site',
      },
      {
        src: '/images/stone-driveway-wall.jpeg',
        alt: 'Stone wall along a driveway',
      },
    ],
    icon: 'fa-dungeon',
    side: 'left',
  },
  {
    title: 'Pillars, stone patios & exterior builds',
    description:
      'Patios, walkways, pillars and more.',
    images: [
      {
        src: '/images/house-patio.jpeg',
        alt: 'Stone patio beside a home',
      },
      {
        src: '/images/stone-walkway-front.jpeg',
        alt: 'Front view of a stone walkway',
      },
      {
        src: '/images/stone-walkway-left.jpeg',
        alt: 'Stone walkway viewed from the left',
      },
      {
        src: '/images/stone-walkway-right.jpeg',
        alt: 'Stone walkway viewed from the right',
      },
      {
        src: '/images/selfie-pillars.jpeg',
        alt: 'Stone pillars on an exterior build',
      },
    ],
    icon: 'fa-store-alt',
    side: 'right',
  },
  {
    title: 'Bridges & Stairs',
    description:
      'Large-scale projects on hills, over water, and even cantelever designs.',
    images: [
      {
        src: '/images/dublin-doublearch-bridge.jpg',
        alt: 'Double arch stone bridge in Dublin',
      },
      {
        src: '/images/ireland-stone-bridge.jpg',
        alt: 'Traditional stone bridge in Ireland',
      },
      {
        src: '/images/cantelever-stairs.jpeg',
        alt: 'Cantilever stone stairs',
      },
      {
        src: '/images/stone-stairs.jpeg',
        alt: 'Stone staircase built into the landscape',
      },
    ],
    icon: 'fa-archway',
    side: 'left',
  },
]
