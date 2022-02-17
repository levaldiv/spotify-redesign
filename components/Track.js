function Track({ track }) {
  return (
    <div className="group flex cursor-default items-center justify-between space-x-20 rounded-lg py-2 px-4 transition ease-out hover:bg-white/10">
      <div className="flex items-center">
        <img
          src={track.albumUrl}
          alt=""
          className="mr-3 h-12 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default Track;
