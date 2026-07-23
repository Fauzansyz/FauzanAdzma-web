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
  const projectRef = useRef<HTMLDivElement | null>(null)
  return (
    <>
      <Navbar/>
      <div className="h-full w-full">
        <Hero />
        <div className='mx-auto max-w-6xl px-8 py-24'>
          <SkillStackSection />
        </div>
        <AboutSection />
        <JourneySection />
        <ProjectsSection ref={projectRef} />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

export default App
