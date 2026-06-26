import PhoneInput from "./PhoneInput";

interface ContactFormProps {
  variant?: "pink" | "transparent";
  showCheckbox?: boolean;
  showMessage?: boolean;
  selectOptions?: string[];
  buttonText?: string;
  selectDefault?: string;
  formName?: string;
  checkboxId?: string;
}

const inputStyle = {
  height: "48px",
  borderRadius: "3px",
  border: "1px solid #000",
  backgroundColor: "#f7f7f7",
  padding: "10px 15px",
  marginBottom: "18px",
  fontSize: "14px",
} as const;

export default function ContactForm({
  variant = "transparent",
  showCheckbox = false,
  showMessage = true,
  selectOptions = ["List my Home", "Off-Plan Enquiry", "Other"],
  buttonText = "Send Message",
  selectDefault,
  formName = "contact-form",
  checkboxId = "checkbox-agree",
}: ContactFormProps) {
  const containerClass =
    variant === "pink"
      ? "relative bg-[#fde2e1]"
      : "bg-pink px-[7%] py-[7%]";

  return (
    <div className={containerClass}>
      <h3
        className={
          variant === "pink"
            ? "text-center font-normal text-[#010101]"
            : "text-center font-poppins text-2xl font-normal mb-6"
        }
        style={variant === "pink" ? { fontSize: "40px" } : undefined}
      >
        Let&rsquo;s Talk
      </h3>
      <form
        name={formName}
        style={
          variant === "pink"
            ? { marginTop: "40px", marginBottom: "40px" }
            : undefined
        }
        className={variant === "pink" ? undefined : "space-y-4"}
      >
        <input
          type="text"
          placeholder="First Name *"
          required
          className={
            variant === "pink"
              ? "w-full outline-none block"
              : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          }
          style={variant === "pink" ? inputStyle : undefined}
        />
        <input
          type="text"
          placeholder="Last Name *"
          required
          className={
            variant === "pink"
              ? "w-full outline-none block"
              : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          }
          style={variant === "pink" ? inputStyle : undefined}
        />
        <input
          type="text"
          placeholder="Company"
          className={
            variant === "pink"
              ? "w-full outline-none block"
              : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          }
          style={variant === "pink" ? inputStyle : undefined}
        />
        <input
          type="email"
          placeholder="Email *"
          required
          className={
            variant === "pink"
              ? "w-full outline-none block"
              : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary"
          }
          style={variant === "pink" ? inputStyle : undefined}
        />
        {variant === "pink" ? (
          <div style={{ marginBottom: "18px" }}>
            <PhoneInput />
          </div>
        ) : (
          <div>
            <PhoneInput />
          </div>
        )}
        <select
          className={
            variant === "pink"
              ? "w-full outline-none block appearance-none"
              : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary bg-white"
          }
          style={
            variant === "pink"
              ? {
                  ...inputStyle,
                  backgroundImage: "url(/arrow-down.svg)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "97% center",
                }
              : undefined
          }
          defaultValue={selectDefault}
        >
          {selectOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {showMessage && (
          <textarea
            placeholder="Message"
            rows={4}
            className={
              variant === "pink"
                ? "w-full outline-none block"
                : "w-full px-4 py-3 border border-gray-200 rounded text-sm focus:outline-none focus:border-primary resize-none"
            }
            style={
              variant === "pink"
                ? {
                    height: "110px",
                    borderRadius: "3px",
                    border: "1px solid #000",
                    backgroundColor: "#f7f7f7",
                    padding: "10px 15px",
                    marginBottom: "18px",
                    fontSize: "14px",
                    resize: "none",
                  }
                : undefined
            }
          />
        )}
        {showCheckbox && (
          <div style={{ marginBottom: "15px" }}>
            <input
              type="checkbox"
              required
              aria-required="true"
              id={checkboxId}
              name={checkboxId}
              className="appearance-none rounded-full m-0 p-0 relative"
              style={{
                width: "28px",
                height: "28px",
                border: "1px solid #000",
                backgroundColor: "#f7f7f7",
                top: "8px",
                marginRight: "10px",
              }}
            />
            <label
              htmlFor={checkboxId}
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
        )}
        <div
          className="text-center"
          style={variant === "pink" ? { marginTop: "30px" } : undefined}
        >
          <button
            type="submit"
            className={
              variant === "pink"
                ? "outline-none border-0 cursor-pointer rounded-[3px] hover:rounded-[15px]"
                : "w-full bg-primary text-white py-3 rounded font-medium text-lg hover:bg-red-700 transition-colors"
            }
            style={
              variant === "pink"
                ? {
                    fontFamily: "Poppins, sans-serif",
                    backgroundColor: "#ef4136",
                    color: "#fff",
                    fontSize: "18px",
                    padding: "17px 45px",
                    transition: ".3s",
                  }
                : undefined
            }
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
