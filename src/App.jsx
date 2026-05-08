import React, { useState } from 'react'
import HeroSection from './components/hero'
import SearchBar from './components/search-input'
import ProjectList from './components/project-list'
import ProjectCard from './components/project-card'
import ProjectForm from './components/form'
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
    <div className="bg-bg min-h-screen font-[Inter, sans-serif]">
      <HeroSection />
      <SearchBar search={search} setSearch={setSearch} />
      <ProjectList projects={filteredProjects} />
      <ProjectForm addProject={addProject} />
      <Footer />
    </div>
  );
}
