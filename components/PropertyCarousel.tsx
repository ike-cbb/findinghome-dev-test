"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  slug: string;
  images: string[];
  alt: string;
}

export default function PropertyCarousel({ slug, images, alt }: Props) {
  const [active, setActive] = useState(0);
  const total = images.length;

  const go = (dir: 1 | -1) => {
    setActive((prev) => (prev + dir + total) % total);
  };

  return (
    <div
      className="col-img relative overflow-hidden"
      style={{ width: "100%", maxWidth: "569px", height: "408px" }}
    >
      {/* Images */}
      {images.map((img, idx) => (
        <Link
          key={img}
          href={`/off-plan/${slug}/`}
          className="block h-full"
          style={{
            position: idx === active ? "relative" : "absolute",
            inset: 0,
            opacity: idx === active ? 1 : 0,
            transition: "opacity .3s ease",
            pointerEvents: idx === active ? "auto" : "none",
          }}
        >
          <img
            src={`/assets/listings/${img}`}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </Link>
      ))}

      {/* Prev / Next buttons — matches prod .prev2 / .next2 */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="prev-btn gallery-arrow"
            style={{
              position: "absolute",
              top: "50%",
              left: "11px",
              transform: "translateY(-50%) scaleX(-1)",
              width: "40px",
              height: "40px",
              padding: 0,
              border: "none",
              background: "transparent",
              backgroundImage: "url(/gallery-arrow.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
              zIndex: 2,
              transition: "transform .2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-50%) scaleX(-1) scale(1.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-50%) scaleX(-1)";
            }}
          />
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next image"
            className="next-btn gallery-arrow"
            style={{
              position: "absolute",
              top: "50%",
              right: "11px",
              transform: "translateY(-50%)",
              width: "40px",
              height: "40px",
              padding: 0,
              border: "none",
              background: "transparent",
              backgroundImage: "url(/gallery-arrow.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
              zIndex: 2,
              transition: "transform .2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-50%) scale(1.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-50%)";
            }}
          />
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div
          className="dots"
          style={{
            position: "absolute",
            bottom: "12px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "6px",
            zIndex: 2,
          }}
        >
          {images.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setActive(idx)}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#fff",
                opacity: idx === active ? 1 : 0.5,
                cursor: "pointer",
                display: "block",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
