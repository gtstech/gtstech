import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import HeroSection from '../components/sections/HeroSection';
import CTASection from '../components/sections/CTASection';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business',
      excerpt: 'Explore how artificial intelligence is transforming business operations and driving innovation.',
      date: 'May 14, 2024',
      author: 'Rajesh Kumar',
      category: 'AI & Technology',
      image: 'https://via.placeholder.com/400x250?text=AI+Future',
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the best practices for successfully migrating your applications to the cloud.',
      date: 'May 10, 2024',
      author: 'Priya Singh',
      category: 'Cloud',
      image: 'https://via.placeholder.com/400x250?text=Cloud+Migration',
    },
    {
      id: 3,
      title: 'Building Scalable Web Applications',
      excerpt: 'Discover the architecture patterns and technologies needed for scalable web apps.',
      date: 'May 5, 2024',
      author: 'Amit Patel',
      category: 'Web Development',
      image: 'https://via.placeholder.com/400x250?text=Web+Apps',
    },
    {
      id: 4,
      title: 'Mobile App Development Trends 2024',
      excerpt: 'Stay updated with the latest trends in mobile app development.',
      date: 'April 28, 2024',
      author: 'Sarah Johnson',
      category: 'Mobile',
      image: 'https://via.placeholder.com/400x250?text=Mobile+Trends',
    },
    {
      id: 5,
      title: 'Cybersecurity in the Digital Age',
      excerpt: 'Essential security practices to protect your business from cyber threats.',
      date: 'April 22, 2024',
      author: 'Rajesh Kumar',
      category: 'Security',
      image: 'https://via.placeholder.com/400x250?text=Cybersecurity',
    },
    {
      id: 6,
      title: 'Data Analytics for Business Growth',
      excerpt: 'How to leverage data analytics to make informed business decisions.',
      date: 'April 15, 2024',
      author: 'Priya Singh',
      category: 'Data Analytics',
      image: 'https://via.placeholder.com/400x250?text=Data+Analytics',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Blog - GTS Techs</title>
        <meta name="description" content="Read the latest articles on technology, innovation, and digital transformation." />
        <meta name="keywords" content="blog, technology, AI, cloud, web development" />
      </Helmet>

      <HeroSection title="Our Blog" subtitle="Latest insights on technology and innovation" />

      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-black text-gray-900">Latest <span className="text-red-500">Articles</span></h2>
            <p className="text-gray-600 mt-4">Stay updated with industry insights and tips</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-red-200 transition"
              >
                {/* Image */}
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />

                <div className="p-6">
                  {/* Category */}
                  <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">{post.category}</span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-200 pt-4">
                    <div>
                      <p className="text-gray-600">{post.author}</p>
                      <p className="text-gray-500">{post.date}</p>
                    </div>
                    <Link to="#" className="text-red-600 font-semibold hover:text-red-700 transition">
                      Read →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">Load More Articles</button>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
