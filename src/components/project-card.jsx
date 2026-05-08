function ProjectCard({ project }) {
  return (
    <div className="bg-card p-6 rounded-2xl transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20">
      <h3 className="text-xl font-heading font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-muted text-sm">
        {project.description}
      </p>
    </div>
  );
}

export default ProjectCard