import { getRecentSong } from "@/lib/get_song";
import { NextResponse } from "next/server";

export async function GET() {
  const song = await getRecentSong();

  return NextResponse.json(song, {
    headers: {
      "Cache-Cotrol": "no-store",
    },
  });
}
