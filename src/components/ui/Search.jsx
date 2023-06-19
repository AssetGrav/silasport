import React from "react";

const Search = () => {
  const handleSearch = () => {
    console.log("search");
  };
  return (
    <div className="flex mb-1 text-black h-8">
      <input
        type="text"
        className="block w-full px-14 text-pink-700 bg-white focus:ring-pink-300 focus:outline-none focus:ring focus:ring-opacity-40 rounded-sm"
        placeholder="Найти ..."
      />
      <button className="px-4" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
