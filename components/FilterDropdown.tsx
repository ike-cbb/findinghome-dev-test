"use client";

import { useState, useEffect, useRef } from "react";

interface DropdownOption {
  value: string;
  label: string;
}

interface FilterDropdownProps {
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  width?: string;
  placeholder?: string;
}

export default function FilterDropdown({
  value,
  options,
  onChange,
  width = "190px",
  placeholder,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);
  const displayLabel = selected && selected.value !== "All"
    ? selected.label
    : (selected?.label || placeholder || "");
  const isActive = selected && selected.value !== "All";

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
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        flex: "0 0 auto",
        minWidth: 0,
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          border: "none",
          borderLeft: "1px solid rgba(239,65,54,.3)",
          padding: "10px 32px 10px 14px",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: isActive ? "rgb(253, 226, 225)" : "#fff",
          color: "rgba(0, 0, 0, 0.87)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          height: "40px",
          boxSizing: "border-box",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          backgroundImage: "url(/arrow-down.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 14px center",
          backgroundSize: "10px",
          userSelect: "none",
        }}
      >
        {displayLabel}
      </div>

      {open && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 10000,
            listStyle: "none",
            margin: 0,
            padding: 0,
            minWidth: "100%",
            backgroundColor: "#fff",
            boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
          }}
        >
          {options.map((opt) => {
            const isSelected = opt.value === value;
            return (
              <li
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                data-value={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "16px",
                  padding: "10px 14px",
                  borderBottom: "1px solid rgba(239,65,54,.3)",
                  backgroundColor: isSelected ? "rgb(253, 226, 225)" : "transparent",
                  cursor: "pointer",
                  color: "rgba(0, 0, 0, 0.87)",
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "rgb(253, 226, 225)";
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                {opt.label}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
