import Image from "next/image";

export const metadata = {
  title: "What is Off-Plan and Why You Need to Invest in Dubai - Finding Home",
  description:
    "Learn about the off-plan investment trend in Dubai and what you need to know before making an informed decision.",
};

const ARTICLE_ID = "what-is-off-plan-and-why-you-need-to-invest-in-dubai";
const BASE_URL = "https://findinghome.ae";
const ARTICLE_URL = `${BASE_URL}/guide/${ARTICLE_ID}`;
const FEATURED_IMAGE =
  "https://findinghomeprd.wpengine.com/wp-content/uploads/2023/03/es-download-5.jpg";

const articleIntroduction = `<p><i><span style="font-weight: 400">Learn about the off-plan investment trend in Dubai and what you need to know before making an informed decision. Find out how to identify a great off-plan property in your budget with confidence.</span></i></p>`;

const articleBody = `<p><span style="font-weight: 400">The Emirate of Dubai is quickly becoming one of the world&rsquo;s most attractive destinations for real estate investors looking to purchase off-plan properties. As Dubai continues to be recognized as a hub for business and tourism throughout the globe, demand for both residential and commercial properties stays at soaring levels. A strong economy, world-class infrastructure and ease of doing business make it an ideal investment choice for both local and international investors.</span></p>
<p><span style="font-weight: 400">Off-plan investments can be advantageous for professional and informed investors in the property market that offers exceptional potential for growth. Not only are these investments often cheaper than completed properties, the price of the property increases as the building project progresses. With off-plan investments, buyers are investing in the potential future value of properties, with news outlets claiming Dubai&rsquo;s real estate is expected to grow 46% over 2023 (</span><a href="https://www.khaleejtimes.com/business/dubai-real-estate-set-for-46-growth-in-2023-data-show"><span style="font-weight: 400">Khaleej Times</span></a><span style="font-weight: 400">).</span></p>
<p><span style="font-weight: 400">Off-plan purchasers allows investors to benefit from capital appreciation as the value of their investment increases over time. Ultimately, off-plan investments represent an opportunity for professional and informed investors to benefit significantly from capital appreciation in a relatively short period of time.</span></p>
<p><span style="font-weight: 400">If all goes according to plan, investors can enjoy healthy capital appreciation as the property is developed, offering an exciting opportunity to enter the market with a reduced risk. Off-plan investments provide a unique set of advantages that may help savvy investors navigate Dubai&rsquo;s rapidly expanding property market to achieve their desired returns.</span></p>
<p><span style="font-weight: 400">Buying any real estate requires research. Doing your own research, as well as engaging with professional guidance, can ensure that you make an informed decision when it comes to investing in the city&rsquo;s real estate opportunities. The professional advice of an experienced real estate agent or financial advisor is invaluable when considering an investment opportunity in Dubai.</span></p>
<p><span style="font-weight: 400">Off-plan investment also carries associated risks, including construction delays, changes to the property market, and changes to planning permission and building regulations. Real estates with direct experience can help buyers navigate through the possibilities, and help them to make the right real estate choices based on their own circumstances.</span></p>
<p><span style="font-weight: 400">Off-plan investment in Dubai is extremely popular among European investors due to its favorable conditions. Situated at the strategic center of the Arabian Gulf, this city offers a tax-free environment and solid infrastructure, making it an ideal investment choice for outsiders. Its flourishing economy, significant population growth, as well as relatively little available land are all factors that have seen international investors from countries such as the United Kingdom, France, Germany and Switzerland flock to Dubai&rsquo;s real estate market.</span></p>`;

function ShareArticle() {
  return (
    <div className="hidden lg:block sticky top-[250px] float-left ml-[-13%] z-20">
      <p className="mb-0">Share This</p>
      <ul className="flex gap-[5px]">
        <li className="list-none">
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${ARTICLE_URL}`}
            className="text-[#010101] hover:text-[#ef4136]"
            style={{ transition: "0.3s" }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="relative -top-[2px]"
            >
              <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
        </li>
        <li className="list-none">
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://api.whatsapp.com/send?text=${ARTICLE_URL}`}
            className="text-[#010101] hover:text-[#ef4136]"
            style={{ transition: "0.3s" }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="relative -top-[2px]"
            >
              <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
            </svg>
            <span className="sr-only">WhatsApp</span>
          </a>
        </li>
        <li className="list-none">
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=${ARTICLE_URL}`}
            className="text-[#010101] hover:text-[#ef4136]"
            style={{ transition: "0.3s" }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="relative -top-[2px]"
            >
              <path d="M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </a>
        </li>
        <li className="list-none">
          <a
            rel="noreferrer"
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=${ARTICLE_URL}`}
            className="text-[#010101] hover:text-[#ef4136]"
            style={{ transition: "0.3s" }}
          >
            <svg
              width="23"
              height="23"
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="relative -top-[2px]"
            >
              <path d="M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default function GuidePage() {
  return (
    <article>
      {/* Hero: full-width background image */}
      <section className="relative h-[550px] overflow-hidden">
        <Image
          src={FEATURED_IMAGE}
          alt=""
          fill
          className="object-cover"
          style={{ filter: "brightness(0.6)" }}
          priority
        />
      </section>

      {/* Content */}
      <section className="pt-20 pb-[100px] px-[5%]">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-6">
          <ShareArticle />

          <h2 className="text-[55px] font-light leading-[1.25]">
            What is Off-Plan and Why You Need to Invest in Dubai
          </h2>

          <p
            className="text-[25px]"
            dangerouslySetInnerHTML={{ __html: articleIntroduction }}
          />

          <style
            dangerouslySetInnerHTML={{
              __html: ".article-body p { margin-bottom: 21px } .article-body p:last-child { margin-bottom: 0 }",
            }}
          />
          <div
            className="article-body text-[18px]"
            dangerouslySetInnerHTML={{ __html: articleBody }}
          />
        </div>
      </section>
    </article>
  );
}
