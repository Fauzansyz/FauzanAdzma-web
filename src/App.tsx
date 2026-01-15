import './App.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'

function App() {
  return (
    <>
      <Navbar />
      <div className="h-full w-full">
        <Hero />
      </div>
    </>
  )
}

export default App
