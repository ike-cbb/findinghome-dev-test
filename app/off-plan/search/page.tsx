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
        <main id="main-content" className="Main_main__ZcYG1 site-container">
          <div className="container entry-content">
            <article className="ContentWrapper_content__16TR9">
              <div>
                <div
                  style={{
                    paddingLeft: "5%",
                    paddingRight: "5%",
                    paddingBottom: "5%",
                    paddingTop: "8%",
                  }}
                  className="wp-block-genesis-blocks-gb-container alignfull gb-block-container"
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <p
                        className="tag"
                        style={{ color: "#ef4136", fontSize: "18px", fontWeight: 500 }}
                      >
                        Off-Plan
                      </p>
                      <h1
                        className="wp-block-heading"
                        style={{
                          color: "#010101",
                          fontSize: "5.2rem",
                          fontWeight: 400,
                          fontFamily: '"Poppins", sans-serif',
                          lineHeight: 1.2,
                        }}
                      >
                        All Off-Plan Projects
                      </h1>
                      <p style={{ color: "#898880", fontSize: "18px", marginBottom: "30px" }}>
                        Browse {listings.length} off-plan properties available in Dubai
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "10%" }}
                  className="wp-block-genesis-blocks-gb-container gb-block-container"
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <ListingCardGrid properties={listings} />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
