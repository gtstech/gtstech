import React, { useState } from "react";
import "./Services.css";

export default function Services() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="services-page">
      {/* Top Utility Bar */}
      <div className="utility-bar">
        <a href="#careers">Careers</a>
        <a href="#press">Press Releases</a>
        <a href="#events">Events</a>
        <a href="#investors">Investors</a>
        <a href="#contact">Contact Us</a>
      </div>

      {/* Primary Navigation */}
      <nav className="primary-nav">
        <div className="nav-container">
          <div className="logo">GTS Tech & Infra</div>
          <ul className="nav-menu">
            <li><a href="#technologies">Technologies</a></li>
            <li><a href="#operations">Operations</a></li>
            <li><a href="#experiences">Experiences</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#industries">Industries</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
          <button className="cta-button">Sales Enquiry</button>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <span className="category-tag">INFRASTRUCTURE SOLUTIONS</span>
          <h1>Enterprise Infrastructure & Cloud Services</h1>
          <p className="value-prop">
            [TBD: 60-90 word value proposition describing GTS Tech core infrastructure and cloud service offerings, key technologies leveraged, and strategic business outcomes.]
          </p>
          <button className="primary-cta">Submit an Inquiry</button>
        </div>
      </section>

      {/* Intro Positioning */}
      <section className="intro-positioning">
        <div className="container">
          <p className="intro-paragraph">
            [TBD: 1-2 paragraph introduction explaining GTS Tech infrastructure solutions, technologies (cloud, virtualization, containerization, automation, AI/ML), and value to enterprise customers.]
          </p>
        </div>
      </section>

      {/* Service Offerings Grid */}
      <section className="service-offerings">
        <div className="container">
          <h2>Our Service Offerings</h2>
          <div className="offerings-grid">
            {[
              { title: "[TBD: Service 1]", description: "[TBD: Brief 2-3 line description of the service]", icon: "☁️" },
              { title: "[TBD: Service 2]", description: "[TBD: Brief 2-3 line description of the service]", icon: "🔒" },
              { title: "[TBD: Service 3]", description: "[TBD: Brief 2-3 line description of the service]", icon: "⚙️" },
              { title: "[TBD: Service 4]", description: "[TBD: Brief 2-3 line description of the service]", icon: "📊" },
              { title: "[TBD: Service 5]", description: "[TBD: Brief 2-3 line description of the service]", icon: "🚀" },
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="learn-more">Learn More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="differentiators">
        <div className="container">
          <h2>Key Differentiators</h2>
          <div className="differentiators-grid">
            {[
              { title: "[TBD: DIFFERENTIATOR 1]", features: ["[TBD: Feature]", "[TBD: Feature]", "[TBD: Feature]"] },
              { title: "[TBD: DIFFERENTIATOR 2]", features: ["[TBD: Feature]", "[TBD: Feature]", "[TBD: Feature]"] },
              { title: "[TBD: DIFFERENTIATOR 3]", features: ["[TBD: Feature]", "[TBD: Feature]", "[TBD: Feature]"] },
              { title: "[TBD: DIFFERENTIATOR 4]", features: ["[TBD: Feature]", "[TBD: Feature]", "[TBD: Feature]"] },
            ].map((block, idx) => (
              <div key={idx} className="differentiator-block">
                <h3>{block.title}</h3>
                <ul>
                  {block.features.map((feature, fidx) => (
                    <li key={fidx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages / Stats Strip */}
      <section className="advantages-strip">
        <div className="container">
          <div className="stats-grid">
            {[
              { stat: "[TBD]", context: "[TBD: One-line context]" },
              { stat: "[TBD]", context: "[TBD: One-line context]" },
              { stat: "[TBD]", context: "[TBD: One-line context]" },
              { stat: "[TBD]", context: "[TBD: One-line context]" },
              { stat: "[TBD]", context: "[TBD: One-line context]" },
            ].map((item, idx) => (
              <div key={idx} className="stat-card">
                <div className="stat-number">{item.stat}</div>
                <p className="stat-context">{item.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="featured-content">
        <div className="container">
          <h2>Featured Resources</h2>
          <div className="content-grid">
            {[
              { type: "Case Study", title: "[TBD: Case Study Title]", teaser: "[TBD: One-line teaser]", cta: "Read More" },
              { type: "Whitepaper", title: "[TBD: Whitepaper Title]", teaser: "[TBD: One-line teaser]", cta: "Download Now" },
              { type: "Blog", title: "[TBD: Blog Post Title]", teaser: "[TBD: One-line teaser]", cta: "Read More" },
              { type: "Demo", title: "[TBD: Demo Title]", teaser: "[TBD: One-line teaser]", cta: "Watch Now" },
              { type: "Customer Testimonial", title: "[TBD: Customer Name/Company]", teaser: "[TBD: One-line testimonial highlight]", cta: "View More" },
            ].map((content, idx) => (
              <div key={idx} className="content-card">
                <span className="content-type">{content.type}</span>
                <h3>{content.title}</h3>
                <p>{content.teaser}</p>
                <a href="#" className="content-cta">{content.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faqs">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-accordion">
            {[
              { question: "[TBD: What is GTS Tech's infrastructure solution?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: Why should enterprises choose GTS Tech?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: What technologies does GTS Tech use?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: How does GTS Tech ensure security and compliance?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: What is the ROI/business value of GTS Tech services?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: Which industries can benefit from GTS Tech solutions?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: What cloud platforms does GTS Tech support?]", answer: "[TBD: Detailed answer]" },
              { question: "[TBD: How does GTS Tech support scaling and growth?]", answer: "[TBD: Detailed answer]" },
            ].map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className={`faq-question ${ expandedFAQ === idx ? "active" : ""}`}
                  onClick={() => toggleFAQ(idx)}
                >
                  {faq.question}
                  <span className="faq-toggle">{expandedFAQ === idx ? "−" : "+"}</span>
                </button>
                {expandedFAQ === idx && <div className="faq-answer">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request for Service / Demo Form */}
      <section className="request-form">
        <div className="container">
          <h2>Request a Demo or Service Inquiry</h2>
          <form className="inquiry-form">
            <div className="form-group">
              <label htmlFor="job-function">Job Function</label>
              <input type="text" id="job-function" placeholder="e.g., CTO, Infrastructure Manager" />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" placeholder="Select your country" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell us about your infrastructure needs..."></textarea>
            </div>
            <div className="form-group checkbox">
              <input type="checkbox" id="consent" />
              <label htmlFor="consent">I consent to GTS Tech contacting me about my inquiry</label>
            </div>
            <button type="submit" className="submit-btn">Submit Inquiry</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section company-info">
            <h4>GTS Tech & Infra Solutions</h4>
            <p>[TBD: Company blurb/description]</p>
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Technologies</h4>
            <ul>
              <li><a href="#">Cloud Services</a></li>
              <li><a href="#">Infrastructure</a></li>
              <li><a href="#">[TBD]</a></li>
              <li><a href="#">[TBD]</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Operations</h4>
            <ul>
              <li><a href="#">[TBD Service 1]</a></li>
              <li><a href="#">[TBD Service 2]</a></li>
              <li><a href="#">[TBD Service 3]</a></li>
              <li><a href="#">[TBD Service 4]</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#">[TBD Product 1]</a></li>
              <li><a href="#">[TBD Product 2]</a></li>
              <li><a href="#">[TBD Product 3]</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 GTS Tech & Infra Solutions. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
