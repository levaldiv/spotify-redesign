import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Poster from "./Poster";
import Search from "./Search";

function Body({ spotifyApi }) {
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
                <Posterer
                  key={track.id}
                  track={track}
                  // chooseTrack={chooseTrack}
                />
              ))
          : searchResults
              .slice(0, 4)
              .map((track) => (
                <Poster
                  key={track.id}
                  track={track}
                  // chooseTrack={chooseTrack}
                />
              ))}
      </div>
    </section>
  );
}

export default Body;
