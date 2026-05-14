import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FuturisticAI from './pages/FuturisticAI';
import CustomerCare from './pages/CustomerCare';
import NavigationShowcase from './pages/NavigationShowcase';
import ComingSoon from './pages/ComingSoon';
import PressReleases from './pages/PressReleases';
import Events from './pages/Events';
import InvestorRelations from './pages/InvestorRelations';
import NotFound from './pages/NotFound';
import { techPagesConfig } from './config/techPagesConfig';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/futuristic-ai" element={<FuturisticAI />} />
          <Route path="/customer-care" element={<CustomerCare />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/press-releases" element={<PressReleases />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/about-us/investor-relations" element={<InvestorRelations />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/get-in-touch" element={<Contact />} />
                    <Route path="/navigation-showcase" element={<NavigationShowcase />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />

                    {/* Technology Pages - Auto-generated from config */}
                    {techPagesConfig.map((page) => (
                      <Route key={page.path} path={page.path} element={<page.component />} />
                    ))}

                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
