import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Poster from "./Poster";
import Search from "./Search";
import Track from "./Track";

function Body({ chooseTrack, spotifyApi }) {
  const { data: session } = useSession();
  const { accessToken } = session;
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [newReleases, setNewReleases] = useState([]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  // Searching
  useEffect(() => {
    // if there is no search, return empty results arr
    if (!search) return setSearchResults([]);
    // if there is no access token
    if (!accessToken) return;

    // searching through the tracks
    spotifyApi.searchTracks(search).then((res) => {
      // mapping through every single track
      setSearchResults(
        res.body.tracks.items.map((track) => {
          return {
            // retrieving only the useful info from the track
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.album.images[0].url,
            popularity: track.popularity,
          };
        })
      );
    });
  }, [search, accessToken]);
  // console.log(searchResults);

  // fetching the new releases
  // this is static so it is not changing
  useEffect(() => {
    if (!accessToken) return;

    spotifyApi.getNewReleases().then((res) => {
      setNewReleases(
        res.body.albums.items.map((track) => {
          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: track.images[0].url,
          };
        })
      );
    });
  }, [accessToken]);
  // console.log(newReleases);

  return (
    <section className="ml-24 flex-grow space-y-8 bg-black py-4 md:mr-2.5 md:max-w-6xl">
      {/* This is the search bar */}
      <Search search={search} setSearch={setSearch} />

      {/* Canvas of newest music */}
      <div className="scrollbar-hide grid h-96 grid-cols-2 gap-x-4 gap-y-8 overflow-y-scroll p-4 py-4 lg:grid-cols-3 xl:grid-cols-4">
        {/* showing the new song  releases
         * Mapping through the track */}
        {searchResults.length === 0
          ? newReleases
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))
          : searchResults
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  chooseTrack={chooseTrack}
                />
              ))}
      </div>

      <div className="absolute ml-6 flex min-w-full gap-x-8 md:relative">
        {/* Creating genres */}
        <div className="hidden max-w-[270px] xl:inline">
          <h2 className="mb-3 font-bold text-white">Genres</h2>
          <div className="mb-3 flex flex-wrap gap-x-2 gap-y-2.5">
            <div className="genre">Classic</div>
            <div className="genre">House</div>
            <div className="genre">Minimal</div>
            <div className="genre">Hip-hop</div>
            <div className="genre">Electronic</div>
            <div className="genre">Chillout</div>
            <div className="genre">Blues</div>
            <div className="genre">Country</div>
            <div className="genre">Techno</div>
          </div>

          <button className="btn">All Genres</button>
        </div>

        {/* Tracks */}
        <div className="w-full pr-1">
          <h2 className="mb-3 font-bold text-white">
            {/* showing more new releases on bottomb */}
            {searchResults.length === 0 ? "New Releases" : "Tracks"}
          </h2>

          <div className="scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded hover:scrollbar-thumb-gray-500 h-[1000px] w-[830px] space-y-3 overflow-y-scroll rounded-2xl border-2 border-[#262626] bg-[#0D0D0D] p-3 md:h-96">
            {searchResults.length === 0
              ? newReleases
                  // shows all the remaining tracks
                  .slice(4, newReleases.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))
              : searchResults
                  .slice(4, searchResults.length)
                  .map((track) => (
                    <Track
                      key={track.id}
                      track={track}
                      chooseTrack={chooseTrack}
                    />
                  ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
