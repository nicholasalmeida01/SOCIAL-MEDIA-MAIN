export type VideoFormat = "vertical" | "horizontal" | "depoimentos";

export interface PortfolioVideo {
  id: string;
  yt: string;
  format: VideoFormat;
}

export const VIDEOS: PortfolioVideo[] = [
  { id: "v1", yt: "haE2pv67q8M", format: "vertical" },
  { id: "v2", yt: "0G_sBo9J1b8", format: "vertical" },
  { id: "v3", yt: "tSVb_WvCHuM", format: "vertical" },
  { id: "v4", yt: "E-p8d6ZVplo", format: "vertical" },
  { id: "v5", yt: "Sec3WO7fCVc", format: "vertical" },
  { id: "v6", yt: "6VoBco-jEp8", format: "vertical" },
  { id: "v7", yt: "n3j69_AgWWs", format: "horizontal" },
];
