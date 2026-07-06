import type { Program } from "@/types/program"

export const programs: Program[] = [
  {
    slug: "english-enhancement",
    title: "English Enhancement Program",
    shortDescription:
      "Strengthening English literacy, communication, and critical thinking for primary students at EP Kirambo.",
    description:
      "The English Enhancement Program (EEP) runs structured sessions at EP Kirambo in Burera District, helping primary students build the English skills they need to succeed in school and beyond. Volunteer teachers lead interactive lessons focused on speaking, reading, and critical thinking — creating a classroom environment where students feel confident to participate and grow.",
    objectives: [
      "Strengthen students' ability to read, write, and speak in English",
      "Build critical thinking and communication skills",
      "Create an engaging, student-centred learning environment",
      "Empower students to participate actively in their own education",
      "Support teachers with effective English-language teaching approaches",
    ],
    activities: [
      "Weekly interactive English lessons at EP Kirambo",
      "Reading comprehension and vocabulary exercises",
      "Group discussion and presentation activities",
      "Storytelling and creative writing sessions",
      "Progress assessments at the end of each term",
    ],
    whoBenefits:
      "15 Back to School beneficiaries at EP Kirambo, Burera District. Students are in primary grades P3 and P4.",
    heroImage: "/images/programs/eep-students-outside.jpg",
    galleryImages: [
      "/images/programs/eep-volunteer-selfie.jpg",
      "/images/programs/eep-classroom-1.jpg",
      "/images/programs/eep-classroom-2.jpg",
      "/images/programs/eep-classroom-3.jpg",
    ],
    status: "active",
    impactStats: [
      { value: "15", label: "Students enrolled" },
      { value: "EP Kirambo", label: "Location" },
      { value: "Burera District", label: "District" },
    ],
  },
  {
    slug: "back-to-school",
    title: "Back to School Program",
    shortDescription:
      "Covering school fees and providing learning materials for 23 students across 7 schools in Burera District.",
    description:
      "The Back to School Program removes the financial barriers that keep children out of education. Bridge2Charity covers school fees and provides essential learning materials — notebooks, pens, and school supplies — for students across Burera District who would otherwise be unable to attend. Every child deserves a seat in the classroom.",
    objectives: [
      "Cover school fees for students who cannot afford them",
      "Provide learning materials needed for active participation in class",
      "Reduce dropout rates caused by financial hardship",
      "Support families to keep their children in school through full academic years",
      "Track student progress and wellbeing across partner schools",
    ],
    activities: [
      "School fee payments at the start of each term",
      "Distribution of notebooks, pens, and school supplies",
      "Regular visits to partner schools to check student progress",
      "Family check-ins to identify additional support needs",
      "End-of-term reviews to assess program impact",
    ],
    whoBenefits:
      "23 students across 7 schools in Burera District. Students are selected based on financial need and academic potential.",
    heroImage: "/images/programs/bts-hero.jpg",
    galleryImages: [],
    status: "active",
    impactStats: [
      { value: "23", label: "Students supported" },
      { value: "7", label: "Schools reached" },
      { value: "Burera", label: "District" },
    ],
  },
  {
    slug: "one-hen-per-child",
    title: "One Hen Per Child",
    shortDescription:
      "Tackling child malnutrition through nutrition training and sustainable food sources for families in Bugesera District.",
    description:
      "One Hen Per Child (OHPC) addresses child malnutrition at its root — by equipping families with sustainable food sources and the knowledge to use them. Bridge2Charity provides hens and mushroom seedlings to parents and Early Childhood Development (ECD) centres in Bugesera District, alongside hands-on nutrition training workshops. When a family has a reliable source of protein, children grow stronger.",
    objectives: [
      "Reduce child malnutrition in Bugesera District communities",
      "Equip parents and ECD centres with sustainable food sources",
      "Deliver practical nutrition training to caregivers",
      "Build long-term food security for participating families",
      "Create a model that communities can sustain and scale independently",
    ],
    activities: [
      "Nutrition training workshops for parents and ECD staff",
      "Distribution of hens to participating families",
      "Distribution of mushroom seedlings to ECD centres",
      "Follow-up visits to monitor hen and mushroom growth",
      "Community nutrition awareness sessions",
    ],
    whoBenefits:
      "15 parents and 2 ECD centres in Bugesera District. Families are selected based on nutritional vulnerability and commitment to participating in training.",
    heroImage: "/images/programs/ohpc-hero.jpg",
    galleryImages: [],
    status: "active",
    impactStats: [
      { value: "15", label: "Families supported" },
      { value: "2", label: "ECD centres reached" },
      { value: "15", label: "Hens distributed" },
      { value: "90", label: "Mushroom seedlings distributed" },
    ],
  },
]

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug)
}
