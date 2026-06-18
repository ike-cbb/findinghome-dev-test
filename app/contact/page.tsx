import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <article>
            {/* Head Office */}
            <section className="gb-block-container alignfull contact_intro" style={{ padding: "20% 5% 5%" }}>
              <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                <p className="tag" style={{ color: "#ef4136", fontSize: "18px" }}>
                  Contact Us
                </p>
                <h1 style={{ color: "#010101", fontSize: "6rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', lineHeight: 1.1 }}>
                  Head Office
                </h1>
                <div className="contact_details" style={{ marginTop: "1.5rem" }}>
                  <p style={{ color: "#010101", fontSize: "16px" }}>
                    <span style={{ display: "block", marginBottom: "20px" }}>
                      Phone: <a href="tel:+971557011419" style={{ color: "var(--color-primary)" }}>+971 55 701 1419</a> |{" "}
                      Email: <a href="mailto:info@findinghome.ae" style={{ color: "var(--color-primary)" }}>info@findinghome.ae</a>
                    </span>
                  </p>
                  <p style={{ color: "#010101", fontSize: "16px" }}>
                    Office Hours (Contact only) 9am &ndash; 6pm
                    <br />
                    Green corner office building no 503 &ndash; Al Rigga Rd &ndash; Dubai
                    <br />
                    P.O Box 440580
                  </p>
                </div>
              </div>
            </section>

            {/* Meet the Team */}
            <section className="gb-block-container alignfull sec_team" style={{ padding: "5% 5% 0" }}>
              <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                <div id="meet-the-team" />
                <div className="wp-block-columns" style={{ gap: "2rem" }}>
                  <div className="wp-block-column col_txt">
                    <h2 id="agents" style={{ color: "#010101", fontSize: "4rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif' }}>
                      Meet the Team
                    </h2>
                    <p style={{ color: "#010101", fontSize: "2.2rem", fontWeight: 400, lineHeight: 1.4, fontFamily: '"Poppins", sans-serif', marginTop: "1rem" }}>
                      Each Finding Home agent lives and breathes our values and
                      practices our culture each and every day. We hand select the
                      best of the best &ndash; those rare diamonds that will go
                      the extra mile for our clients.
                    </p>
                    <div className="wp-block-buttons" style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                      <div style={{ flex: 1 }}>
                        <Link href="#" className="wp-block-button__link" style={{ display: "block", width: "100%", textAlign: "center" }}>Contact Sales</Link>
                      </div>
                      <div style={{ flex: 1 }}>
                        <Link href="#" className="wp-block-button__link" style={{ display: "block", width: "100%", textAlign: "center", backgroundColor: "#fde2e1", color: "#ef4136" }}>Join Us</Link>
                      </div>
                    </div>
                  </div>

                  <div className="wp-block-column col_boxes">
                    {/* Martin */}
                    <div className="item item1" style={{ padding: "0 5% 3%", marginBottom: "2rem" }}>
                      <div style={{ textAlign: "center" }}>
                        <Image src="/assets/images/Martin.webp" alt="Martin Sebastian Agdal" width={163} height={163} style={{ borderRadius: "50%", margin: "0 auto" }} />
                        <p style={{ color: "#ef4136", fontSize: "24px", fontWeight: 400, fontFamily: '"Poppins", sans-serif', marginTop: "1rem" }}>
                          Martin Sebastian Agdal
                        </p>
                        <p style={{ color: "#ef4136", fontSize: "18px", fontWeight: 500, fontFamily: '"Poppins", sans-serif' }}>
                          Founder
                        </p>
                        <p style={{ color: "#ef4136", fontWeight: 400, fontSize: "14px", marginTop: "0.5rem" }}>
                          <a href="tel:+971557011419">+971 55 701 1419</a> |{" "}
                          <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                        </p>
                        <p style={{ color: "#ef4136", fontWeight: 600, fontSize: "14px" }}>
                          <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                        </p>
                      </div>
                    </div>

                    {/* Maria */}
                    <div className="item item2" style={{ padding: "0 5% 3%" }}>
                      <div style={{ textAlign: "center" }}>
                        <Image src="/assets/images/Maria-findinf-home.webp" alt="Maria Andreasdottir" width={163} height={163} style={{ borderRadius: "50%", margin: "0 auto" }} />
                        <p style={{ color: "#ef4136", fontSize: "24px", fontWeight: 400, fontFamily: '"Poppins", sans-serif', marginTop: "1rem" }}>
                          Maria Andreasdottir
                        </p>
                        <p style={{ color: "#ef4136", fontSize: "18px", fontWeight: 500, fontFamily: '"Poppins", sans-serif' }}>
                          Real Estate Agent
                        </p>
                        <p style={{ color: "#ef4136", fontWeight: 400, fontSize: "14px", marginTop: "0.5rem" }}>
                          <a href="tel:+971507266719">+971 55 701 1419</a> |{" "}
                          <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                        </p>
                        <p style={{ color: "#ef4136", fontWeight: 600, fontSize: "14px" }}>
                          <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="gb-block-container alignfull" style={{ padding: "12% 5%" }} />
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
