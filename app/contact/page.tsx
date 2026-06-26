import Link from "next/link";
import { listings } from "@/lib/data";
import ContactSalesModal from "@/components/ContactSalesModal";
import JoinUsModal from "@/components/JoinUsModal";

const featuredProperties = listings.slice(0, 2); // Mykonos + Beverly Hills Drive — matching prod

export const metadata = {
  title: "Contact - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function ContactPage() {
  return (
    <article>
      {/* Section 1: contact_intro */}
      <section className="pt-32 lg:pt-44 pb-12 lg:pb-16 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <p className="tag text-[#ef4136] mb-[1.2em]">Contact Us</p>

          <h1 className="text-[#010101] text-[60px] font-normal leading-[1.1] my-8">
            Head Office
          </h1>

          <div>
            <p className="text-[#010101] text-[16px] mb-[1.2em]">
              <span className="block mb-5 text-[16px]">
                Phone:{" "}
                <a href="tel:+971 58 583 9259">+971 55 701 1419</a> | Email:{" "}
                <a href="mailto:info@findinghome.ae">
                  info@findinghome.ae
                </a>
              </span>
            </p>

            <p className="text-[#010101] text-[16px]">
              <span>Office Hours (Contact only) 9am &ndash; 6pm</span>
              <br />
              Green corner office building no 503 &ndash; Al Rigga Rd &ndash;
              Dubai
              <br />
              P.O box 440580
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: sec_team */}
      <section className="pt-12 lg:pt-16 px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div id="meet-the-team" />

          <div className="flex flex-wrap gap-5">
            {/* Left column: text + buttons */}
            <div className="flex-[1_1_300px]">
              <h2
                id="agents"
                className="text-[#010101] text-[40px] font-normal my-8"
              >
                Meet the Team
              </h2>

              <p className="text-[#010101] text-[22px] font-normal leading-[1.4] mb-[1.2em]">
                Each Finding Home agent lives and breathes our values and
                practices our culture each and every day. We hand select the
                best of the best &ndash; those rare diamonds that will go the
                extra mile for our clients.
              </p>

              <div className="flex flex-wrap gap-[10px]">
                <div className="flex-1">
                  <ContactSalesModal />
                </div>

                <div className="flex-1">
                  <JoinUsModal />
                </div>
              </div>
            </div>

            {/* Right column: agent cards */}
            <div className="flex-[1_1_520px] pt-[60px] flex flex-col items-end">
              {/* Agent Card 1: Martin */}
              <div
                className="px-[5%] pb-[3%] rounded-lg mb-[60px]"
                style={{ width: "480px", boxShadow: "0 0 30px rgba(0,0,0,0.08)" }}
              >
                <figure className="text-center -mt-[60px] mb-4">
                  <img
                    src="/assets/images/Martin.webp"
                    alt=""
                    width={492}
                    height={492}
                    className="mx-auto rounded-full border-[1px] border-[#ef4136]"
                    style={{ width: "163px", height: "163px", objectFit: "cover", padding: "5px" }}
                  />
                </figure>

                <p className="text-[#ef4136] text-[24px] font-normal text-center mb-[1.2em]">
                  Martin Sebastian Agdal
                </p>

                <p className="text-[#ef4136] text-[18px] font-medium text-center mb-[1.2em]">
                  Founder
                </p>

                <p className="text-[#ef4136] font-normal text-center mb-[1.2em]">
                  <a href="tel:+971557011419">+971 55 701 1419</a> |{" "}
                  <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                </p>

                <p className="text-[#ef4136] font-semibold text-center">
                  <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                </p>
              </div>

              {/* Agent Card 2: Maria */}
              <div
                className="px-[5%] pb-[3%] rounded-lg mt-20"
                style={{ width: "480px", boxShadow: "0 0 30px rgba(0,0,0,0.08)" }}
              >
                <figure className="text-center -mt-[60px] mb-4">
                  <img
                    src="/assets/images/Maria-findinf-home.webp"
                    alt=""
                    width={577}
                    height={577}
                    className="mx-auto rounded-full border-[1px] border-[#ef4136]"
                    style={{ width: "163px", objectFit: "cover", padding: "5px" }}
                  />
                </figure>

                <p className="text-[#ef4136] text-[24px] font-normal text-center mb-[1.2em]">
                  Maria Andreasdottir
                </p>

                <p className="text-[#ef4136] text-[18px] font-medium text-center mb-[1.2em]">
                  Real Estate Agent
                </p>

                <p className="text-[#ef4136] font-normal text-center mb-[1.2em]">
                  <a href="tel:+971507266719">+971 55 701 1419</a> |{" "}
                  <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                </p>

                <p className="text-[#ef4136] font-semibold text-center">
                  <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Off-Plan & Investments */}
      <section className="py-[4%] px-[31px]">
        <div>
          <h3
            className="text-[#010101] mb-8"
            style={{
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: 500,
            }}
          >
            Featured Off-Plan &amp; Investments
          </h3>

          <div className="flex flex-wrap gap-[35px]">
            {featuredProperties.map((property) => (
              <div key={property.slug} className="flex-[1_1_300px]">
                <figure className="m-0 cursor-pointer h-[270px] overflow-hidden">
                  <img
                    src={`/assets/listings/${property.heroImage}`}
                    alt=""
                    width={1024}
                    height={628}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div
                  className="p-[5%]"
                  style={{ backgroundColor: "hsla(2,88%,94%,.5)" }}
                >
                  <h4
                    className="text-[#010101] mb-[5px]"
                    style={{
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    {property.title}
                  </h4>

                  <p className="text-[#010101] mb-[10px]">
                    {property.shortName}, {property.community}
                  </p>

                  <p className="text-[#010101] mb-[10px]">
                    Developer:
                    <strong> {property.developerName}</strong>
                  </p>

                  <p className="mb-[10px]">
                    Property Type:
                    <strong> {property.propertyType}</strong>
                  </p>

                  {property.tagline && (
                    <p 
                      className="text-[#010101] font-semibold"
                      style={{ fontSize: "14px" }}
                    >
                      {property.tagline}
                    </p>
                  )}

                  {property.shortDescription && (
                    <p
                      className="mb-[25px]"
                      style={{ fontSize: "14px" }}
                    >
                      {property.shortDescription}
                    </p>
                  )}

                  <div className="flex gap-[5px]">
                    <Link
                      href={`/off-plan/${property.slug}`}
                      className="inline-block rounded-[3px] bg-[#fefefe] text-[#ef4136] text-[18px] px-[20px] py-[3px] no-underline hover:bg-[#f5f5f5] transition-colors"
                      style={{ fontFamily: "Poppins, sans-serif" }}
                    >
                      View Detail
                    </Link>

                    <a
                      href={`mailto:info@findinghome.ae?subject=${encodeURIComponent(property.title)}`}
                      className="inline-flex items-center justify-center rounded-[3px] bg-[#fefefe] text-[#ef4136] px-[20px] py-[3px] no-underline hover:bg-[#f5f5f5] transition-colors"
                    >
                      <svg width="25" height="20" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="24" height="19" rx="1.5" stroke="#ef4136"/>
                        <path d="M0.5 3L12 11L24 3" stroke="#ef4136" strokeWidth="1.5"/>
                      </svg>
                    </a>

                    <a
                      href={`https://wa.me/+971585839259?text=${encodeURIComponent(property.title + " Enquiry")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-[3px] bg-[#ef4136] text-[#fefefe] px-[20px] py-[3px] no-underline hover:bg-[#d63629] transition-colors"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#fefefe" d="M12.012 2C6.506 2 2.023 6.478 2.021 11.984c-.001 1.76.46 3.478 1.334 4.992L2 22l5.232-1.236A10.02 10.02 0 0012.01 21.978h.004c5.505 0 9.985-4.48 9.988-9.984.002-2.67-1.036-5.179-2.922-7.067C17.19 3.04 14.684 2 12.012 2zm-.002 2c2.136.001 4.143.834 5.652 2.342s2.338 3.516 2.336 5.65c-.002 4.404-3.584 7.987-7.99 7.987-1.333-.001-2.654-.336-3.817-.971l-.674-.367-.744.176-1.969.465.48-1.785.217-.8-.414-.72a7.97 7.97 0 01-1.066-3.991c.002-4.402 3.585-7.984 7.988-7.984zm-3.533 3.375c-.167 0-.437.062-.666.312s-.875 1.102-.875 2.08.896 2.415 1.02 2.582c.124.166 1.726 2.766 4.263 3.766 2.108.831 2.536.667 2.994.625.458-.041 1.478-.603 1.686-1.186.208-.583.208-1.084.146-1.187-.062-.104-.228-.166-.478-.291s-1.476-.728-1.705-.81c-.229-.083-.396-.125-.562.125-.166.25-.573.81-.719.977-.146.167-.291.19-.541.064s-1.054-.39-2.008-1.24c-.742-.661-1.243-1.477-1.389-1.727-.145-.25-.013-.386.112-.51.112-.112.248-.291.373-.437.124-.146.167-.25.25-.416.083-.166.04-.312-.02-.437-.062-.125-.548-1.358-.77-1.852-.187-.414-.384-.424-.562-.43-.146-.007-.311-.007-.477-.007z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/off-plan"
              className="inline-block rounded-[3px] bg-[#ef4136] text-[#fefefe] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] hover:rounded-[15px] transition-all text-center"
              style={{ width: "458px", marginTop: "58px" }}
            >
              See all Off-Plan Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
