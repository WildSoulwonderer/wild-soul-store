"use client";

import { useEffect } from "react";

export default function MobileImageLoader() {
  useEffect(() => {
    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;
    if (!isSmallScreen) return;

    const wakeImages = () => {
      document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((image) => {
        image.loading = "eager";
        image.decoding = "async";

        // Re-assigning src nudges some embedded iOS webviews to begin a deferred request.
        if (!image.complete && image.src) {
          const currentSrc = image.src;
          image.src = currentSrc;
        }
      });
    };

    wakeImages();
    const timer = window.setTimeout(wakeImages, 250);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
