import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact - Finding Home",
  description: "Others find properties. We find homes.",
};

export default function ContactPage() {
  return (
    <article>
      <section className="pt-24 lg:pt-32 pb-12 lg:pb-16 px-5">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <p className="text-[#ef4136] text-lg font-medium uppercase tracking-wide mb-4">
              Contact Us
            </p>
            <h1 className="text-[6rem] font-normal text-[#010101] mb-8 leading-[1.1]">
              Head Office
            </h1>
            <div className="mt-6 space-y-4">
              <p className="text-[#010101] text-base">
                Phone: <a href="tel:+971557011419" className="text-[#ef4136] hover:underline">+971 55 701 1419</a> |{" "}
                Email: <a href="mailto:info@findinghome.ae" className="text-[#ef4136] hover:underline">info@findinghome.ae</a>
              </p>
              <p className="text-[#010101] text-base">
                Office Hours (Contact only) 9am &ndash; 6pm
                <br />
                Green corner office building no 503 &ndash; Al Rigga Rd &ndash; Dubai
                <br />
                P.O Box 440580
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32 px-5" id="meet-the-team">
        <div className="container">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              <div className="lg:basis-1/2">
                <h2 id="agents" className="text-[4rem] font-normal text-[#010101] mb-4 leading-tight">
                  Meet the Team
                </h2>
                <p className="text-[2.2rem] font-normal text-[#010101] leading-[1.4] mb-8">
                  Each Finding Home agent lives and breathes our values and
                  practices our culture each and every day. We hand select the
                  best of the best &ndash; those rare diamonds that will go
                  the extra mile for our clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="#"
                    className="flex-1 text-center px-6 py-4 bg-[#ef4136] text-white font-medium rounded-[3px] hover:bg-[#d63629] transition-colors"
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="#"
                    className="flex-1 text-center px-6 py-4 bg-[#fde2e1] text-[#ef4136] font-medium rounded-[3px] hover:bg-[#f5d0cf] transition-colors"
                  >
                    Join Us
                  </Link>
                </div>
              </div>

              <div className="lg:basis-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                <div className="px-5 pb-8">
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/02/Martin.webp"
                        alt="Martin Sebastian Agdal"
                        width={163}
                        height={163}
                        className="rounded-full mx-auto w-[163px] h-[163px] object-cover"
                      />
                    </div>
                    <p className="text-[#ef4136] text-[24px] font-normal mb-2">
                      Martin Sebastian Agdal
                    </p>
                    <p className="text-[#ef4136] text-lg font-medium mb-2">
                      Founder
                    </p>
                    <p className="text-[#ef4136] text-sm font-normal mb-2">
                      <a href="tel:+971557011419">+971 55 701 1419</a> |{" "}
                      <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                    </p>
                    <p className="text-[#ef4136] text-sm font-semibold">
                      <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-8">
                  <div className="text-center">
                    <div className="mb-4">
                      <Image
                        src="https://findinghomeprd.wpengine.com/wp-content/uploads/2023/07/Maria-findinf-home.webp"
                        alt="Maria Andreasdottir"
                        width={163}
                        height={163}
                        className="rounded-full mx-auto w-[163px] h-[163px] object-cover"
                      />
                    </div>
                    <p className="text-[#ef4136] text-[24px] font-normal mb-2">
                      Maria Andreasdottir
                    </p>
                    <p className="text-[#ef4136] text-lg font-medium mb-2">
                      Real Estate Agent
                    </p>
                    <p className="text-[#ef4136] text-sm font-normal mb-2">
                      <a href="tel:+971507266719">+971 55 701 1419</a> |{" "}
                      <a href="mailto:info@findinghome.ae">info@findinghome.ae</a>
                    </p>
                    <p className="text-[#ef4136] text-sm font-semibold">
                      <a href="https://findinghome.ae/">FINDINGHOME.AE</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
