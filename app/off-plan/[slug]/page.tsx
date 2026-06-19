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
    <article>
      {/* Hero */}
      <section className="relative overflow-hidden py-[20%] px-[5%] text-center">
        <div className="absolute inset-0">
          <Image
            src={`/assets/listings/${property.heroImage}`}
            alt={property.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10">
          <h1 className="text-[#fefefe] text-[4rem] font-normal mb-[10px] leading-[1.2]">
            {property.title}
          </h1>
          <div className="text-[#ef4136] text-[1.8rem] font-medium">
            AED {formatPrice(property.priceMin)}
            {property.priceMax > property.priceMin
              ? ` - AED ${formatPrice(property.priceMax)}`
              : ""}
          </div>
          <Link
            href="/off-plan"
            className="inline-block mt-5 text-[#fefefe] bg-[#ef4136] px-6 py-3 rounded-[3px] font-medium hover:bg-[#d63629] transition-colors"
          >
            &larr; Back to Off-Plan
          </Link>
        </div>
      </section>

      {/* Details */}
      <div className="max-w-[1200px] mx-auto py-10 px-[5%]">
        {/* Metadata Pills */}
        <div className="flex flex-wrap gap-5 mb-[30px]">
          {[
            { label: "Bedrooms", value: property.bedrooms },
            { label: "Bathrooms", value: property.bathrooms },
            { label: "Area", value: property.area },
            { label: "City", value: property.city },
            { label: "Community", value: property.community },
            {
              label: "Completion",
              value: `${property.completionQuarter} ${property.completionYear}`,
            },
            { label: "Developer", value: property.developerName.toUpperCase() },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#fde2e1] p-[15px_20px] rounded-lg min-w-[140px]"
            >
              <strong className="block text-[#ef4136] text-sm uppercase">
                {item.label}
              </strong>
              <span className="text-[1.3rem] font-medium">{item.value}</span>
            </div>
          ))}
        </div>

        {/* Sections */}
        <Section title="About This Property">
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.aboutDescription }}
          />
        </Section>

        <Section title="Amenities">
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.amenities }}
          />
        </Section>

        <Section title="Property Types">
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.propertyTypes }}
          />
        </Section>

        <Section title="Payment Plan">
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.paymentPlan }}
          />
        </Section>

        <Section title="Location">
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.locationDescription }}
          />
        </Section>

        <Section title={`About ${property.developerName}`}>
          <div
            className="text-lg leading-[1.6]"
            dangerouslySetInnerHTML={{ __html: property.developerSummary }}
          />
        </Section>

        {property.galleryImages.length > 0 && (
          <Section title="Gallery">
            <div className="grid gap-[15px] grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
              {property.galleryImages.map((img, i) => (
                <Image
                  key={i}
                  src={`/assets/listings/${img}`}
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-[300px] object-cover rounded-lg"
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
              className="max-w-full rounded-lg"
            />
          </Section>
        )}

        <div className="my-[30px]">
          <Image
            src={`/assets/listings/${property.logoImage}`}
            alt={property.logoAlt}
            width={150}
            height={50}
            className="max-h-[50px] w-auto"
          />
        </div>

        <Link
          href="/off-plan"
          className="inline-block text-lg bg-[#ef4136] text-white font-medium rounded-[3px] px-6 py-3 mb-10 hover:bg-[#d63629] transition-colors"
        >
          View All Off-Plan Properties
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-[#ef4136] font-normal text-[2rem] my-[30px_0_15px]">
        {title}
      </h2>
      {children}
    </div>
  );
}
