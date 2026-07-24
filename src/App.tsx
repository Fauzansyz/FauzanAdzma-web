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
  const aboutRef = useRef<HTMLElement | null>(null)
  const targetScroll = () =>{
     projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth', block:'center'})
  }
  return (
    <>
      <Navbar onScrollClick={scrollToAbout} />
      <div className="h-full w-full bg-[#F8FAFC]">
        <Hero onScrollClick={targetScroll} />
        <div className='mx-auto max-w-6xl px-8 py-24'>
          <SkillStackSection />
        </div>
      <div className='text-gray-900'>
        <AboutSection ref={projectRef} />
        <JourneySection />
        <ProjectsSection/>
        <ContactSection ref={projectRef} />
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App
