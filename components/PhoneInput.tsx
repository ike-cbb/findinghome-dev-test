"use client";

import { useEffect, useRef } from "react";
import intlTelInput, { type ItiUtils, type SomeOptions } from "intl-tel-input";
import "intl-tel-input/dist/css/intlTelInput.css";

export default function PhoneInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const itiRef = useRef<ReturnType<typeof intlTelInput> | null>(null);

  useEffect(() => {
    if (inputRef.current && !itiRef.current) {
      const dynamicImport = new Function(
        "u",
        "return import(u)",
      ) as (u: string) => Promise<{ default: ItiUtils }>;

      const options: SomeOptions = {
        initialCountry: "ae",
        separateDialCode: false,
        loadUtils: () =>
          dynamicImport(
            "https://cdn.jsdelivr.net/npm/intl-tel-input@29.1.1/dist/js/utils.min.js",
          ),
      };
      itiRef.current = intlTelInput(inputRef.current, options);
    }

    // Force font size, background, and border after intl-tel-input initialization (it overrides via JS)
    const forceStyles = () => {
      if (inputRef.current) {
        inputRef.current.style.setProperty("font-size", "16px", "important");
        inputRef.current.style.setProperty("line-height", "18.4px", "important");
        inputRef.current.style.setProperty("background-color", "#f7f7f7", "important");
        inputRef.current.style.setProperty("border", "1px solid #000", "important");
        inputRef.current.style.setProperty("border-radius", "3px", "important");
      }
    };
    forceStyles();
    const timer = setTimeout(forceStyles, 100);
    const timer2 = setTimeout(forceStyles, 500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="tel"
      placeholder="050 123 4567"
      className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-primary"
      style={{ fontSize: "16px", lineHeight: "18.4px" }}
    />
  );
}
