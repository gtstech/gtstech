/**
 * StatBlock
 *
 * Props:
 *   stats {Array<{ metric: string, label: string }>}
 *         e.g. [{ metric: "300+", label: "Customers" }, ...]
 */
export default function StatBlock({ stats = [] }) {
  return (
    <section className="bg-[#dc2626] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center px-4 py-6 border border-white/10 rounded-xl"
            >
              <span className="text-4xl md:text-5xl font-bold text-white leading-none">
                {stat.metric}
              </span>
              <span className="mt-3 text-sm md:text-base font-medium text-yellow-200 uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
