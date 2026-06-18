import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { listings, formatPrice } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  return (
    <>
      <Header />
      <div className="full-width-content">
        <main id="main-content" className="site-container">
          <article>
            {/* Hero */}
            <section
              className="gb-block-container alignfull off_plan_single_hero"
              style={{ padding: "20% 5% 20%" }}
            >
              <div className="gb-container-inside">
                <div className="gb-container-image-wrap">
                  <Image
                    src={`/assets/listings/${property.heroImage}`}
                    alt={property.title}
                    fill
                    className="gb-container-image has-background-dim-100 has-background-dim"
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="gb-container-content" style={{ textAlign: "center" }}>
                  <h1 style={{ color: "#fefefe", fontSize: "4rem", fontWeight: 400, fontFamily: '"Poppins", sans-serif', margin: "0 0 10px", lineHeight: 1.2 }}>
                    {property.title}
                  </h1>
                  <div style={{ color: "#ef4136", fontSize: "1.8rem", fontWeight: 500 }}>
                    AED {formatPrice(property.priceMin)}
                    {property.priceMax > property.priceMin
                      ? ` - AED ${formatPrice(property.priceMax)}`
                      : ""}
                  </div>
                  <Link
                    href="/off-plan"
                    className="wp-block-button__link"
                    style={{ marginTop: "20px", display: "inline-block" }}
                  >
                    &larr; Back to Off-Plan
                  </Link>
                </div>
              </div>
            </section>

            {/* Details */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 5%" }}>
              {/* Metadata Pills */}
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginBottom: "30px" }}>
                {[
                  { label: "Bedrooms", value: property.bedrooms },
                  { label: "Bathrooms", value: property.bathrooms },
                  { label: "Area", value: property.area },
                  { label: "City", value: property.city },
                  { label: "Community", value: property.community },
                  { label: "Completion", value: `${property.completionQuarter} ${property.completionYear}` },
                  { label: "Developer", value: property.developerName.toUpperCase() },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "#fde2e1",
                      padding: "15px 20px",
                      borderRadius: "8px",
                      minWidth: "140px",
                    }}
                  >
                    <strong style={{ display: "block", color: "#ef4136", fontSize: "14px", textTransform: "uppercase" }}>
                      {item.label}
                    </strong>
                    <span style={{ fontSize: "1.3rem", fontWeight: 500 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Sections */}
              <Section title="About This Property">
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.aboutDescription }} />
              </Section>

              <Section title="Amenities">
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.amenities }} />
              </Section>

              <Section title="Property Types">
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.propertyTypes }} />
              </Section>

              <Section title="Payment Plan">
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.paymentPlan }} />
              </Section>

              <Section title="Location">
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.locationDescription }} />
              </Section>

              <Section title={`About ${property.developerName}`}>
                <div style={{ fontSize: "18px", lineHeight: 1.6 }} dangerouslySetInnerHTML={{ __html: property.developerSummary }} />
              </Section>

              {property.galleryImages.length > 0 && (
                <Section title="Gallery">
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: "15px" }}>
                    {property.galleryImages.map((img, i) => (
                      <Image
                        key={i}
                        src={`/assets/listings/${img}`}
                        alt=""
                        width={500}
                        height={300}
                        style={{ width: "100%", height: "300px", objectFit: "cover", borderRadius: "8px" }}
                      />
                    ))}
                  </div>
                </Section>
              )}

              {property.floorPlanImage && (
                <Section title="Floor Plan">
                  <Image
                    src={`/assets/listings/${property.floorPlanImage}`}
                    alt="Floor Plan"
                    width={800}
                    height={600}
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                  />
                </Section>
              )}

              <div style={{ margin: "30px 0" }}>
                <Image
                  src={`/assets/listings/${property.logoImage}`}
                  alt={property.logoAlt}
                  width={150}
                  height={50}
                  style={{ maxHeight: "50px", width: "auto" }}
                />
              </div>

              <Link
                href="/off-plan"
                className="wp-block-button__link"
                style={{ fontSize: "18px", marginBottom: "40px", display: "inline-block" }}
              >
                View All Off-Plan Properties
              </Link>
            </div>
          </article>
        </main>
      </div>
      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h2 style={{ color: "#ef4136", fontWeight: 400, fontFamily: '"Poppins", sans-serif', fontSize: "2rem", margin: "30px 0 15px" }}>
        {title}
      </h2>
      {children}
    </div>
  );
}
