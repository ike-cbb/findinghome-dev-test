"use client";

import { useState, useCallback } from "react";
import locations from "@/lib/locations.json";
import { FilterState, defaultFilters } from "@/lib/filter";

interface Props {
  onFilterChange: (filters: FilterState) => void;
}

export default function PropertySearchFilter({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const handleChange = useCallback(
    (key: keyof FilterState, value: string) => {
      const updated = { ...filters, [key]: value };
      setFilters(updated);
      onFilterChange(updated);
    },
    [filters, onFilterChange]
  );

  const selectClasses =
    "border-l border-[rgba(239,65,54,.2)] outline-none px-6 py-4 text-base font-[Poppins] bg-white appearance-none cursor-pointer hover:bg-[#fff8f8] transition-colors";
  const selectWrapperClasses = "relative";

  return (
    <div className="font-[Poppins]">
      <div className="flex flex-wrap items-center gap-0">
        {/* Filter inputs row */}
        <div className="flex-1 flex flex-wrap items-stretch rounded-[3px] shadow-[0_6px_20px_0_rgba(0,0,0,.16)] bg-white">
          {/* Search input */}
          <input
            type="text"
            placeholder="Search by name, community or developer"
            value={filters.search}
            onChange={(e) => handleChange("search", e.target.value)}
            className="flex-[2] min-w-[200px] outline-none border-none px-6 py-4 text-base font-[Poppins] bg-transparent"
          />

          {/* Community dropdown */}
          <div className={selectWrapperClasses} style={{ flex: "1", minWidth: "160px" }}>
            <select
              value={filters.community}
              onChange={(e) => handleChange("community", e.target.value)}
              className={`w-full rounded-none ${selectClasses}`}
              style={{
                backgroundImage: "url(/arrow-down.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90% center",
                backgroundSize: "10px",
                paddingRight: "40px",
              }}
            >
              {locations.communities.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          </div>

          {/* Bedrooms dropdown */}
          <div className={selectWrapperClasses} style={{ flex: "1", minWidth: "140px" }}>
            <select
              value={filters.bedrooms}
              onChange={(e) => handleChange("bedrooms", e.target.value)}
              className={`w-full rounded-none ${selectClasses}`}
              style={{
                backgroundImage: "url(/arrow-down.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90% center",
                backgroundSize: "10px",
                paddingRight: "40px",
              }}
            >
              {locations.bedrooms.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
          </div>

          {/* Price range dropdown */}
          <div className={selectWrapperClasses} style={{ flex: "1", minWidth: "140px" }}>
            <select
              value={filters.priceRange}
              onChange={(e) => handleChange("priceRange", e.target.value)}
              className={`w-full rounded-none ${selectClasses}`}
              style={{
                backgroundImage: "url(/arrow-down.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "90% center",
                backgroundSize: "10px",
                paddingRight: "40px",
              }}
            >
              {locations.priceRanges.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search button */}
        <button
          type="button"
          onClick={() => onFilterChange(filters)}
          className="flex-shrink-0 w-[65px] h-[58px] bg-[var(--color-primary)] rounded-[3px] flex items-center justify-center ml-5 my-2 hover:bg-[#d63629] transition-colors"
          aria-label="Search"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>

      {/* Advanced filters row */}
      <div className="flex flex-wrap items-center gap-4 mt-4">
        {/* Developer dropdown */}
        <div className={selectWrapperClasses} style={{ minWidth: "180px" }}>
          <select
            value={filters.developer}
            onChange={(e) => handleChange("developer", e.target.value)}
            className={`w-full rounded-[3px] border border-[#ddd] ${selectClasses}`}
            style={{
              backgroundImage: "url(/arrow-down.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "90% center",
              backgroundSize: "10px",
              paddingRight: "40px",
            }}
          >
            {locations.developers.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>

        {/* Completion year dropdown */}
        <div className={selectWrapperClasses} style={{ minWidth: "180px" }}>
          <select
            value={filters.completionYear}
            onChange={(e) => handleChange("completionYear", e.target.value)}
            className={`w-full rounded-[3px] border border-[#ddd] ${selectClasses}`}
            style={{
              backgroundImage: "url(/arrow-down.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "90% center",
              backgroundSize: "10px",
              paddingRight: "40px",
            }}
          >
            {locations.completionYears.map((y) => (
              <option key={y.value} value={y.value}>
                {y.label}
              </option>
            ))}
          </select>
        </div>

        {/* Clear filters */}
        {(filters.search ||
          filters.community !== "all" ||
          filters.bedrooms !== "all" ||
          filters.developer !== "all" ||
          filters.completionYear !== "all" ||
          filters.priceRange !== "all") && (
          <button
            type="button"
            onClick={() => {
              setFilters(defaultFilters);
              onFilterChange(defaultFilters);
            }}
            className="text-[#ef4136] text-sm font-medium underline hover:no-underline"
          >
            Clear all filters
          </button>
        )}
      </div>
    </div>
  );
}
