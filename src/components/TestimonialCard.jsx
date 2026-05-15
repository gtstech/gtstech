/**
 * TestimonialCard
 *
 * Props:
 *   client {string} — client / company name
 *   quote  {string} — testimonial text
 *   role   {string} — role / title of the person
 */
export default function TestimonialCard({ client, quote, role }) {
  return (
    <div className="bg-white rounded-xl shadow p-8 flex flex-col">
      {/* Open quote mark */}
      <span
        className="text-6xl font-serif leading-none text-[#dc2626] select-none mb-2"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      {/* Quote */}
      <blockquote className="flex-1 text-gray-700 italic text-sm md:text-base leading-relaxed">
        {quote}
      </blockquote>

      {/* Attribution */}
      <footer className="mt-6 pt-4 border-t border-gray-100">
        <span className="block text-sm font-bold text-[#0a3d62]">
          {client}
        </span>
        {role && (
          <span className="block text-xs text-gray-500 mt-0.5">
            {role}
          </span>
        )}
      </footer>
    </div>
  );
}
