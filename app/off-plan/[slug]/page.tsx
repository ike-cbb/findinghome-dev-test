import { listings, formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GallerySlider from "@/components/GallerySlider";

export async function generateStaticParams() {
  return listings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = listings.find((p) => p.slug === slug);
  if (!property) return { title: "Not Found" };
  return {
    title: `${property.title} - Finding Home`,
    description: property.aboutDescription.replace(/<[^>]*>/g, "").substring(0, 160),
  };
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = listings.find((p) => p.slug === slug);
  if (!property) notFound();

  const amenitiesList = property.amenities
    .replace(/&amp;/g, "&")
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br\s*\/?>/g, "")
    .split("|")
    .map((a) => a.trim())
    .filter(Boolean);

  const propertyTypesList = property.propertyTypes
    .replace(/&amp;/g, "&")
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br\s*\/?>/g, "")
    .split("|")
    .map((p) => p.trim())
    .filter(Boolean);

  const locationDescription = property.locationDescription
    .replace(/&amp;/g, "&")
    .replace(/<p[^>]*>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/(\r\n|\n|\r)/gm, "");

  const locationFirstSentence = locationDescription.split(".")[0]?.trim() || "";
  const locationRestText = locationDescription.split(".").slice(1).join(".").trim() || "";

  const paymentSteps = property.paymentPlan
    .replace(/&amp;/g, "&")
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "")
    .replace(/<br\s*\/?>/g, "")
    .split("|")
    .map((step) => step.trim())
    .filter(Boolean);

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <p className="m-0 py-2" style={{ fontSize: "14px" }}>
            <Link href="/off-plan" className="text-[#010101] no-underline">
              Off-Plan{" "}
            </Link>
            <span>/</span>
            <Link href="/off-plan/search" className="text-[#010101] no-underline">
              {" "}Search{" "}
            </Link>
            <span>/</span>{" "}
            <span className="text-[#898880]">{property.title}</span>
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-[12%] text-center overflow-hidden">
        <div className="absolute inset-0" style={{ margin: "0 5%" }}>
          <Image
            src={`/assets/listings/${property.heroImage}`}
            alt={property.title}
            fill
            className="object-cover"
            style={{ filter: "brightness(0.6)" }}
            priority
            sizes="100vw"
          />
        </div>
        <div className="relative z-10">
          <h1
            className="text-[#f1f1f1] mb-8"
            style={{ fontSize: "40px", fontStyle: "normal", fontWeight: 400 }}
          >
            {property.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-[10px]">
            <a
              href="#gallery"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#f5d0cf] transition-all"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Gallery
            </a>
            <a
              href="#property-highlights"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#f5d0cf] transition-all"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Highlights
            </a>
            <a
              href="#floorplan"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#f5d0cf] transition-all"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Floorplans
            </a>
          </div>
        </div>
      </section>

      {/* Intro + Video */}
      <section className="px-[5%] py-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex gap-5 mb-10">
            <div className="flex-[1_1_66%]">
              <p className="text-[#010101] leading-[1.4]" style={{ fontSize: "28px" }}>
                {property.aboutDescription.replace(/<[^>]*>/g, "")}
              </p>
            </div>
            <div className="flex-[1_1_33%] flex items-center justify-center">
              <a
                href="#enquire"
                className="inline-block rounded-[3px] bg-[#ef4136] text-[#f1f1f1] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] transition-colors"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {property.videoUrl && (
            <figure className="m-0">
              <video
                controls
                poster={property.videoCoverUrl}
                preload="auto"
                className="w-full h-auto rounded-lg"
              >
                <source src={property.videoUrl} type="video/mp4" />
              </video>
            </figure>
          )}
        </div>
      </section>

      {/* Property Highlights */}
      <section id="property-highlights" className="px-[5%] pb-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap items-center" style={{ gap: "80px" }}>
            <p
              className="text-[#ef4136] m-0"
              style={{ fontSize: "24px", fontStyle: "normal", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
            >
              Property Highlights
            </p>
            <div className="flex flex-1 flex-wrap" style={{ gap: "15px" }}>
              {[
                { label: "Swimming Pools", icon: "/assets/images/swimming-pool.svg" },
                { label: "Fitness Centres", icon: "/assets/images/barbell.svg" },
                { label: "Security", icon: "/assets/images/cctv.svg" },
                { label: "Play Ground", icon: "/assets/images/ico-PlayGround.svg" },
                { label: "Dining", icon: "/assets/images/ico-Dining.svg" },
              ].map((item) => (
                <div key={item.label} className="text-center" style={{ width: "116px" }}>
                  <div className="mx-auto mb-1 flex justify-center items-center">
                    <img src={item.icon} alt={item.label} width={116} height={116} />
                  </div>
                  <p className="m-0" style={{ fontSize: "14px", color: "#010101", fontFamily: "'Poppins', sans-serif" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Types + Amenities */}
      <section className="px-[5%] pb-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap" style={{ gap: "80px" }}>
            <div className="flex-[1_1_300px]">
              <h3
                className="m-0 mb-4"
                style={{ fontSize: "40px", fontStyle: "normal", fontWeight: 400, fontFamily: "'Poppins', sans-serif" }}
              >
                Property Types
              </h3>
              <table className="w-full border-collapse mb-4" style={{ borderSpacing: 0 }}>
                <tbody>
                  {propertyTypesList.map((type, i) => {
                    const firstComma = type.indexOf(",");
                    const typeName = firstComma > -1 ? type.slice(0, firstComma).trim() : type;
                    const price = firstComma > -1 ? type.slice(firstComma + 1).trim() : "";
                    return (
                      <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "hsla(2,88%,94%,.2)" : "#fff", borderBottom: i < propertyTypesList.length - 1 ? "1px solid #fde2e1" : "none" }}>
                        <td style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif", padding: "15px", fontWeight: 500 }}>{typeName}</td>
                        <td style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif", padding: "15px", fontWeight: 500 }}>{price}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p
                className="text-[#010101] m-0"
                style={{ fontSize: "18px", fontStyle: "normal", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
              >
                Completion Date: {property.completionQuarter} {property.completionYear}
              </p>
            </div>
            <div className="flex-[1_1_300px]">
              <p
                className="text-[#ef4136] m-0 mb-4"
                style={{ fontSize: "24px", fontStyle: "normal", fontWeight: 500, fontFamily: "'Poppins', sans-serif", marginTop: "20px" }}
              >
                Amenities
              </p>
              <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
                <tbody>
                  {amenitiesList.map((amenity, i) => (
                    <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "hsla(2,88%,94%,.2)" : "#fff", borderBottom: i < amenitiesList.length - 1 ? "1px solid #fde2e1" : "none" }}>
                      <td style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif", padding: "15px", fontWeight: 500 }}>{amenity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-[5%] pb-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap" style={{ gap: "80px" }}>
            <div className="flex-[1_1_300px]">
              {property.googleMapLatLang ? (
                <iframe
                  src={`https://maps.google.com/maps?q=${property.googleMapLatLang}&hl=en&z=13&output=embed`}
                  width="100%"
                  height={650}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              ) : (
                <div className="w-full h-[650px] bg-[#f7f7f7] rounded-lg flex items-center justify-center">
                  <p className="text-[#898880]" style={{ fontFamily: "'Poppins', sans-serif" }}>Map</p>
                </div>
              )}
            </div>
            <div className="flex-[1_1_300px] flex flex-col justify-end">
              {locationFirstSentence && (
                <>
                  <h4
                    className="text-[#ef4136] m-0 mb-4"
                    style={{ fontSize: "24px", fontStyle: "normal", fontWeight: 500, fontFamily: "'Poppins', sans-serif" }}
                  >
                    {locationFirstSentence}
                  </h4>
                  {locationRestText && (
                    <p className="mb-4" style={{ fontSize: "18px", fontFamily: "'Poppins', sans-serif" }}>{locationRestText}</p>
                  )}

                  {property.locationList && (
                    <table className="w-full border-collapse" style={{ borderSpacing: 0 }}>
                      <tbody>
                        {property.locationList
                          .replace(/<[^>]*>/g, "")
                          .split("|")
                          .map((item) => item.trim())
                          .filter(Boolean)
                          .map((item, i) => {
                            const firstComma = item.indexOf(",");
                            const time = firstComma > -1 ? item.slice(0, firstComma).trim() : item;
                            const place = firstComma > -1 ? item.slice(firstComma + 1).trim() : "";
                            return (
                              <tr key={i} style={{ backgroundColor: i % 2 === 0 ? "hsla(2,88%,94%,.2)" : "#fff", borderBottom: "1px solid #fde2e1" }}>
                                <td style={{ fontSize: "16px", fontFamily: "'Poppins', sans-serif", padding: "15px", fontWeight: 500 }}>
                                  {time} to {place}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section id="floorplan" className="px-[5%] pb-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap justify-center" style={{ gap: "15px" }}>
            <a
              href="#developer-details"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ minWidth: "200px", fontFamily: "'Poppins', sans-serif", padding: "14px 30px", width: "293px" }}
            >
              Developer Details
            </a>
            <a
              href={property.floorPlanImage ? `/assets/listings/${property.floorPlanImage}` : "#floorplan"}
              target={property.floorPlanImage ? "_blank" : undefined}
              rel={property.floorPlanImage ? "noopener noreferrer" : undefined}
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ minWidth: "200px", fontFamily: "'Poppins', sans-serif", padding: "14px 30px", width: "293px" }}
            >
              Floorplans
            </a>
            <a
              href="#payment-plan"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ minWidth: "200px", fontFamily: "'Poppins', sans-serif", padding: "14px 30px", width: "293px" }}
            >
              Payment Plan
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {property.galleryImages.length > 0 && (
        <section id="gallery" className="px-[5%] pb-[5%]">
          <div className="max-w-[1200px] mx-auto">
            <GallerySlider images={property.galleryImages} />
          </div>
        </section>
      )}

      {/* Developer Details */}
      <section id="developer-details" className="px-[5%] pb-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-wrap gap-5">
            <div className="flex-[1_1_300px]">
              <p
                className="text-[#ef4136] m-0 mb-2"
                style={{ fontSize: "24px", fontStyle: "normal", fontWeight: 500 }}
              >
                {property.aboutDescription.replace(/<[^>]*>/g, "").split(".")[0]}.
              </p>
              <p className="m-0 mb-2" style={{ fontSize: "24px" }}>
                {property.aboutDescription.replace(/<[^>]*>/g, "").split(".")[1] || ""}
              </p>
              <p className="m-0 mb-2" style={{ fontSize: "18px" }}>
                {property.aboutDescription.replace(/<[^>]*>/g, "").split(".").slice(2).join(".")}
              </p>
            </div>
            <div className="flex-[1_1_300px]">
              <div className="mb-4">
                <Image
                  src={`/assets/listings/${property.logoImage}`}
                  alt={property.logoAlt}
                  width={271}
                  height={30}
                  className="max-h-[30px] w-auto"
                />
              </div>
              <p className="mb-4" style={{ fontSize: "18px" }}>
                {property.developerSummary.replace(/<[^>]*>/g, "")}
              </p>
              <div className="flex flex-wrap gap-[10px]">
                <a
                  href="#enquire"
                  className="inline-block rounded-[3px] bg-[#ef4136] text-[#f1f1f1] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] transition-colors"
                >
                  Enquire Now
                </a>
                <a
                  href="#keep-informed"
                  className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#f5d0cf] transition-all"
                >
                  Keep me informed
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section id="payment-plan" className="px-[5%] py-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <h2 style={{ fontSize: "40px", fontStyle: "normal", fontWeight: 400 }}>
            Payment Plan
          </h2>
          <p style={{ fontSize: "24px" }}>80% During construction, 20% On completion</p>
          <table className="w-full border-collapse">
            <tbody>
              {paymentSteps
                .reduce((rows: { left: string; right: string }[], step, i) => {
                  const pairIndex = Math.floor(i / 2);
                  if (i % 2 === 0) {
                    rows.push({ left: step, right: "" });
                  } else {
                    rows[pairIndex].right = step;
                  }
                  return rows;
                }, [])
                .map((row, i) => (
                  <tr key={i}>
                    <td className="text-center py-2 px-4 border border-[#e0e0e0]">
                      <strong>{row.left.split(",")[0]}</strong>
                      <br />
                      {row.left.split(",").slice(1).join(",")}
                    </td>
                    <td className="text-center py-2 px-4 border border-[#e0e0e0]">
                      {row.right && (
                        <>
                          <strong>{row.right.split(",")[0]}</strong>
                          <br />
                          {row.right.split(",").slice(1).join(",")}
                        </>
                      )}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Permit Number */}
      <div className="px-[5%] pb-[5%] max-w-[1200px] mx-auto">
        <p className="text-[#767676] m-0" style={{ fontStyle: "normal", fontWeight: 500 }}>
          Permit#: 0705888731
        </p>
      </div>

      {/* Back Link */}
      <div className="px-[5%] pb-[10%] max-w-[1200px] mx-auto">
        <Link
          href="/off-plan"
          className="inline-block rounded-[3px] bg-[#ef4136] text-white text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] transition-colors"
        >
          View All Off-Plan Properties
        </Link>
      </div>
    </article>
  );
}
