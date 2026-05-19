import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Work from './components/Work'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="font-body-md text-body-md scrollbar-custom overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Expertise Section */}
      <Expertise />

      {/* Work Section */}
      <Work />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  )
}

export default App
