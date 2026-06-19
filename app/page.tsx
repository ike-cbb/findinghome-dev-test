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
    <article className="full-width-content">
      <div className="container entry-content">
          {/* Hero Section */}
          <section className="wp-block-genesis-blocks-gb-container alignfull home_hero gb-block-container" style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "20%", paddingTop: "15%" }}>
            <div className="gb-container-inside">
              <div className="gb-container-image-wrap">
                <Image
                  src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/home-hero-scaled.webp"
                  alt=""
                  fill
                  className="gb-container-image has-background-dim-100 has-background-dim"
                  priority
                  sizes="100vw"
                />
              </div>
              <div className="gb-container-content" style={{ maxWidth: "1090px" }}>
                <h1 className="wp-block-heading has-text-align-center has-text-color" style={{ color: "#fefefe", fontSize: "5rem", fontStyle: "normal", fontWeight: 500 }}>
                  Others find properties.<br />We find homes.
                </h1>
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-1 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <div className="wp-block-buttons is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-1 wp-block-buttons-is-layout-flex">
                      <div className="wp-block-button has-custom-width wp-block-button__width-75 has-custom-font-size" style={{ fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
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
          </section>

          {/* See All Homes In Business Bay Section */}
          <section className="wp-block-genesis-blocks-gb-container alignfull sec_card_list gb-block-container" style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "7%", paddingTop: "15%" }}>
            <div className="gb-container-inside">
              <div className="gb-container-content" style={{ maxWidth: "1200px" }}>
                <div style={{ height: "50px" }} aria-hidden="true" className="wp-block-spacer"></div>
                <div className="wp-block-buttons not-ready is-content-justification-center is-layout-flex wp-container-core-buttons-is-layout-2 wp-block-buttons-is-layout-flex">
                  <div className="wp-block-button has-custom-font-size" style={{ fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                    <Link
                      href="/off-plan"
                      className="wp-block-button__link has-text-color has-background wp-element-button"
                      style={{ borderRadius: "3px", color: "#fefefe", backgroundColor: "#ef4136", paddingTop: "19px", paddingRight: "30px", paddingBottom: "19px", paddingLeft: "30px" }}
                    >
                      See All Homes In Business Bay
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Off-Plan Properties */}
          <section className="py-24 lg:py-32 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <div className="h-10" />
                <h2 className="text-center text-4xl font-normal text-[#010101] mb-6">
                  Featured Off-Plan Properties
                </h2>
                <ListingCardGrid properties={listings.slice(0, 3)} />
                <div className="flex justify-center mt-10">
                  <Link
                    href="/off-plan"
                    className="inline-block px-10 py-4 bg-[#ef4136] text-white text-lg font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
                  >
                    See All Off-Plan Properties
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="py-16 lg:py-20 px-5">
            <div className="container">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                  <div className="lg:basis-[45%] flex flex-col">
                    <div className="bg-[#fde2e1] p-10 lg:p-14 mt-[5%] flex-grow">
                      <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-5">
                        Who We Are
                      </p>
                      <h2 className="text-4xl lg:text-[4rem] font-normal text-[#010101] mb-6 leading-tight">
                        Discover a new way of Finding Home
                      </h2>
                      <p className="text-[#010101] text-lg mb-8">
                        Discover a new way of buying, selling and renting your home with Finding Home. With a unique philosophy and
                        approach, find out more about the team behind Finding Home.
                      </p>
                      <Link
                        href="/about-us"
                        className="inline-block px-8 py-4 bg-[#ef4136] text-white font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                  <div className="lg:basis-[55%]">
                    <figure className="w-full h-full">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/Finding-Home-New-image.svg"
                        alt=""
                        width={966}
                        height={636}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="py-16 lg:py-20 px-5">
            <div className="container">
              <div className="max-w-[1400px] mx-auto">
                <h2 className="text-5xl lg:text-[6rem] font-normal text-[#010101] mb-12 leading-[1.1]">
                  Finding a Home is the Biggest Decision We&rsquo;ll Ever Make
                </h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:basis-[55%]">
                    <p className="text-[#010101] text-lg leading-[1.8]">
                      Next to choosing our life partner, buying a home is the biggest decision we will ever make. We understand.
                      That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                      experience-led approach that that feeling &ndash; without the hassle.
                    </p>
                  </div>
                  <div className="lg:flex-1">
                    <p className="text-[#010101] text-lg leading-[1.8]">
                      We understand that searching for a place to call your own is an important and personal journey. That&rsquo;s why
                      we&rsquo;re dedicated to raising standards of transparency, and making your search easier with a friendly and
                      supportive approach. Whether you&rsquo;re looking for a home for yourself or as an investment, you can trust us
                      to guide you at every step of the process. Others find properties, we find homes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partners Section */}
          <section className="py-12 lg:py-16 px-5">
            <div className="container">
              <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#e2d5c6] py-12 lg:py-14 px-8 lg:px-14">
                  <h3 className="text-[#957f5c] text-2xl lg:text-[30px] font-normal mb-10">
                    We Only Work with the best
                  </h3>
                  <div className="flex flex-wrap items-center gap-10 lg:gap-14">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/sobha-logo2.svg"
                        alt=""
                        width={141}
                        height={43}
                        className="w-[141px] h-[43px] object-contain"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src="https://monocrom.wpengine.com/wp-content/uploads/2023/02/damac-logo.svg"
                        alt=""
                        width={172}
                        height={18}
                        className="w-[172px] h-[18px] object-contain"
                      />
                    </div>
                    <div className="flex-shrink-0">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/logo_white.svg"
                        alt=""
                        width={177}
                        height={23}
                        className="w-[177px] h-[23px] object-contain"
                      />
                    </div>
                    <div className="flex-shrink-0 lg:ml-[35px]">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/logo-danube.svg"
                        alt=""
                        width={158}
                        height={39}
                        className="w-[158px] h-[39px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Let's Talk Section */}
          <section className="wp-block-genesis-blocks-gb-container alignfull sec_lets_talk fade_up gb-block-container">
            <div className="gb-container-inside">
              <div className="gb-container-content">
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-5 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column col_img is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "60%" }}>
                    <figure className="wp-block-image size-full">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftrd-lets-talk2-scaled.webp"
                        alt=""
                        width={2560}
                        height={2099}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                  <div className="wp-block-column col_frm is-layout-flow wp-block-column-is-layout-flow" style={{ flexBasis: "40%" }}>
                    <div style={{ backgroundColor: "#fde2e1", paddingLeft: "7%", paddingRight: "7%", paddingBottom: "7%", paddingTop: "7%" }} className="wp-block-genesis-blocks-gb-container gb-block-container">
                      <div className="gb-container-inside">
                        <div className="gb-container-content">
                          <h3 className="wp-block-heading has-text-align-center" style={{ fontStyle: "normal", fontWeight: 400 }}>
                            Let&rsquo;s Talk
                          </h3>
                          <form className="space-y-4">
                            <input
                              type="text"
                              placeholder="First Name *"
                              required
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                            />
                            <input
                              type="text"
                              placeholder="Last Name *"
                              required
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                            />
                            <input
                              type="text"
                              placeholder="Company"
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                            />
                            <input
                              type="email"
                              placeholder="Email *"
                              required
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                            />
                            <input
                              type="tel"
                              placeholder="050 123 4567"
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                            />
                            <select className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white">
                              <option>List my Home</option>
                              <option>Off-Plan Enquiry</option>
                              <option>Other</option>
                            </select>
                            <textarea
                              placeholder="Message"
                              rows={4}
                              className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white resize-y"
                            />
                            <button
                              type="submit"
                              className="w-full px-6 py-4 bg-[#ef4136] text-white font-medium rounded hover:bg-[#d63629] transition-colors"
                            >
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
          </section>

          {/* Pre-footer Cards */}
          <section className="wp-block-genesis-blocks-gb-container alignfull pre_footer gb-block-container">
            <div className="gb-container-inside">
              <div className="gb-container-content">
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-6 wp-block-columns-is-layout-flex">
                  {/* Our People */}
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <figure className="wp-block-image size-full img_short">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd1.webp"
                        alt=""
                        width={1920}
                        height={966}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                    <div style={{ backgroundColor: "#e2d5c6", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }} className="wp-block-genesis-blocks-gb-container item_agent gb-block-container">
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
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/6f1f29140933fc01f5f3bddf8d733ab5@3x-1024x648.webp"
                        alt=""
                        width={1024}
                        height={648}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                  {/* List Your Home */}
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <figure className="wp-block-image size-full img_tall">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd3.webp"
                        alt=""
                        width={1920}
                        height={2106}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                    <div style={{ backgroundColor: "#fee27a", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }} className="wp-block-genesis-blocks-gb-container item_sell gb-block-container">
                      <div className="gb-container-inside">
                        <div className="gb-container-content">
                          <p className="tag has-text-color" style={{ color: "#fbb004", fontSize: "18px", fontStyle: "normal", fontWeight: 500 }}>
                            List Your Home
                          </p>
                          <h4 className="wp-block-heading has-text-color" style={{ color: "#010101", fontSize: "30px", fontStyle: "normal", fontWeight: 400 }}>
                            Resources &amp; Guides
                          </h4>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                            Finding Home&rsquo;s resources and guides share our knowledge and insights from the local market, making the process of buying, selling, or renting a home easier and more transparent.
                          </p>
                          <p className="has-text-color" style={{ color: "#010101", fontSize: "18px" }}>
                            Our resources help novice buyers navigate the complexities of home buying, and help seasoned investors select high-return investment homes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Off-Plan & Investment */}
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <div style={{ backgroundColor: "#8eee9c", paddingLeft: "4%", paddingRight: "4%", paddingBottom: "10%", paddingTop: "10%" }} className="wp-block-genesis-blocks-gb-container item_find gb-block-container">
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
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd-4.webp"
                        alt=""
                        width={1920}
                        height={2181}
                        className="w-full h-auto object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </article>
  );
}
