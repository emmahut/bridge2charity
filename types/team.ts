export type TeamCategory = 'executive' | 'bts' | 'ohpc' | 'communications' | 'operations' | 'collage'

export interface TeamMember {
  id: string
  slug: string
  name: string
  firstName: string
  lastName: string
  role: string
  email?: string
  bio: string
  photo?: string
  initials: string
  category: TeamCategory
  inCollage: boolean
  order: number
}

export interface BoardMember {
  id: string
  slug: string
  name: string
  firstName: string
  lastName: string
  title: string
  bio: string
  photo?: string
  initials: string
}

// Legacy — kept for any existing usage
export interface TeamGroup {
  group: string
  members: TeamMember[]
}
