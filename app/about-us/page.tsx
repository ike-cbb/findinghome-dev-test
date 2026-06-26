import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "About Us - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function AboutUsPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative" style={{ height: "490px" }}>
        <div className="absolute inset-0">
          <Image
            src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/Anout-us-min-scaled.webp"
            alt=""
            fill
            className="object-cover"
            style={{ opacity: 1 }}
            sizes="100vw"
          />
        </div>
      </section>

      {/* About Intro */}
      <section className="px-[5%]" style={{ paddingTop: "45px", paddingBottom: "70px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <div className="flex flex-col lg:flex-row">
            <div style={{ flexBasis: "55%" }}>
              <p
                className="text-[#ef4136] font-medium tracking-[0.02em]"
                style={{ marginBottom: "5px", fontSize: "18px" }}
              >
                Who We Are
              </p>
              <h1
                className="font-normal text-[#010101]"
                style={{ fontSize: "4rem", margin: "0.67em 0", lineHeight: "1.2" }}
              >
                Buying a home should be a life milestone
              </h1>
              <p className="text-[#010101]" style={{ fontSize: "2rem", marginBottom: "1em" }}>
                Finding Home. Next to choosing our life partner, buying a home is the biggest decision we
                will ever make. We understand. That&rsquo;s why we&rsquo;re dedicated to raising the
                industry bar on how real estate is done, with an experience-led approach that that feeling
                &ndash; without the hassle.
              </p>
              <p className="text-[#010101]" style={{ fontSize: "18px", margin: 0 }}>
                Our team at Finding Home are passionate, energetic, and committed experts. They are part of
                the fabric of the communities they serve, prioritizing local knowledge and expertise. Every
                one of our agents is a specialist in their area, providing our clients with the high level of
                professional service they deserve, along their journey to finding their home.
              </p>
            </div>
            <div style={{ flexBasis: "33.33%" }} />
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="w-full relative" style={{ padding: "0 31px" }}>
        <span
          className="absolute right-0 top-0 h-full bg-[#e2d5c6] hidden lg:block"
          style={{ width: "50%" }}
        />
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="relative bg-[#e2d5c6]" style={{ padding: "5%" }}>
            <span
              className="absolute left-[-30px] bottom-0 bg-[#957f5c] hidden lg:block"
              style={{ width: "30px", height: "80%" }}
            />
            <h3 className="text-[#957f5c] font-normal" style={{ fontSize: "3rem", marginBottom: "40px" }}>
              We Only Work with the best
            </h3>
            <div className="flex flex-wrap items-center" style={{ gap: "2rem", marginBottom: "28px" }}>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/sobha-logo2.svg"
                    alt=""
                    width={133}
                    height={43}
                    className="w-[133px] h-[43px] object-contain"
                    style={{ position: "relative", bottom: "-8px" }}
                  />
                </figure>
              </div>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0">
                  <Image
                    src="https://monocrom.wpengine.com/wp-content/uploads/2023/02/damac-logo.svg"
                    alt=""
                    width={172}
                    height={18}
                    className="w-[172px] h-[18px] object-contain"
                  />
                </figure>
              </div>
              <div className="flex-shrink-0">
                <figure className="m-0">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/05/logo_white.svg"
                    alt=""
                    width={177}
                    height={23}
                    className="w-[177px] h-[23px] object-contain"
                  />
                </figure>
              </div>
              <div className="flex items-center flex-shrink-0">
                <figure className="m-0">
                  <Image
                    src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/logo-danube-1.svg"
                    alt=""
                    width={158}
                    height={39}
                    className="w-[158px] h-[39px] object-contain"
                    style={{ marginLeft: "35px" }}
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="px-[5%]">
        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: 0, paddingRight: 0 }}>
          <figure className="m-0">
            <Image
              src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/list-03.webp"
              alt=""
              width={1293}
              height={793}
              className="w-full"
              style={{ height: "500px", objectFit: "cover" }}
            />
          </figure>

          <div style={{ paddingBottom: "5%", paddingTop: "3%" }}>
            <div className="flex flex-col lg:flex-row" style={{ gap: "2rem" }}>
              {/* How we think */}
              <div className="lg:basis-1/2">
                <p
                  className="text-[#ef4136] font-medium tracking-[0.02em]"
                  style={{ fontSize: "24px", marginBottom: "5px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
                >
                  How we think
                </p>
                <p
                  className="text-[#010101]"
                  style={{ fontSize: "2.4rem", lineHeight: "1.4", marginBottom: "1em" }}
                >
                  At Finding Home, we believe that the journey of finding a home to buy or rent should be
                  just as rewarding as the destination.
                </p>
                <p className="text-[#010101]" style={{ fontSize: "18px", marginBottom: "1em", lineHeight: "1.6" }}>
                  Buying or renting a home is an important and highly personal journey for our clients. We
                  aim to prioritize the client&rsquo;s experience, making the entire process of finding a
                  home easier, more transparent, and less of a hassle.
                </p>
                <p style={{ fontSize: "18px", marginBottom: "1em", lineHeight: "1.6" }}>
                  At Finding Home, we value local knowledge and expertise, and take a friendly and
                  supportive approach to deliver an exceptional (and enjoyable) homefinding experience.
                </p>
              </div>

              {/* What we do */}
              <div className="lg:basis-1/2">
                <p
                  className="text-[#ef4136] font-medium tracking-[0.02em]"
                  style={{ fontSize: "24px", marginBottom: "5px", fontWeight: 500, fontFamily: "Poppins, sans-serif" }}
                >
                  What we do
                </p>
                <p
                  className="text-[#010101]"
                  style={{ fontSize: "2.4rem", lineHeight: "1.4", marginBottom: "1em" }}
                >
                  We make the experience of Buying, Selling or Renting as easy as possible.
                </p>
                <p style={{ fontSize: "18px", marginBottom: "1em", lineHeight: "1.6" }}>
                  At Finding Home we&rsquo;re committed to raising the industry bar on how real estate is
                  done, with an approach that prioritizes finding homes rather than simply finding
                  properties. We provide a range of services for clients looking to buy, sell, or rent their
                  home, bringing a personalised experience focused on trust and transparency that caters to
                  both residential and commercial clients alike by guiding them through every step of the
                  process, making the experience as stress-free and enjoyable as possible.
                </p>
              </div>
            </div>

            <div className="flex justify-center" style={{ marginTop: "50px" }}>
              <Link
                href="/contact#meet-the-team"
                className="inline-block bg-[#ef4136] text-[#fefefe] font-medium rounded-[3px] py-4 text-center hover:bg-[#d63629] hover:rounded-[15px] transition-all"
                style={{ fontSize: "18px", paddingLeft: "40px", paddingRight: "40px", width: "25%" }}
              >
                See our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Talk */}
      <section className="w-full" style={{ padding: "60px 0 0" }}>
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="lg:basis-[60%]">
            <figure className="m-0 h-full">
              <Image
                src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/ftrd-lets-talk2-scaled.webp"
                alt=""
                width={2560}
                height={2099}
                className="w-full object-cover"
                style={{ height: "930px" }}
              />
            </figure>
          </div>
          <div className="lg:basis-[40%]">
            <div className="relative bg-[#fde2e1]" style={{ padding: "50px 60px" }}>
              <span
                className="absolute left-[-30px] top-0 bg-[#ef4136] hidden lg:block"
                style={{ width: "30px", height: "42%", zIndex: 1 }}
              />
              <ContactForm
                variant="pink"
                showCheckbox
                formName="about-contact-form"
                checkboxId="checkbox-agree-about"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
