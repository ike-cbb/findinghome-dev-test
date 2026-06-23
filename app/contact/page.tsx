import Link from "next/link";

const featuredProperties = [
  {
    slug: "damac-lagoons-mykonos-cluster",
    title: "DAMAC Lagoons - Mykonos",
    location: "Mykonos, DAMAC Lagoons",
    developer: "DAMAC properties",
    propertyType: "Townhouse",
    description:
      "<strong>Beautiful Marina View<br></strong>Mykonos is a luxury building located in DAMAC Lagoons",
    image:
      "https://findinghomeprd.wpengine.com/wp-content/uploads/2023/04/TW_BACK.jpg",
    whatsappText: "DAMAC Lagoons - Mykonos - DAMAC Lagoons Enquiry",
  },
  {
    slug: "damac-hills-trump-estates-beverly-hills-drive",
    title: "DAMAC Hills - Trump Estates Beverly Hills Drive",
    location: "Beverly Hills Drive, DAMAC - Hills",
    developer: "DAMAC properties",
    propertyType: "Villa",
    description:
      "<strong>Beautiful Marina View<br></strong>Beverly Hills Drive is a luxury building located in DAMAC - Hills",
    image:
      "https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/V51-Front-scaled.jpg",
    whatsappText:
      "DAMAC Hills - Trump Estates Beverly Hills Drive - DAMAC - Hills Enquiry",
  },
];

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
                <a href="mailto:info@findinghomeprd.wpengine.com">
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
                  <Link
                    href="#"
                    className="inline-block w-full text-center rounded-[3px] bg-[#ef4136] text-[#fefefe] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] transition-colors"
                  >
                    Contact Sales
                  </Link>
                </div>

                <div className="flex-1">
                  <Link
                    href="#"
                    className="inline-block w-full text-center rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#f5d0cf] transition-colors"
                  >
                    Join Us
                  </Link>
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
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Martin.webp"
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
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/07/Maria-findinf-home.webp"
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
      <section className="py-[4%] px-[5%]">
        <div className="max-w-[1200px] mx-auto">
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

          <div className="flex flex-wrap gap-5">
            {featuredProperties.map((property) => (
              <div key={property.slug} className="flex-[1_1_300px]">
                <figure className="m-0 cursor-pointer h-[250px] overflow-hidden">
                  <img
                    src={property.image}
                    alt=""
                    width={1024}
                    height={628}
                    className="w-full h-full object-cover"
                  />
                </figure>

                <div
                  className="p-[5%]"
                  style={{ backgroundColor: "#fde2e1" }}
                >
                  <h4
                    className="text-[#010101] mb-[1.2em]"
                    style={{
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    {property.title}
                  </h4>

                  <p className="text-[#010101] mb-[1.2em]">
                    {property.location}
                  </p>

                  <p className="text-[#010101] mb-[1.2em]">
                    Developer:
                    <strong> {property.developer}</strong>
                  </p>

                  <p className="mb-[1.2em]">
                    Property Type:
                    <strong> {property.propertyType}</strong>
                  </p>

                  <p
                    className="mb-[1.2em]"
                    style={{ fontSize: "14px" }}
                    dangerouslySetInnerHTML={{
                      __html: property.description,
                    }}
                  />

                  <div className="flex gap-[5px]">
                    <Link
                      href={`/off-plan/${property.slug}`}
                      className="inline-block rounded-[3px] bg-[#fefefe] text-[#ef4136] text-[18px] px-4 py-2 font-medium no-underline hover:bg-[#f5f5f5] transition-colors"
                    >
                      View Detail
                    </Link>

                    <a
                      href={`mailto:info@findinghome.ae?subject=${encodeURIComponent(property.title)}`}
                      className="inline-block rounded-[3px] bg-[#fefefe] text-[#ef4136] px-3 py-2 no-underline hover:bg-[#f5f5f5] transition-colors"
                    >
                      <img
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/icon-mail.svg"
                        alt="Email"
                        width={25}
                        height={20}
                        style={{ width: "25px" }}
                      />
                    </a>

                    <a
                      href={`https://wa.me/+971585839259?text=${encodeURIComponent(property.whatsappText)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block rounded-[3px] bg-[#ef4136] text-[#fefefe] px-3 py-2 no-underline hover:bg-[#d63629] transition-colors"
                    >
                      <img
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/icons8-whatsapp.svg"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        style={{ width: "24px" }}
                      />
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
