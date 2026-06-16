export type ProgramStatus = 'active' | 'completed' | 'upcoming'

export interface Program {
  slug: string
  title: string
  shortDescription: string
  description: string
  objectives: string[]
  activities: string[]
  whoBenefits: string
  heroImage?: string
  galleryImages?: string[]
  status: ProgramStatus
  impactStats?: ProgramStat[]
}

export interface ProgramStat {
  value: string
  label: string
}
