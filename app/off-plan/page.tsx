import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import LetsTalkSection from "@/components/LetsTalkSection";

export const metadata = {
  title: "Off-Plan - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function OffPlanPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative" style={{ height: "490px" }}>
        <div className="absolute inset-0">
          <Image
            src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/Finding-Home-Cover-min-optimised.webp"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 1 }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* Why Off-Plan Intro */}
      <section className="px-[5%]" style={{ paddingTop: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <div className="flex flex-col lg:flex-row" style={{ paddingBottom: "30px" }}>
            <div style={{ flexBasis: "60%" }}>
              <p
                className="text-[#ef4136] font-medium tracking-[0.02em]"
                style={{ marginBottom: "5px", fontSize: "18px", lineHeight: "30.375px", fontFamily: "Poppins, sans-serif" }}
              >
                Why Off-Plan
              </p>
              <h1
                className="font-normal text-[#010101]"
                style={{ fontSize: "42px", lineHeight: "50.4px", margin: "0 0 0.67em 0" }}
              >
                Dubai Off Plan &ndash; an Exciting Investment Opportunities
              </h1>
              <p
                className="text-[#010101]"
                style={{ fontSize: "24px", lineHeight: "33.6px", marginBottom: "1em", fontFamily: "Poppins, sans-serif" }}
              >
                Dubai is known around the world for its exciting off-plan developments.
              </p>
              <p
                className="text-[#010101]"
                style={{ fontSize: "18px", margin: 0 }}
              >
                From exciting locations, to luxurious amenities and designer-branded builds, off-plan
                developments in Dubai are uniquely positioned and highly sought by a discerning international
                clientele.
              </p>
            </div>
            <div style={{ flexBasis: "33.33%" }} />
          </div>
        </div>
      </section>

      {/* Featured Off-Plan & Investments */}
      <section className="px-[5%]" style={{ paddingTop: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <h3 className="text-[#010101] font-medium" style={{ fontSize: "40px", marginBottom: "40px", lineHeight: "52px" }}>
            Featured Off-Plan &amp; Investments
          </h3>

          <div className="flex flex-col lg:flex-row" style={{ gap: "35px" }}>
            {listings.slice(0, 2).map((property) => (
              <div key={property.slug} className="lg:max-w-[50%]" style={{ position: "relative", transition: "all .3s" }}>
                {/* Image */}
                <figure className="m-0 overflow-hidden" style={{ cursor: "pointer" }}>
                  <Image
                    src={`/assets/listings/${property.heroImage}`}
                    alt={property.title}
                    width={1024}
                    height={628}
                    className="w-full object-cover"
                    style={{ height: "270px", transform: "scale(1.1)" }}
                  />
                </figure>

                {/* Description */}
                <div
                  className="flex flex-col justify-center"
                  style={{ background: "hsla(2,88%,94%,.5)", padding: "30px 40px" }}
                >
                  <h4
                    className="text-[#010101] font-bold"
                    style={{ fontSize: "24px", marginBottom: "5px" }}
                  >
                    {property.title}
                  </h4>
                  <p className="text-[#010101]" style={{ marginBottom: "10px" }}>
                    {property.community}
                  </p>
                  <p className="text-[#010101]" style={{ marginBottom: "10px" }}>
                    Developer: <strong style={{ fontWeight: 600 }}>{property.developerName}</strong>
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Property Type: <strong style={{ fontWeight: 600 }}>{property.bedrooms.includes("7") ? "Villa" : "Townhouse"}</strong>
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "14px", marginBottom: "10px" }}>
                    <strong style={{ fontWeight: 600 }}>Beautiful Marina View</strong>
                    <br />
                    {property.title} is a luxury building located in {property.community}
                  </p>

                  {/* Button Row */}
                  <div className="flex items-center" style={{ gap: "10px", paddingTop: "15px", position: "relative" }}>
                    <a
                      href={`/off-plan/${property.slug}`}
                      className="inline-flex items-center rounded-[3px] cursor-pointer no-underline"
                      style={{ color: "#ef4136", backgroundColor: "#fefefe", padding: "3px 20px", fontSize: "18px", fontWeight: 400, height: "40px" }}
                    >
                      View Detail
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center rounded-[3px] flex-shrink-0"
                      style={{ backgroundColor: "#fefefe", padding: "3px 20px", height: "40px" }}
                    >
                      <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
                        <rect x="1" y="1" width="23" height="18" rx="2" stroke="#ef4136" strokeWidth="1.5" />
                        <path d="M1 4l11.5 8L24 4" stroke="#ef4136" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a
                      href={`https://wa.me/+971585839259?text=${encodeURIComponent(property.title + " - " + property.community + " Enquiry")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[3px] flex-shrink-0"
                      style={{ backgroundColor: "#ef4136", padding: "3px 20px", height: "40px" }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="#fefefe">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.4.7 4.643 1.914 6.543L.396 23.604l5.243-1.382A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.1 0-4.05-.54-5.758-1.485l-.405-.228-3.12.822.84-3.044-.255-.405A9.94 9.94 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm5.5-7.5c-.3-.15-1.77-.873-2.044-.973-.275-.1-.475-.15-.675.15-.2.3-.775.973-.95 1.173-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.413-1.49-.892-.795-1.494-1.777-1.668-2.077-.175-.3-.018-.463.132-.613.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.627-.925-2.227-.243-.583-.49-.504-.675-.514-.173-.01-.375-.012-.575-.012s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.502s1.075 2.902 1.225 3.102c.15.2 2.113 3.228 5.12 4.527.717.31 1.277.495 1.713.634.72.229 1.375.197 1.892.12.577-.087 1.77-.724 2.02-1.423.25-.7.25-1.3.175-1.423-.075-.125-.275-.2-.575-.35z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See All Button */}
          <div className="flex justify-center" style={{ marginTop: "58px" }}>
            <Link
              href="/off-plan/search"
              className="inline-block bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
              style={{ fontSize: "18px", padding: "14px 30px", fontFamily: "Poppins, sans-serif", width: "294px" }}
            >
              See all Off-Plan Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="px-[5%]">
        <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <div style={{ paddingBottom: "5%", paddingTop: "3%" }}>
            {/* Grid 1 — image left, text right */}
            <div
              className="flex flex-col lg:flex-row"
              style={{ gap: "80px", paddingBottom: "60px" }}
            >
              <div className="lg:basis-1/2">
                <figure className="m-0 relative" >
                  <span
                    className="absolute bg-[#ef4136] hidden lg:block"
                    style={{ height: "33px", width: "45%", bottom: "-33px", right: 0, zIndex: 1 }}
                  />
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/damac-canal-heights.webp"
                    alt=""
                    width={1933}
                    height={1074}
                    className="w-full object-cover"
                    style={{ height: "550px" }}
                  />
                </figure>
              </div>
              <div className="lg:basis-1/2" style={{ paddingTop: "190px" }}>
                <div style={{ paddingRight: "10%" }}>
                  <p
                    className="text-[#ef4136] font-medium tracking-[0.02em]"
                    style={{ fontSize: "24px", marginBottom: "5px" }}
                  >
                    Put yourself in the hands of the experts
                  </p>
                  <p
                    className="text-[#010101]"
                    style={{ fontSize: "2.4rem", lineHeight: "1.3", marginBottom: "1em" }}
                  >
                    Investing in an off-plan property can be an attractive option for home-buyers, both as a
                    home to live in, or as an investment.
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "16px", marginBottom: "1em" }}>
                    Off-plan properties have the potential for a lower purchase price and the opportunity for
                    capital appreciation.
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "16px", marginBottom: "1em" }}>
                    However, off-plan properties aren&rsquo;t always smooth sailing, and there can be a number
                    of risks associated with buying off-plan, especially if your financial circumstances change.
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "16px", marginBottom: "1em" }}>
                    With Finding Home, you can rest assured that we&rsquo;ll guide you through the process,
                    advising you on the best projects, along with the positives and potential pitfalls, to make
                    sure that you make the right decision for your unique needs and aspirations. After all,
                    it&rsquo;s about matching the right person with the right home.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid 2 — text left, image right */}
            <div
              className="flex flex-col lg:flex-row"
              style={{ gap: "80px", paddingBottom: "60px" }}
            >
              <div className="lg:basis-1/2 lg:order-1 order-2" style={{ paddingTop: "140px" }}>
                <div style={{ paddingLeft: "10%" }}>
                  <p
                    className="text-[#ef4136] font-medium tracking-[0.02em]"
                    style={{ fontSize: "24px", marginBottom: "5px" }}
                  >
                    Now is the ideal time to invest in Dubai
                  </p>
                  <p
                    className="text-[#010101]"
                    style={{ fontSize: "2.4rem", lineHeight: "1.3", marginBottom: "1em" }}
                  >
                    If an off-plan property suits your needs, our team is delighted to help you find your
                    future home.
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "1em" }}>
                    Compared with more established markets, Dubai&rsquo;s growing property market is
                    experiencing tremendous growth, with a constant flow of exciting new new off-plan
                    opportunities. And since the trend with off-plan properties has seen them trading at 10%
                    &ndash; 30% below their expected market price, with attractive payment plans and
                    incentives, there is the potential to leverage gains on a relatively small deposit if
                    property values increase before completion.
                  </p>
                  <p className="text-[#010101]" style={{ fontSize: "18px" }}>
                    And with recent legislations aligning the UAE with its western contemporaries, along with
                    favourable tax conditions and ease of doing business, Dubai is emerging as a global hub to
                    live, work and play. There has never been a better time to explore off-plan properties in
                    Dubai, let FindingHome help you find your next home.
                  </p>
                </div>
              </div>
              <div className="lg:basis-1/2 lg:order-2 order-1">
                <figure className="m-0 relative" >
                  <span
                    className="absolute bg-[#ef4136] hidden lg:block"
                    style={{ height: "33px", width: "65%", bottom: "-33px", right: 0, zIndex: 1 }}
                  />
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/nv-02.webp"
                    alt=""
                    width={1620}
                    height={832}
                    className="w-full object-cover"
                    style={{ height: "550px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Table */}
      <section className="px-[5%]" style={{ paddingBottom: "2%" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <h2
            className="text-center font-normal text-[#010101]"
            style={{ fontSize: "40px", marginBottom: "0.83em", lineHeight: "50px" }}
          >
            Why invest in Dubai&rsquo;s property market?
          </h2>
          <figure style={{ fontSize: "18px", margin: 0 }}>
            <table className="w-full border-collapse" style={{ border: "none", marginBottom: 0 }}>
              <tbody>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif" }}>
                    <strong style={{ fontWeight: 700 }}>Safety: </strong> Consistently ranked in the top ten world&rsquo;s safest cities
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif", background: "hsla(2,88%,94%,.2)" }}>
                    <strong style={{ fontWeight: 700 }}>Weather:</strong> Sunshine all year round!
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif" }}>
                    <strong style={{ fontWeight: 700 }}>Tax:</strong> Income Tax (0%), VAT (5%)
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif", background: "hsla(2,88%,94%,.2)" }}>
                    <strong style={{ fontWeight: 700 }}>Culture:</strong> Home to over 3 million people with 195 nationalities.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif" }}>
                    <strong style={{ fontWeight: 700 }}>Language:</strong> English is the main spoken language.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", borderBottom: "1px solid #fde2e1", fontFamily: "Poppins, sans-serif", background: "hsla(2,88%,94%,.2)" }}>
                    <strong style={{ fontWeight: 700 }}>Commerce:</strong> Globally ranked for ease of doing business, favourable legislation,
                    low set-up costs, 5-10 year Golden Visas.
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "25px 20px", border: "none", fontFamily: "Poppins, sans-serif" }}>
                    <strong style={{ fontWeight: 700 }}>Infrastructure:</strong> Easy to get around, with public transport infrastructure, as
                    well as home to the world&rsquo;s busiest airport.
                  </td>
                </tr>
              </tbody>
            </table>
          </figure>
        </div>
      </section>

      {/* Let's Talk */}
      <LetsTalkSection
        imageSrc="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Finding-Home-1@3x-scaled.webp"
        formName="offplan-contact-form"
        checkboxId="checkbox-agree-offplan"
      />
    </article>
  );
}
