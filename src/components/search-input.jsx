function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center px-4 mb-8">
      <input
        type="text"
        placeholder="Search projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-md px-4 py-3 rounded-xl bg-card text-text 
        placeholder-muted outline-none focus:ring-2 focus:ring-primary transition"
      />
    </div>
  );
}

export default SearchBar