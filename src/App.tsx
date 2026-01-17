import './App.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { useRef } from 'react'
import Projects from '@/components/Projects'
import SkillStack from '@/components/SkillStack'
import JourneyPage from '@/components/JourneyPage'

function App() {
  const projectRef = useRef(null)
  return (
    <>
      <Navbar onScroll={() => projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })} />
      <div className="h-full w-full">
        <Hero onScroll={() => projectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })} />

        <div className='mx-auto max-w-6xl px-8 py-24'>
          <SkillStack />
        </div>

        <Projects ref={projectRef} />
        <JourneyPage />

      </div>
    </>
  )
}

export default App
