import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function AboutUsPage() {
  return (
    <article>
      <div>
          {/* Hero */}
          <section className="relative min-h-[60vh] lg:min-h-[70vh]">
            <div className="absolute inset-0">
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/Anout-us-min-scaled.webp"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          </section>

          {/* Who We Are */}
          <section className="py-16 lg:py-24 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                  <div className="lg:basis-[55%]">
                    <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-5">
                      Who We Are
                    </p>
                    <h1 className="text-[5.2rem] font-normal text-[#010101] mb-8 leading-tight">
                      Buying a home should be a life milestone
                    </h1>
                    <p className="text-[#010101] text-[2.4rem] leading-[1.4] mb-6">
                      Finding Home. Next to choosing our life partner, buying a home is the biggest decision we will ever make. We
                      understand. That&rsquo;s why we&rsquo;re dedicated to raising the industry bar on how real estate is done, with an
                      experience-led approach that that feeling &ndash; without the hassle.
                    </p>
                    <p className="text-[#010101] text-lg">
                      Our team at Finding Home are passionate, energetic, and committed experts. They are part of the fabric of the
                      communities they serve, prioritizing local knowledge and expertise. Every one of our agents is a specialist in their
                      area, providing our clients with the high level of professional service they deserve, along their journey to
                      finding their home.
                    </p>
                  </div>
                  <div className="lg:basis-[33.33%]" />
                </div>
              </div>
            </div>
          </section>

          {/* Partners */}
          <section className="pb-12 lg:pb-16 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <div className="bg-[#e2d5c6] py-12 lg:py-14 px-8 lg:px-14">
                  <h3 className="text-[#957f5c] text-3xl font-normal mb-10">
                    We Only Work with the best
                  </h3>
                  <div className="flex flex-wrap items-center gap-8 lg:gap-12">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/sobha-logo2.svg"
                        alt=""
                        width={133}
                        height={43}
                        className="w-[133px] h-[43px] object-contain"
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
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/logo-danube-1.svg"
                        alt=""
                        width={158}
                        height={39}
                        className="w-[158px] h-[39px] object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* How we think / What we do */}
          <section className="pb-16 lg:pb-20 px-5">
            <div className="container">
              <div className="max-w-[1200px] mx-auto">
                <figure className="w-full mb-12 lg:mb-16">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/list-03.webp"
                    alt=""
                    width={1293}
                    height={793}
                    className="w-full h-auto"
                  />
                </figure>

                <div className="py-8 lg:py-12">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className="lg:basis-1/2">
                      <p className="text-[#ef4136] text-xl lg:text-2xl font-medium mb-5">
                        How we think
                      </p>
                      <p className="text-[#010101] text-xl lg:text-[2.4rem] leading-[1.4] mb-6">
                        At Finding Home, we believe that the journey of finding a home to buy or rent should be just as rewarding as
                        the destination.
                      </p>
                      <p className="text-[#010101] text-lg mb-4">
                        Buying or renting a home is an important and highly personal journey for our clients. We aim to prioritize the
                        client&rsquo;s experience, making the entire process of finding a home easier, more transparent, and less of a
                        hassle.
                      </p>
                      <p className="text-[#010101] text-lg">
                        At Finding Home, we value local knowledge and expertise, and take a friendly and supportive approach to deliver
                        an exceptional (and enjoyable) homefinding experience.
                      </p>
                    </div>
                    <div className="lg:basis-1/2">
                      <p className="text-[#ef4136] text-xl lg:text-2xl font-medium mb-5">
                        What we do
                      </p>
                      <p className="text-[#010101] text-xl lg:text-[2.4rem] leading-[1.4] mb-6">
                        We make the experience of Buying, Selling or Renting as easy as possible.
                      </p>
                      <p className="text-[#010101] text-lg">
                        At Finding Home we&rsquo;re committed to raising the industry bar on how real estate is done, with an approach
                        that prioritizes finding homes rather than simply finding properties. We provide a range of services for clients
                        looking to buy, sell, or rent their home, bringing a personalised experience focused on trust and transparency
                        that caters to both residential and commercial clients alike by guiding them through every step of the process,
                        making the experience as stress-free and enjoyable as possible.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center mt-12 lg:mt-16">
                    <Link
                      href="/contact#meet-the-team"
                      className="inline-block px-8 py-4 bg-[#ef4136] text-white font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
                    >
                      See our team
                    </Link>
                  </div>
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
                      src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftrd-lets-talk2-scaled.webp"
                      alt=""
                      width={2560}
                      height={2099}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </div>
                <div className="lg:basis-[40%] bg-[#fde2e1] p-10 lg:p-14" id="lets-talk">
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
        </div>
      </article>
  );
}
