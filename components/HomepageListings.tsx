"use client";

import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Link from "next/link";

const communities = [
  { value: "all", label: "Dubai", count: listings.length },
  { value: "DAMAC Lagoons", label: "DAMAC Lagoons", count: listings.filter((l) => l.community === "DAMAC Lagoons").length },
  { value: "DAMAC - Hills", label: "DAMAC Hills", count: listings.filter((l) => l.community === "DAMAC - Hills").length },
  { value: "Jumeirah Lake Towers", label: "Jumeirah Lake Towers", count: listings.filter((l) => l.community === "Jumeirah Lake Towers").length },
  { value: "Business Bay", label: "Business Bay", count: listings.filter((l) => l.community === "Business Bay").length },
];

const triggerBaseStyle = {
  fontSize: "inherit",
  minHeight: "auto",
  padding: "10px 30px 10px 0",
  backgroundImage: "url(/arrow-down.svg)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "100% center",
  backgroundSize: "12px",
} as const;

export default function HomepageListings() {
  const [community, setCommunity] = useState("all");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const filtered = useMemo(() => {
    if (community === "all") return listings;
    return listings.filter((l) => l.community === community);
  }, [community]);

  const selectedOption = communities.find((c) => c.value === community) || communities[0];

  const handleSelect = useCallback((value: string) => {
    setCommunity(value);
    setOpen(false);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <section className="py-24 lg:py-32 px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="h-10" />

        {/* "Finding a new home in [dropdown]" */}
        <h3
          className="text-[#010101] font-medium mb-10 flex items-baseline flex-wrap"
          style={{
            fontSize: "clamp(30px, -9.23136px + 1.875rem + 1.202vw, 40px)",
          }}
        >
          <span className="whitespace-nowrap">Finding a new home in&nbsp;</span>
          <span ref={containerRef} className="relative inline-flex" style={{ marginTop: "4px" }}>
            {/* Trigger */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-haspopup="listbox"
              className="appearance-none outline-none bg-transparent cursor-pointer text-inherit font-medium border-0 border-b border-dashed border-[#ef4136] rounded-none whitespace-nowrap"
              style={triggerBaseStyle}
            >
              {selectedOption.label}{" "}
              <span className="font-normal">({selectedOption.count})</span>
            </button>

            {/* Dropdown menu */}
            {open && (
              <div
                className="absolute top-full left-7 z-50"
                style={{ minWidth: "240px" }}
              >
                <ul
                  className="bg-white m-0 p-0 list-none"
                  role="listbox"
                  style={{ boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)" }}
                >
                  {communities.map((c) => {
                    const isSelected = c.value === community;
                    return (
                      <li
                        key={c.value}
                        role="option"
                        aria-selected={isSelected}
                        onClick={() => handleSelect(c.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelect(c.value);
                          }
                        }}
                        tabIndex={0}
                        className="cursor-pointer font-[Poppins] px-5 transition-colors"
                        style={{
                          fontSize: "14px",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                          borderBottom:
                            c.value === communities[communities.length - 1].value
                              ? "none"
                              : "1px solid rgba(239,65,54,.3)",
                          background: isSelected ? "#fde2e1" : "#fff",
                        }}
                        onMouseEnter={(e) => {
                          if (!isSelected) {
                            (e.currentTarget as HTMLElement).style.background = "#fde2e1";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!isSelected) {
                            (e.currentTarget as HTMLElement).style.background = "#fff";
                          }
                        }}
                      >
                        {c.label}{" "}
                        <span>({c.count})</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </span>
        </h3>

        <ListingCardGrid properties={filtered.slice(0, 3)} />

        <div className="flex justify-center mt-10">
          <Link
            href="/off-plan"
            className="inline-block px-10 py-4 bg-[#ef4136] text-white font-medium rounded-[3px] hover:bg-[#d63629] hover:rounded-[15px] transition-all"
          >
            See All Off-Plan Properties
          </Link>
        </div>
      </div>
    </section>
  );
}
