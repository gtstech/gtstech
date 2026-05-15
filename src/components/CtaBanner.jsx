import { Link } from "react-router-dom";

/**
 * CtaBanner
 *
 * Props:
 *   title     {string} — main call-to-action heading
 *   subtitle  {string} — supporting text
 *   linkLabel {string} — button text
 *   linkTo    {string} — destination; external URLs (http/https) open in new tab
 *
 * Never renders a form or submit button — always navigates via Link or <a>.
 */
export default function CtaBanner({ title, subtitle, linkLabel = "Learn More", linkTo = "/" }) {
  const isExternal = typeof linkTo === "string" && linkTo.startsWith("http");

  return (
    <section className="bg-[#1e293b] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="text-lg text-white/85 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {/* CTA — Link or anchor, never a submit button */}
        {isExternal ? (
          <a
            href={linkTo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#dc2626] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b91c1c] transition-colors inline-block mt-2"
          >
            {linkLabel}
          </a>
        ) : (
          <Link
            to={linkTo}
            className="bg-[#dc2626] text-white font-bold px-8 py-3 rounded-full hover:bg-[#b91c1c] transition-colors inline-block mt-2"
          >
            {linkLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
