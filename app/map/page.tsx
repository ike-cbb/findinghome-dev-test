"use client";

import { useState } from "react";
import Link from "next/link";
import GoogleMapView from "@/components/GoogleMapView";
import MapGallery, { type MapProperty } from "@/components/MapGallery";
import FilterDropdown from "@/components/FilterDropdown";
import PriceSlider from "@/components/PriceSlider";

interface LocalMapProperty {
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

const properties: LocalMapProperty[] = [
  {
    slug: "damac-lagoons-mykonos-cluster",
    title: "DAMAC Lagoons - Mykonos",
    community: "DAMAC Lagoons",
    city: "Dubai",
    googleMapLatLang: "25.017198578252458, 55.2437543825842",
    priceMin: 2470000,
    priceMax: 3280000,
    heroImage: "TW_BACK.jpg",
    bedrooms: "4 | 5",
    bathrooms: "3 | 5",
    propertyType: "Townhouse",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC properties",
    completionQuarter: "Q4",
    completionYear: "2026",
    shortName: "Mykonos",
  },
  {
    slug: "damac-hills-trump-estates-beverly-hills-drive",
    title: "DAMAC Hills - Trump Estates Beverly Hills Drive",
    community: "DAMAC - Hills",
    city: "Dubai",
    googleMapLatLang: "25.022463, 55.247884",
    priceMin: 11135000,
    priceMax: 11135000,
    heroImage: "V51-Front-scaled.jpg",
    bedrooms: "7",
    bathrooms: "8",
    propertyType: "Villa",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
    completionQuarter: "Q4",
    completionYear: "2024",
    shortName: "Beverly Hills Drive",
  },
  {
    slug: "damac-lagoons-venice",
    title: "DAMAC Lagoons - Venice cluster",
    community: "DAMAC Lagoons",
    city: "Dubai",
    googleMapLatLang: "25.0171361118687, 55.24284851534498",
    priceMin: 5500000,
    priceMax: 8500000,
    heroImage: "Venice-6-bedroom-Villa.webp",
    bedrooms: "6",
    bathrooms: "6",
    propertyType: "Villa",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
    completionQuarter: "Q4",
    completionYear: "2026",
    shortName: "Venice",
  },
  {
    slug: "verde-by-sobha",
    title: "Verde By Sobha",
    community: "JLT",
    city: "Dubai",
    googleMapLatLang: "25.07026547300746, 55.14671340029833",
    priceMin: 900000,
    priceMax: 3500000,
    heroImage: "C3-min-scaled.jpg",
    bedrooms: "1 | 2 | 3",
    propertyType: "Apartment",
    logoImage: "sobha_logo.svg",
    logoAlt: "Sobha Realty",
    completionQuarter: "Q4",
    completionYear: "2027",
    shortName: "Verde",
  },
  {
    slug: "chic-tower",
    title: "Chic Tower",
    community: "Business Bay",
    city: "Dubai",
    googleMapLatLang: "25.183516322735233, 55.26132320747118",
    priceMin: 900000,
    priceMax: 2500000,
    heroImage: "RENDERS23-min-scaled.jpg",
    bedrooms: "Studio | 1 | 2",
    propertyType: "Apartment",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
    completionQuarter: "Q4",
    completionYear: "2026",
    shortName: "Chic Tower",
  },
  {
    slug: "damac-canal-heights",
    title: "DAMAC Canal Heights",
    community: "Business Bay",
    city: "Dubai",
    googleMapLatLang: "25.183812973903013, 55.27903169106043",
    priceMin: 950000,
    priceMax: 4200000,
    heroImage: "DAMAC-Canal-Heights_-scaled.webp",
    bedrooms: "1 | 2 | 3",
    bathrooms: "1 | 2 | 3",
    propertyType: "Apartment",
    logoImage: "damac-logo-dark.svg",
    logoAlt: "DAMAC PROPERTIES",
    completionQuarter: "Q4",
    completionYear: "2027",
    shortName: "Canal Heights",
  },
];

function formatPrice(price: number) {
  if (price >= 1000000) {
    return `AED ${(price / 1000000).toFixed(price % 1000000 === 0 ? 0 : 1)}M`;
  }
  if (price >= 1000) {
    return `AED ${(price / 1000).toFixed(0)}K`;
  }
  return `AED ${price}`;
}

const highlightOptions = [
  "Security",
  "Spa Area",
  "Shopping",
  "Swimming Pools",
  "Fitness Centres",
  "Play Ground",
  "Dining",
  "Garden",
  "Golf Course",
  "Community Center",
];

const propertyTypeOptions = [
  { value: "All", label: "Property Type" },
  { value: "Apartment", label: "Apartment" },
  { value: "Townhouse", label: "Townhouse" },
  { value: "Villa", label: "Villa" },
  { value: "Duplex", label: "Duplex" },
  { value: "Penthouse", label: "Penthouse" },
];

const bedroomOptions = [
  { value: "All", label: "Bedrooms" },
  { value: "Studio", label: "Studio" },
  { value: "1 Bed", label: "1 Bed" },
  { value: "2 Bed", label: "2 Bed" },
  { value: "3 Bed", label: "3 Bed" },
  { value: "4 Bed", label: "4 Bed" },
  { value: "5+ Bed", label: "5+ Bed" },
];

const completionOptions = [
  { value: "All", label: "Completion Time" },
  { value: "Q4 2024", label: "Q4 2024" },
  { value: "Q4 2026", label: "Q4 2026" },
  { value: "Q4 2027", label: "Q4 2027" },
];

export default function MapPage() {
  const [city, setCity] = useState("");
  const [propertyType, setPropertyType] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);
  const [completionTime, setCompletionTime] = useState("All");
  const [highlights, setHighlights] = useState<string[]>([]);

