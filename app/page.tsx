import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <div className="container entry-content">
            <article className="ContentWrapper_content__16TR9">
              <div>
                {/* Hero Section */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull home_hero gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "20%", paddingTop: "15%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-image-wrap">
                      <Image
                        src="/assets/images/home-hero-scaled.webp"
                        alt=""
                        fill
                        className="gb-container-image has-background-dim-100 has-background-dim"
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="gb-container-content" style={{ maxWidth: "1090px" }}>
                      <h1
                        className="wp-block-heading has-text-align-center has-text-color"
                        style={{ color: "#fefefe", fontSize: "5rem", fontStyle: "normal", fontWeight: 500 }}
                      >
                        Others find properties.<br />We find homes.
                      </h1>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                          <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex">
                            <div
                              className="wp-block-button has-custom-width wp-block-button__width-75 has-custom-font-size"
                              style={{ fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}
                            >
                              <Link
                                href="/off-plan/search"
                                className="wp-block-button__link has-text-color has-background wp-element-button"
                                style={{ borderRadius: "20px", color: "#fefefe", backgroundColor: "#ef4136", paddingTop: "19px", paddingBottom: "19px" }}
                              >
                                Find Future Home
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Off-Plan Properties */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull sec_card_list gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "7%", paddingTop: "15%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                      <div style={{ height: "40px" }} />
                      <h2 style={{ textAlign: "center", fontWeight: 400, fontSize: "3rem", marginBottom: "20px", fontFamily: '"Poppins", sans-serif' }}>
                        Featured Off-Plan Properties
                      </h2>
                      <ListingCardGrid properties={listings} />
                      <div
                        className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-2 wp-block-buttons-is-layout-flex"
                        style={{ marginTop: "30px" }}
                      >
                        <div className="wp-block-button has-custom-font-size" style={{ fontSize: "18px" }}>
                          <Link
                            href="/off-plan"
                            className="wp-block-button__link has-text-color has-background wp-element-button"
                            style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136", padding: "15px 40px", textDecoration: "none" }}
                          >
                            See All Off-Plan Properties
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Who We Are */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull home_about gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%", paddingTop: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1400px" }}>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-2 wp-block-columns-is-layout-flex">
                        <div
                          className="wp-block-column is-vertically-aligned-bottom col_txt is-layout-flow wp-block-column-is-layout-flow"
                          style={{ flexBasis: "45%" }}
                        >
                          <div
                            className="wp-block-genesis-blocks-gb-container gb-block-container"
                            style={{ backgroundColor: "#fde2e1", paddingLeft: "8%", paddingRight: "8%", paddingBottom: "8%", paddingTop: "8%", marginTop: "5%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <p className="tag has-text-color" style={{ color: "#ef4136", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                                  Who We Are
                                </p>
                                <h2
                                  className="wp-block-heading has-text-color"
                                  style={{ color: "#010101", fontSize: "4rem", fontStyle: "normal", fontWeight: 400, lineHeight: 1.4 }}
                                >
                                  Discover a new way of Finding Home
                                </h2>
                                <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                                  Discover a new way of buying, selling and renting your home with Finding Home. With a unique philosophy and
                                  approach, find out more about the team behind Finding Home.
                                </p>
                                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                                  <div
                                    className="wp-block-button has-custom-width wp-block-button__width-50 has-custom-font-size"
                                    style={{ fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}
                                  >
                                    <Link
                                      href="/about-us"
                                      className="wp-block-button__link has-text-color has-background wp-element-button"
                                      style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136" }}
                                    >
                                      About Us
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "55%" }}>
                          <figure className="wp-block-image size-full">
                            <Image
                              src="/assets/images/Finding-Home-New-image.svg"
                              alt=""
                              width={966}
                              height={636}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Philosophy */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull sec_coltxt2 gb-block-container"
                  style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%", paddingTop: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1400px" }}>
                      <h2
                        className="has-text-color wp-block-heading"
                        style={{ color: "#010101", fontSize: "6rem", fontStyle: "normal", fontWeight: 400, lineHeight: 1.1 }}
                      >
                        Finding a Home is the Biggest Decision We&rsquo;ll Ever Make
                      </h2>
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-3 wp-block-columns-is-layout-flex">
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "55%" }}>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px", lineHeight: 1.6 }}>
                            Next to choosing our life partner, buying a home is the biggest decision we will ever make. We understand.
                            That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                            experience-led approach that that feeling &ndash; without the hassle.
                          </p>
                        </div>
                        <div className="wp-block-column is-vertically-aligned-bottom is-layout-flow wp-block-column-is-layout-flow">
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px", lineHeight: 1.6 }}>
                            We understand that searching for a place to call your own is an important and personal journey. That&rsquo;s why
                            we&rsquo;re dedicated to raising standards of transparency, and making your search easier with a friendly and
                            supportive approach. Whether you&rsquo;re looking for a home for yourself or as an investment, you can trust us
                            to guide you at every step of the process. Others find properties, we find homes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Partners */}
                <div
                  className="wp-block-genesis-blocks-gb-container alignfull sec_partners_logo home_sec_partners_logo gb-block-container"
                  style={{ paddingBottom: "5%" }}
                >
                  <div className="gb-container-inside">
                    <div className="gb-container-content" style={{ maxWidth: "1400px" }}>
                      <div
                        className="wp-block-genesis-blocks-gb-container gb-block-container"
                        style={{ backgroundColor: "#e2d5c6", paddingLeft: "7%", paddingRight: "7%", paddingBottom: "7%", paddingTop: "7%" }}
                      >
                        <div className="gb-container-inside">
                          <div className="gb-container-content">
                            <h3
                              className="has-text-color wp-block-heading"
                              style={{ color: "#957f5c", fontSize: "30px", fontStyle: "normal", fontWeight: 400 }}
                            >
                              We Only Work with the best
                            </h3>
                            <div className="wp-block-columns are-vertically-aligned-center is-layout-flex wp-container-core-columns-is-layout-4 wp-block-columns-is-layout-flex">
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large offset_b">
                                  <Image
                                    src="/assets/images/sobha-logo2.svg"
                                    alt=""
                                    width={141}
                                    height={43}
                                    style={{ width: "141px", height: "43px" }}
                                  />
                                </figure>
                              </div>
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large">
                                  <Image
                                    src="/assets/images/damac-logo.svg"
                                    alt=""
                                    width={172}
                                    height={18}
                                    style={{ width: "172px", height: "18px" }}
                                  />
                                </figure>
                              </div>
                              <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image size-large is-resized">
                                  <Image
                                    src="/assets/images/logo_white.svg"
                                    alt=""
                                    width={177}
                                    height={23}
                                    style={{ width: "177px", height: "23px" }}
                                  />
                                </figure>
                              </div>
                              <div className="wp-block-column is-vertically-aligned-center is-layout-flow wp-block-column-is-layout-flow">
                                <figure className="wp-block-image is-resized size-large offset_left35">
                                  <Image
                                    src="/assets/images/logo-danube.svg"
                                    alt=""
                                    width={158}
                                    height={39}
                                    style={{ width: "158px", height: "39px" }}
                                  />
                                </figure>
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
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
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
                            className="wp-block-genesis-blocks-gb-container gb-block-container"
                            style={{ backgroundColor: "#fde2e1", paddingLeft: "7%", paddingRight: "7%", paddingBottom: "7%", paddingTop: "7%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <h3 className="wp-block-heading has-text-align-center" style={{ fontStyle: "normal", fontWeight: 400 }}>
                                  Let&rsquo;s Talk
                                </h3>
                                <form className="space-y-3 mt-4">
                                  <input
                                    type="text"
                                    placeholder="First Name *"
                                    required
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
                                  />
                                  <input
                                    type="text"
                                    placeholder="Last Name *"
                                    required
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
                                  />
                                  <input
                                    type="text"
                                    placeholder="Company"
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
                                  />
                                  <input
                                    type="email"
                                    placeholder="Email *"
                                    required
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
                                  />
                                  <input
                                    type="tel"
                                    placeholder="050 123 4567"
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px" }}
                                  />
                                  <select
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", backgroundColor: "#fff" }}
                                  >
                                    <option>List my Home</option>
                                    <option>Off-Plan Enquiry</option>
                                    <option>Other</option>
                                  </select>
                                  <textarea
                                    placeholder="Message"
                                    rows={4}
                                    style={{ width: "100%", padding: "12px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", resize: "vertical" }}
                                  />
                                  <button type="submit" className="wp-block-button__link" style={{ width: "100%" }}>
                                    Send Message
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pre-Footer Cards */}
                <div className="wp-block-genesis-blocks-gb-container alignfull pre_footer gb-block-container">
                  <div className="gb-container-inside">
                    <div className="gb-container-content">
                      <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-6 wp-block-columns-is-layout-flex">
                        {/* Column 1 */}
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                          <figure className="wp-block-image size-full img_short">
                            <Image
                              src="/assets/images/ftr-ftrd1.webp"
                              alt=""
                              width={1920}
                              height={966}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                          <div
                            className="wp-block-genesis-blocks-gb-container item_agent gb-block-container"
                            style={{ backgroundColor: "#e2d5c6", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <p className="tag has-text-color" style={{ color: "#957f5c", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                                  Our People
                                </p>
                                <h4 className="wp-block-heading has-text-color" style={{ color: "#010101", fontSize: "30px", fontStyle: "normal", fontWeight: 400 }}>
                                  Human-Centred Real Estate
                                </h4>
                                <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                                  Our agents understand that you&rsquo;re looking for a home, and they&rsquo;re here to help you find it.
                                </p>
                                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                                  <div className="wp-block-button has-custom-width wp-block-button__width-75">
                                    <Link
                                      href="/contact#agents"
                                      className="wp-block-button__link has-text-color has-background wp-element-button"
                                      style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136" }}
                                    >
                                      Find Your Agent
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <figure className="wp-block-image size-large img_short">
                            <Image
                              src="/assets/images/6f1f29140933fc01f5f3bddf8d733ab5@3x-1024x648.webp"
                              alt=""
                              width={1024}
                              height={648}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        </div>

                        {/* Column 2 */}
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                          <figure className="wp-block-image size-full img_tall">
                            <Image
                              src="/assets/images/ftr-ftrd3.webp"
                              alt=""
                              width={1920}
                              height={2106}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                          <div
                            className="wp-block-genesis-blocks-gb-container item_sell gb-block-container"
                            style={{ backgroundColor: "#fee27a", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <p className="tag has-text-color" style={{ color: "#fbb004", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                                  List Your Home
                                </p>
                                <h4 className="wp-block-heading has-text-color" style={{ color: "#010101", fontSize: "30px", fontStyle: "normal", fontWeight: 400 }}>
                                  Resources &amp; Guides
                                </h4>
                                <p>
                                  Finding Home&rsquo;s resources and guides share our knowledge and insights from the local market, making the
                                  process of buying, selling, or renting a home easier and more transparent.
                                </p>
                                <p>
                                  Our resources help novice buyers navigate the complexities of home buying, and help seasoned investors select
                                  high-return investment homes.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Column 3 */}
                        <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                          <div
                            className="wp-block-genesis-blocks-gb-container item_find gb-block-container"
                            style={{ backgroundColor: "#8eee9c", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }}
                          >
                            <div className="gb-container-inside">
                              <div className="gb-container-content">
                                <p className="tag has-text-color" style={{ color: "#00ac44", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                                  Off-Plan &amp; Investment
                                </p>
                                <h4 className="wp-block-heading has-text-color" style={{ color: "#010101", fontSize: "30px", fontStyle: "normal", fontWeight: 400 }}>
                                  Find the right investment for you
                                </h4>
                                <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                                  Choosing investment properties is hard &ndash; we make it easy.
                                </p>
                                <div className="wp-block-buttons is-layout-flex wp-block-buttons-is-layout-flex">
                                  <div className="wp-block-button has-custom-width wp-block-button__width-75">
                                    <Link
                                      href="/off-plan"
                                      className="wp-block-button__link has-text-color has-background wp-element-button"
                                      style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136" }}
                                    >
                                      Find Your Investment
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <figure className="wp-block-image size-full img_tall">
                            <Image
                              src="/assets/images/ftr-ftrd-4.webp"
                              alt=""
                              width={1920}
                              height={2181}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
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
