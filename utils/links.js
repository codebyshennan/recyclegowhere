import { MdDeliveryDining, MdLeaderboard, MdQueryStats } from 'react-icons/md'
import { GrMoney, GrDocumentPdf } from 'react-icons/gr'
import { FaDatabase, FaRegHeart } from 'react-icons/fa'

const FMCG = [
  {
    name: 'Stats',
    path: 'stats',
    icon: MdQueryStats,
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: GrDocumentPdf,
  },
]

const GOV = [
  {
    name: 'Database',
    path: 'db',
    icon: FaDatabase,
  },
  {
    name: 'Stats',
    path: 'stats',
    icon: MdQueryStats,
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: GrDocumentPdf,
  },
]

const GRAB = [
  {
    name: 'Stats',
    path: 'stats',
    icon: MdQueryStats,
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: GrDocumentPdf,
  },
  {
    name: 'Health',
    path: 'health',
    icon: FaRegHeart,
  },
]

const PARTNER = [
  {
    name: 'Stats',
    path: 'stats',
    icon: MdQueryStats,
  },
]

const USER = [
  {
    name: 'Stats',
    path: 'stats',
    icon: MdQueryStats,
  },
  // {
  //   name: 'schedule',
  //   path: 'schedule',
  //   icon: GrSchedule,
  // },
  {
    name: 'Delivery',
    path: 'arrange',
    icon: MdDeliveryDining,
  },
  {
    name: 'Ranking',
    path: 'leaderboard',
    icon: MdLeaderboard,
  },
  {
    name: 'Rewards',
    path: 'rewards',
    icon: GrMoney,
  },
]

export const LINKS = {
  FMCG,
  GOV,
  GRAB,
  USER,
  PARTNER,
}
