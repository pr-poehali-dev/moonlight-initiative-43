import Header from "./Header"
import Hero from "./Hero"
import Advantages from "./Projects"
import Opportunities from "./Services"
import Roadmap from "./Roadmap"
import Model from "./Model"
import Faq from "./Faq"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero, Advantages, Opportunities, Roadmap, Model, Faq, CallToAction, Footer }

export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-[#111111]">
      {showHeader && <Header />}
      <div className="container pt-4">
        <Hero />
        <Advantages />
        <Opportunities />
        <Roadmap />
        <Model />
        <Faq />
        <CallToAction />
      </div>
      {showFooter && <Footer />}
    </main>
  )
}
