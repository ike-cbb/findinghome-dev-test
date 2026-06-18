import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        backgroundColor: "var(--color-primary)",
        fontFamily: '"SourceSansPro", sans-serif',
        fontWeight: 400,
        padding: "80px 3rem",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 5%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            paddingBottom: "50px",
            gap: "2rem",
          }}
        >
          {/* Contact */}
          <div
            style={{
              flexBasis: "50%",
              fontFamily: '"Poppins", sans-serif',
              minWidth: "280px",
            }}
          >
            <div className="mb-10 text-[30px] lg:text-[35px]">
              <span
                style={{
                  display: "block",
                  fontSize: "18px",
                  marginBottom: "0",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  opacity: 0.7,
                }}
              >
                E-MAIL
              </span>
              <a
                href="mailto:info@findinghome.ae"
                style={{
                  color: "#fff",
                  opacity: 0.7,
                  textDecoration: "none",
                  borderBottom: "1px dashed",
                  paddingBottom: "1px",
                  fontSize: "28px",
                }}
              >
                info@findinghome.ae
              </a>
            </div>
            <div className="text-[30px] lg:text-[35px]">
              <span
                style={{
                  display: "block",
                  fontSize: "18px",
                  marginBottom: "0",
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  opacity: 0.7,
                }}
              >
                <a
                  href="https://wa.me/+971585839259/"
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-label"
                  style={{
                    color: "#fff",
                    opacity: 0.7,
                    textDecoration: "none",
                    border: "none",
                    fontSize: "18px",
                  }}
                >
                  WHATSAPP
                </a>
              </span>
              <a
                href="https://wa.me/+971585839259/"
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#fff",
                  opacity: 0.7,
                  textDecoration: "none",
                  borderBottom: "1px dashed",
                  paddingBottom: "1px",
                  fontSize: "28px",
                }}
              >
                +971 58 583 9259
              </a>
            </div>
          </div>

          {/* BUY */}
          <div style={{ flexBasis: "15%", minWidth: "160px" }}>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                marginBottom: "1rem",
                fontFamily: '"Poppins", sans-serif',
                opacity: 0.7,
              }}
            >
              BUY
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1.2rem", fontSize: "16px" }}>
                <Link
                  href="/off-plan"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none", fontSize: "18px" }}
                >
                  Off-Plan &amp; Investment
                </Link>
              </li>
              <li style={{ marginBottom: "1.2rem", fontSize: "16px" }}>
                <Link
                  href="/guide/what-is-off-plan-and-why-you-need-to-invest-in-dubai"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none", fontSize: "18px" }}
                >
                  Investment Guide
                </Link>
              </li>
              <li style={{ marginBottom: "1.2rem", fontSize: "16px" }}>
                <Link
                  href="/off-plan/search"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none", fontSize: "18px" }}
                >
                  All Off-plan projects
                </Link>
              </li>
            </ul>
          </div>

          {/* LINKS */}
          <div style={{ flexBasis: "15%", minWidth: "160px" }}>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                marginBottom: "1rem",
                fontFamily: '"Poppins", sans-serif',
                opacity: 0.7,
              }}
            >
              LINKS
            </span>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1.2rem", fontSize: "16px" }}>
                <Link
                  href="/about-us"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none", fontSize: "18px" }}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: "1.2rem", fontSize: "16px" }}>
                <Link
                  href="/contact"
                  style={{ color: "#fff", opacity: 0.7, textDecoration: "none", fontSize: "18px" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div style={{ flexBasis: "18%", minWidth: "160px" }}>
            <span
              style={{
                display: "block",
                fontSize: "18px",
                marginBottom: "1rem",
                fontFamily: '"Poppins", sans-serif',
                opacity: 0.7,
              }}
            >
              SOCIAL
            </span>
            <ul
              aria-label="Social media"
              style={{
                display: "inline-flex",
                listStyle: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <li style={{ margin: "0 18px 0 0", opacity: 0.7 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/findinghomerealestate/"
                  style={{
                    display: "flex",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/icon-linkedin.svg"
                    alt="Linkedin"
                    width={22}
                    height={22}
                  />
                </a>
              </li>
              <li style={{ margin: "0 18px 0 0", opacity: 0.7 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/finding_home_real_estate/"
                  style={{
                    display: "flex",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/icon-instagram.svg"
                    alt="Instagram"
                    width={22}
                    height={22}
                  />
                </a>
              </li>
              <li style={{ margin: "0 18px 0 0", opacity: 0.7 }}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/profile.php?id=100088725196016"
                  style={{
                    display: "flex",
                    color: "#fff",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/icon-facebook.svg"
                    alt="Facebook"
                    width={22}
                    height={22}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
