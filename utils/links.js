import { MdDeliveryDining, MdLeaderboard, MdQueryStats } from 'react-icons/md'
import { GrMoney, GrSchedule } from 'react-icons/gr'

const FMCG = [
  {
    name: 'fmcg',
    path: 'fmcg',
    icon: '',
  },
]

const GOV = [
  {
    name: 'gov',
    path: 'gov',
    icon: '',
  },
]

const GRAB = [
  {
    name: 'grab',
    path: 'grab',
    icon: '',
  },
]

const USER = [
  {
    name: 'stats',
    path: 'stats',
    icon: MdQueryStats,
  },
  {
    name: 'schedule',
    path: 'schedule',
    icon: GrSchedule,
  },
  {
    name: 'arrange',
    path: 'arrange',
    icon: MdDeliveryDining,
  },
  {
    name: 'leaderboard',
    path: 'leaderboard',
    icon: MdLeaderboard,
  },
  {
    name: 'rewards',
    path: 'rewards',
    icon: GrMoney,
  },
]

export const LINKS = {
  FMCG,
  GOV,
  GRAB,
  USER,
}
