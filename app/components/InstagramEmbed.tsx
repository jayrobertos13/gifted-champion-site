"use client";

import { useEffect } from "react";

const reelUrls = [
  "https://www.instagram.com/reel/DUjVWY8ElNW/",
  "https://www.instagram.com/reel/DSgRSh4kohq/",
  "https://www.instagram.com/reel/DRJKfOKEVg1/",
  "https://www.instagram.com/reel/DNzlERqXI9N/",
  "https://www.instagram.com/reel/DKDsc6DvZYS/",
  "https://www.instagram.com/reel/DJ3H8bBRnXQ/",
];

export default function InstagramEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (win.instgrm) {
      win.instgrm.Embeds.process();
    } else {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "24px" }}>
      {reelUrls.map((url) => (
        <div key={url} style={{ display: "flex", justifyContent: "center" }}>
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`${url}?utm_source=ig_embed&utm_campaign=loading`}
            data-instgrm-version="14"
            style={{
              background: "#000",
              border: 0,
              borderRadius: "4px",
              margin: 0,
              maxWidth: "540px",
              minWidth: "280px",
              padding: 0,
              width: "100%",
            }}
          />
        </div>
      ))}
    </div>
  );
}
