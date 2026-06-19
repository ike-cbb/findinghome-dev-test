import { ListingCardGrid } from "@/components/ListingCard";
import { listings } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Home - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function HomePage() {
  return (
    <article>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[15%] pb-[20%] px-[5%]">
        <div className="absolute inset-0">
          <Image
            src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/home-hero-scaled.webp"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1090px] text-center">
          <h1 className="text-[#fefefe] text-[5rem] font-medium leading-tight mb-10">
            Others find properties.<br />We find homes.
          </h1>
          <div className="flex justify-center">
            <Link
              href="/off-plan/search"
              className="inline-block w-3/4 bg-[#ef4136] text-[#fefefe] text-lg font-medium rounded-[20px] pt-[19px] pb-[19px] hover:bg-[#d63629] transition-colors"
            >
              Find Future Home
            </Link>
          </div>
        </div>
      </section>

      {/* See All Homes In Business Bay */}
      <section className="w-full pt-[15%] pb-[7%] px-[5%]">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-[50px]" aria-hidden="true" />
          <div className="flex justify-center">
            <Link
              href="/off-plan"
              className="inline-block bg-[#ef4136] text-[#fefefe] text-lg font-medium rounded-[3px] pt-[19px] pb-[19px] px-[30px] hover:bg-[#d63629] transition-colors"
            >
              See All Homes In Business Bay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Off-Plan Properties */}
      <section className="py-24 lg:py-32 px-5">
        <div className="max-w-[1200px] mx-auto">
          <div className="h-10" />
          <h2 className="text-center text-4xl font-normal text-[#010101] mb-6">
            Featured Off-Plan Properties
          </h2>
          <ListingCardGrid properties={listings.slice(0, 3)} />
          <div className="flex justify-center mt-10">
            <Link
              href="/off-plan"
              className="inline-block px-10 py-4 bg-[#ef4136] text-white text-lg font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
            >
              See All Off-Plan Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="w-full pt-[5%] pb-[5%] px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:basis-[45%]">
              <div className="bg-[#fde2e1] mt-[5%] p-[8%]">
                <p className="text-[#ef4136] text-lg font-medium tracking-wide mb-5">
                  Who We Are
                </p>
                <h2 className="text-4xl lg:text-[4rem] font-normal text-[#010101] mb-6 leading-[1.4]">
                  Discover a new way of Finding Home
                </h2>
                <p className="text-[#010101] text-lg mb-8">
                  Discover a new way of buying, selling and renting your home with Finding Home. With a unique philosophy and approach, find out more about the team behind Finding Home.
                </p>
                <Link
                  href="/about-us"
                  className="inline-block w-1/2 bg-[#ef4136] text-[#fefefe] text-lg font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
            <div className="lg:basis-[55%]">
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/Finding-Home-New-image.svg"
                alt=""
                width={966}
                height={636}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="w-full pt-[5%] pb-[5%] px-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-5xl lg:text-[6rem] font-normal text-[#010101] mb-12 leading-[1.1]">
            Finding a Home is the Biggest Decision We&rsquo;ll Ever Make
          </h2>
          <div className="flex flex-col lg:flex-row">
            <div className="lg:basis-[55%]">
              <p className="text-[#010101] text-lg leading-[1.6]">
                Next to choosing our life partner, buying a home is the biggest decision we will ever make. We understand.
                That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                experience-led approach that that feeling &ndash; without the hassle.
              </p>
            </div>
            <div className="lg:flex-1">
              <p className="text-[#010101] text-lg leading-[1.6]">
                We understand that searching for a place to call your own is an important and personal journey. That&rsquo;s why
                we&rsquo;re dedicated to raising standards of transparency, and making your search easier with a friendly and
                supportive approach. Whether you&rsquo;re looking for a home for yourself or as an investment, you can trust us
                to guide you at every step of the process. Others find properties, we find homes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full pb-[5%]">
        <div className="max-w-[1400px] mx-auto">
          <div className="bg-[#e2d5c6] p-[7%]">
            <h3 className="text-[#957f5c] text-2xl lg:text-[30px] font-normal mb-10">
              We Only Work with the best
            </h3>
            <div className="flex flex-wrap items-center gap-10 lg:gap-14">
              <div className="flex-shrink-0">
                <Image
                  src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/sobha-logo2.svg"
                  alt=""
                  width={141}
                  height={43}
                  className="w-[141px] h-[43px] object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="https://monocrom.wpengine.com/wp-content/uploads/2023/02/damac-logo.svg"
                  alt=""
                  width={172}
                  height={18}
                  className="w-[172px] h-[18px] object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/logo_white.svg"
                  alt=""
                  width={177}
                  height={23}
                  className="w-[177px] h-[23px] object-contain"
                />
              </div>
              <div className="flex-shrink-0 lg:ml-[35px]">
                <Image
                  src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/logo-danube.svg"
                  alt=""
                  width={158}
                  height={39}
                  className="w-[158px] h-[39px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="w-full">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:basis-[60%]">
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftrd-lets-talk2-scaled.webp"
              alt=""
              width={2560}
              height={2099}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:basis-[40%] bg-[#fde2e1] p-[7%]">
            <h3 className="text-center font-normal text-2xl lg:text-3xl text-[#010101] mb-6">
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
      </section>

      {/* Pre-footer Cards */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Our People */}
          <div className="flex flex-col">
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd1.webp"
              alt=""
              width={1920}
              height={966}
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#e2d5c6] px-[4%] pt-[10%] pb-[10%] flex-1">
              <p className="text-[#957f5c] text-lg font-medium mb-3">
                Our People
              </p>
              <h4 className="text-[#010101] text-[30px] font-normal mb-4">
                Human-Centred Real Estate
              </h4>
              <p className="text-[#010101] text-lg mb-6">
                Our agents understand that you&rsquo;re looking for a home, and they&rsquo;re here to help you find it.
              </p>
              <Link
                href="/contact#agents"
                className="inline-block w-3/4 bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] transition-colors"
              >
                Find Your Agent
              </Link>
            </div>
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/6f1f29140933fc01f5f3bddf8d733ab5@3x-1024x648.webp"
              alt=""
              width={1024}
              height={648}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* List Your Home */}
          <div className="flex flex-col">
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd3.webp"
              alt=""
              width={1920}
              height={2106}
              className="w-full h-auto object-cover"
            />
            <div className="bg-[#fee27a] px-[4%] pt-[10%] pb-[10%] flex-1">
              <p className="text-[#fbb004] text-lg font-medium mb-3">
                List Your Home
              </p>
              <h4 className="text-[#010101] text-[30px] font-normal mb-4">
                Resources &amp; Guides
              </h4>
              <p className="text-[#010101] text-lg mb-4">
                Finding Home&rsquo;s resources and guides share our knowledge and insights from the local market, making the
                process of buying, selling, or renting a home easier and more transparent.
              </p>
              <p className="text-[#010101] text-lg">
                Our resources help novice buyers navigate the complexities of home buying, and help seasoned investors select
                high-return investment homes.
              </p>
            </div>
          </div>

          {/* Off-Plan & Investment */}
          <div className="flex flex-col">
            <div className="bg-[#8eee9c] px-[4%] pt-[10%] pb-[10%] flex-1">
              <p className="text-[#00ac44] text-lg font-medium mb-3">
                Off-Plan &amp; Investment
              </p>
              <h4 className="text-[#010101] text-[30px] font-normal mb-4">
                Find the right investment for you
              </h4>
              <p className="text-[#010101] text-lg mb-6">
                Choosing investment properties is hard &ndash; we make it easy.
              </p>
              <Link
                href="/off-plan"
                className="inline-block w-3/4 bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] transition-colors"
              >
                Find Your Investment
              </Link>
            </div>
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftr-ftrd-4.webp"
              alt=""
              width={1920}
              height={2181}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </article>
  );
}
