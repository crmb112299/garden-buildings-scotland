import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection({
  heading = "SALE NOW ON",
  subheading = "Save Up To 50% Off Garden Buildings",
  body = "Get your free, no-obligation quote today. Free delivery and installation across Scotland.",
  backgroundImage = "/images/garden-rooms/3.jpg"
}: {
  heading?: string;
  subheading?: string;
  body?: string;
  backgroundImage?: string;
}) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(6,78,59,0.92), rgba(4,120,87,0.92)), url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return (
    <section className="text-white py-16 md:py-20" style={bgStyle}>
      <div className="max-w-container mx-auto px-4 text-center">
        <div className="inline-block bg-white/20 backdrop-blur text-white text-xs font-extrabold tracking-[0.25em] px-4 py-1.5 rounded-full uppercase">
          {heading}
        </div>
        <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight">{subheading}</h2>
        <p className="mt-4 text-brand-50 max-w-2xl mx-auto text-base md:text-lg">{body}</p>
        <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Link
            href="/online-quote"
            className="bg-white text-brand-700 hover:bg-brand-50 font-bold px-7 py-3.5 rounded-md text-base md:text-lg"
          >
            Get My Free Quote Now
          </Link>
          <a
            href={SITE.phoneHref}
            className="border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-7 py-3.5 rounded-md text-base md:text-lg"
          >
            Or Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
