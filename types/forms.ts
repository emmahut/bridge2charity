export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface VolunteerFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  skills: string[]
  availability: string
  motivation: string
}

export interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}
