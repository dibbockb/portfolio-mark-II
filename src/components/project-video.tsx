"use client";

import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  webmSrc?: string;
  poster?: string;
  label: string;
  delayMs?: number;
};

export function ProjectVideo({
  src,
  webmSrc,
  poster,
  label,
  delayMs = 500,
}: ProjectVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.play().catch(() => { });
    }, delayMs);
    return () => clearTimeout(t);
  }, [delayMs]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className="aspect-8/5 h-auto w-full object-cover"
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  );
}
