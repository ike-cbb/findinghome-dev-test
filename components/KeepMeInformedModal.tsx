"use client";

import { useEffect, useState } from "react";

const inputStyle = {
  height: "48px",
  borderRadius: "3px",
  border: "1px solid #000",
  backgroundColor: "#fff",
  padding: "10px 15px",
  marginBottom: "15px",
  fontSize: "14px",
  width: "100%",
  outline: "none",
} as const;

export default function KeepMeInformedModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-block rounded-[3px] bg-[#fde2e1] text-[#ef4136] text-[18px] font-medium no-underline hover:bg-[#f5d0cf] transition-all cursor-pointer text-center"
        style={{ padding: "14px 30px", fontFamily: "'Poppins', sans-serif", width: "230px" }}
      >
        Keep me informed
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="keep-me-informed-modal-title"
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <div
            className="relative bg-[#fde2e1] w-full max-w-[560px] max-h-[90vh] overflow-y-auto modal-no-scrollbar"
            style={{ padding: "40px 50px" }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="group modal-close-btn absolute top-2 right-2 w-11 h-11 flex items-center justify-center cursor-pointer"
            >
              <span className="modal-close-icon block" />
            </button>

            <h2
              id="keep-me-informed-modal-title"
              className="text-center font-normal text-[#010101]"
              style={{ fontSize: "40px", marginBottom: "30px" }}
            >
              Keep me informed
            </h2>

            <form name="keep-me-informed-modal-form">
              <input
                type="text"
                placeholder="First Name *"
                required
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Last Name *"
                required
                style={inputStyle}
              />
              <input
                type="text"
                placeholder="Company"
                style={inputStyle}
              />
              <input
                type="email"
                placeholder="Email *"
                required
                style={inputStyle}
              />
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="checkbox"
                  required
                  aria-required="true"
                  id="checkbox-agree-informed"
                  name="checkbox-agree-informed"
                  className="appearance-none rounded-full m-0 p-0 relative"
                  style={{
                    width: "22px",
                    height: "22px",
                    border: "1px solid #000",
                    backgroundColor: "#fff",
                    top: "6px",
                    marginRight: "10px",
                  }}
                />
                <label
                  htmlFor="checkbox-agree-informed"
                  className="text-[#000] cursor-pointer"
                  style={{ lineHeight: "1.5" }}
                >
                  I agree to Finding Home{" "}
                  <a
                    href="/privacy-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[#010101] underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              <div className="text-center" style={{ marginTop: "15px" }}>
                <button
                  type="submit"
                  className="outline-none border-0 cursor-pointer rounded-[3px] hover:rounded-[15px]"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    backgroundColor: "#ef4136",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "15px 45px",
                    transition: ".3s",
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
