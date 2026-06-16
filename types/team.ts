export interface TeamMember {
  id: string
  name: string
  role: string
  email: string
  bio: string
  photoUrl?: string
  group: string
  order: number
}

export interface TeamGroup {
  group: string
  members: TeamMember[]
}
