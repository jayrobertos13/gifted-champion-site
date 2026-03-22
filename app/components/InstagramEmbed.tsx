"use client";

const videos = [
  "/videos/reel-1.mp4",
  "/videos/reel-2.mp4",
  "/videos/reel-3.mp4",
  "/videos/reel-4.mp4",
  "/videos/reel-5.mp4",
  "/videos/reel-6.mp4",
];

export default function VideoGallery() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "16px" }}>
      {videos.map((src) => (
        <div
          key={src}
          style={{
            position: "relative",
            borderRadius: "8px",
            overflow: "hidden",
            background: "#0a0a0a",
          }}
        >
          <video
            src={src}
            controls
            playsInline
            preload="auto"
            poster={src.replace("/videos/", "/videos/thumbs/").replace(".mp4", ".jpg")}
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
              aspectRatio: "9 / 16",
            }}
          />
        </div>
      ))}
    </div>
  );
}
