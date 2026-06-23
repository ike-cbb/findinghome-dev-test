"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Props {
  images: string[];
}

export default function GallerySlider({ images }: Props) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={prev}
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 hover:opacity-80 transition-opacity"
        aria-label="Previous"
      >
        <img
          src="/assets/images/slider-arrow.svg"
          alt="Previous"
          className="w-[38px] h-[38px] rotate-180"
        />
      </button>

      <div className="relative overflow-hidden flex-1">
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              <Image
                src={`/assets/listings/${img}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          ))}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full border-0 cursor-pointer transition-colors"
                style={{ width: "10px", height: "10px", backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)" }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={next}
        className="flex-shrink-0 bg-transparent border-0 cursor-pointer p-0 hover:opacity-80 transition-opacity"
        aria-label="Next"
      >
        <img
          src="/assets/images/slider-arrow.svg"
          alt="Next"
          className="w-[38px] h-[38px]"
        />
      </button>
    </div>
  );
}
