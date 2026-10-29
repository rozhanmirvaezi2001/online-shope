import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-2 p-4 bg-[#f5efe6]">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title or category..."
        className="w-full max-w-md px-4 h-10 rounded-l-[10px] border border-[#561c24] outline-none"
      />
      <button type="submit" className="px-4 h-10 font-[BattleBingo] rounded-r-[10px] text-[12px] bg-[#561c24] text-[#e8d8c4]">
        Search
      </button>
    </form>
  );
};

export default SearchBar;