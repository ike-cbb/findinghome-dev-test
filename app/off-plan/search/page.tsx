import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";

export const metadata = {
  title: "All Off-Plan Projects - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function OffPlanSearchPage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <article>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 5% 40px" }}>
              <div style={{ paddingTop: "8%" }}>
                <p className="tag" style={{ color: "#ef4136", fontSize: "18px" }}>
                  Off-Plan
                </p>
                <h1 style={{ color: "#010101", fontSize: "5.2rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', lineHeight: 1.2 }}>
                  All Off-Plan Projects
                </h1>
                <p style={{ color: "#898880", fontSize: "18px", marginBottom: "30px" }}>
                  Browse 6 off-plan properties available in Dubai
                </p>
              </div>
              <ListingCardGrid properties={listings} />
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}
