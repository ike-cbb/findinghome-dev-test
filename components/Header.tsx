"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/off-plan", label: "Off-plan" },
  { href: "/about-us", label: "About" },
  { href: "/guide/what-is-off-plan-and-why-you-need-to-invest-in-dubai", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";

  useEffect(() => {
    function check() {
      setIsMobile(window.innerWidth < 991);
    }
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header className={`Header_header__Z8PUO ${isHome ? "home" : "sub-page"}`}>
      <a className="SkipNavigationLink_component__2dvdu sr-only" href="#main-content">
        Skip To Main Content
      </a>
      <div className="container">
        <div className="Header_bar__L8CDF">
          <div className="Header_logo__gECVj">
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
          <button
            type="button"
            className="Header_nav-toggle__j4Yq8"
            aria-label="Toggle navigation"
            aria-controls="Header_primary-navigation__XhPd1"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="toggleBar">
              <span className="top"></span>
              <span className="middle"></span>
              <span className="bottom"></span>
            </span>
          </button>
          <nav className="Header_primary-navigation__XhPd1" role="navigation" aria-label="Header Menu menu">
            <ul className="menu">
              {navLinks.map((link) => (
                <li key={link.href} className={`menu-${Buffer.from(link.href).toString("base64")}`}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="Header_right_item__zzhTs" style={{ display: "none" }}>
            <ul>
              <li className="Header_fav__PwdHe">
                <Link href="#">
                  <Image src="/icon-favorite.svg" alt="favorite" width={22} height={22} />
                  <span className="Header_num__BcFpt">3</span>
                </Link>
              </li>
              <li className="Header_login__2FMXY">
                <Link href="#">
                  Login <Image src="/icon-user.svg" alt="Login" width={22} height={22} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
