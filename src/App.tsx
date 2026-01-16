import './App.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import { useRef } from 'react'
import Projects from '@/components/Projects'
import SkillStack from '@/components/SkillStack'
import JourneyPage from '@/components/JourneyPage'

function App() {
  const ref = useRef(null)
  return (
    <>
      <Navbar onScroll={() => ref.current?.scrollIntoView({ behavior: 'smooth' })} />
      <div className="h-full w-full">
        <Hero onScroll={() => ref.current?.scrollIntoView({ behavior: 'smooth' })} />
        <div ref={ref} >
          <Projects />
          <div className='mx-auto max-w-6xl px-8 py-24'>
            <SkillStack />
          </div>
          <JourneyPage />
        </div>
      </div>
    </>
  )
}

export default App
