import { MdOutlineShortText } from "react-icons/md";

function Search({ search, setSearch }) {
  return (
    <div className="flex max-w-[1150px] items-center overflow-hidden rounded-full border-2 border-[#333333] bg-[#1A1A1A] p-1.5 px-5 pr-8">
      <div className="h-4 w-4 flex-shrink-0 animate-pulse rounded-full border-2" />
      
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // focus:ring-0 disables the highlighting of the text box when clicked
        className="border-none bg-[#1A1A1A] text-xs text-white placeholder-[#FAFAFA] outline-none focus:ring-0 lg:w-full"
        placeholder="Search for a song..."
      />

      <div className="ml-auto flex items-center divide-x-2 divide-dotted divide-[#333333]">
        <div className="flex space-x-2 pr-5">
          <button className="tag">EDM</button>
          <button className="tag">House</button>
          <button className="tag">Dubstep</button>
        </div>

        <div className="flex items-center space-x-1.5 pl-4 text-[#CECECE]">
          <MdOutlineShortText className="animate-pulse text-2xl" />
          <span className="text-sm font-medium">Filters</span>
        </div>
      </div>
    </div>
  );
}

export default Search;
