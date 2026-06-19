import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Image from "next/image";

export const metadata = {
  title: "Off-Plan - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function OffPlanPage() {
  return (
    <article>
      {/* Hero */}
          <section className="relative min-h-[60vh] lg:min-h-[70vh]">
            <div className="absolute inset-0">
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/Finding-Home-Cover-min-optimised.webp"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </section>

          {/* Intro */}
          <section className="py-16 lg:py-24 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:basis-[60%]">
                    <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-5">
                      Why Off-Plan
                    </p>
                    <h1 className="text-[5.2rem] font-normal text-[#010101] mb-8 leading-tight">
                      Dubai Off Plan &ndash; an Exciting Investment Opportunities
                    </h1>
                    <p className="text-[#010101] text-[2.4rem] leading-[1.4] mb-6">
                      Dubai is known around the world for its exciting off-plan developments.
                    </p>
                    <p className="text-[#010101] text-lg">
                      From exciting locations, to luxurious amenities and designer-branded builds, off-plan developments in Dubai are
                      uniquely positioned and highly sought by a discerning international clientele.
                    </p>
                  </div>
                  <div className="lg:basis-[33.33%]" />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Listings */}
          <section className="pb-16 lg:pb-24 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <ListingCardGrid properties={listings} />
              </div>
            </div>
          </section>

          {/* Content Row 1 */}
          <section className="pb-16 lg:pb-20 px-5">
            <div className="container">
              <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-16 lg:mb-24">
                  <div className="lg:basis-1/2">
                    <figure className="w-full h-full">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/damac-canal-heights.webp"
                        alt=""
                        width={1933}
                        height={1074}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                  <div className="lg:basis-1/2 bg-[#fde2e1] p-10 lg:p-14">
                    <p className="text-[#ef4136] text-xl lg:text-2xl font-medium mb-5">
                      Put yourself in the hands of the experts
                    </p>
                    <p className="text-[#010101] text-xl lg:text-[2.4rem] leading-[1.3] mb-6">
                      Investing in an off-plan property can be an attractive option for home-buyers, both as a home to live in, or as
                      an investment.
                    </p>
                    <p className="text-[#010101] text-base mb-4">
                      Off-plan properties have the potential for a lower purchase price and the opportunity for capital appreciation.
                    </p>
                    <p className="text-[#010101] text-base mb-4">
                      However, off-plan properties aren&rsquo;t always smooth sailing, and there can be a number of risks associated
                      with buying off-plan, especially if your financial circumstances change.
                    </p>
                    <p className="text-[#010101] text-base">
                      With Finding Home, you can rest assured that we&rsquo;ll guide you through the process, advising you on the best
                      projects, along with the positives and potential pitfalls, to make sure that you make the right decision for
                      your unique needs and aspirations. After all, it&rsquo;s about matching the right person with the right home.
                    </p>
                  </div>
                </div>

                {/* Content Row 2 */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                  <div className="lg:basis-1/2 bg-[#fde2e1] p-10 lg:p-14 order-2 lg:order-1">
                    <p className="text-[#ef4136] text-xl lg:text-2xl font-medium mb-5">
                      Now is the ideal time to invest in Dubai
                    </p>
                    <p className="text-[#010101] text-xl lg:text-[2.4rem] leading-[1.3] mb-6">
                      If an off-plan property suits your needs, our team is delighted to help you find your future home.
                    </p>
                    <p className="text-[#010101] text-base mb-4">
                      Compared with more established markets, Dubai&rsquo;s growing property market is experiencing tremendous
                      growth, with a constant flow of exciting new new off-plan opportunities. And since the trend with off-plan
                      properties has seen them trading at 10% &ndash; 30% below their expected market price, with attractive
                      payment plans and incentives, there is the potential to leverage gains on a relatively small deposit if
                      property values increase before completion.
                    </p>
                    <p className="text-[#010101] text-base">
                      And with recent legislations aligning the UAE with its western contemporaries, along with favourable tax
                      conditions and ease of doing business, Dubai is emerging as a global hub to live, work and play. There has
                      never been a better time to explore off-plan properties in Dubai, let FindingHome help you find your next home.
                    </p>
                  </div>
                  <div className="lg:basis-1/2 order-1 lg:order-2">
                    <figure className="w-full h-full">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/nv-02.webp"
                        alt=""
                        width={1620}
                        height={832}
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Invest Table */}
          <section className="pb-16 lg:pb-24 px-5">
            <div className="container">
              <div className="max-w-[800px] mx-auto">
                <h2 className="text-center text-3xl lg:text-[40px] font-normal text-[#010101] mb-12">
                  Why invest in Dubai&rsquo;s property market?
                </h2>
                <div className="space-y-4 text-lg">
                  <p><strong>Safety:</strong> Consistently ranked in the top ten world&rsquo;s safest cities</p>
                  <p><strong>Weather:</strong> Sunshine all year round!</p>
                  <p><strong>Tax:</strong> Income Tax (0%), VAT (5%)</p>
                  <p><strong>Culture:</strong> Home to over 3 million people with 195 nationalities.</p>
                  <p><strong>Language:</strong> English is the main spoken language.</p>
                  <p><strong>Commerce:</strong> Globally ranked for ease of doing business, favourable legislation, low set-up costs, 5-10 year Golden Visas.</p>
                  <p><strong>Infrastructure:</strong> Easy to get around, with public transport infrastructure, as well as home to the world&rsquo;s busiest airport.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Let's Talk */}
          <section className="px-5 pb-24">
            <div className="container">
              <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto">
                <div className="lg:basis-[60%]">
                  <figure className="w-full h-full">
                    <Image
                      src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Finding-Home-1@3x-scaled.webp"
                      alt=""
                      width={2560}
                      height={2099}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="lg:basis-[40%] bg-[#fde2e1] p-10 lg:p-14">
                  <h3 className="text-2xl lg:text-3xl font-normal text-[#010101] text-center mb-6">
                    Let&rsquo;s Talk
                  </h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="First Name *"
                      required
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Last Name *"
                      required
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                    />
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                    />
                    <input
                      type="tel"
                      placeholder="050 123 4567"
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white"
                    />
                    <select className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white">
                      <option>List my Home</option>
                      <option>Off-Plan Enquiry</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-[#ddd] rounded text-sm bg-white resize-y"
                    />
                    <button
                      type="submit"
                      className="w-full px-6 py-4 bg-[#ef4136] text-white font-medium rounded hover:bg-[#d63629] transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
      </article>
  );
}
