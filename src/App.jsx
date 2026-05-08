import React, { useState } from 'react'
import Hero from './components/hero'
import Search from './components/search-input'
import LandingPage from './components/landing-page'
import ProjectCard from './components/project-card'
import Form from './components/form'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <div className="">
        <Hero />  
      </div>

      <div className="">
        <Search />
      </div>

      <div className="">
        <LandingPage />
      </div>

      <div className="">
        <Form />
      </div>
      
      <div className="">
        <Footer />  
      </div> 

      <button>Click Me</button>
    </div>
  )
}

export default App
