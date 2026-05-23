import type { IconName } from '../components/Icon'

export type ProjectImage = {
  src: string
  alt: string
}

export type ProjectFeature = {
  title: string
  description: string
  images: ProjectImage[]
  icon: IconName
  side: 'left' | 'right'
}

export const heroImage = '/images/stone-walkway-header.webp'
export const heroImageAlt = 'Natural stone walkway and garden masonry'

export const projectFeatures: ProjectFeature[] = [
  {
    title: 'Heritage & restoration',
    description:
      'Lime mortar repointing, structural repairs, and traditional techniques for churches and historic architecture.',
    images: [
      {
        src: '/images/ballendaggin-church-wall.webp',
        alt: 'Restored stone church wall in Ballendaggin',
      },
    ],
    icon: 'church',
    side: 'left',
  },
  {
    title: 'Fireplaces & interior projects',
    description:
      'Hand-cut natural stone fireplaces, mantles, and interior features built for lasting character.',
    images: [
      {
        src: '/images/rustic-fireplace.webp',
        alt: 'Hand-built rustic stone fireplace',
      },
      {
        src: '/images/stone-fireplace.webp',
        alt: 'Natural stone fireplace detail',
      },
    ],
    icon: 'fire',
    side: 'right',
  },
  {
    title: 'Walls, arches & structural work',
    description:
      'Retaining walls, archways, and load-bearing stone construction using real timeless stone throughout.',
    images: [
      {
        src: '/images/stone-archway.webp',
        alt: 'Stone archway construction',
      },
      {
        src: '/images/stone-retaining-wall.webp',
        alt: 'Stone retaining wall on a sloped site',
      },
      {
        src: '/images/stone-driveway-wall.webp',
        alt: 'Stone wall along a driveway',
      },
    ],
    icon: 'dungeon',
    side: 'left',
  },
  {
    title: 'Pillars, stone patios & exterior builds',
    description:
      'Patios, walkways, pillars and more.',
    images: [
      {
        src: '/images/house-patio.webp',
        alt: 'Stone patio beside a home',
      },
      {
        src: '/images/stone-walkway-front.webp',
        alt: 'Front view of a stone walkway',
      },
      {
        src: '/images/stone-walkway-left.webp',
        alt: 'Stone walkway viewed from the left',
      },
      {
        src: '/images/stone-walkway-right.webp',
        alt: 'Stone walkway viewed from the right',
      },
      {
        src: '/images/selfie-pillars.webp',
        alt: 'Stone pillars on an exterior build',
      },
    ],
    icon: 'store',
    side: 'right',
  },
  {
    title: 'Bridges & Stairs',
    description:
      'Large-scale projects on hills, over water, and even cantilever designs.',
    images: [
      {
        src: '/images/dublin-doublearch-bridge.webp',
        alt: 'Double arch stone bridge in Dublin',
      },
      {
        src: '/images/ireland-stone-bridge.webp',
        alt: 'Traditional stone bridge in Ireland',
      },
      {
        src: '/images/cantilever-stairs.webp',
        alt: 'Cantilever stone stairs',
      },
      {
        src: '/images/stone-stairs.webp',
        alt: 'Stone staircase built into the landscape',
      },
    ],
    icon: 'archway',
    side: 'left',
  },
]
