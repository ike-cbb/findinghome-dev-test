import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Off-Plan - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function OffPlanPage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <div className="container entry-content">
            <article className="ContentWrapper_content__16TR9">
              <div>
                {/* Hero */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull innerpage_hero gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "20%", paddingTop: "20%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-image-wrap">
                      <Image
                        src="/assets/images/Finding-Home-Cover-min-optimised.webp"
                        alt=""
                        fill
                        className="gb-container-image has-background-dim-100 has-background-dim"
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="gb-container-content"></div>
                  </div>
                </div>

                {/* Intro */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull offplan_content gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingTop: "12%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <div className="wp-block-columns intro_col is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "60%" }}>
                          <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                            Why Off-Plan
                          </p>
                          <h1
                            className="has-text-color wp-block-heading"
                            style={{ color: "#010101", fontSize: "5.2rem", fontStyle: "normal", fontWeight: 400, lineHeight: 1.2 }}
                          >
                            Dubai Off Plan &ndash; an Exciting Investment Opportunities
                          </h1>
                          <p className="pop has-text-color" style={{ color: "#010101", fontSize: "2.4rem", lineHeight: 1.4 }}>
                            Dubai is known around the world for its exciting off-plan developments.
                          </p>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                            From exciting locations, to luxurious amenities and designer-branded builds, off-plan developments in Dubai are
                            uniquely positioned and highly sought by a discerning international clientele.
                          </p>
                        </div>
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "33.33%" }} />
                      </div>

                      <div className="wp-block-group ftrd_col sec_card_list_pages">
                        <div className="wp-block-group__inner-container is-layout-constrained wp-block-group-is-layout-constrained">
                          <ListingCardGrid properties={listings} />
                          <div className="wp-block-buttons bt_see_all is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-16018d1d wp-block-buttons-is-layout-flex"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Grid */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull offplan_grid gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1400px" }}>
                      <div className="wp-block-genesis-blocks-gb-container gb-block-container" style={{ paddingBottom: "5%", paddingTop: "3%" }}>
                        <div className="gb-container-inside">
                          <div className="gb-container-content">
                            {/* Row 1 */}
                            <div className="wp-block-columns grid1 is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                              <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image size-full">
                                  <Image src="/assets/images/damac-canal-heights.webp" alt="" width={1933} height={1074} style={{ width: "100%", height: "auto" }} />
                                </figure>
                              </div>
                              <div className="wp-block-column col_txt is-layout-flow wp-block-column-is-layout-flow">
                                <div className="wp-block-genesis-blocks-gb-container gb-block-container">
                                  <div className="gb-container-inside">
                                    <div className="gb-container-content">
                                      <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "24px", fontStyle: "normal", fontWeight: 500 }}>
                                        Put yourself in the hands of the experts
                                      </p>
                                      <p className="pop has-text-color" style={{ color: "#010101", fontSize: "2.4rem", lineHeight: 1.3 }}>
                                        Investing in an off-plan property can be an attractive option for home-buyers, both as a home to live in, or as
                                        an investment.
                                      </p>
                                      <p>Off-plan properties have the potential for a lower purchase price and the opportunity for capital appreciation.</p>
                                      <p>
                                        However, off-plan properties aren&rsquo;t always smooth sailing, and there can be a number of risks associated
                                        with buying off-plan, especially if your financial circumstances change.
                                      </p>
                                      <p>
                                        With Finding Home, you can rest assured that we&rsquo;ll guide you through the process, advising you on the best
                                        projects, along with the positives and potential pitfalls, to make sure that you make the right decision for
                                        your unique needs and aspirations. After all, it&rsquo;s about matching the right person with the right home.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Row 2 */}
                            <div className="wp-block-columns grid2 is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                              <div className="wp-block-column col_txt is-layout-flow wp-block-column-is-layout-flow">
                                <div className="wp-block-genesis-blocks-gb-container gb-block-container">
                                  <div className="gb-container-inside">
                                    <div className="gb-container-content">
                                      <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "24px", fontStyle: "normal", fontWeight: 500 }}>
                                        Now is the ideal time to invest in Dubai
                                      </p>
                                      <p className="pop has-text-color" style={{ color: "#010101", fontSize: "2.4rem", lineHeight: 1.3 }}>
                                        If an off-plan property suits your needs, our team is delighted to help you find your future home.
                                      </p>
                                      <p style={{ fontSize: "18px" }}>
                                        Compared with more established markets, Dubai&rsquo;s growing property market is experiencing tremendous
                                        growth, with a constant flow of exciting new new off-plan opportunities. And since the trend with off-plan
                                        properties has seen them trading at 10% &ndash; 30% below their expected market price, with attractive
                                        payment plans and incentives, there is the potential to leverage gains on a relatively small deposit if
                                        property values increase before completion.
                                      </p>
                                      <p style={{ fontSize: "18px" }}>
                                        And with recent legislations aligning the UAE with its western contemporaries, along with favourable tax
                                        conditions and ease of doing business, Dubai is emerging as a global hub to live, work and play. There has
                                        never been a better time to explore off-plan properties in Dubai, let FindingHome help you find your next home.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image size-full">
                                  <Image src="/assets/images/nv-02.webp" alt="" width={1620} height={832} style={{ width: "100%", height: "auto" }} />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Invest Table */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull offplan_tbl_sec gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "2%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "800px" }}>
                      <h2
                        className="has-text-align-center has-text-color wp-block-heading"
                        style={{ color: "#010101", fontSize: "40px", fontStyle: "normal", fontWeight: 400 }}
                      >
                        Why invest in Dubai&rsquo;s property market?
                      </h2>
                      <figure className="wp-block-table is-style-regular" style={{ fontSize: "18px" }}>
                        <table style={{ width: "100%", borderCollapse: "collapse" }}>
                          <tbody>
                            {[
                              "Safety: Consistently ranked in the top ten world's safest cities",
                              "Weather: Sunshine all year round!",
                              "Tax: Income Tax (0%), VAT (5%)",
                              "Culture: Home to over 3 million people with 195 nationalities.",
                              "Language: English is the main spoken language.",
                              "Commerce: Globally ranked for ease of doing business, favourable legislation, low set-up costs, 5-10 year Golden Visas.",
                              "Infrastructure: Easy to get around, with public transport infrastructure, as well as home to the world's busiest airport.",
                            ].map((item, i) => {
                              const [label, ...rest] = item.split(": ");
                              return (
                                <tr key={i}>
                                  <td style={{ padding: "8px 0" }}>
                                    <strong>{label}:</strong> {rest.join(": ")}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Let's Talk */}
                <div className="wp-block-genesis-blocks-gb-container alignfull sec_lets_talk gb-block-container">
                  <div className="gb-container-inside">
                    <div className="gb-container-content">
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "60%" }}>
                          <figure className="wp-block-image size-full">
                            <Image
                              src="/assets/images/Finding-Home-1@3x-scaled.webp"
                              alt=""
                              width={2560}
                              height={2099}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        </div>
                        <div className="wp-block-column col_frm is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "40%" }}>
                          <div
                            className="wp-block-genesis-blocks-gb-container gb-block-container"
                            style={{ backgroundColor: "#fde2e1", paddingLeft: "7%", paddingRight: "7%", paddingBottom: "7%", paddingTop: "7%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <h3 className="wp-block-heading has-text-align-center" style={{ fontStyle: "normal", fontWeight: 400 }}>
                                  Let&rsquo;s Talk
                                </h3>
                                <form className="space-y-3 mt-4">
                                  <input type="text" placeholder="First Name *" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }} />
                                  <input type="text" placeholder="Last Name *" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }} />
                                  <input type="text" placeholder="Company" style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }} />
                                  <input type="email" placeholder="Email *" required style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }} />
                                  <input type="tel" placeholder="050 123 4567" style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }} />
                                  <select style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", backgroundColor: "#fff" }}>
                                    <option>List my Home</option>
                                    <option>Off-Plan Enquiry</option>
                                    <option>Other</option>
                                  </select>
                                  <textarea placeholder="Message" rows={4} style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", resize: "vertical" }} />
                                  <button type="submit" className="wp-block-button__link" style={{ width: "100%" }}>Send Message</button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
