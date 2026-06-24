"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PropertySearchFilter from "@/components/PropertySearchFilter";
import PropertyCarousel from "@/components/PropertyCarousel";
import { listings, formatPrice } from "@/lib/data";
import { filterListings, FilterState, defaultFilters } from "@/lib/filter";

export default function OffPlanSearchPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredListings = useMemo(
    () => filterListings(listings, filters),
    [filters]
  );

  return (
    <article style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Header */}
      <section className="pt-12 lg:pt-16 pb-6 px-5">
        <div className="max-w-[1200px] mx-auto">
          {/* Filter Bar — matches WordPress .property_listing_search */}
          <div>
            <PropertySearchFilter onFilterChange={setFilters} />
          </div>
        </div>
      </section>

      {/* Listings — matches WordPress .property_listing .list_col */}
      <section className="pb-16 lg:pb-24 px-5">
        <div className="max-w-[1200px] mx-auto" style={{ position: "relative" }}>
          {filteredListings.length > 0 ? (
            <>
              <a
                className="back-to-map"
                href="/map"
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  fontSize: "16px",
                  fontWeight: 300,
                  color: "#b2b1aa",
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src="/arrow-down-gray.svg"
                    style={{ marginRight: "5px" }}
                    alt=""
                  />
                  Back to map view
                </span>
              </a>

              {filteredListings.map((property) => (
                <div
                  key={property.slug}
                  className="list-col flex flex-col md:flex-row"
                  style={{ marginBottom: "20px" }}
                >
                  {/* Image column — carousel matching WordPress .col_img */}
                  <PropertyCarousel
                    slug={property.slug}
                    images={[property.heroImage, ...property.galleryImages]}
                    alt={property.title}
                  />

                  {/* Details column — matches WordPress .col_txt .de_tails */}
                  <div
                    className="col-txt de-tails flex-1"
                    style={{ minWidth: 0 }}
                  >
                    <p
                      className="type"
                      style={{ fontSize: "14px", lineHeight: "21px", margin: 0 }}
                    >
                      {property.propertyType}
                    </p>
                    <p
                      className="pri-ce"
                      style={{
                        fontSize: "25px",
                        fontWeight: 500,
                        lineHeight: "37.5px",
                        margin: 0,
                      }}
                    >
                      AED {formatPrice(property.priceMin)}
                    </p>
                    <p
                      className="loca-tion"
                      style={{
                        fontSize: "18px",
                        fontWeight: 300,
                        lineHeight: "27px",
                        margin: "0 0 20px",
                      }}
                    >
                      {property.shortName}, {property.community}
                    </p>
                    <p
                      className="short-desc has-text-color"
                      style={{
                        color: "#00ac44",
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        margin: "0 0 20px",
                      }}
                    >
                      {property.amenitiesShort}
                    </p>
                    <p
                      className="si-ze"
                      style={{
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: "0 0 20px",
                        paddingTop: "10px",
                      }}
                    >
                      <span
                        className="flex items-center"
                        style={{ gap: "5px", marginRight: "10px", display: "inline-flex" }}
                      >
                        <svg width="19" height="23" viewBox="0 0 19 23" fill="none">
                          <path d="M1.5 9.5h16v-4a2 2 0 00-2-2h-12a2 2 0 00-2 2v4zm0 0v11a2 2 0 002 2h12a2 2 0 002-2V9.5m-13 3v3m3-3v3m4-3v3m3-3v3M3.5 6.5V4a1 1 0 011-1h2a1 1 0 011 1v2.5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>{" "}
                        {property.bedrooms} bedrooms
                      </span>{" "}
                      <span
                        className="flex items-center"
                        style={{ gap: "5px", marginRight: "10px", display: "inline-flex" }}
                      >
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none">
                          <path d="M1 9h18M3 9V5a2 2 0 012-2h2a2 2 0 012 2v4M1 9v8a2 2 0 002 2h14a2 2 0 002-2V9M5 3h3" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {property.bathrooms} bathrooms
                      </span>{" "}
                      <span
                        className="flex items-center"
                        style={{ gap: "5px", display: "inline-flex" }}
                      >
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
                          <rect x="1" y="1" width="21" height="21" rx="2" stroke="#000" strokeWidth="1.2"/>
                          <path d="M1 7h21M7 1v21" stroke="#000" strokeWidth="1.2"/>
                        </svg>
                        {property.area}
                      </span>
                    </p>
                    <p
                      className="short-desc2"
                      style={{ fontSize: "14px", lineHeight: "21px", margin: "0 0 20px" }}
                    >
                      <span>Developer: </span>
                      <strong>{property.developerName}</strong>
                    </p>
                    <div
                      className="bt-wraps"
                      style={{ paddingTop: "15px" }}
                    >
                      <div
                        className="bt-view flex items-center"
                        style={{ gap: "10px" }}
                      >
                        <Link
                          href={`/off-plan/${property.slug}/`}
                          className="wp-block-button__link"
                          style={{
                            borderRadius: "3px",
                            color: "#ef4136",
                            backgroundColor: "#fefefe",
                            padding: "8px 22px",
                            fontSize: "16px",
                            fontWeight: 500,
                            fontFamily: "'Poppins', sans-serif",
                            textDecoration: "none",
                            display: "inline-block",
                          }}
                        >
                          View Detail
                        </Link>
                        <a
                          href={`mailto:info@findinghome.ae?subject=${encodeURIComponent(property.title + " - " + property.community)}`}
                          className="wp-block-button__link"
                          style={{
                            borderRadius: "3px",
                            color: "#ef4136",
                            backgroundColor: "#fefefe",
                            padding: "8px 12px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
                            <rect x="0.5" y="0.5" width="24" height="19" rx="1.5" stroke="#ef4136" />
                            <path d="M0.5 3L12 11L24 3" stroke="#ef4136" strokeWidth="1.5" />
                          </svg>
                        </a>
                        <a
                          href={`https://wa.me/+971585839259?text=${encodeURIComponent(property.title + " - " + property.community + " Enquiry")}`}
                          target="_blank"
                          rel="noreferrer"
                          className="wp-block-button__link"
                          style={{
                            borderRadius: "3px",
                            color: "#fefefe",
                            backgroundColor: "#ef4136",
                            padding: "8px 12px",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="#fefefe">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.4.7 4.643 1.914 6.543L.396 23.604l5.243-1.382A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.1 0-4.05-.54-5.758-1.485l-.405-.228-3.12.822.84-3.044-.255-.405A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.5-7.5c-.3-.15-1.77-.873-2.044-.973-.275-.1-.475-.15-.675.15-.2.3-.775.973-.95 1.173-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.413-1.49-.892-.795-1.494-1.777-1.668-2.077-.175-.3-.018-.463.132-.613.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.627-.925-2.227-.243-.583-.49-.504-.675-.514-.173-.01-.375-.012-.575-.012s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502s1.075 2.902 1.225 3.102c.15.2 2.113 3.228 5.12 4.527.717.31 1.277.495 1.713.634.72.229 1.375.197 1.892.12.577-.087 1.77-.724 2.02-1.423.25-.7.25-1.3.175-1.423-.075-.125-.275-.2-.575-.35z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#898880] text-lg mb-4">
                No properties match your search criteria.
              </p>
              <button
                type="button"
                onClick={() => setFilters(defaultFilters)}
                className="text-[#ef4136] font-medium underline hover:no-underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
