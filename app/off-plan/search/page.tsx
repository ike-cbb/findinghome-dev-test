"use client";

import { useState, useMemo } from "react";
import { ListingCardGrid } from "@/components/ListingCard";
import PropertySearchFilter from "@/components/PropertySearchFilter";
import { listings } from "@/lib/data";
import { filterListings, FilterState, defaultFilters } from "@/lib/filter";

export default function OffPlanSearchPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filteredListings = useMemo(
    () => filterListings(listings, filters),
    [filters]
  );

  return (
    <article>
      <section className="py-12 lg:py-16 px-5">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-4">
              Off-Plan
            </p>
            <h1 className="text-3xl lg:text-5xl font-normal text-[#010101] mb-4 leading-tight">
              Find Your Future Home
            </h1>
            <p className="text-[#898880] text-lg mb-8">
              Browse {listings.length} off-plan properties available in Dubai
            </p>

            {/* Filter Form */}
            <PropertySearchFilter onFilterChange={setFilters} />
          </div>
        </div>
      </section>

      <section className="pb-16 lg:pb-24 px-5">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            {filteredListings.length > 0 ? (
              <>
                <p className="text-[#898880] text-base mb-8">
                  Showing {filteredListings.length} of {listings.length}{" "}
                  {filteredListings.length === 1 ? "property" : "properties"}
                </p>
                <ListingCardGrid properties={filteredListings} />
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
        </div>
      </section>
    </article>
  );
}
