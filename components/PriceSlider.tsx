"use client";

import { useState, useEffect, useRef } from "react";

interface PriceSliderProps {
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

const MARKS = [
  { val: 0, label: "<1M" },
  { val: 1, label: "1M" },
  { val: 2, label: "2M" },
  { val: 3, label: "3M" },
  { val: 4, label: "4M" },
  { val: 5, label: "5M" },
  { val: 6, label: "6M" },
  { val: 7, label: "7M" },
  { val: 8, label: "8M" },
  { val: 9, label: "9M" },
  { val: 10, label: ">10M" },
];

function PriceRangeSlider({ value, onChange }: PriceSliderProps) {
  const [dragging, setDragging] = useState<"min" | "max" | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const getLeft = (val: number) => `${(val / 10) * 100}%`;

  const handleMouseDown = (thumb: "min" | "max") => (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(thumb);
  };

  useEffect(() => {
    if (!dragging || !trackRef.current) return;
    const track = trackRef.current;

    const handleMove = (e: MouseEvent) => {
      const rect = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const val = Math.round(pct * 10);

      const newValue: [number, number] = [value[0], value[1]];
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
    <div
      style={{
        position: "relative",
        minWidth: "200px",
        padding: "20px 0 30px",
      }}
    >
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

        {MARKS.map((m) => (
          <div
            key={m.val}
            style={{
              position: "absolute",
              top: "50%",
              left: getLeft(m.val),
              transform: "translate(-50%, -50%)",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: m.val >= value[0] && m.val <= value[1] ? "#ef4136" : "#e0e0e0",
            }}
          />
        ))}

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
      </div>

      {MARKS.map((m) => (
        <span
          key={`label-${m.val}`}
          style={{
            position: "absolute",
            top: "22px",
            left: getLeft(m.val),
            transform: "translateX(-50%)",
            fontSize: "12px",
            color: m.val === value[0] || m.val === value[1] ? "#ef4136" : "#666",
            fontFamily: "'Poppins', sans-serif",
            fontWeight: m.val === value[0] || m.val === value[1] ? 600 : 400,
          }}
        >
          {m.label}
        </span>
      ))}
    </div>
  );
}

export default function PriceSlider({ value, onChange }: PriceSliderProps) {
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
    <div
      ref={ref}
      style={{
        position: "relative",
        width: "200px",
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
        {label}
      </div>

      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 10000,
            backgroundColor: "#fff",
            boxShadow: "0 6px 20px 0 rgba(0,0,0,.16)",
            borderRadius: "3px",
            padding: "10px 30px",
            width: "480px",
            transform: "translateX(0)",
          }}
        >
          <div
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "14px",
              color: "#666",
              marginBottom: "5px",
            }}
          >
            (AED)
          </div>
          <PriceRangeSlider value={value} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
