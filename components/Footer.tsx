import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="Footer_footer__Dhw_9">
      <div className="container">
        <div className="Footer_ftr_wrap__jQ_SG">
          <div className="ftr_contact ftr_item">
            <div className="item">
              <span>E-MAIL</span>
              <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
            </div>
            <div className="item">
              <span>
                <a
                  className="whatsapp-label"
                  href="https://wa.me/+971585839259/"
                  target="_blank"
                  rel="noreferrer"
                >
                  WHATSAPP
                </a>
              </span>
              <a href="https://wa.me/+971585839259/" target="_blank" rel="noreferrer">
                +971 58 583 9259
              </a>
            </div>
          </div>

          <div className="ftr_menu ftr_item">
            <span>BUY</span>
            <ul>
              <li>
                <Link href="/off-plan">Off-Plan &amp; Investment</Link>
              </li>
              <li>
                <Link href="/guide/what-is-off-plan-and-why-you-need-to-invest-in-dubai">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link href="/off-plan/search">All Off-plan projects</Link>
              </li>
            </ul>
          </div>

          <div className="ftr_menu ftr_item">
            <span>LINKS</span>
            <nav className="Footer_nav__Yc_eW" role="navigation" aria-label="Footer Links Menu menu">
              <ul className="menu">
                <li className="menu-cG9zdDo2NQ==">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="menu-cG9zdDo2NA==">
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="social-links ftr_item">
            <span>SOCIAL</span>
            <ul aria-label="Social media">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  href="https://www.linkedin.com/company/findinghomerealestate/"
                >
                  <Image src="/icon-linkedin.svg" alt="Linkedin" width={22} height={22} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  href="https://www.instagram.com/finding_home_real_estate/"
                >
                  <Image src="/icon-instagram.svg" alt="Instagram" width={22} height={22} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link"
                  href="https://www.facebook.com/profile.php?id=100088725196016"
                >
                  <Image src="/icon-facebook.svg" alt="Facebook" width={22} height={22} />
                </a>
              </li>
            </ul>
          </div>

          <div className="coming-soon-footer">
            <h2 className="has-text-color coming-soon-title">Coming Soon</h2>
            <p className="has-text-color coming-soon-text">
              Discover a new way of buying, selling and renting your home with Finding Home. With a
              unique philosophy and approach, find out more about the team behind Finding Home.
            </p>
          </div>
        </div>

        <div className="Footer_copyright__lw16R">
          <div className="Footer_logo_item__mznsz">
            <Link href="/">
              <Image
                src="/findinghome-logo.svg"
                alt="Finding Home logo"
                width={260}
                height={44}
              />
            </Link>
          </div>
          <p className="copy">
            <span>© {currentYear} Finding Home Real Estate LLC | </span>
            <span>
              Created by{" "}
              <a href="https://createdbyblack.com/" target="_blank" rel="noopener noreferrer">
                Black
              </a>
            </span>
            <span className="terms">
              <Link href="/terms-and-condition">Terms &amp; Conditions</Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </span>
            <span className="licen_se">
              Trade license no. 667149 | RERA ORN no. 34028 | Advertisement Permit no 1132647167
            </span>
          </p>
        </div>
      </div>

      <div className="floating_whatsapp">
        <a href="https://wa.me/+971585839259/" target="_blank" rel="noreferrer">
          <Image
            src="/floating-whatsapp.webp"
            alt="Whatsapp logo"
            width={50}
            height={50}
          />
        </a>
      </div>
    </footer>
  );
}
