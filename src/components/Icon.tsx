import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import {
  faArchway,
  faChevronLeft,
  faChevronRight,
  faChurch,
  faDungeon,
  faFire,
  faMapMarkerAlt,
  faStoreAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

export type IconName =
  | 'archway'
  | 'chevron-left'
  | 'chevron-right'
  | 'church'
  | 'dungeon'
  | 'facebook'
  | 'fire'
  | 'instagram'
  | 'map-pin'
  | 'store'
  | 'times'

const icons: Record<IconName, IconDefinition> = {
  archway: faArchway,
  'chevron-left': faChevronLeft,
  'chevron-right': faChevronRight,
  church: faChurch,
  dungeon: faDungeon,
  facebook: faFacebookF,
  fire: faFire,
  instagram: faInstagram,
  'map-pin': faMapMarkerAlt,
  store: faStoreAlt,
  times: faTimes,
}

type IconProps = {
  name: IconName
  className?: string
}

export function Icon({ name, className }: IconProps) {
  return <FontAwesomeIcon icon={icons[name]} className={className} aria-hidden />
}
