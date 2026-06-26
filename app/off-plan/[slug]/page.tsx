import { listings, formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import GallerySlider from "@/components/GallerySlider";
import ContactSalesModal from "@/components/ContactSalesModal";
import KeepMeInformedModal from "@/components/KeepMeInformedModal";

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

  // Split each step into bold label + detail text
  interface PaymentCell {
    bold: string;
    detail: string;
    isDownload?: boolean;
  }
  // Match live site: show max 9 payment steps (4 full rows + 1 cell before download)
  const cells: PaymentCell[] = paymentSteps.slice(0, 9).map((step) => {
    const commaIdx = step.indexOf(",");
    const bold = commaIdx > -1 ? step.slice(0, commaIdx).trim() : step;
    const detail = commaIdx > -1 ? step.slice(commaIdx + 1).trim() : "";
    return { bold, detail };
  });

  // Pair into rows of 2; fill empty right cell with download button
  const paymentRows: { left: PaymentCell; right: PaymentCell | null }[] = [];
  for (let i = 0; i < cells.length; i += 2) {
    const left = cells[i];
    const right = cells[i + 1] ?? null;
    paymentRows.push({ left, right });
  }

  // Put download button in the right cell of the last row if it's empty,
  // otherwise append a new row
  const lastRow = paymentRows[paymentRows.length - 1];
  if (!lastRow.right) {
    lastRow.right = { bold: "Download Payment Plan", detail: "", isDownload: true };
  } else {
    paymentRows.push({
      left: { bold: "Download Payment Plan", detail: "", isDownload: true },
      right: null,
    });
  }

  return (
    <article>
      {/* Breadcrumbs */}
      <div className="px-[5%]" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
        <div className="max-w-[1200px] mx-auto">
          <p className="m-0" style={{ fontSize: "14px" }}>
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
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] py-[14px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ fontFamily: "'Poppins', sans-serif", width: "281px" }}
            >
              Gallery
            </a>
            <a
              href="#property-highlights"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] py-[14px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ fontFamily: "'Poppins', sans-serif", width: "281px" }}
            >
              Highlights
            </a>
            <a
              href="#floorplan"
              className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] py-[14px] font-medium no-underline hover:bg-[#f5d0cf] transition-all text-center"
              style={{ fontFamily: "'Poppins', sans-serif", width: "281px" }}
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
              <ContactSalesModal
                buttonText="Enquire Now"
                buttonClassName="inline-block rounded-[3px] bg-[#ef4136] text-[#f1f1f1] text-[18px] px-10 py-[15px] font-medium no-underline hover:bg-[#d63629] transition-colors cursor-pointer"
              />
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
          <div className="flex flex-wrap" style={{ gap: "80px" }}>
            <div className="flex-[1_1_300px]">
              {(() => {
                const matches = [
                  ...property.aboutDescription.matchAll(/<p>([\s\S]*?)<\/p>/g),
                ].map((m) => m[1]);
                const lead = matches[0];
                const paragraphs = matches.slice(1);
                return (
                  <>
                    {lead && (
                      <p
                        className="text-[#ef4136] m-0"
                        style={{
                          fontSize: "28px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: 1.3,
                          marginBottom: "30px",
                        }}
                      >
                        {lead}
                      </p>
                    )}
                    {paragraphs.map((p, i) => (
                      <p
                        key={i}
                        className="text-[#010101] m-0"
                        style={{
                          fontSize: i === 0 ? "24px" : "18px",
                          fontFamily: "'Poppins', sans-serif",
                          lineHeight: 1.5,
                          marginBottom: i < paragraphs.length - 1 ? "20px" : 0,
                        }}
                      >
                        {p}
                      </p>
                    ))}
                  </>
                );
              })()}
            </div>
            <div className="flex-[1_1_300px]" style={{ paddingTop: "10px" }}>
              <div style={{ marginBottom: "25px" }}>
                <Image
                  src={`/assets/listings/${property.logoImage}`}
                  alt={property.logoAlt}
                  width={271}
                  height={30}
                  className="max-h-[30px] w-auto"
                />
              </div>
              <p
                className="text-[#010101] m-0"
                style={{ fontSize: "18px", lineHeight: 1.6, marginBottom: "30px" }}
              >
                {property.developerSummary.replace(/<[^>]*>/g, "")}
              </p>
              <div className="flex flex-wrap gap-[10px]">
                <ContactSalesModal
                  buttonText="Enquire Now"
                  buttonClassName="inline-block rounded-[3px] bg-[#ef4136] text-[#f1f1f1] text-[18px] font-medium no-underline hover:bg-[#d63629] transition-colors cursor-pointer text-center"
                  buttonStyle={{ padding: "14px 30px", fontFamily: "'Poppins', sans-serif", width: "230px" }}
                />
                <KeepMeInformedModal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plan */}
      <section
        id="payment-plan"
        className="relative flex items-center px-[5%]"
        style={{ minHeight: "800px", fontFamily: "'Poppins', sans-serif" }}
      >
        {/* Full-height background image on the left 36% — matches WordPress .gb-container-image-wrap */}
        <div className="absolute top-0 left-0 h-full hidden md:block" style={{ width: "36%", zIndex: 0 }}>
          <Image
            src="/assets/payment-plan-bg.webp"
            alt=""
            fill
            sizes="36vw"
            className="object-cover"
          />
          {/* Dim overlay for readability — common in Genesis Blocks */}
          <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.15)" }} />
          {/* Red accent bar — matches .gb-container-image-wrap:before */}
          <div
            style={{
              position: "absolute",
              right: "-30px",
              bottom: 0,
              width: "30px",
              height: "40%",
              background: "#ef4136",
            }}
          />
        </div>

        {/* Content — positioned relative to sit above the background image */}
        <div className="relative w-full max-w-[1200px] mx-auto" style={{ zIndex: 1 }}>
          <div className="flex flex-wrap" style={{ gap: "0" }}>
            {/* Spacer column matching the 36% image width */}
            <div className="hidden md:block" style={{ width: "36%" }} />
            {/* Table column */}
            <div className="flex-1 md:pl-[50px]" style={{ minWidth: 0 }}>
              <h2
                className="m-0 mb-1"
                style={{ fontSize: "40px", fontStyle: "normal", fontWeight: 400 }}
              >
                Payment Plan
              </h2>
              <p className="m-0 mb-4" style={{ fontSize: "24px" }}>
                80% During construction, 20% On completion
              </p>
              <table className="w-full" style={{ borderSpacing: 0, tableLayout: "fixed" }}>
                <tbody>
                  {paymentRows.map((row, i) => {
                    const isDownloadRow = row.left.isDownload;
                    const renderCell = (
                      cell: PaymentCell | null,
                      colIndex: number,
                    ) => {
                      if (!cell) {
                        return (
                          <td
                            key={colIndex}
                            style={{
                              border: "none",
                              padding: "15px",
                              width: "50%",
                            }}
                          />
                        );
                      }
                      const lastPaymentRowIdx = paymentRows[paymentRows.length - 1].right?.isDownload
                        ? paymentRows.length - 1
                        : paymentRows.length - 2;
                      const isLastPaymentRow = i === lastPaymentRowIdx;
                      const isGreen =
                        !isDownloadRow &&
                        isLastPaymentRow &&
                        (paymentRows[lastPaymentRowIdx].right?.isDownload
                          ? colIndex === 0
                          : colIndex === 1);
                      const isPink =
                        !isDownloadRow &&
                        !cell.isDownload &&
                        !isGreen &&
                        (i + colIndex) % 2 !== 0;
                      return (
                        <td
                          key={colIndex}
                          style={{
                            border: "none",
                            borderBottom: isGreen
                              ? "1px solid #8eee9c"
                              : "1px solid #fde2e1",
                            borderTop: isGreen ? "1px solid #8eee9c" : undefined,
                            padding: "15px",
                            width: "50%",
                            fontSize: "16px",
                            textAlign: "center",
                            backgroundColor: isGreen
                              ? "rgba(142,238,156,.2)"
                              : isPink
                                ? "hsla(2,88%,94%,.2)"
                                : undefined,
                          }}
                        >
                          {cell.isDownload ? (
                            <strong style={{ fontWeight: 500 }}>
                              <a
                                href="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/paymentplan.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                  color: "#ef4136",
                                  backgroundColor: "#fde2e1",
                                  display: "inline-block",
                                  padding: "14px 30px",
                                  borderRadius: "3px",
                                  textDecoration: "none",
                                  width: "100%",
                                  cursor: "pointer",
                                }}
                              >
                                Download Payment Plan
                              </a>
                            </strong>
                          ) : (
                            <>
                              <strong style={{ fontWeight: 500 }}>{cell.bold}</strong>
                              {cell.detail && (
                                <>
                                  <br />
                                  {cell.detail}
                                </>
                              )}
                            </>
                          )}
                        </td>
                      );
                    };
                    return (
                      <tr
                        key={i}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: "15px",
                          borderBottom: "none",
                        }}
                      >
                        {renderCell(row.left, 0)}
                        {renderCell(row.right, 1)}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="text-[#767676] m-0 mt-5" style={{ fontStyle: "normal", fontWeight: 500 }}>
                Permit#: 0705888731
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Off-Plan & Investments */}
      <section className="px-[5%]" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h3 className="text-[#010101] font-medium" style={{ fontSize: "4rem", marginBottom: "40px" }}>
            Featured Off-Plan &amp; Investments
          </h3>

          <div className="flex flex-col lg:flex-row" style={{ gap: "35px" }}>
            {listings
              .filter((p) => p.slug !== slug)
              .slice(0, 2)
              .map((p) => (
                <div key={p.slug} className="lg:max-w-[50%]" style={{ position: "relative", transition: "all .3s" }}>
                  <figure className="m-0 overflow-hidden" style={{ cursor: "pointer" }}>
                    <Image
                      src={`/assets/listings/${p.heroImage}`}
                      alt={p.title}
                      width={1024}
                      height={628}
                      className="w-full object-cover"
                      style={{ height: "270px", transform: "scale(1.1)" }}
                    />
                  </figure>

                  <div
                    className="flex flex-col justify-center"
                    style={{ background: "hsla(2,88%,94%,.5)", padding: "30px 40px" }}
                  >
                    <h4
                      className="text-[#010101] font-bold"
                      style={{ fontSize: "24px", marginBottom: "5px" }}
                    >
                      {p.title}
                    </h4>
                    <p className="text-[#010101]" style={{ marginBottom: "10px" }}>
                      {p.community}
                    </p>
                    <p className="text-[#010101]" style={{ marginBottom: "10px" }}>
                      Developer: <strong style={{ fontWeight: 700 }}>{p.developerName}</strong>
                    </p>
                    <p style={{ marginBottom: "10px" }}>
                      Property Type: <strong style={{ fontWeight: 700 }}>{p.propertyTypes.replace(/<[^>]*>/g, "").split("|")[0]?.trim()?.split(",")[0]?.trim()}</strong>
                    </p>
                    <p className="text-[#010101]" style={{ fontSize: "14px", marginBottom: "10px" }}>
                      {p.aboutDescription.replace(/<[^>]*>/g, "").substring(0, 150)}...
                    </p>

                    <div className="flex items-center" style={{ gap: "10px", paddingTop: "15px", position: "relative" }}>
                      <Link
                        href={`/off-plan/${p.slug}`}
                        className="inline-flex items-center rounded-[3px] cursor-pointer no-underline"
                        style={{ color: "#ef4136", backgroundColor: "#fefefe", padding: "3px 20px", fontSize: "18px", fontWeight: 400, height: "40px" }}
                      >
                        View Detail
                      </Link>
                      <a
                        href={`mailto:info@findinghome.ae?subject=${encodeURIComponent(p.title)}`}
                        className="inline-flex items-center justify-center rounded-[3px] flex-shrink-0"
                        style={{ backgroundColor: "#fefefe", padding: "3px 20px", height: "40px" }}
                      >
                        <svg width="25" height="20" viewBox="0 0 25 20" fill="none">
                          <rect x="1" y="1" width="23" height="18" rx="2" stroke="#ef4136" strokeWidth="1.5" />
                          <path d="M1 4l11.5 8L24 4" stroke="#ef4136" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </a>
                      <a
                        href={`https://wa.me/+971585839259?text=${encodeURIComponent(p.title + " Enquiry")}`}
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

          <div className="flex justify-center" style={{ paddingTop: "30px" }}>
            <Link
              href="/off-plan/search"
              className="inline-block bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
              style={{ fontSize: "18px", paddingLeft: "40px", paddingRight: "40px" }}
            >
              See all Off-Plan Projects
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
