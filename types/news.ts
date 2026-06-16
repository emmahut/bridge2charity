export type NewsTag = 'eep' | 'bts' | 'ohpc' | 'general'

export interface NewsArticle {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  coverImage?: string
  publishedAt: string
  programTags: NewsTag[]
}
