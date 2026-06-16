import type { NewsArticle } from "@/types/news"

export const newsArticles: NewsArticle[] = [
  {
    slug: "eep-term-2-sessions-ep-kirambo",
    title: "B2C Completes Term 2 EEP Sessions at EP Kirambo",
    excerpt:
      "Bridge2Charity volunteer teachers wrapped up a successful second term of English Enhancement Program sessions, with 15 students showing measurable progress in reading and communication.",
    content: `Bridge2Charity's English Enhancement Program completed its Term 2 sessions at EP Kirambo in Burera District, marking another milestone in the organisation's commitment to improving English literacy for primary students.

Over the course of the term, volunteer teachers delivered weekly interactive lessons focused on reading comprehension, vocabulary building, and spoken English. Students in P3 and P4 participated in group discussions, storytelling exercises, and structured writing activities designed to build both confidence and skill.

"The energy in the classroom has changed," said one of the program leads. "Students who were shy about speaking in Term 1 are now raising their hands and leading discussions."

End-of-term assessments showed clear progress across the group of 15 students, with particular improvements in spoken communication and reading fluency.

The English Enhancement Program runs in partnership with EP Kirambo and is part of Bridge2Charity's broader mission to strengthen educational outcomes for primary students in Burera District. Term 3 sessions are scheduled to begin next month.`,
    author: "Bridge2Charity Communications Team",
    coverImage: "/images/programs/eep-students-outside.jpg",
    publishedAt: "2026-06-01",
    programTags: ["eep"],
  },
  {
    slug: "bts-2026-school-fees-distribution",
    title: "23 Students Return to School as B2C Covers Term Fees",
    excerpt:
      "Bridge2Charity's Back to School Program ensured 23 students across 7 schools in Burera District could start the new term — covering fees and providing essential learning materials.",
    content: `Twenty-three students across seven schools in Burera District returned to the classroom this term thanks to Bridge2Charity's Back to School Program, which covered school fees and provided notebooks, pens, and other essential learning materials.

For many of these students, the program is the difference between attending school and staying home. Financial barriers remain one of the leading causes of dropout among primary-age children in Rwanda, and the Back to School Program directly addresses this.

Bridge2Charity's program team visited each of the seven partner schools at the start of term to confirm enrolments, distribute materials, and check in with students and their families.

"Every child we support is a child who stays in school," said Keren, the program's lead. "That's what this program is about — removing the obstacles and giving students the chance they deserve."

The Back to School Program currently supports students in P3 through P6. Families are selected based on financial need and a commitment to keeping their children enrolled through the full academic year.`,
    author: "Bridge2Charity Communications Team",
    coverImage: undefined,
    publishedAt: "2026-05-15",
    programTags: ["bts"],
  },
  {
    slug: "ohpc-hen-distribution-bugesera",
    title: "One Hen Per Child Reaches 15 Families in Bugesera District",
    excerpt:
      "Following nutrition training workshops, Bridge2Charity distributed 15 hens and 90 mushroom seedlings to families and ECD centres in Bugesera District.",
    content: `Bridge2Charity's One Hen Per Child program completed its latest distribution phase in Bugesera District, delivering 15 hens to participating families and 90 mushroom seedlings to two Early Childhood Development (ECD) centres.

The distribution followed a series of nutrition training workshops that equipped parents and ECD staff with practical knowledge about food preparation, nutrition for young children, and how to care for their new livestock and seedlings.

The program addresses child malnutrition by giving families a sustainable, long-term source of protein — rather than a one-time food delivery. Hens provide eggs for daily nutrition, while mushroom cultivation gives ECD centres a reliable ingredient for children's meals.

"When a family has a hen that lays eggs, it changes what that child eats every single day," said Placide, the program lead. "That's the kind of impact we're here to create."

Bridge2Charity plans to expand the One Hen Per Child program to additional families in Bugesera District in the coming months, building on lessons learned from this initial cohort.`,
    author: "Bridge2Charity Communications Team",
    coverImage: undefined,
    publishedAt: "2026-04-20",
    programTags: ["ohpc"],
  },
]

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug)
}

export function getArticlesByTag(tag: string): NewsArticle[] {
  return newsArticles.filter((a) => a.programTags.includes(tag as never))
}
