export interface Scholar {
  id: string
  firstName: string
  lastName?: string
  school?: string
  hometown?: string
  grade?: string
  photoUrl?: string
  consentGiven: boolean
}

export interface ScholarCohort {
  id: string
  name: string
  year: string
  location: string
  program: string
  scholars: Scholar[]
}
