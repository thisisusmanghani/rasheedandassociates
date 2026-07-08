import Image from "next/image";
import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${site.phone}`}
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full shadow-[0_12px_30px_rgba(37,211,102,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="h-full w-full object-contain"
      />
      <span className="sr-only">Open WhatsApp chat</span>
    </a>
  );
}
