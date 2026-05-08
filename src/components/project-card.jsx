function ProjectCard({ project }) {
  return (
    <div className="bg-[#1E293B] p-6 rounded-2xl transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6366F1]/20">
      <h3 className="text-xl font-[Playfair_Display] font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-[#94A3B8] text-sm">
        {project.description}
      </p>
    </div>
  );
}

export default ProjectCard