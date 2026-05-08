import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    addProject({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto mt-12 bg-[#1E293B] p-6 rounded-2xl space-y-4"
    >
      <h2 className="text-xl font-[Playfair_Display, serif] font-semibold">
        Add New Project
      </h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-bg text-text placeholder-muted outline-none focus:ring-2 focus:ring-primary"
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-bg text-text placeholder-muted outline-none focus:ring-2 focus:ring-primary"
      />

      <button
        type="submit"
        className="w-full py-3 rounded-xl bg-[#6366F1] hover:bg-indigo-500 transition font-medium"
      >
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm