"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import locations from "@/lib/locations.json";
import { FilterState, defaultFilters } from "@/lib/filter";

interface Props {
  onFilterChange: (filters: FilterState) => void;
}

interface DropdownOption {
  value: string;
  label: string;
}

function CompletionTimePopover({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031];

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
    onChange(year.toString());
  };

  const label =
    selectedMonth || selectedYear > 0
      ? [selectedMonth, selectedYear > 0 ? selectedYear : ""].filter(Boolean).join(" ")
      : "Completion Time";

  const isActive = selectedMonth !== null || selectedYear > 0;

  return (
    <div ref={ref} style={{ position: "relative", width: "199px", flex: "0 0 auto", minWidth: 0 }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          borderLeft: "1px solid rgba(239,65,54,.2)",
          padding: "15px 40px 15px 25px",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: isActive ? "rgb(253, 226, 225)" : "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundImage: "url(/arrow-down.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(100% - 10px) center",
          backgroundSize: "10px",
          userSelect: "none",
        }}
      >
        {label}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            zIndex: 10000,
            width: "415px",
            padding: "20px",
            borderRadius: "3px",
            boxShadow: "0px 6px 20px 0px rgba(0,0,0,.16)",
            backgroundColor: "#fff",
          }}
        >
          {/* Month grid */}
          <div className="flex flex-wrap" style={{ marginBottom: "10px" }}>
            {months.map((m) => (
              <div
                key={m}
                onClick={() => setSelectedMonth(prev => prev === m ? null : m)}
                style={{
                  width: "50px",
                  height: "40px",
                  margin: "0 6px 15px",
                  padding: "11px 0 12px",
                  borderRadius: "4px",
                  border: `1px solid ${selectedMonth === m ? "#ef4136" : "#707070"}`,
                  cursor: "pointer",
                  backgroundColor: selectedMonth === m ? "#fde2e1" : "transparent",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "16px",
                    textAlign: "center",
                    color: "#000",
                    fontFamily: "'Source Sans Pro', sans-serif",
                  }}
                >
                  {m}
                </span>
              </div>
            ))}
          </div>

          {/* Year slider */}
          <div style={{ position: "relative", padding: "0 15px", height: "60px" }}>
            <div
              style={{
                position: "relative",
                height: "4px",
                backgroundColor: "#e0e0e0",
                borderRadius: "2px",
                marginTop: "8px",
              }}
            >
              {selectedYear > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    height: "100%",
                    left: 0,
                    width: `${(years.indexOf(selectedYear) / 8) * 100}%`,
                    backgroundColor: "#ef4136",
                    borderRadius: "2px",
                  }}
                />
              )}
              {years.map((y, idx) => (
                <div
                  key={y}
                  onClick={() => handleYearChange(y)}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${(idx / 8) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    backgroundColor: selectedYear >= y && selectedYear > 0 ? "#ef4136" : "#e0e0e0",
                    cursor: "pointer",
                  }}
                />
              ))}
              {selectedYear > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: `${(years.indexOf(selectedYear) / 8) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    backgroundColor: "#ef4136",
                    boxShadow: "0 0 0 8px rgba(239,65,54,.15)",
                  }}
                />
              )}
            </div>

            {years.map((y, idx) => (
              <span
                key={`yl-${y}`}
                onClick={() => handleYearChange(y)}
                style={{
                  position: "absolute",
                  top: "22px",
                  left: `${(idx / 8) * 100}%`,
                  transform: "translateX(-50%)",
                  fontSize: "14px",
                  fontFamily: "'Poppins', sans-serif",
                  color: selectedYear === y ? "#ef4136" : "#010101",
                  cursor: "pointer",
                  opacity: selectedYear === y ? 1 : 0.6,
                }}
              >
                {y}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PriceFilterPopover({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const label =
    value[0] === 0 && value[1] === 10
      ? "Price"
      : `AED ${value[0]}M - ${value[1] === 10 ? "10M+" : value[1] + "M"}`;

  const isActive = value[0] !== 0 || value[1] !== 10;

  return (
    <div ref={ref} style={{ position: "relative", flex: "1", minWidth: 0 }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          borderLeft: "1px solid rgba(239,65,54,.2)",
          padding: "15px 40px 15px 25px",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: isActive ? "rgb(253, 226, 225)" : "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundImage: "url(/arrow-down.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(100% - 10px) center",
          backgroundSize: "10px",
          userSelect: "none",
        }}
      >
        {label}
      </div>

      {/* Popover */}
      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
            borderRadius: "3px",
            padding: "10px 30px",
            width: "480px",
          }}
        >
          <PriceRangeSlider min={min} max={max} value={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
}: {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}) {
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const marks = Array.from({ length: 11 }, (_, i) => i);

  const getLeft = (val: number) => `${((val - 0) / 10) * 100}%`;

  const handleMouseDown = (thumb: "min" | "max") => (e: React.MouseEvent) => {
    e.preventDefault();
    setDragging(thumb);
  };

  useEffect(() => {
    if (!dragging || !trackRef.current) return;
    const track = trackRef.current;

    const handleMove = (e: MouseEvent) => {
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const val = Math.round(pct * 10);

      const newValue: [number, number] = [...value];
      if (dragging === "min") {
        newValue[0] = Math.min(val, value[1]);
      } else {
        newValue[1] = Math.max(val, value[0]);
      }
      onChange(newValue);
    };

    const handleUp = () => setDragging(null);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [dragging, value, onChange]);

  return (
    <div style={{ position: "relative", flex: "1", minWidth: "200px", display: "flex", alignItems: "center", padding: "15px 0" }}>
      <div
        ref={trackRef}
        style={{
          position: "relative",
          width: "100%",
          height: "4px",
          backgroundColor: "#e0e0e0",
          borderRadius: "2px",
        }}
      >
        {/* Track fill */}
        <div
          style={{
            position: "absolute",
            top: 0,
            height: "100%",
            left: getLeft(value[0]),
            width: `${((value[1] - value[0]) / 10) * 100}%`,
            backgroundColor: "#ef4136",
            borderRadius: "2px",
          }}
        />

        {/* Marks */}
        {marks.map((m) => (
          <div
            key={m}
            style={{
              position: "absolute",
              top: "50%",
              left: getLeft(m),
              transform: "translate(-50%, -50%)",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: m >= value[0] && m <= value[1] ? "#ef4136" : "#e0e0e0",
            }}
          />
        ))}

        {/* Thumbs */}
        <div
          onMouseDown={handleMouseDown("min")}
          style={{
            position: "absolute",
            top: "50%",
            left: getLeft(value[0]),
            transform: "translate(-50%, -50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: "#ef4136",
            cursor: "pointer",
            zIndex: 2,
            boxShadow: "0 0 0 8px rgba(239,65,54,.15)",
          }}
        />
        <div
          onMouseDown={handleMouseDown("max")}
          style={{
            position: "absolute",
            top: "50%",
            left: getLeft(value[1]),
            transform: "translate(-50%, -50%)",
            width: "18px",
            height: "18px",
            borderRadius: "50%",
            backgroundColor: "#ef4136",
            cursor: "pointer",
            zIndex: 2,
            boxShadow: "0 0 0 8px rgba(239,65,54,.15)",
          }}
        />

        {/* Labels */}
        {marks.map((m) => (
          <span
            key={`label-${m}`}
            style={{
              position: "absolute",
              top: "14px",
              left: getLeft(m),
              transform: "translateX(-50%)",
              fontSize: "12px",
              fontFamily: "'Poppins', sans-serif",
              color: m >= value[0] && m <= value[1] ? "#010101" : "#898880",
            }}
          >
            {m === 0 ? "<1M" : m === 10 ? ">10M" : `${m}M`}
          </span>
        ))}
      </div>
      <p style={{ margin: "0 0 0 10px", fontSize: "14px", fontFamily: "'Poppins', sans-serif", whiteSpace: "nowrap" }}>(AED)</p>
    </div>
  );
}

function FilterDropdown({
  value,
  options,
  onChange,
  width,
}: {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selectedLabel = options.find((o) => o.value === value)?.label ?? "";
  const isActive = value !== "all";

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", width: width || undefined, flex: width ? "0 0 auto" : "1", minWidth: 0 }}>
      {/* Trigger */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          borderLeft: "1px solid rgba(239,65,54,.2)",
          padding: "15px 40px 15px 25px",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: isActive ? "rgb(253, 226, 225)" : "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: "100%",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundImage: "url(/arrow-down.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "calc(100% - 10px) center",
          backgroundSize: "10px",
          userSelect: "none",
        }}
      >
        {selectedLabel}
      </div>

      {/* Dropdown menu */}
      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 1000,
            backgroundColor: "#fff",
            boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
            borderRadius: "0 0 3px 3px",
            listStyle: "none",
            margin: 0,
            padding: "8px 0",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              style={{
                padding: "10px 25px",
                fontSize: "16px",
                cursor: "pointer",
                borderBottom: "1px solid rgba(239,65,54,.3)",
                backgroundColor: option.value === value ? "#fde2e1" : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#fde2e1";
              }}
              onMouseLeave={(e) => {
                if (option.value !== value) {
                  (e.target as HTMLElement).style.backgroundColor = "transparent";
                }
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function PropertySearchFilter({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10]);

  const handleChange = useCallback(
    (key: keyof FilterState, value: string) => {
      const updated = { ...filters, [key]: value };
      setFilters(updated);
      onFilterChange(updated);
    },
    [filters, onFilterChange]
  );

  const handlePriceChange = useCallback(
    (range: [number, number]) => {
      setPriceRange(range);
      const maxPrice = range[1] === 10 ? 99999999 : range[1] * 1000000;
      const priceFilterValue = `${range[0] * 1000000}-${maxPrice}`;
      const updated = { ...filters, priceRange: priceFilterValue };
      setFilters(updated);
      onFilterChange(updated);
    },
    [filters, onFilterChange]
  );

  const handleClear = useCallback(() => {
    setFilters(defaultFilters);
    setPriceRange([0, 10]);
    onFilterChange(defaultFilters);
  }, [onFilterChange]);

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif" }}>
      {/* Filter bar — matches WordPress .search-input-fields */}
      <div
        className="flex items-stretch"
        style={{
          borderRadius: "3px",
          boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
          backgroundColor: "#fff",
          padding: "0 15px",
        }}
      >
        {/* Search input */}
        <input
          type="text"
          placeholder="eg. Dubai Marina"
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          style={{
            width: "35%",
            minWidth: "0",
            outline: "none",
            border: "none",
            padding: "15px 30px",
            fontSize: "16px",
            fontFamily: "'Poppins', sans-serif",
            backgroundColor: "transparent",
          }}
        />

        {/* Property Type dropdown */}
        <FilterDropdown
          value={filters.propertyType}
          options={locations.propertyTypes}
          onChange={(v) => handleChange("propertyType", v)}
        />

        {/* Bedrooms dropdown */}
        <FilterDropdown
          value={filters.bedrooms}
          options={locations.bedrooms}
          onChange={(v) => handleChange("bedrooms", v)}
        />

        {/* Price filter — popover with slider */}
        <PriceFilterPopover
          min={0}
          max={10}
          value={priceRange}
          onChange={handlePriceChange}
        />

        {/* Completion Time popover */}
        <CompletionTimePopover
          value={filters.completionYear}
          onChange={(v) => handleChange("completionYear", v)}
        />

        {/* Search button — inside the filter bar matching live */}
        <a
          onClick={() => onFilterChange(filters)}
          style={{
            flexShrink: 0,
            width: "52px",
            height: "50px",
            backgroundColor: "#ef4136",
            borderRadius: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
            marginTop: "10px",
            marginBottom: "10px",
            cursor: "pointer",
          }}
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
        </a>
      </div>

      {/* Clear All Filters link — below the filter row, aligned right */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "12px",
        }}
      >
        <a
          onClick={handleClear}
          style={{
            fontSize: "14px",
            color: "#898880",
            fontFamily: "'Poppins', sans-serif",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Clear All Filters
        </a>
      </div>
    </div>
  );
}
