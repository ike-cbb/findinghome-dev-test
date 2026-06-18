"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/off-plan", label: "Off-plan" },
  { href: "/about-us", label: "About" },
  { href: "/guide/what-is-off-plan-and-why-you-need-to-invest-in-dubai", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 991);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-white)",
        fontFamily: '"SourceSansPro", sans-serif',
        zIndex: 10,
        width: "100%",
        padding: "0 5%",
        position: "relative",
      }}
    >
      <a className="sr-only" href="#main-content">
        Skip To Main Content
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "nowrap",
          padding: "1.6rem 0",
          gap: "5rem",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <div style={{ width: "190px", flexShrink: 0 }}>
          <Link title="Home" href="/">
            <Image
              src="/findinghome-logo.svg"
              alt="FindingHome logo"
              width={190}
              height={32}
              priority
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop navigation — visible ≥ 991px */}
        <nav
          style={{
            display: isMobile ? "none" : "block",
            width: "60%",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              listStyle: "none",
              fontSize: "1.4rem",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href} style={{ margin: "0 0.5rem" }}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: '"SourceSansPro", sans-serif',
                    display: "inline-flex",
                    alignItems: "center",
                    height: "100%",
                    fontWeight: 600,
                    fontSize: "18px",
                    padding: "1rem 1rem",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger toggle — visible < 991px */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-controls="mobile-nav"
          aria-expanded={mobileOpen}
          style={{
            display: isMobile ? "flex" : "none",
            alignItems: "center",
            margin: 0,
            marginRight: "2%",
            padding: 0,
            backgroundColor: "transparent",
            color: "var(--color-white)",
            border: "none",
            cursor: "pointer",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <rect y="4" width="24" height="2" rx="1" />
            <rect y="11" width="24" height="2" rx="1" />
            <rect y="18" width="24" height="2" rx="1" />
          </svg>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {isMobile && mobileOpen && (
        <nav
          id="mobile-nav"
          style={{
            position: "absolute",
            backgroundColor: "#ef4136",
            top: "100%",
            left: 0,
            right: 0,
            width: "100%",
            padding: "30px 5%",
            zIndex: 5,
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              listStyle: "none",
              fontSize: "1.4rem",
              margin: 0,
              padding: 0,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: '"SourceSansPro", sans-serif',
                    fontWeight: 600,
                    fontSize: "18px",
                    padding: "1rem 2rem",
                    color: "var(--color-white)",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
