import React, { useState } from "react";
import "./Careers.css";
import { FiChevronDown, FiMessageCircle, FiTarget, FiTrendingUp, FiUsers } from "react-icons/fi";
import { FaLinkedin, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaSpotify, FaHeartbeat, FaBook, FaLaptopHouse, FaStar } from "react-icons/fa";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Careers = () => {
  const [showChat, setShowChat] = useState(false);

  const scrollToSection = () => {
    const element = document.querySelector(".what-we-do");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="careers-page">
      <Header />
      <div className="pt-16">

      <section className="hero-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-content">
          <h1 className="hero-title">PEOPLE | PASSION | PRIDE</h1>
          <button className="scroll-indicator" onClick={scrollToSection} aria-label="Scroll to next section">
            <FiChevronDown size={32} />
          </button>
        </div>
      </section>

      <section id="who" className="who-we-are">
        <div className="section-content">
          <h2 className="section-heading">WHO WE ARE</h2>
          <div className="heading-divider"></div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
            <div>
              <p className="section-paragraph">
                GTS Tech and Infra Solutions is a forward-thinking technology company dedicated to transforming businesses through innovative digital solutions. We are a team of passionate professionals committed to delivering excellence and driving meaningful change in the technology landscape.
              </p>
              <p className="section-paragraph">
                Our mission is to empower organizations with cutting-edge technology, intelligent automation, and data-driven insights that accelerate growth and success.
              </p>
            </div>
            <div style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px', height: '300px' }}></div>
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="section-content">
          <h2 className="section-heading">WHAT WE DO</h2>
          <div className="heading-divider"></div>
          <p className="section-paragraph">
            We build intelligent solutions for data-driven businesses to enhance their productivity and customer experience.
          </p>
        </div>
      </section>

      <section className="our-footprint">
        <div className="section-content">
          <h2 className="section-heading">OUR FOOTPRINT</h2>
          <div className="heading-divider"></div>
          <div className="stats-grid">
            <div className="stat-column">
              <div className="stat-number">300+</div>
              <div className="stat-label">Customers Worldwide</div>
            </div>
            <div className="stat-column">
              <div className="stat-number">$181 MN</div>
              <div className="stat-label">Annual Revenue</div>
            </div>
            <div className="stat-column">
              <div className="stat-number">4 Regions</div>
              <div className="stat-label">Global Delivery Centers</div>
            </div>
            <div className="stat-column">
              <div className="stat-number">6 Countries</div>
              <div className="stat-label">Global Location Presence</div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-map">
        <div className="section-content">
          <div className="map-container">
            <svg className="map-arc" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path d="M0 50 Q500 0, 1000 50" stroke="#d0d0d0" strokeWidth="2" fill="none" />
            </svg>
            <div className="world-map-placeholder">
              <svg viewBox="0 0 1000 600" className="world-map-svg">
                <ellipse cx="500" cy="300" rx="450" ry="280" fill="#f0f0f0" />
              </svg>
              <div className="location-marker" style={{ left: "15%", top: "35%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Livonia</span>
              </div>
              <div className="location-marker" style={{ left: "18%", top: "42%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">New Jersey</span>
              </div>
              <div className="location-marker" style={{ left: "55%", top: "45%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Mumbai</span>
              </div>
              <div className="location-marker" style={{ left: "53%", top: "48%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Nasik</span>
              </div>
              <div className="location-marker" style={{ left: "58%", top: "50%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Bengaluru</span>
              </div>
              <div className="location-marker" style={{ left: "60%", top: "55%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Puducherry</span>
              </div>
              <div className="location-marker" style={{ left: "70%", top: "48%" }}>
                <div className="marker-dot"></div>
                <span className="marker-label">Manila</span>
              </div>
            </div>
            <div className="map-caption">GLOBAL DELIVERY CENTERS</div>
          </div>
        </div>
      </section>

      <section className="about-us">
        <div className="section-content">
          <h2 className="section-heading">ABOUT US</h2>
          <div className="heading-divider"></div>
          <div className="cards-grid">
            <div className="about-card">
              <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop")' }}>
                <span className="card-image-placeholder">Why GTS Tech</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">Why GTS Tech</h3>
                <a href="#" className="card-link">Learn More →</a>
              </div>
            </div>
            <div className="about-card">
              <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop")' }}>
                <span className="card-image-placeholder">Life @ GTS Tech</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">Life @ GTS Tech</h3>
                <a href="#" className="card-link">Learn More →</a>
              </div>
            </div>
            <div className="about-card">
              <div className="card-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop")' }}>
                <span className="card-image-placeholder">GTS Tech Moments</span>
              </div>
              <div className="card-content">
                <h3 className="card-title">GTS Tech Moments</h3>
                <a href="#" className="card-link">Learn More →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="section-content">
          <h2 className="section-heading">WHY JOIN GTS TECH</h2>
          <div className="heading-divider"></div>
          <p className="section-paragraph">We offer comprehensive benefits and a supportive environment to help you thrive</p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaHeartbeat size={32} />
              </div>
              <h3 className="benefit-title">Health & Wellness</h3>
              <p className="benefit-description">Comprehensive health coverage, wellness programs, and fitness benefits</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FiTrendingUp size={32} />
              </div>
              <h3 className="benefit-title">Career Growth</h3>
              <p className="benefit-description">Clear career paths, mentorship, and opportunities for advancement</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaLaptopHouse size={32} />
              </div>
              <h3 className="benefit-title">Work-Life Balance</h3>
              <p className="benefit-description">Flexible work arrangements and remote work options</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FiTarget size={32} />
              </div>
              <h3 className="benefit-title">Competitive Compensation</h3>
              <p className="benefit-description">Market-leading salaries with performance-based bonuses</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FaBook size={32} />
              </div>
              <h3 className="benefit-title">Learning Opportunities</h3>
              <p className="benefit-description">Training programs, certifications, and professional development</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <FiUsers size={32} />
              </div>
              <h3 className="benefit-title">Collaborative Culture</h3>
              <p className="benefit-description">Work with talented teams in an inclusive, supportive environment</p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-culture">
        <div className="section-content">
          <h2 className="section-heading">OUR CULTURE & VALUES</h2>
          <div className="heading-divider"></div>
          <div className="culture-grid">
            <div className="culture-card">
              <div className="culture-number">01</div>
              <h3 className="culture-title">Innovation</h3>
              <p className="culture-description">We embrace new ideas and encourage creative problem-solving. Every voice matters in driving technological excellence.</p>
            </div>
            <div className="culture-card">
              <div className="culture-number">02</div>
              <h3 className="culture-title">Collaboration</h3>
              <p className="culture-description">Teamwork makes the dream work. We believe in cross-functional collaboration and knowledge sharing.</p>
            </div>
            <div className="culture-card">
              <div className="culture-number">03</div>
              <h3 className="culture-title">Integrity</h3>
              <p className="culture-description">We uphold the highest ethical standards and maintain transparency in all our actions and decisions.</p>
            </div>
            <div className="culture-card">
              <div className="culture-number">04</div>
              <h3 className="culture-title">Excellence</h3>
              <p className="culture-description">We strive for excellence in everything we do, delivering quality solutions that exceed expectations.</p>
            </div>
            <div className="culture-card">
              <div className="culture-number">05</div>
              <h3 className="culture-title">Growth Mindset</h3>
              <p className="culture-description">We encourage continuous learning and view challenges as opportunities for personal and professional growth.</p>
            </div>
            <div className="culture-card">
              <div className="culture-number">06</div>
              <h3 className="culture-title">Diversity & Inclusion</h3>
              <p className="culture-description">We celebrate diversity and foster an inclusive workplace where everyone feels valued and respected.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="section-content">
          <h2 className="section-heading">EMPLOYEE TESTIMONIALS</h2>
          <div className="heading-divider"></div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop")' }}></div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">Sarah Johnson</h4>
                  <p className="testimonial-role">Senior Software Engineer</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="testimonial-text">"Working at GTS Tech has been transformative. The team is incredibly supportive, and there's a genuine commitment to professional growth. I've learned more in the last two years than in my entire career."</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop")' }}></div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">Rahul Patel</h4>
                  <p className="testimonial-role">Product Manager</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="testimonial-text">"The culture at GTS Tech is unlike anything I've experienced. There's a real emphasis on innovation and collaboration. My ideas are heard, and I feel empowered to make a real impact."</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop")' }}></div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">Priya Sharma</h4>
                  <p className="testimonial-role">Data Scientist</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="testimonial-text">"I chose GTS Tech for the work-life balance and flexible work options. The company truly walks the talk. Plus, the learning opportunities and access to cutting-edge technologies are incredible."</p>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-avatar" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop")' }}></div>
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">Michael Chen</h4>
                  <p className="testimonial-role">Solutions Architect</p>
                </div>
              </div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))}
              </div>
              <p className="testimonial-text">"What I love most about GTS Tech is the team. Everyone is passionate about what they do, and there's a genuine sense of camaraderie. We celebrate wins together and support each other through challenges."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="banner-overlay">
          <h2 className="banner-heading">GET TO KNOW US</h2>
          <button className="banner-cta">APPLY NOW</button>
        </div>
      </section>

      </div>
      <Footer />

      <button className="floating-chat" onClick={() => setShowChat(!showChat)} aria-label="Open chat">
        <FiMessageCircle size={24} />
      </button>
    </div>
  );
};

export default Careers;
