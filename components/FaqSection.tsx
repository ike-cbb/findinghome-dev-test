"use client";

import { useState } from "react";

const faqItems = [
  {
    question: "What is Finding Home?",
    answer:
      "Finding Home is a real estate company with an experience-led approach to buying, selling, and renting homes, with a unique philosophy that prioritizes finding homes over simply finding properties.",
  },
  {
    question: "What is Finding Home\u2019s mission/purpose statement?",
    answer:
      "Finding Home\u2019s mission is to raise the industry bar on how real estate is done with an experience-led approach that focuses on making the home search process easier, more transparent, and less of a hassle for clients.",
  },
  {
    question: "What does Finding Home stand for?",
    answer:
      "Finding Home stands for a unique and personalized approach to real estate, with a focus on transparency, high standards, and a friendly and supportive experience for clients.",
  },
  {
    question: "What are Finding Home\u2019s values?",
    answer:
      "Finding Home values local knowledge and expertise, high professional service levels and a friendly and supportive approach.",
  },
  {
    question: "What industries does Finding Home operate in?",
    answer:
      "Finding Home operates in the real estate industry, providing services for off-plan investment, buying, selling, and renting homes for both residential and commercial purposes.",
  },
  {
    question:
      "How can I be sure that the properties are really verified on Finding Home?",
    answer:
      "All our listed properties have been verified by the Dubai Land Department, which ensures that the property details and ownership information are accurate and protect our clients from any potential fraud or misrepresentation. You can easily check the authenticity of the verification.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full" style={{ padding: "93px 31px" }}>
      <div style={{ maxWidth: "750px", margin: "0 auto" }}>
        <h2
          className="text-[#010101] font-normal"
          style={{ fontSize: "60px", lineHeight: "75px", margin: "0 0 40px" }}
        >
          FAQ
        </h2>
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i} className="border-b border-[#fde2e1]">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left flex items-center justify-between"
                style={{
                  fontSize: "24px",
                  fontWeight: 400,
                  lineHeight: "40.5px !important",
                  color: "#000",
                  padding: "25px 0",
                  margin: 0,
                  background: "transparent",
                  border: 0,
                  cursor: "pointer",
                  fontFamily: "Poppins, sans-serif",
                }}
                aria-expanded={isOpen}
              >
                <span>{item.question}</span>
                <span
                  aria-hidden
                  style={{
                    flexShrink: 0,
                    width: "50px",
                    height: "50px",
                    border: "2px solid #ef4136",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "16px",
                  }}
                >
                  <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform .2s ease",
                    }}
                  >
                    <path
                      d="M0.296013 0.300586C0.106402 0.491645 0 0.74991 0 1.01909C0 1.28826 0.106402 1.54653 0.296013 1.73759L5.33401 6.76059C5.5186 6.9447 5.76696 7.05073 6.02761 7.05669C6.28826 7.06264 6.5412 6.96808 6.73401 6.79259L11.699 1.84359C11.8896 1.65369 11.9969 1.39588 11.9974 1.12685C11.9978 0.857833 11.8914 0.599645 11.7015 0.409086C11.5116 0.218528 11.2538 0.111211 10.9848 0.110742C10.7158 0.110273 10.4576 0.216691 10.267 0.406586L6.00201 4.60659L1.73201 0.294586C1.63736 0.200642 1.52512 0.126272 1.4017 0.0757268C1.27829 0.0251816 1.14613 -0.000548355 1.01277 8.86031e-06C0.879409 0.000566076 0.747466 0.0273994 0.624481 0.078974C0.501496 0.130549 0.38988 0.205854 0.296013 0.300586Z"
                      fill="#EF4136"
                    />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div style={{ padding: "0 0 21.6px" }}>
                  <p
                    className="text-[#000]"
                    style={{
                      fontSize: "18px",
                      fontWeight: 300,
                      lineHeight: "27px",
                      margin: 0,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
