import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { useRef } from 'react'
import ProjectsSection from '@/components/ProjectsSection'
import SkillStackSection from '@/components/SkillStackSection'
import JourneySection from '@/components/JourneySection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

function App() {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const skillsRef = useRef<HTMLDivElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const journeyRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLDivElement | null>(null)

  const scrollTo = (ref: { current: HTMLElement | HTMLDivElement | null }) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <Navbar 
        onScrollToHome={() => scrollTo(heroRef)}
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToSkills={() => scrollTo(skillsRef)}
        onScrollToJourney={() => scrollTo(journeyRef)}
        onScrollToProjects={() => scrollTo(projectsRef)}
        onScrollToContact={() => scrollTo(contactRef)}
        onScrollClick={() => scrollTo(contactRef)}
      />
      <div className="h-full w-full bg-[#F8FAFC]">
        <div ref={heroRef}>
          <Hero onScrollClick={() => scrollTo(contactRef)} />
        </div>
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-12 md:py-20">
          <SkillStackSection ref={skillsRef} />
        </div>
        <div className="text-slate-900 space-y-12">
          <AboutSection ref={aboutRef} />
          <JourneySection ref={journeyRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
          <Footer 
            onScrollToHome={() => scrollTo(heroRef)}
            onScrollToAbout={() => scrollTo(aboutRef)}
            onScrollToSkills={() => scrollTo(skillsRef)}
            onScrollToJourney={() => scrollTo(journeyRef)}
            onScrollToProjects={() => scrollTo(projectsRef)}
            onScrollToContact={() => scrollTo(contactRef)}
          />
        </div>
      </div>
    </>
  )
}

export default App

