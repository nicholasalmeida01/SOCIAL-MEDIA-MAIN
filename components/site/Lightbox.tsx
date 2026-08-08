import type { PortfolioVideo } from "@/lib/data/videos";

interface LightboxProps {
  video: PortfolioVideo | null;
  onClose: () => void;
}

export default function Lightbox({ video, onClose }: LightboxProps) {
  if (!video) return null;

  return (
    <div
      className="lightbox open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lightbox-inner">
        <button className="lightbox-close" onClick={onClose}>
          ✕
        </button>
        <div className={`lightbox-player-wrap ${video.format === "vertical" ? "vertical" : ""}`}>
          <iframe
            src={`https://www.youtube.com/embed/${video.yt}?autoplay=1&modestbranding=1&rel=0&playsinline=1`}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
