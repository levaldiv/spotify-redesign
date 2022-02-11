import Search from "./Search";

function Body() {
  return (
    <section className="ml-24 flex-grow space-y-8 bg-black py-4 md:mr-2.5 md:max-w-6xl">
      {/* This is the search bar */}
      <Search />
    </section>
  );
}

export default Body;
