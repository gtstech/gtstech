import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'Tech Corp',
      role: 'CEO',
      image: 'https://i.pravatar.cc/150?img=1',
      content:
        'GTS Techs transformed our business processes completely. Their innovative solutions and dedicated team made all the difference.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Digital Solutions',
      role: 'Product Manager',
      image: 'https://i.pravatar.cc/150?img=2',
      content:
        'The quality of work and attention to detail is exceptional. We\'ve seen significant improvements in our operations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'Innovation Hub',
      role: 'CTO',
      image: 'https://i.pravatar.cc/150?img=3',
      content:
        'Professional, responsive, and results-driven. GTS Techs is our go-to partner for all IT solutions.',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4">Client Success</span>
          <h2 className="text-5xl font-black text-gray-900">What Our Clients <span className="text-red-600">Say</span></h2>
          <p className="text-gray-600 mt-4">
            Trusted by hundreds of businesses worldwide
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-red-300 transition shadow-sm hover:shadow-md"
            >
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
