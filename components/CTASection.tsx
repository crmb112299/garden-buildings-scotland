import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTASection({
  heading = "SALE NOW ON",
  subheading = "Save Up To 50% Off Garden Buildings",
  body = "Get your free, no-obligation quote today. Free delivery and installation across Scotland."
}: {
  heading?: string;
  subheading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-700 text-white py-16">
      <div className="max-w-container mx-auto px-4 text-center">
        <div className="text-sm tracking-widest font-bold text-brand-100">{heading}</div>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold">{subheading}</h2>
        <p className="mt-3 text-brand-50 max-w-2xl mx-auto">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          <Link
            href="/online-quote"
            className="bg-white text-brand-700 hover:bg-brand-50 font-bold px-6 py-3 rounded-md"
          >
            Get My Free Quote Now
          </Link>
          <a
            href={SITE.phoneHref}
            className="border-2 border-white text-white hover:bg-white hover:text-brand-700 font-bold px-6 py-3 rounded-md"
          >
            Call {SITE.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
