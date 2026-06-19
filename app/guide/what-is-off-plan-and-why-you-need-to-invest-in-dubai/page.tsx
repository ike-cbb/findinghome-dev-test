import Link from "next/link";

export const metadata = {
  title: "What is Off-Plan and Why You Need to Invest in Dubai - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function GuidePage() {
  return (
    <article>
        <section className="pt-20 lg:pt-32 pb-16 lg:pb-24 px-5">
          <div className="container">
            <div className="max-w-[800px] mx-auto">
              <h1 className="text-[4rem] font-normal text-[#010101] mb-10 leading-tight">
                What is Off-Plan and Why You Need to Invest in Dubai
              </h1>
              <div className="space-y-6 text-lg leading-[1.8] text-[#010101]">
                <p>
                  Off-plan property refers to property that is purchased before
                  it has been built. Buyers usually buy directly from the
                  developer and typically pay a down payment followed by
                  scheduled payments linked to the construction progress.
                </p>

                <h2 className="text-xl lg:text-2xl font-medium text-[#ef4136] pt-4">
                  Why Invest in Dubai?
                </h2>
                <p>
                  Dubai continues to be one of the most exciting real estate
                  markets in the world. The emirate offers investors a unique
                  combination of benefits including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Zero income tax and low VAT at just 5%</li>
                  <li>A safe and stable environment - consistently ranked among the world&rsquo;s safest cities</li>
                  <li>World-class infrastructure and connectivity, home to the world&rsquo;s busiest international airport</li>
                  <li>Strong regulatory framework with RERA protecting investor interests</li>
                  <li>Attractive payment plans with developers offering post-completion payment schedules</li>
                  <li>Golden Visa opportunities for qualifying property investors</li>
                </ul>

                <h2 className="text-xl lg:text-2xl font-medium text-[#ef4136] pt-4">
                  Benefits of Off-Plan Investment
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lower entry price point compared to ready properties</li>
                  <li>Potential for significant capital appreciation</li>
                  <li>Flexible payment plans spread over construction period</li>
                  <li>Brand-new property with modern specifications</li>
                  <li>Choice of premium units and locations in new developments</li>
                </ul>

                <h2 className="text-xl lg:text-2xl font-medium text-[#ef4136] pt-4">
                  How Finding Home Can Help
                </h2>
                <p>
                  Our experienced team of real estate professionals are experts
                  in the Dubai off-plan market. We provide personalized guidance
                  throughout your investment journey, from selecting the right
                  property to managing the purchase process and beyond.
                </p>
              </div>

                <div className="mt-12">
                  <Link
                    href="/off-plan"
                    className="inline-block px-10 py-4 bg-[#ef4136] text-white text-lg font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
                  >
                    Explore Off-Plan Properties
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </article>
  );
}
