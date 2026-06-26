"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export interface MapProperty {
  slug: string;
  title: string;
  community: string;
  city: string;
  googleMapLatLang?: string;
  priceMin: number;
  priceMax: number;
  heroImage: string;
  bedrooms: string;
  bathrooms?: string;
  area?: string;
  propertyType: string;
  logoImage: string;
  logoAlt: string;
  completionQuarter: string;
  completionYear: string;
  shortName: string;
}

interface SlideData {
  bedrooms: string;
  bathrooms: string;
  area: string;
  price: string;
  image: string;
}

interface MapGalleryProps {
  properties: MapProperty[];
  selectedIndex: number | null;
  onClose: () => void;
}

function formatPrice(price: number) {
  return price.toLocaleString("en-US");
}

function buildSlides(p: MapProperty): SlideData[] {
  const bedroomOptions = p.bedrooms.split("|").map((b) => b.trim());
  const baseImage = `/assets/listings/${p.heroImage}`;
  return bedroomOptions.map((br, i) => {
    const priceRange = p.priceMin === p.priceMax
      ? `AED ${formatPrice(p.priceMin)}`
      : `AED ${formatPrice(p.priceMin + i * (p.priceMax - p.priceMin) / Math.max(1, bedroomOptions.length - 1))}`;
    return {
      bedrooms: br,
      bathrooms: p.bathrooms?.split("|")[i]?.trim() || p.bathrooms || "",
      area: p.area?.split("|")[i]?.trim() || p.area || "",
      price: priceRange,
      image: baseImage,
    };
  });
}

export default function MapGallery({ properties, selectedIndex, onClose }: MapGalleryProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [selectedIndex]);

  if (selectedIndex === null) return null;

  const property = properties[selectedIndex];
  if (!property) return null;

  const slides = buildSlides(property);
  const currentSlide = slides[slideIndex] || slides[0];

  return (
    <>
    <div
      className="map-gallery-backdrop"
      onClick={onClose}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999,
        background: "rgba(0, 0, 0, 0.3)",
      }}
    />
    <div
      className="map-gallery"
      style={{
        position: "absolute",
        bottom: "20px",
        left: "25vw",
        right: "25vw",
        zIndex: 1000,
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
        display: "flex",
        alignItems: "stretch",
      }}
    >
      <button
        type="button"
        onClick={() =>
          setSlideIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
        }
        className="gallery-prev"
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid #ef4136",
          color: "#ef4136",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      <div
        style={{
          width: "50%",
          minHeight: "200px",
          position: "relative",
          backgroundImage: `url(${currentSlide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div
        className="de_tails"
        style={{
          width: "50%",
          backgroundColor: "#f8f8f8",
          padding: "4%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <p
          className="loca_tion"
          style={{
            fontSize: "18px",
            color: "#010101",
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {property.title}, {property.community}
        </p>
        <p
          className="pri_ce"
          style={{
            fontSize: "2.5rem",
            fontStyle: "normal",
            fontWeight: 500,
            color: "#010101",
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {currentSlide.bedrooms} {currentSlide.bedrooms === "Studio" ? "" : "BED"}
        </p>
        <p
          className="short_desc"
          style={{
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            color: "#010101",
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
            marginBottom: "10px",
          }}
        >
          {property.propertyType} | {property.completionQuarter} {property.completionYear}
        </p>
        <div
          className="col_meta"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Icon-ionic-md-bed.svg"
              alt="Bed"
              width={21}
              height={14}
              style={{ width: "21px", height: "14px" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#010101",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {currentSlide.bedrooms}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Icon-awesome-bath.svg"
              alt="Bath"
              width={18}
              height={16}
              style={{ width: "18px", height: "16px" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#010101",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {currentSlide.bathrooms}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Group-28.svg"
              alt="Area"
              width={17}
              height={17}
              style={{ width: "17px", height: "17px" }}
            />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "#010101",
                fontFamily: '"Poppins", sans-serif',
              }}
            >
              {currentSlide.area}
            </span>
          </div>
        </div>
        <p
          className="pri_ce"
          style={{
            fontSize: "2rem",
            fontStyle: "normal",
            fontWeight: 500,
            color: "#010101",
            fontFamily: '"Poppins", sans-serif',
            margin: 0,
          }}
        >
          from {currentSlide.price}
        </p>
      </div>

      <button
        type="button"
        onClick={() =>
          setSlideIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
        }
        className="gallery-next"
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          background: "#fff",
          border: "1px solid #ef4136",
          color: "#ef4136",
          fontSize: "18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}
        aria-label="Next slide"
      >
        &#10095;
      </button>

    </div>
    </>
  );
}
