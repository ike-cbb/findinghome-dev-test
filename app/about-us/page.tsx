import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="Main_main__ZcYG1 site-container">
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
                        src="/assets/images/Anout-us-min-scaled.webp"
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

                {/* Who We Are */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull about_intro gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "8%", paddingTop: "8%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "55%" }}>
                          <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                            Who We Are
                          </p>
                          <h1
                            className="has-text-color wp-block-heading"
                            style={{ color: "#010101", fontSize: "5.2rem", fontStyle: "normal", fontWeight: 400 }}
                          >
                            Buying a home should be a life milestone
                          </h1>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "2.4rem" }}>
                            Finding Home. Next to choosing our life partner, buying a home is the biggest decision we will ever make. We
                            understand. That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                            experience-led approach that that feeling &ndash; without the hassle.
                          </p>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                            Our team at Finding Home are passionate, energetic, and committed experts. They are part of the fabric of the
                            communities they serve, prioritizing local knowledge and expertise. Every one of our agents is a specialist in their
                            area, providing our clients with the high level of professional service they deserve, along their journey to
                            finding their home.
                          </p>
                        </div>
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "33.33%" }} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull sec_partners_logo gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <div
                        className="wp-block-genesis-blocks-gb-container gb-block-container"
                        style={{ backgroundColor: "#e2d5c6", paddingLeft: "7%", paddingRight: "7%", paddingBottom: "7%", paddingTop: "7%" }}
                      >
                        <div className="gb-container-inside">
                          <div className="gb-container-content">
                            <h3
                              className="has-text-color wp-block-heading"
                              style={{ color: "#957f5c", fontSize: "3rem", fontStyle: "normal", fontWeight: 400 }}
                            >
                              We Only Work with the best
                            </h3>
                            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large offset_b">
                                  <Image src="/assets/images/sobha-logo2.svg" alt="" width={133} height={43} style={{ width: "133px", height: "43px" }} />
                                </figure>
                              </div>
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large">
                                  <Image src="/assets/images/damac-logo.svg" alt="" width={172} height={18} style={{ width: "172px", height: "18px" }} />
                                </figure>
                              </div>
                              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image size-large is-resized">
                                  <Image src="/assets/images/logo_white.svg" alt="" width={177} height={23} style={{ width: "177px", height: "23px" }} />
                                </figure>
                              </div>
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large offset_left35">
                                  <Image src="/assets/images/logo-danube-1.svg" alt="" width={158} height={39} style={{ width: "158px", height: "39px" }} />
                                </figure>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How We Think / What We Do */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull about_content gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <figure className="wp-block-image size-full ftrd">
                        <Image src="/assets/images/list-03.webp" alt="" width={1293} height={793} style={{ width: "100%", height: "auto" }} />
                      </figure>

                      <div
                        className="wp-block-genesis-blocks-gb-container content_col gb-block-container"
                        style={{ paddingBottom: "5%", paddingTop: "3%" }}
                      >
                        <div className="gb-container-inside">
                          <div className="gb-container-content">
                            <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                              <div className="wp-block-column col1 is-layout-flow wp-block-column-is-layout-flow">
                                <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "24px", fontStyle: "normal", fontWeight: 500 }}>
                                  How we think
                                </p>
                                <p className="pop has-text-color" style={{ color: "#010101", fontSize: "2.4rem", lineHeight: 1.4 }}>
                                  At Finding Home, we believe that the journey of finding a home to buy or rent should be just as rewarding as
                                  the destination.
                                </p>
                                <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                                  Buying or renting a home is an important and highly personal journey for our clients. We aim to prioritize the
                                  client&rsquo;s experience, making the entire process of finding a home easier, more transparent, and less of a
                                  hassle.
                                </p>
                                <p>
                                  At Finding Home, we value local knowledge and expertise, and take a friendly and supportive approach to deliver
                                  an exceptional (and enjoyable) homefinding experience.
                                </p>
                              </div>
                              <div className="wp-block-column col2 is-layout-flow wp-block-column-is-layout-flow">
                                <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "24px", fontStyle: "normal", fontWeight: 500 }}>
                                  What we do
                                </p>
                                <p className="pop has-text-color" style={{ color: "#010101", fontSize: "2.4rem", lineHeight: 1.4 }}>
                                  We make the experience of Buying, Selling or Renting as easy as possible.
                                </p>
                                <p>
                                  At Finding Home we&rsquo;re committed to raising the industry bar on how real estate is done, with an approach
                                  that prioritizes finding homes rather than simply finding properties. We provide a range of services for clients
                                  looking to buy, sell, or rent their home, bringing a personalised experience focused on trust and transparency
                                  that caters to both residential and commercial clients alike by guiding them through every step of the process,
                                  making the experience as stress-free and enjoyable as possible.
                                </p>
                              </div>
                            </div>

                            <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-16018d1d wp-block-buttons-is-layout-flex">
                              <div className="wp-block-button has-custom-width wp-block-button__width-25" style={{ fontStyle: "normal", fontWeight: 500 }}>
                                <Link
                                  href="/contact#meet-the-team"
                                  className="wp-block-button__link has-text-color has-background wp-element-button"
                                  style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136" }}
                                >
                                  See our team
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Let's Talk */}
                <div className="wp-block-genesis-blocks-gb-container alignfull sec_lets_talk gb-block-container">
                  <div className="gb-container-inside">
                    <div className="gb-container-content">
                      <div id="lets-talk"></div>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-9d6595d7 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "60%" }}>
                          <figure className="wp-block-image size-full">
                            <Image
                              src="/assets/images/ftrd-lets-talk2-scaled.webp"
                              alt=""
                              width={2560}
                              height={2099}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        </div>
                        <div className="wp-block-column col_frm is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "40%" }}>
                          <div
                            className="wp-block-genesis-blocks-gb-container form_wrapper_container gb-block-container"
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

                {/* FAQ */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull sec_faq gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "15%", paddingTop: "15%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "750px" }} />
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
