import type { Metadata } from "next"
import { Montserrat, Plus_Jakarta_Sans, Nunito, Inter, DM_Sans } from "next/font/google"
import Navigation from "@/components/layout/Navigation"
import Footer from "@/components/layout/Footer"
import "./globals.css"

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
})

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Bridge2Charity Foundation — Empowering Rwanda's Primary Students",
    template: "%s — Bridge2Charity Foundation",
  },
  description:
    "Bridge2Charity improves primary students' lives through sustainable community initiatives in Rwanda. Join our mission through volunteering, programs, and community support.",
  metadataBase: new URL("https://bridge2charity.org"),
  openGraph: {
    siteName: "Bridge2Charity Foundation",
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${jakarta.variable} ${nunito.variable} ${inter.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1 pt-[66px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
