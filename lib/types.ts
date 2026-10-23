// BOOKS
export const ReadingStatus = {
  finished: "Finished",
  reading: "Reading",
  pending: "Pending",
} as const;
export type ReadingStatus = (typeof ReadingStatus)[keyof typeof ReadingStatus];

// PROJECTS
export const ProjectStatus = {
  done: "Done",
  online: "Online",
  in_dev: "In Dev",
  abandoned: "Abandoned",
} as const;
export type ProjectStatus = (typeof ProjectStatus)[keyof typeof ProjectStatus];

export const Language = {
  python: "Python",
  typescript: "Typescript",
  go: "Go",
  pawn: "Pawn",
} as const;
export type Language = (typeof Language)[keyof typeof Language];

// BOOKS
export interface Book {
  title: string;
  author: string;
  status: ReadingStatus;
  url: string;
}

// PROJECTS
export interface Project {
  name: string;
  description: string;
  status: ProjectStatus;
  url: string;
  language: Language;
}

// POSTS
export interface MarkdownMetadata {
  title: string;
  topic: string;
  imgUrl: string;
  publishedAt: string;
  [key: string]: unknown;
}

export interface MarkdownPostMetadataAndSlug {
  slug: string;
  metadata: MarkdownMetadata;
}

// SONG
export interface LastSong {
  name: string;
  artist: { "#text": string };
  album: { "#text": string };
  url: string;
  image: {
    size: string;
    "#text": string;
  }[];
  "@attr"?: {
    nowplaying?: string;
  };
}

export interface LastFmResponse {
  recenttracks: {
    track: LastSong[];
  };
}

// exposed to the frontend
export interface SongResponse {
  name: string;
  artist: string;
  album: string;
  url: string;
  image: string;
  nowPlaying: boolean;
}
