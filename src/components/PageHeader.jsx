import { Link } from "react-router-dom";

/**
 * PageHeader
 *
 * Props:
 *   title       {string}   — main heading
 *   subtitle    {string}   — optional sub-text
 *   breadcrumbs {Array}    — e.g. [["Home", "/"], ["About", "/about"], ["Page Title"]]
 *                            Last item has no href (current page).
 */
export default function PageHeader({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className="bg-gradient-to-r from-[#dc2626] to-[#b91c1c] text-white">
      <div className="max-w-7xl mx-auto py-16 px-8">
        {/* Breadcrumb */}
        {breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-xs text-white/60">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                const label = Array.isArray(crumb) ? crumb[0] : crumb;
                const href = Array.isArray(crumb) ? crumb[1] : undefined;

                return (
                  <li key={idx} className="flex items-center gap-1">
                    {idx > 0 && <span className="text-white/30">/</span>}
                    {isLast || !href ? (
                      <span className={isLast ? "text-white/90 font-medium" : "text-white/60"}>
                        {label}
                      </span>
                    ) : (
                      <Link
                        to={href}
                        className="hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          {title}
        </h1>

        {/* Optional subtitle */}
        {subtitle && (
          <p className="mt-4 text-lg text-white/75 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
