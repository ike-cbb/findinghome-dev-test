import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "What is Off-Plan and Why You Need to Invest in Dubai - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function GuidePage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <article>
            <section style={{ padding: "15% 5%" }}>
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ color: "#010101", fontSize: "4rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', lineHeight: 1.2 }}>
                  What is Off-Plan and Why You Need to Invest in Dubai
                </h1>
                <div style={{ marginTop: "2rem", fontSize: "18px", lineHeight: 1.8 }}>
                  <p>
                    Off-plan property refers to property that is purchased before
                    it has been built. Buyers usually buy directly from the
                    developer and typically pay a down payment followed by
                    scheduled payments linked to the construction progress.
                  </p>

                  <h2 style={{ color: "#ef4136", fontSize: "2rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', marginTop: "2.5rem" }}>
                    Why Invest in Dubai?
                  </h2>
                  <p style={{ marginTop: "1rem" }}>
                    Dubai continues to be one of the most exciting real estate
                    markets in the world. The emirate offers investors a unique
                    combination of benefits including:
                  </p>
                  <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
                    <li>Zero income tax and low VAT at just 5%</li>
                    <li>A safe and stable environment - consistently ranked among the world&rsquo;s safest cities</li>
                    <li>World-class infrastructure and connectivity, home to the world&rsquo;s busiest international airport</li>
                    <li>Strong regulatory framework with RERA protecting investor interests</li>
                    <li>Attractive payment plans with developers offering post-completion payment schedules</li>
                    <li>Golden Visa opportunities for qualifying property investors</li>
                  </ul>

                  <h2 style={{ color: "#ef4136", fontSize: "2rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', marginTop: "2.5rem" }}>
                    Benefits of Off-Plan Investment
                  </h2>
                  <ul style={{ paddingLeft: "1.5rem", marginTop: "1rem" }}>
                    <li>Lower entry price point compared to ready properties</li>
                    <li>Potential for significant capital appreciation</li>
                    <li>Flexible payment plans spread over construction period</li>
                    <li>Brand-new property with modern specifications</li>
                    <li>Choice of premium units and locations in new developments</li>
                  </ul>

                  <h2 style={{ color: "#ef4136", fontSize: "2rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', marginTop: "2.5rem" }}>
                    How Finding Home Can Help
                  </h2>
                  <p style={{ marginTop: "1rem" }}>
                    Our experienced team of real estate professionals are experts
                    in the Dubai off-plan market. We provide personalized guidance
                    throughout your investment journey, from selecting the right
                    property to managing the purchase process and beyond.
                  </p>
                </div>

                <div style={{ marginTop: "2.5rem" }}>
                  <Link href="/off-plan" className="wp-block-button__link" style={{ fontSize: "18px" }}>
                    Explore Off-Plan Properties
                  </Link>
                </div>
              </div>
            </section>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
