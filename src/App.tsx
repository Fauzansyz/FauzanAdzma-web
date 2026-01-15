import './App.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'

function App() {
  return (
    <>
      <Navbar />
      <div className="h-full w-full">
        <Hero />
        <Projects />
      </div>
    </>
  )
}

export default App
