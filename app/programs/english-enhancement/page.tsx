import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  MessageSquare,
  BookOpen,
  User,
  Heart,
  Activity,
  Globe,
  Leaf,
} from "lucide-react"

export const metadata: Metadata = {
  title: "English Enhancement Program — Bridge2Charity Foundation",
  description:
    "Building Rwanda's next excellent generation through English literacy, communication, and critical thinking for primary students at EP Kirambo.",
}

// ── Arrow circle ─────────────────────────────────────────────────────────────
function ArrowCircle() {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: "#f16927" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  )
}

// ── Data ─────────────────────────────────────────────────────────────────────
const packageThemes = [
  { title: "Language & Expression", Icon: MessageSquare },
  { title: "Storytelling & Reading", Icon: BookOpen },
  { title: "Who I Am & Who I Want to Be", Icon: User },
  { title: "Kindness & Leadership", Icon: Heart },
  { title: "Health & Wellbeing", Icon: Activity },
  { title: "My Community & My World", Icon: Globe },
  { title: "Nature & Environment", Icon: Leaf },
]

const themeColors = [
  "#f16927",
  "#4f6815",
  "#050a30",
  "#75070c",
  "#f16927",
  "#4f6815",
  "#050a30",
]

// ── Page ─────────────────────────────────────────────────────────────────────
export default function EnglishEnhancementPage() {
  return (
    <main>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end bg-navy overflow-hidden">
        <Image
          src="/images/programs/eep-hero.jpg"
          alt="English Enhancement Program"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-navy/20" />

        {/* Bottom-left text */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-28 w-full">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Building Rwanda&apos;s Next{" "}
            <span className="text-orange">Excellent Generation</span>
          </h1>
        </div>
      </section>

      {/* ── Welcome to English Enhancement ───────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left — text */}
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-navy mb-5 leading-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Welcome to English Enhancement!
              </h2>
              <div
                className="space-y-4 text-navy/70 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-nunito)" }}
              >
                <p>
                  English Enhancement is a direct response to Rwanda&apos;s English literacy gap,
                  bringing structured, engaging English to primary students who deserve more than
                  what the standard classroom alone can offer.
                </p>
                <p>
                  As an enrichment program embedded within Bridge2Charity&apos;s holistic support,
                  EEP creates intentional spaces where young learners build English literacy,
                  develop their voice, and grow the confidence to communicate — skills that will
                  follow them far beyond the classroom and into every opportunity that lies ahead.
                </p>
              </div>
            </div>

            {/* Right — video placeholder */}
            <div>
              <div
                className="w-full aspect-video rounded-2xl flex flex-col items-center justify-center gap-4 border-2 border-dashed border-navy/15"
                style={{ background: "#f7f7f7" }}
              >
                <div className="w-16 h-16 rounded-full bg-navy/8 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#050a30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </div>
                <div className="text-center px-8">
                  <p
                    className="text-navy/40 text-sm font-medium mb-1"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    Welcome to English Enhancement
                  </p>
                  <p
                    className="text-navy/30 text-xs"
                    style={{ fontFamily: "var(--font-nunito)" }}
                  >
                    Video coming soon
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── UNICEF Statistics ────────────────────────────────────────────────── */}
      <section className="py-14 lg:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-orange pl-7 py-2">
            <p
              className="text-navy/75 text-base sm:text-lg leading-relaxed"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              According to UNICEF Rwanda, learning outcomes remain a concern:{" "}
              <span
                className="font-semibold text-navy"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#f16927",
                  textDecorationThickness: "3px",
                  textUnderlineOffset: "4px",
                }}
              >
                33% of Primary 3 students cannot read and understand grade-level text in Kinyarwanda
              </span>
              , and more alarmingly,{" "}
              <span
                className="font-semibold text-navy inline"
                style={{
                  border: "2.5px solid #f16927",
                  borderRadius: "30px",
                  padding: "2px 10px",
                  whiteSpace: "nowrap",
                }}
              >
                nearly 90% struggle to do so in English
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── Curriculum ───────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-12">
            <h2
              className="text-2xl sm:text-3xl font-bold text-navy mb-5 leading-tight"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              A Top-Quality English Curriculum
            </h2>
            <p
              className="text-navy/70 text-base leading-relaxed"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              Through English Enhancement, Bridge2Charity&apos;s students are equipped with a
              top-quality curriculum aimed at boosting their English skills in Reading, Writing,
              Speaking, and Listening — preparing competitive students who will transition into
              high school with confidence in the language and become a better, more civic-minded
              Rwandan generation.
            </p>
          </div>

          {/* Package Themes heading */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px flex-1 bg-navy/10" />
            <span
              className="text-navy/50 text-xs font-bold tracking-widest uppercase px-4"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Package Themes
            </span>
            <div className="h-px flex-1 bg-navy/10" />
          </div>

          {/* Row 1 — 4 themes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-5">
            {packageThemes.slice(0, 4).map((theme, i) => (
              <div
                key={theme.title}
                className="flex flex-col items-center text-center gap-3 bg-cream rounded-2xl p-5"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: themeColors[i] }}
                >
                  <theme.Icon size={24} color="white" />
                </div>
                <p
                  className="text-navy font-semibold text-sm leading-tight"
                  style={{ fontFamily: "var(--font-jakarta)" }}
                >
                  {theme.title}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2 — 3 themes, centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full sm:w-auto">
              {packageThemes.slice(4).map((theme, i) => (
                <div
                  key={theme.title}
                  className="flex flex-col items-center text-center gap-3 bg-cream rounded-2xl p-5 sm:w-52"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: themeColors[4 + i] }}
                  >
                    <theme.Icon size={24} color="white" />
                  </div>
                  <p
                    className="text-navy font-semibold text-sm leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)" }}
                  >
                    {theme.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Focus ────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-center mb-10">
            <span
              className="inline-block bg-orange text-white font-bold text-base px-8 py-2.5 rounded-full tracking-wide"
              style={{ fontFamily: "var(--font-jakarta)" }}
            >
              Our Focus
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Reading & Writing",
                description:
                  "Students build foundational literacy skills through structured reading sessions, vocabulary exercises, creative writing, and comprehension practice — developing the written English they need to succeed academically.",
              },
              {
                title: "Speaking & Listening",
                description:
                  "Through group discussions, storytelling, and presentations, students develop the confidence to speak English in the classroom and beyond. We create safe, encouraging environments where every voice is heard.",
              },
              {
                title: "Critical Thinking",
                description:
                  "Sessions are designed to do more than teach language. We prompt students to ask questions, analyse ideas, and form their own views — building the cognitive skills that serve them across every subject.",
              },
            ].map((focus) => (
              <div key={focus.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowCircle />
                  <h3
                    className="text-olive font-bold text-xs uppercase leading-tight"
                    style={{ fontFamily: "var(--font-jakarta)", letterSpacing: "2px" }}
                  >
                    {focus.title}
                  </h3>
                </div>
                <p
                  className="text-gray-600 text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-nunito)", fontSize: "16px" }}
                >
                  {focus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-navy py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Help Build the Next Generation
          </h2>
          <p
            className="text-white/60 text-base leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito)" }}
          >
            Every session we run brings a student one step closer to a future where English opens
            doors. Join us in making it possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/volunteer"
              className="px-8 py-3 bg-orange hover:bg-orange-light text-white font-bold rounded-lg transition-all duration-200 hover:shadow-xl hover:shadow-orange/30 hover:-translate-y-0.5 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Volunteer With Us
            </Link>
            <Link
              href="/donate"
              className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-bold rounded-lg transition-all duration-200 text-sm"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Support This Program
            </Link>
          </div>
        </div>
      </section>

    </main>
  )
}
