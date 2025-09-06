import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mt-6 mb-6 gap-2"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter an ingredient (e.g., chicken)"
        className="px-4 py-2 border rounded-lg w-72 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      <button
        type="submit"
        className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
