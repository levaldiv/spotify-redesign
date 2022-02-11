import React from "react";

function Search() {
  return (
    <div className="flex max-w-[1150px] items-center overflow-hidden rounded-full border-2 border-[#333333] bg-[#1A1A1A] p-1.5 px-5 pr-8">
      <div className="h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border-none bg-[#1A1A1A] text-xs text-white placeholder-[#FAFAFA] outline-none focus:ring-0 lg:w-full"
          placeholder="Search for a song..."
        />
      </div>
    </div>
  );
}

export default Search;
