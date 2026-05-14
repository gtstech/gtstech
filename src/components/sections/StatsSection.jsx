import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function StatsSection() {
  const [counts, setCounts] = useState({ clients: 0, projects: 0, team: 0, experience: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ clients: 500, projects: 1000, team: 50, experience: 10 });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { number: counts.clients, label: 'Happy Clients', suffix: '+' },
    { number: counts.projects, label: 'Projects Delivered', suffix: '+' },
    { number: counts.team, label: 'Team Members', suffix: '+' },
    { number: counts.experience, label: 'Years of Experience', suffix: '+' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.h3
                className="text-4xl md:text-5xl font-bold mb-2 text-red-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number.toLocaleString()}{stat.suffix}
              </motion.h3>
              <p className="text-lg text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
