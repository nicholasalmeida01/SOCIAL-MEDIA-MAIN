"use client";

import { useState } from "react";
import FilmRow from "./FilmRow";
import Lightbox from "./Lightbox";
import type { PortfolioVideo, VideoFormat } from "@/lib/data/videos";

const SUBTABS: { key: VideoFormat; label: string }[] = [
  { key: "vertical", label: "VERTICAL — 1080×1920" },
  { key: "horizontal", label: "HORIZONTAL — 1920×1080" },
  { key: "depoimentos", label: "DEPOIMENTOS" },
];

export default function PortfolioBrowser({ videos }: { videos: PortfolioVideo[] }) {
  const [activeTab, setActiveTab] = useState<VideoFormat>("vertical");
  const [openVideo, setOpenVideo] = useState<PortfolioVideo | null>(null);

  return (
    <>
      <div className="subtabs">
        {SUBTABS.map((tab) => (
          <button
            key={tab.key}
            className={`subtab-btn ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {SUBTABS.map((tab) => (
        <div className={`subpanel ${activeTab === tab.key ? "active" : ""}`} key={tab.key}>
          <div className="film-index">
            {videos
              .filter((v) => v.format === tab.key)
              .map((v, i) => (
                <FilmRow key={v.id} video={v} index={i} onOpen={setOpenVideo} />
              ))}
          </div>
        </div>
      ))}

      <Lightbox video={openVideo} onClose={() => setOpenVideo(null)} />
    </>
  );
}
