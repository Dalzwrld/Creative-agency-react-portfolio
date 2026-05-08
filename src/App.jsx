import React, { useState } from 'react'
import Hero from './components/hero'
import Search from './components/search-input'
import ProjectList from './components/project-list'
import ProjectCard from './components/project-card'
import Form from './components/form'
import Footer from './components/footer'

export default function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");

  function addProject(project) {
    setProjects([...projects, project]);
  }

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-bg min-h-screen font-body">
      <HeroSection />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
      <AddProjectForm addProject={addProject} />
      <Footer />
    </div>
  );
}
