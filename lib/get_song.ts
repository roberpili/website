import { LastFmResponse, SongResponse } from "./types";

export async function getRecentSong(): Promise<SongResponse | null> {
  const url = new URL(process.env.URL!);
  url.searchParams.set("method", "user.getrecenttracks");
  url.searchParams.set("format", "json");
  url.searchParams.set("limit", "1");

  try {
    const response = await fetch(url.toString(), {
      next: { revalidate: 60 },
    });

    if (!response.ok) return null;

    const data: LastFmResponse = await response.json();
    const track = data.recenttracks?.track?.[0];

    if (!track) return null;

    const image =
      track.image?.find((img) => img.size === "medium")?.["#text"] ??
      track.image?.find((img) => img.size === "small")?.["#text"] ??
      "";

    return {
      name: track.name,
      artist: track.artist["#text"],
      album: track.album["#text"],
      url: track.url,
      image,
      nowPlaying: track["@attr"]?.nowplaying === "true",
    };
  } catch (error) {
    console.error("Failed to fetch recent song:", error);
    return null;
  }
}
