function SearchBar({ search, setSearch }) {
  return (
    <div className="flex align-center justify-center px-4 mb-8">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-xl bg-[#1E293B] text-[#E2E8F0] 
        placeholder-[#94A3B8] outline-none focus:ring-2 focus:ring-[#6366F1] transition"
      />
    </div>
  );
}

export default SearchBar