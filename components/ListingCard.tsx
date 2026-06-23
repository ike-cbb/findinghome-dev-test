import Link from "next/link";
import Image from "next/image";
import type { ListingProperty } from "@/lib/data";
import { formatPrice } from "@/lib/data";

function BedIcon() {
  return (
    <svg width="21" height="14" viewBox="0 0 21 14" fill="none">
      <path
        d="M1 7v6m0-6V1h19v6m-19 0h19m0 0v6M3 10v3m4.5-3v3m6-3v3m4.5-3v3"
        stroke="#010101"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BathIcon() {
  return (
    <svg width="18" height="16" viewBox="0 0 18 16" fill="none">
      <path
        d="M1 7h16M3 7V3a2 2 0 012-2h2a2 2 0 012 2v4M1 7v6a2 2 0 002 2h12a2 2 0 002-2V7"
        stroke="#010101"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 1h3" stroke="#010101" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AreaIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
      <rect
        x="1"
        y="1"
        width="15"
        height="15"
        rx="2"
        stroke="#010101"
        strokeWidth="1.5"
      />
      <path d="M1 5h15M5 1v15" stroke="#010101" strokeWidth="1.5" />
    </svg>
  );
}

interface ListingCardProps {
  property: ListingProperty;
}

export default function ListingCard({ property }: ListingCardProps) {
  return (
    <div className="group cursor-pointer" style={{ transition: "all .3s" }}>
      <Link
        href={`/off-plan/${property.slug}/`}
        className="no-underline text-inherit block"
      >
        {/* Image */}
        <figure
          className="m-0 overflow-hidden relative"
          style={{ height: "220px" }}
        >
          <Image
            src={`/assets/listings/${property.heroImage}`}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.2]"
            style={{ transform: "scale(1.1)" }}
            sizes="(max-width: 768px) 100vw, 350px"
          />
        </figure>

        {/* Description */}
        <div
          className="flex flex-col justify-center"
          style={{ background: "#fef0f0", padding: "5%" }}
        >
          {/* Price */}
          <h5
            className="m-0 mb-[5px]"
            style={{
              color: "#010101",
              fontSize: "26px",
              fontWeight: 500,
            }}
          >
            AED {formatPrice(property.priceMin)}
          </h5>

          {/* Title + Community */}
          <p
            className="m-0 mb-[10px]"
            style={{ color: "#010101", fontSize: "16px" }}
          >
            {property.title}, {property.community}
          </p>

          {/* Meta row */}
          <div
            className="flex flex-nowrap m-0 w-full"
            style={{ gap: "5px" }}
          >
            {/* Bedrooms */}
            <div
              className="flex items-center flex-initial"
              style={{ gap: "8px", lineHeight: 1 }}
            >
              <figure className="m-0 flex items-center">
                <BedIcon />
              </figure>
              <p
                className="m-0"
                style={{
                  color: "#010101",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {property.bedrooms}
              </p>
            </div>

            {/* Bathrooms */}
            <div
              className="flex items-center flex-initial"
              style={{ gap: "8px", lineHeight: 1 }}
            >
              <figure className="m-0 flex items-center">
                <BathIcon />
              </figure>
              <p
                className="m-0"
                style={{
                  color: "#010101",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {property.bathrooms}
              </p>
            </div>

            {/* Area */}
            <div
              className="flex items-center flex-initial"
              style={{ gap: "8px", lineHeight: 1 }}
            >
              <figure className="m-0 flex items-center">
                <AreaIcon />
              </figure>
              <p
                className="m-0"
                style={{
                  color: "#010101",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {property.area}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function ListingCardGrid({
  properties,
}: {
  properties: ListingProperty[];
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "30px",
        padding: "20px 0",
      }}
    >
      {properties.map((p) => (
        <ListingCard key={p.slug} property={p} />
      ))}
    </div>
  );
}
