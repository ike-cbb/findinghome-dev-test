import Link from "next/link";
import Image from "next/image";
import type { ListingProperty } from "@/lib/data";
import { formatPrice } from "@/lib/data";

interface ListingCardProps {
  property: ListingProperty;
}

export default function ListingCard({ property }: ListingCardProps) {
  return (
    <div
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 20px rgba(0,0,0,.08)",
        background: "#fff",
        transition: "transform 0.3s",
      }}
    >
      <Link
        href={`/off-plan/${property.slug}/`}
        style={{ textDecoration: "none", color: "inherit", display: "block" }}
      >
        <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
          <Image
            src={`/assets/listings/${property.heroImage}`}
            alt={property.title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 350px"
          />
          <div
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "#ef4136",
              color: "#fff",
              padding: "8px 16px",
              borderRadius: "20px",
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            AED {formatPrice(property.priceMin)}
            {property.priceMax > property.priceMin
              ? ` - AED ${formatPrice(property.priceMax)}`
              : ""}
          </div>
        </div>
        <div style={{ padding: "20px" }}>
          <Image
            src={`/assets/listings/${property.logoImage}`}
            alt=""
            width={100}
            height={25}
            style={{ maxHeight: "25px", width: "auto", marginBottom: "10px" }}
          />
          <h3
            style={{
              fontSize: "1.3rem",
              fontWeight: 500,
              margin: "0 0 10px",
              color: "#010101",
              fontFamily: '"Poppins", sans-serif',
            }}
          >
            {property.title}
          </h3>
          <p
            style={{
              color: "#898880",
              margin: "0 0 12px",
              fontSize: "14px",
            }}
          >
            {property.city} | {property.community}
          </p>
          <div style={{ display: "flex", gap: "15px", fontSize: "14px", color: "#898880" }}>
            <span>{property.bedrooms} Bed</span>
            <span>{property.area}</span>
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
