export const metadata = {
  title: "Terms and Condition - Finding Home",
  description: "Others find properties. We find homes.",
};

const termsContent = [
  {
    title: "Governing Law and Jurisdiction",
    text: "By accessing this Website and obtaining the information, facilities, products or services offered through this website, you agree that the laws of the United Arab Emirates (UAE) shall govern such access and the provision of such information, facilities, products, and services. You also agree to submit to the exclusive jurisdiction of the courts of the UAE.",
  },
  {
    title: "Ownership",
    text: "The term 'Finding Home Real Estate LLC' or 'us' or 'we' refers to the owner of this Website, with registered office at Green corner office building no 503 – Al Rigga Rd – Dubai P.O box 440580, and with registered license number 667149. The term 'you' refers to the user or viewer of our website.",
  },
  {
    title: "Website Content",
    text: "The content of the pages of this Website is for your general information and use only. It is subject to change without notice.",
  },
  {
    title: "Cookies",
    text: "This Website uses cookies to monitor browsing preferences. If you allow cookies to be used, the following personal information may be stored by us for use by third parties.",
  },
  {
    title: "Warranties and Guarantees",
    text: "Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials found or offered on this Website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law. Your use of any information or materials on this Website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services, or information available through this Website meet your specific requirements.",
  },
  {
    title: "Licensing",
    text: "This Website contains material that is owned by us or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these Terms of Use. All trademarks reproduced on this Website, which are not the property of, or licensed to the operator, are acknowledged on the Website. Unauthorized use of this Website may give rise to a claim for damages and/or be a criminal offence.",
  },
  {
    title: "Links to Third-Party Websites",
    text: "From time to time, this Website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). Finding Home Real Estate LLC accepts no responsibility for the content of the linked website(s).",
  },
  {
    title: "Use of this Website",
    text: "You may use any of the information on this Website, whether originated by Finding Home Real Estate LLC or not, only for your personal purposes.",
  },
  {
    title: "Commercial Use",
    text: "You may not use any of the information on this Website for commercial purposes without the prior written consent of Finding Home Real Estate LLC. If you have any questions about these terms, please contact us at info@findinghome.ae.",
  },
];

export default function TermsAndConditionPage() {
  return (
    <div className="full-width-content">
      <article>
        <section className="py-20 lg:py-32 px-5">
          <div className="container">
            <div className="max-w-[1200px] mx-auto">
              <h1 className="text-4xl lg:text-5xl font-normal text-[#010101] mb-8">
                Terms of Use
              </h1>
              <p className="text-[#010101] text-lg mb-10 leading-relaxed">
                Welcome to Finding Home Real Estate LLC&apos;s website (&quot;Website&quot;). If you continue to
                browse and use this Website, you agree to comply with and be bound by the following
                terms and conditions of use. These terms, together with our Privacy Policy, govern
                Finding Home Real Estate LLC&apos;s relationship with you in relation to this Website.
              </p>
              <div className="space-y-8">
                {termsContent.map((section, index) => (
                  <div key={index}>
                    <h2 className="text-xl font-medium text-[#010101] mb-3">{section.title}</h2>
                    <p className="text-[#010101] text-base leading-relaxed">{section.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}
