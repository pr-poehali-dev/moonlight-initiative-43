import Header from "./Header"
import Hero from "./Hero"
import About from "./About"
import Advantages from "./Projects"
import Clients from "./Services"
import Roadmap from "./Roadmap"
import Model from "./Model"
import Company from "./Company"
import Faq from "./Faq"
import CallToAction from "./CallToAction"
import Footer from "./Footer"
import type { LandingPageProps } from "./types"

export { Header, Hero, About, Advantages, Clients, Roadmap, Model, Company, Faq, CallToAction, Footer }

export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-[#eef3f6] dark:bg-[#0f1720]">
      {showHeader && <Header />}
      <div className="container pt-4">
        <Hero />
        <About />
        <Advantages />
        <Clients />
        <Roadmap />
        <Model />
        <Company />
        <Faq />
        <CallToAction />
      </div>
      {showFooter && <Footer />}
    </main>
  )
}