function ProjectList({ projects }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-[#94A3B8] mt-10">
        No projects yet. Add your first one 👀
      </p>
    );
  }

  return (
    <div className="grid gap-6 px-4 md:px-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList