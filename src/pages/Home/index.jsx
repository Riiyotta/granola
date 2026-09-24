import Hero from '../../components/Hero.jsx'
import EffortlessNotesMobile from '../../components/EffortlessNotesMobile.jsx'
import Doers from '../../components/Doers.jsx'
import HowItWorksIntro from '../../components/HowItWorksIntro.jsx'
import HowItWorksMobile from '../../components/HowItWorksMobile.jsx'
import HowItWorksDesktop from '../../components/HowItWorksDesktop.jsx'
import Chat from '../../components/Chat.jsx'
import Testimonials from '../../components/Testimonials.jsx'
import Features from '../../components/Features.jsx'
import Mcp from '../../components/Mcp.jsx'
import Pricing from '../../components/Pricing.jsx'

export default function HomePage() {
  return (
    <main className="flex-1 w-full lg:mx-auto">
      <div className="flex flex-col items-center w-full py-0 text-primary">
        <Hero />
        <EffortlessNotesMobile />
        <Doers />
        <HowItWorksIntro />
        <HowItWorksMobile />
        <HowItWorksDesktop />
        <Chat />
        <Testimonials />
        <Features />
        <Mcp />
        <Pricing />
      </div>
    </main>
  )
}
