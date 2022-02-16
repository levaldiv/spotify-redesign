import React from "react";

function Poster({ track }) {
  return (
    <div
      className="group relative mx-auto h-[360px] w-[260px] cursor-pointer overflow-hidden rounded-[50px] text-white/80 transition duration-200 ease-out hover:scale-105 hover:text-white/100"
      // onClick={handlePlay}
    >
      <img
        src={track.albumUrl}
        alt=""
        className="absolute inset-0 h-full w-full rounded-[50px] object-cover opacity-80 group-hover:opacity-100"
      />
    </div>
  );
}

export default Poster;
