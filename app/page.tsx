import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import HomepageListings from "@/components/HomepageListings";

export const metadata = {
  title: "Home - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function HomePage() {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[160px] sm:pt-[250px] pb-[60px] sm:pb-[250px] px-[5%]">
        <div className="absolute inset-0">
          <Image
            src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/home-hero-scaled.webp"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 1 }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-[1090px] text-center">
          <h1 className="text-[#fefefe] text-[3rem] sm:text-[4.5rem] font-medium leading-[1.5] sm:leading-[1.5]" style={{ marginBottom: "0.67em" }}>
            Others find properties.<br />We find homes.
          </h1>
          <div className="flex justify-center">
            <Link
              href="/off-plan/search"
              className="inline-block w-3/4 !bg-[#ef4136] !text-[#fefefe] text-[16px] leading-[normal] font-medium rounded-[20px] pt-[14px] pb-[14px] px-[30px] text-center hover:!bg-[#d63629] hover:rounded-[15px] transition-all"
            >
              Find Future Home
            </Link>
          </div>
        </div>
      </section>

      {/* Finding a new home in — interactive filter + listings */}
      <HomepageListings />

      {/* Who We Are */}
      <section className="w-full px-[5%]" style={{ paddingTop: "100px", paddingBottom: "100px" }}>
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row" style={{ gap: "2rem" }}>
            <div className="lg:basis-[45%] lg:self-end relative z-[1]">
              <div className="relative bg-[#fde2e1] mb-[-70px]"
                style={{ marginTop: "5%", padding: "12% 10%" }}
              >
                {/* Red accent bar */}
                <span
                  className="absolute right-[-30px] bottom-0 bg-[#ef4136] hidden lg:block"
                  style={{ width: "30px", height: "60%", zIndex: 1 }}
                />
                <p className="text-[#ef4136] font-medium mb-0" style={{ fontFamily: "Poppins, sans-serif", fontSize: "18px", fontStyle: "normal" }}>
                  Who We Are
                </p>
                <h2 className="font-normal text-[#010101] leading-[1.4]" style={{ fontSize: "4rem", marginBottom: "25px" }}>
                  Discover a new way of Finding Home
                </h2>
                <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "30px" }}>
                  Discover a new way of buying, selling and renting your home with Finding Home. With a unique philosophy and approach, find out more about the team behind Finding Home.
                </p>
                <Link
                  href="/about-us"
                  className="inline-block w-1/2 bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="lg:basis-[55%]">
              <figure className="m-0">
                <Image
                  src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/Finding-Home-New-image.svg"
                  alt=""
                  width={966}
                  height={636}
                  className="w-full object-cover"
                  style={{ height: "580px" }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full px-[5%]" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
        <div className="max-w-[1400px] mx-auto">

          <div className="flex flex-col lg:flex-row" style={{ padding: "0 4%", gap: "2rem" }}>
            <h2 className="font-normal text-[#010101] leading-[1.1] lg:basis-[64%]" style={{ fontSize: "6rem", fontStyle: "normal", marginBottom: "40px", lineHeight: "1.1" }}>
              Finding a Home is the Biggest Decision We&rsquo;ll Ever Make
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row" style={{ padding: "0 4%", gap: "2rem" }}>
            <div className="lg:basis-[55%]" style={{ paddingRight: "5%" }}>
              <p className="text-[#010101] leading-[1.6]" style={{ fontSize: "18px" }}>
                Next to choosing our life partner, buying a home is the biggest decision we will ever make. We understand.
                That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                experience-led approach that that feeling &ndash; without the hassle.
              </p>
            </div>
            <div className="lg:flex-1 lg:self-end" style={{ paddingRight: "5%" }}>
              <p className="text-[#010101] leading-[1.6]" style={{ fontSize: "18px" }}>
                We understand that searching for a place to call your own is an important and personal journey. That&rsquo;s why
                we&rsquo;re dedicated to raising standards of transparency, and making your search easier with a friendly and
                supportive approach. Whether you&rsquo;re looking for a home for yourself or as an investment, you can trust us
                to guide you at every step of the process. Others find properties, we find homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full relative" style={{ paddingBottom: "0" }}>
        {/* Right-half beige background */}
        <span
          className="absolute right-0 top-0 h-full bg-[#e2d5c6] hidden lg:block"
          style={{ width: "50%" }}
        />
        <div className="max-w-[1400px] mx-auto" style={{ paddingLeft: "8%", paddingRight: "5%", marginBottom: "100px" }}>
          <div className="relative bg-[#e2d5c6]" style={{ padding: "5%" }}>
            {/* Brown accent bar */}
            <span
              className="absolute left-[-30px] bottom-0 bg-[#957f5c] hidden lg:block"
              style={{ width: "30px", height: "80%" }}
            />
            <h3 className="text-[#957f5c] font-normal" style={{ fontSize: "30px", marginBottom: "1.34em" }}>
              We Only Work with the best
            </h3>
            <div className="flex flex-wrap items-center" style={{ width: "80%", gap: "2rem", marginBottom: "1.8em" }}>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0"  data-aos-delay="250">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/sobha-logo2.svg"
                    alt=""
                    width={141}
                    height={43}
                    className="w-[141px] h-[43px] object-contain"
                    style={{ position: "relative", bottom: "-8px" }}
                  />
                </figure>
              </div>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0"  data-aos-delay="300">
                  <Image
                    src="https://monocrom.wpengine.com/wp-content/uploads/2023/02/damac-logo.svg"
                    alt=""
                    width={172}
                    height={18}
                    className="w-[172px] h-[18px] object-contain"
                  />
                </figure>
              </div>
              <div className="flex-shrink-0">
                <figure className="m-0">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/logo_white.svg"
                    alt=""
                    width={177}
                    height={23}
                    className="w-[177px] h-[23px] object-contain"
                  />
                </figure>
              </div>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0"  data-aos-delay="350">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/logo-danube.svg"
                    alt=""
                    width={158}
                    height={39}
                    className="w-[158px] h-[39px] object-contain"
                    style={{ marginLeft: "35px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="w-full" style={{ padding: "100px 0 60px" }}>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="lg:basis-[60%]">
            <figure className="m-0 h-full">
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftrd-lets-talk2-scaled.webp"
                alt=""
                width={2560}
                height={2099}
                className="w-full object-cover"
                style={{ height: "1020px", maxHeight: "100%" }}
              />
            </figure>
          </div>
          <div className="lg:basis-[40%]">
            <div className="relative bg-[#fde2e1]" style={{ padding: "50px 80px" }}>
              {/* Red accent bar */}
              <span
                className="absolute left-[-30px] top-0 bg-[#ef4136] hidden lg:block"
                style={{ width: "30px", height: "42%", zIndex: 1 }}
              />
              <h3 className="text-center font-normal text-[#010101]" style={{ fontSize: "40px" }}>
                Let&rsquo;s Talk
              </h3>
              <form style={{ marginTop: "40px", marginBottom: "40px"}}>
                <input
                  type="text"
                  placeholder="First Name *"
                  required
                  className="w-full outline-none block"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  required
                  className="w-full outline-none block"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full outline-none block"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full outline-none block"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                />
                <input
                  type="tel"
                  placeholder="050 123 4567"
                  className="w-full outline-none block"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                  }}
                />
                <select
                  className="w-full outline-none block appearance-none"
                  style={{
                    height: "48px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                    backgroundImage: "url(/arrow-down.svg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "97% center",
                  }}
                >
                  <option>List my Home</option>
                  <option>Off-Plan Enquiry</option>
                  <option>Other</option>
                </select>
                <textarea
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full outline-none block"
                  style={{
                    height: "110px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                    resize: "none",
                  }}
                />
                {/* Privacy checkbox */}
                <div style={{ marginBottom: "15px" }}>
                  <input
                    name="checkbox-i-agree-0"
                    id="checkbox-i-agree-0"
                    required
                    aria-required="true"
                    type="checkbox"
                    className="appearance-none rounded-full m-0 p-0 relative"
                    style={{
                      width: "28px",
                      height: "28px",
                      border: "1px solid #000",
                      backgroundColor: "#f7f7f7",
                      top: "8px",
                      marginRight: "10px",
                    }}
                  />
                  <label
                    htmlFor="checkbox-i-agree-0"
                    className="text-[#000] cursor-pointer"
                    style={{ lineHeight: "1.5" }}
                  >
                    I agree to Finding Home{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                      className="font-bold text-[#010101] underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="text-center" style={{ marginTop: "30px" }}>
                  <button
                    type="submit"
                    className="outline-none border-0 cursor-pointer rounded-[3px] hover:rounded-[15px]"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      backgroundColor: "#ef4136",
                      color: "#fff",
                      fontSize: "18px",
                      padding: "17px 45px",
                      transition: ".3s",
                    }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer Cards */}
      <section className="w-full" style={{ marginBottom: "-1px" }}>
        <div className="flex flex-col md:flex-row">
          {/* Our People */}
          <div className="flex flex-col flex-1" style={{ marginLeft: "-1px" }}>
            <figure className="m-0 overflow-hidden" style={{ flexBasis: "70%" }}>
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd1.webp"
                alt=""
                width={1920}
                height={966}
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </figure>
            <div className="relative flex items-center justify-center bg-[#e2d5c6] flex-1" style={{ padding: "80px 15% 90px", minHeight: "500px" }}>
              {/* Brown accent bar */}
              <span className="absolute top-[-30px] right-0 bg-[#957f5c]" style={{ width: "85%", height: "30px", zIndex: 1 }} />
              <div>
                <p className="text-[#957f5c] font-medium uppercase tracking-[0.02em]" style={{ fontSize: "18px", marginBottom: "5px", fontStyle: "normal" }}>
                  Our People
                </p>
                <h4 className="text-[#010101] font-normal" style={{ fontSize: "30px", marginBottom: "25px" }}>
                  Human-Centred Real Estate
                </h4>
                <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "24px" }}>
                  Our agents understand that you&rsquo;re looking for a home, and they&rsquo;re here to help you find it.
                </p>
                <Link
                  href="/contact#agents"
                  className="inline-block w-3/4 bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
                >
                  Find Your Agent
                </Link>
              </div>
            </div>
            <figure className="m-0 overflow-hidden" style={{ flexBasis: "70%" }}>
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/6f1f29140933fc01f5f3bddf8d733ab5@3x-1024x648.webp"
                alt=""
                width={1024}
                height={648}
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </figure>
          </div>

          {/* List Your Home */}
          <div className="flex flex-col flex-1" style={{ marginLeft: "-1px", zIndex: 1 }}>
            <figure className="m-0" style={{ flexBasis: "70%" }}>
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd3.webp"
                alt=""
                width={1920}
                height={2106}
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </figure>
            <div className="relative flex items-center justify-center bg-[#fee27a] flex-1" style={{ padding: "80px 15% 90px", minHeight: "500px" }}>
              {/* Yellow accent bar */}
              <span className="absolute right-[-30px] top-0 bg-[#fbb004]" style={{ width: "30px", height: "70%", zIndex: 1 }} />
              <div>
                <p className="text-[#fbb004] font-medium uppercase tracking-[0.02em]" style={{ fontSize: "18px", marginBottom: "5px", fontStyle: "normal" }}>
                  List Your Home
                </p>
                <h4 className="text-[#010101] font-normal" style={{ fontSize: "30px", marginBottom: "25px" }}>
                  Resources &amp; Guides
                </h4>
                <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "16px" }}>
                  Finding Home&rsquo;s resources and guides share our knowledge and insights from the local market, making the
                  process of buying, selling, or renting a home easier and more transparent.
                </p>
                <p className="text-[#010101]" style={{ fontSize: "18px" }}>
                  Our resources help novice buyers navigate the complexities of home buying, and help seasoned investors select
                  high-return investment homes.
                </p>
              </div>
            </div>
          </div>

          {/* Off-Plan & Investment */}
          <div className="flex flex-col flex-1" style={{ marginLeft: "-1px" }}>
            <div className="relative flex items-center justify-center bg-[#8eee9c] flex-1" style={{ padding: "80px 15% 90px", minHeight: "500px" }}>
              {/* Green accent bar */}
              <span className="absolute left-[-30px] top-0 bg-[#00ac44]" style={{ width: "30px", height: "100%", zIndex: 1 }} />
              <div>
                <p className="text-[#00ac44] font-medium uppercase tracking-[0.02em]" style={{ fontSize: "18px", marginBottom: "5px", fontStyle: "normal" }}>
                  Off-Plan &amp; Investment
                </p>
                <h4 className="text-[#010101] font-normal" style={{ fontSize: "30px", marginBottom: "25px" }}>
                  Find the right investment for you
                </h4>
                <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "24px" }}>
                  Choosing investment properties is hard &ndash; we make it easy.
                </p>
                <Link
                  href="/off-plan"
                  className="inline-block w-3/4 bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
                >
                  Find Your Investment
                </Link>
              </div>
            </div>
            <figure className="m-0" style={{ flexBasis: "70%" }}>
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd-4.webp"
                alt=""
                width={1920}
                height={2181}
                className="w-full object-cover"
                style={{ height: "100%" }}
              />
            </figure>
          </div>
        </div>
      </section>
    </article>
  );
}
