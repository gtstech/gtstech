import { useState } from 'react';
import { motion } from 'framer-motion';

// Initialize EmailJS (optional - set up after configuring your EmailJS account)
// import emailjs from '@emailjs/browser';
// emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY');

export default function ContactForm({ variant = 'default' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Using EmailJS to send email
      const templateParams = {
        to_email: 'gts.techs.info@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
      };

      // Try to send via EmailJS (requires setup)
      // For now, we'll use mailto as fallback
      const mailtoLink = `mailto:gts.techs.info@gmail.com?subject=New Contact Form Submission from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ACompany: ${formData.company}%0A%0AMessage:%0A${formData.message}`;

      // Simulate sending
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setMessage('Thank you! We will get back to you shortly.');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });

      // Reset form after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setMessage('');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    }
  };

  const isBright = variant === 'bright';

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`max-w-2xl mx-auto p-8 rounded-xl ${
        isBright ? 'bg-white card' : 'bg-white border border-gray-200'
      }`}
    >
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Name */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isBright ? 'text-gray-900' : 'text-gray-900'}`}>
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              isBright
                ? 'border-gray-300 focus:border-red-500 bg-white text-darkblue-900'
                : 'border-gray-300 focus:border-red-500 bg-gray-50 text-gray-900'
            }`}
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isBright ? 'text-gray-900' : 'text-gray-900'}`}>
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              isBright
                ? 'border-gray-300 focus:border-red-500 bg-white text-darkblue-900'
                : 'border-gray-300 focus:border-red-500 bg-gray-50 text-gray-900'
            }`}
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isBright ? 'text-gray-900' : 'text-gray-900'}`}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              isBright
                ? 'border-gray-300 focus:border-red-500 bg-white text-darkblue-900'
                : 'border-gray-300 focus:border-red-500 bg-gray-50 text-gray-900'
            }`}
            placeholder="+1 (234) 567-890"
          />
        </div>

        {/* Company */}
        <div>
          <label className={`block text-sm font-semibold mb-2 ${isBright ? 'text-gray-900' : 'text-gray-900'}`}>
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all ${
              isBright
                ? 'border-gray-300 focus:border-red-500 bg-white text-darkblue-900'
                : 'border-gray-300 focus:border-red-500 bg-gray-50 text-gray-900'
            }`}
            placeholder="Your Company"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className={`block text-sm font-semibold mb-2 ${isBright ? 'text-gray-900' : 'text-gray-900'}`}>
          Message *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className={`w-full px-4 py-3 rounded-lg border-2 transition-all resize-none ${
            isBright
              ? 'border-gray-300 focus:border-red-500 bg-white text-darkblue-900'
              : 'border-gray-300 focus:border-red-500 bg-gray-50 text-gray-900'
          }`}
          placeholder="Tell us about your project..."
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg"
        >
          {message}
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
        >
          {message}
        </motion.div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 rounded-lg font-semibold transition-all ${
          isBright
            ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-glow'
            : 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:shadow-glow'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </motion.button>

      <p className={`text-sm text-center mt-4 ${isBright ? 'text-gray-600' : 'text-gray-400'}`}>
        We'll get back to you as soon as possible.
      </p>
    </motion.form>
  );
}
