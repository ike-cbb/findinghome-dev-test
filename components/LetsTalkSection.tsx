import Image from "next/image";
import ContactForm from "./ContactForm";

interface LetsTalkSectionProps {
  imageSrc: string;
  formName: string;
  checkboxId: string;
  imageHeight?: number;
  formPadding?: string;
}

export default function LetsTalkSection({
  imageSrc,
  formName,
  checkboxId,
  imageHeight = 1020,
  formPadding = "50px 80px",
}: LetsTalkSectionProps) {
  return (
    <section className="w-full" style={{ padding: "100px 0 60px" }}>
      <div className="flex flex-col lg:flex-row lg:items-stretch">
        <div className="lg:basis-[60%]">
          <figure className="m-0 h-full">
            <Image
              src={imageSrc}
              alt=""
              width={2560}
              height={2099}
              className="w-full object-cover"
              style={{ height: `${imageHeight}px`, maxHeight: "100%" }}
            />
          </figure>
        </div>
        <div className="lg:basis-[40%]">
          <div
            className="relative bg-[#fde2e1]"
            style={{ padding: formPadding }}
          >
            <span
              className="absolute left-[-30px] top-0 bg-[#ef4136] hidden lg:block"
              style={{ width: "30px", height: "42%", zIndex: 1 }}
            />
            <ContactForm
              variant="pink"
              showCheckbox
              showInterestedProperty
              messagePlaceholder="How can we help you?"
              formName={formName}
              checkboxId={checkboxId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
