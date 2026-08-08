import LogoMark from "./LogoMark";
import { DiagonalArrowIcon } from "./icons";
import type { PortfolioVideo } from "@/lib/data/videos";

interface FilmRowProps {
  video: PortfolioVideo;
  index: number;
  onOpen: (video: PortfolioVideo) => void;
}

export default function FilmRow({ video, index, onOpen }: FilmRowProps) {
  const numStr = String(index + 1).padStart(2, "0");

  return (
    <div className="film-row" onClick={() => onOpen(video)}>
      <span className="fnum mono">{numStr}</span>
      <span className="ftitle">
        <LogoMark idPrefix={`filmrow-${video.id}`} className="ftitle-mark" />
        <span className="ftitle-num">{numStr}</span>
      </span>
      <span className="fmeta">{video.format.toUpperCase()}</span>
      <span className="farrow">
        <DiagonalArrowIcon />
      </span>
      <div className="film-row-preview">
        <img
          src={`https://img.youtube.com/vi/${video.yt}/hqdefault.jpg`}
          alt="Prévia do vídeo do portfólio Play to Play"
        />
      </div>
    </div>
  );
}
