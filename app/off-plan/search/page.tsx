import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";

export const metadata = {
  title: "All Off-Plan Projects - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function OffPlanSearchPage() {
  return (
    <article>
      <section className="py-12 lg:py-16 px-5">
          <div className="container">
            <div className="max-w-[1200px] mx-auto">
              <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-4">
                Off-Plan
              </p>
              <h1 className="text-3xl lg:text-5xl font-normal text-[#010101] mb-4 leading-tight">
                All Off-Plan Projects
              </h1>
              <p className="text-[#898880] text-lg mb-8">
                Browse {listings.length} off-plan properties available in Dubai
              </p>
            </div>
          </div>
        </section>

        <section className="pb-16 lg:pb-24 px-5">
          <div className="container">
            <div className="max-w-[1200px] mx-auto">
              <ListingCardGrid properties={listings} />
            </div>
          </div>
        </section>
      </article>
  );
}