  const toggleHighlight = (h: string) => {
    setHighlights((prev) =>
      prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]
    );
  };

  const resetFilters = () => {
    setCity("");
    setPropertyType("All");
    setBedrooms("All");
    setPriceRange([0, 10]);
    setCompletionTime("All");
    setHighlights([]);
  };

  const filteredProperties = properties.filter((p) => {
    if (city && p.city.toLowerCase() !== city.toLowerCase() &&
        !p.community.toLowerCase().includes(city.toLowerCase())) {
      return false;
    }
    if (propertyType !== "All" && p.propertyType !== propertyType) {
      return false;
    }
    if (bedrooms !== "All") {
      const beds = p.bedrooms?.split("|").map((b) => b.trim()) || [];
      if (bedrooms === "Studio") {
        if (!beds.includes("Studio")) return false;
      } else if (bedrooms === "5+ Bed") {
        const numericBeds = beds
          .map((b) => parseInt(b))
          .filter((n) => !isNaN(n));
        if (!numericBeds.some((n) => n >= 5)) return false;
      } else {
        const num = parseInt(bedrooms);
        if (!beds.some((b) => parseInt(b) === num)) return false;
      }
    }
    const [minM, maxM] = priceRange;
    const minPrice = p.priceMin / 1000000;
    const maxPrice = p.priceMax / 1000000;
    if (minM > 0 && maxPrice < minM) return false;
    if (maxM < 10 && minPrice > maxM) return false;
    if (completionTime !== "All") {
      const ct = `${p.completionQuarter} ${p.completionYear}`;
      if (ct !== completionTime) return false;
    }
    if (highlights.length > 0) {
      const hasAll = highlights.every((h) => {
        const normalized = h.toLowerCase().replace(/\s+/g, "");
        return p.propertyType.includes(normalized) ||
          p.community.toLowerCase().includes(normalized);
      });
      if (!hasAll) return false;
    }
    return true;
  });

  const [selectedPin, setSelectedPin] = useState<number | null>(null);

  const center = "25.082405,55.236917";

  return (
    <article className="map-page">
      {/* Map Section - starts at the very top, behind the search bar */}
      <section className="map_search_list">
        {filteredProperties.length === 0 && (
          <div
            className="no-results"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1000,
              background: "#fff",
              padding: "20px 30px",
              borderRadius: "8px",
              boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
              fontFamily: '"Poppins", sans-serif',
              textAlign: "center",
            }}
          >
            <p style={{ margin: 0, fontSize: "16px", color: "#010101" }}>
              No properties match your filters
            </p>
            <button
              type="button"
              onClick={resetFilters}
              style={{
                marginTop: "10px",
                padding: "8px 20px",
                background: "#ef4136",
                color: "#fff",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
                fontFamily: '"Poppins", sans-serif',
                fontSize: "14px",
              }}
            >
              Clear All Filters
            </button>
          </div>
        )}
        <GoogleMapView
          properties={filteredProperties.map((p) => ({
            slug: p.slug,
            title: p.title,
            community: p.community,
            googleMapLatLang: p.googleMapLatLang,
            heroImage: p.heroImage,
            shortName: p.shortName,
            bedrooms: p.bedrooms,
          }))}
          onPinClick={(index) => setSelectedPin(index)}
        />

        {/* Map Gallery - shows when a pin is clicked */}
        <MapGallery
          properties={filteredProperties}
          selectedIndex={selectedPin}
          onClose={() => setSelectedPin(null)}
        />

        {/* Search/Filter Bar - overlaid on the map */}
        <div
          className="map-filter-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: "0 31px",
            paddingTop: "3%",
          }}
        >
          <div style={{ maxWidth: "1200px", position: "relative" }}>
            <div className="filter_wrap">
              {/* Reset button - positioned right after the search button */}
              <div
                className="filter_col"
                style={{ flexBasis: "100%", maxWidth: "100%", order: 1 }}
              >
                <div className="search-input-fields">
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    style={{
                      margin: 0,
                      display: "flex",
                      alignItems: "center",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <input
                      type="search"
                      enterKeyHint="search"
                      title="search"
                      aria-label="search"
                      placeholder="eg. Dubai Marina"
                      className="search-field"
                      name="city"
                      value={city === "All" ? "" : city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </form>
                  <FilterDropdown
                    value={propertyType}
                    options={propertyTypeOptions}
                    onChange={setPropertyType}
                    width="190px"
                  />
                  <FilterDropdown
                    value={bedrooms}
                    options={bedroomOptions}
                    onChange={setBedrooms}
                    width="190px"
                  />
                  <PriceSlider
                    value={priceRange}
                    onChange={setPriceRange}
                  />
                  <FilterDropdown
                    value={completionTime}
                    options={completionOptions}
                    onChange={setCompletionTime}
                    width="200px"
                  />
                  <button
                    type="button"
                    className="search-btn"
                    onClick={() => {}}
                    aria-label="Search"
                  >
                    <img
                      src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/icon-search.svg"
                      alt="Search"
                      style={{ width: "29px", height: "29px" }}
                    />
                  </button>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      resetFilters();
                    }}
                    className="bt_clear"
                    style={{
                      position: "static",
                      height: "70px",
                      display: "flex",
                      alignItems: "center",
                      color: "#ef4136",
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: 0,
                      textDecoration: "none",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      marginLeft: "10px",
                      order: 2,
                    }}
                    >
                    Clear All Filters
                  </a>
                </div>
              </div>
            </div>

            {/* Highlight filter chips - under the search bar */}
            <div
              className="secondary_filter"
              style={{
                position: "static",
                display: "flex",
                gap: "10px",
                marginTop: "15px",
                flexWrap: "wrap",
              }}
            >
              {highlightOptions.slice(0, 3).map((h) => {
                const iconMap: Record<string, string> = {
                  Security: "/icon-security-black.svg",
                  "Spa Area": "/icon-spa-black.svg",
                  Shopping: "/icon-shopping-black.svg",
                };
                return (
                  <button
                    key={h}
                    type="button"
                    onClick={() => toggleHighlight(h)}
                    className={`highlight-chip ${highlights.includes(h) ? "active" : ""}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "20px",
                      padding: "14px 30px",
                      backgroundColor: highlights.includes(h) ? "#fde2e1" : "#fff",
                      color: highlights.includes(h) ? "#ef4136" : "#010101",
                      border: "none",
                      borderRadius: "3px",
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: "14px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      minWidth: "140px",
                      height: "58px",
                    }}
                  >
                    <img
                      src={iconMap[h] || "/icon-security-black.svg"}
                      alt={h}
                      style={{ width: "30px", height: "30px" }}
                    />
                    {h}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* List View button - bottom-left of the map */}
        <div
          className="bt_list_view"
          style={{
            position: "absolute",
            bottom: "108px",
            left: 0,
            zIndex: 100,
            padding: "0 0 0 64px",
          }}
        >
          <Link
            href="/off-plan/search"
            className="list-view-btn"
            style={{
              display: "inline-block",
              backgroundColor: "#efefef",
              color: "#000",
              padding: "14px 30px",
              borderRadius: "3px",
              fontFamily: '"Poppins", sans-serif',
              fontSize: "18px",
              textDecoration: "none",
              transition: "0.2s",
            }}
          >
            List View
          </Link>
        </div>
      </section>
    </article>
  );
}
