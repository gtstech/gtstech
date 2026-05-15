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
import Investors from './pages/Investors';
import NotFound from './pages/NotFound';
import { techPagesConfig } from './config/techPagesConfig';

// About sub-pages
import CompanyOverview from './pages/about/CompanyOverview';
import Leadership from './pages/about/Leadership';
import Testimonials from './pages/about/Testimonials';
import DeepInDigital from './pages/about/DeepInDigital';
import CSR from './pages/about/CSR';
import DataLabs from './pages/about/DataLabs';
import Awards from './pages/about/Awards';
import Alliances from './pages/about/Alliances';
import Offices from './pages/about/Offices';
import ESG from './pages/about/ESG';

// Technologies pages
import Technologies from './pages/technologies/Technologies';
import DatamaticsAI from './pages/technologies/DatamaticsAI';
import EnterprisePlatforms from './pages/technologies/EnterprisePlatforms';
import Salesforce from './pages/technologies/Salesforce';
import Microsoft from './pages/technologies/Microsoft';
import AWS from './pages/technologies/AWS';
import OutSystems from './pages/technologies/OutSystems';
import DigitalTransformation from './pages/technologies/DigitalTransformation';
import ArtificialIntelligence from './pages/technologies/ArtificialIntelligence';
import DataAnalytics from './pages/technologies/DataAnalytics';
import Cloud from './pages/technologies/Cloud';
import Applications from './pages/technologies/Applications';
import HyperAutomation from './pages/technologies/HyperAutomation';
import ProductEngineering from './pages/technologies/ProductEngineering';
import CRM from './pages/technologies/CRM';
import ECM from './pages/technologies/ECM';
import ProfessionalServices from './pages/technologies/ProfessionalServices';
import DigitalAssurance from './pages/technologies/DigitalAssurance';
import ManagedServices from './pages/technologies/ManagedServices';
import Testing from './pages/technologies/Testing';
import AutomaticFareCollection from './pages/technologies/AutomaticFareCollection';

// Operations pages
import Operations from './pages/operations/Operations';
import DigitalFinance from './pages/operations/DigitalFinance';
import FinanceAccounting from './pages/operations/FinanceAccounting';
import BankingProcess from './pages/operations/BankingProcess';
import InsuranceProcess from './pages/operations/InsuranceProcess';
import HealthcareProcess from './pages/operations/HealthcareProcess';
import Automation from './pages/operations/Automation';
import IntelligentAutomation from './pages/operations/IntelligentAutomation';
import Finato from './pages/operations/Finato';
import ProcureToPay from './pages/operations/ProcureToPay';
import OrderToCash from './pages/operations/OrderToCash';
import RecordToReport from './pages/operations/RecordToReport';
import FPA from './pages/operations/FPA';
import DigitalContent from './pages/operations/DigitalContent';

// Experiences pages
import Experiences from './pages/experiences/Experiences';
import ContactCenter from './pages/experiences/ContactCenter';
import ExperiencesCustomerCare from './pages/experiences/CustomerCare';
import CustomerLoyalty from './pages/experiences/CustomerLoyalty';
import TrustAndSafety from './pages/experiences/TrustAndSafety';
import CustomerAnalytics from './pages/experiences/CustomerAnalytics';
import CustomerManagementConsulting from './pages/experiences/CustomerManagementConsulting';
import DigitalProctoring from './pages/experiences/DigitalProctoring';
import ResearchAnalytics from './pages/experiences/ResearchAnalytics';
import XMConsulting from './pages/experiences/XMConsulting';
import GCCMarketResearch from './pages/experiences/GCCMarketResearch';
import ResearchTechnology from './pages/experiences/ResearchTechnology';

// Products pages
import Products from './pages/products/Products';
import SuperCX from './pages/products/SuperCX';
import TruBot from './pages/products/TruBot';
import TruCap from './pages/products/TruCap';
import TruBI from './pages/products/TruBI';
import TruAIUnderwriting from './pages/products/TruAIUnderwriting';
import TruDiscovery from './pages/products/TruDiscovery';
import FinatoProduct from './pages/products/FinatoProduct';
import TruAgent from './pages/products/TruAgent';

// Industries sub-pages
import Banking from './pages/industries/Banking';
import Insurance from './pages/industries/Insurance';
import Manufacturing from './pages/industries/Manufacturing';
import Logistics from './pages/industries/Logistics';
import Healthcare from './pages/industries/Healthcare';
import Technology from './pages/industries/Technology';
import TravelHospitality from './pages/industries/TravelHospitality';
import CreditRating from './pages/industries/CreditRating';
import InternationalOrgs from './pages/industries/InternationalOrgs';
import Retail from './pages/industries/Retail';
import Education from './pages/industries/Education';
import MarketResearch from './pages/industries/MarketResearch';

// Resources pages
import Resources from './pages/resources/Resources';
import TestimonialsResource from './pages/resources/types/TestimonialsResource';
import CaseStudies from './pages/resources/types/CaseStudies';
import Demos from './pages/resources/types/Demos';
import AnalystReports from './pages/resources/types/AnalystReports';
import Whitepapers from './pages/resources/types/Whitepapers';
import Brochures from './pages/resources/types/Brochures';
import Thoughtcast from './pages/resources/types/Thoughtcast';
import Webinars from './pages/resources/types/Webinars';
import Infographics from './pages/resources/types/Infographics';
import Blogs from './pages/resources/types/Blogs';
import Newsletters from './pages/resources/types/Newsletters';
import Media from './pages/resources/types/Media';
import AI from './pages/resources/topics/AI';
import DigitalFinanceTopic from './pages/resources/topics/DigitalFinanceTopic';
import IntelligentAutomationTopic from './pages/resources/topics/IntelligentAutomationTopic';
import ECMTopic from './pages/resources/topics/ECMTopic';
import RPATopic from './pages/resources/topics/RPATopic';
import AFCTopic from './pages/resources/topics/AFCTopic';
import BigDataTopic from './pages/resources/topics/BigDataTopic';
import SalesforceTopic from './pages/resources/topics/SalesforceTopic';
import ProductEngineeringTopic from './pages/resources/topics/ProductEngineeringTopic';
import CXTopic from './pages/resources/topics/CXTopic';
import ResearchTopic from './pages/resources/topics/ResearchTopic';

// Legal pages
import DataProtection from './pages/legal/DataProtection';
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/futuristic-ai" element={<FuturisticAI />} />
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-grow">
                  <Routes>
                    {/* Core pages */}
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/solutions" element={<Solutions />} />
                    <Route path="/industries" element={<Industries />} />
                    <Route path="/careers" element={<Careers />} />
                    <Route path="/press-releases" element={<PressReleases />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/about-us/investor-relations" element={<InvestorRelations />} />
                    <Route path="/investors" element={<Investors />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/get-in-touch" element={<Contact />} />
                    <Route path="/navigation-showcase" element={<NavigationShowcase />} />
                    <Route path="/coming-soon" element={<ComingSoon />} />
                    <Route path="/customer-care" element={<CustomerCare />} />

                    {/* About sub-pages */}
                    <Route path="/about/company-overview" element={<CompanyOverview />} />
                    <Route path="/about/leadership" element={<Leadership />} />
                    <Route path="/about/testimonials" element={<Testimonials />} />
                    <Route path="/about/deep-in-digital" element={<DeepInDigital />} />
                    <Route path="/about/csr" element={<CSR />} />
                    <Route path="/about/datalabs" element={<DataLabs />} />
                    <Route path="/about/awards" element={<Awards />} />
                    <Route path="/about/alliances" element={<Alliances />} />
                    <Route path="/about/offices" element={<Offices />} />
                    <Route path="/about/esg" element={<ESG />} />

                    {/* Technologies pages */}
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/technologies/datamatics-ai" element={<DatamaticsAI />} />
                    <Route path="/technologies/enterprise-platforms" element={<EnterprisePlatforms />} />
                    <Route path="/technologies/salesforce" element={<Salesforce />} />
                    <Route path="/technologies/microsoft" element={<Microsoft />} />
                    <Route path="/technologies/aws" element={<AWS />} />
                    <Route path="/technologies/outsystems" element={<OutSystems />} />
                    <Route path="/technologies/digital-transformation" element={<DigitalTransformation />} />
                    <Route path="/technologies/artificial-intelligence" element={<ArtificialIntelligence />} />
                    <Route path="/technologies/data-analytics" element={<DataAnalytics />} />
                    <Route path="/technologies/cloud" element={<Cloud />} />
                    <Route path="/technologies/applications" element={<Applications />} />
                    <Route path="/technologies/hyper-automation" element={<HyperAutomation />} />
                    <Route path="/technologies/product-engineering" element={<ProductEngineering />} />
                    <Route path="/technologies/crm" element={<CRM />} />
                    <Route path="/technologies/ecm" element={<ECM />} />
                    <Route path="/technologies/professional-services" element={<ProfessionalServices />} />
                    <Route path="/technologies/digital-assurance" element={<DigitalAssurance />} />
                    <Route path="/technologies/managed-services" element={<ManagedServices />} />
                    <Route path="/technologies/testing" element={<Testing />} />
                    <Route path="/technologies/automatic-fare-collection" element={<AutomaticFareCollection />} />

                    {/* Legacy technology routes from config */}
                    {techPagesConfig.map((page) => (
                      <Route key={page.path} path={page.path} element={<page.component />} />
                    ))}

                    {/* Operations pages */}
                    <Route path="/operations" element={<Operations />} />
                    <Route path="/operations/digital-finance" element={<DigitalFinance />} />
                    <Route path="/operations/finance-accounting" element={<FinanceAccounting />} />
                    <Route path="/operations/banking-process" element={<BankingProcess />} />
                    <Route path="/operations/insurance-process" element={<InsuranceProcess />} />
                    <Route path="/operations/healthcare-process" element={<HealthcareProcess />} />
                    <Route path="/operations/automation" element={<Automation />} />
                    <Route path="/operations/intelligent-automation" element={<IntelligentAutomation />} />
                    <Route path="/operations/finato" element={<Finato />} />
                    <Route path="/operations/procure-to-pay" element={<ProcureToPay />} />
                    <Route path="/operations/order-to-cash" element={<OrderToCash />} />
                    <Route path="/operations/record-to-report" element={<RecordToReport />} />
                    <Route path="/operations/fpa" element={<FPA />} />
                    <Route path="/operations/digital-content" element={<DigitalContent />} />

                    {/* Experiences pages */}
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/experiences/contact-center" element={<ContactCenter />} />
                    <Route path="/experiences/customer-care" element={<ExperiencesCustomerCare />} />
                    <Route path="/experiences/customer-loyalty" element={<CustomerLoyalty />} />
                    <Route path="/experiences/trust-and-safety" element={<TrustAndSafety />} />
                    <Route path="/experiences/customer-analytics" element={<CustomerAnalytics />} />
                    <Route path="/experiences/customer-consulting" element={<CustomerManagementConsulting />} />
                    <Route path="/experiences/digital-proctoring" element={<DigitalProctoring />} />
                    <Route path="/experiences/research-analytics" element={<ResearchAnalytics />} />
                    <Route path="/experiences/xm-consulting" element={<XMConsulting />} />
                    <Route path="/experiences/gcc" element={<GCCMarketResearch />} />
                    <Route path="/experiences/research-technology" element={<ResearchTechnology />} />

                    {/* Products pages */}
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/supercx" element={<SuperCX />} />
                    <Route path="/products/trubot" element={<TruBot />} />
                    <Route path="/products/trucap" element={<TruCap />} />
                    <Route path="/products/trubi" element={<TruBI />} />
                    <Route path="/products/truai-underwriting" element={<TruAIUnderwriting />} />
                    <Route path="/products/trudiscovery" element={<TruDiscovery />} />
                    <Route path="/products/finato" element={<FinatoProduct />} />
                    <Route path="/products/truagent" element={<TruAgent />} />

                    {/* Industries sub-pages */}
                    <Route path="/industries/banking-financial-services" element={<Banking />} />
                    <Route path="/industries/banking" element={<Banking />} />
                    <Route path="/industries/insurance" element={<Insurance />} />
                    <Route path="/industries/manufacturing" element={<Manufacturing />} />
                    <Route path="/industries/logistics" element={<Logistics />} />
                    <Route path="/industries/healthcare" element={<Healthcare />} />
                    <Route path="/industries/technology" element={<Technology />} />
                    <Route path="/industries/travel-hospitality" element={<TravelHospitality />} />
                    <Route path="/industries/travel" element={<TravelHospitality />} />
                    <Route path="/industries/credit-rating" element={<CreditRating />} />
                    <Route path="/industries/international-organisations" element={<InternationalOrgs />} />
                    <Route path="/industries/international" element={<InternationalOrgs />} />
                    <Route path="/industries/retail" element={<Retail />} />
                    <Route path="/industries/education" element={<Education />} />
                    <Route path="/industries/market-research" element={<MarketResearch />} />

                    {/* Resources pages */}
                    <Route path="/resources" element={<Resources />} />
                    <Route path="/resources/testimonials" element={<TestimonialsResource />} />
                    <Route path="/resources/case-studies" element={<CaseStudies />} />
                    <Route path="/resources/demos" element={<Demos />} />
                    <Route path="/resources/analyst-reports" element={<AnalystReports />} />
                    <Route path="/resources/reports" element={<AnalystReports />} />
                    <Route path="/resources/whitepapers" element={<Whitepapers />} />
                    <Route path="/resources/brochures" element={<Brochures />} />
                    <Route path="/resources/thoughtcast" element={<Thoughtcast />} />
                    <Route path="/resources/webinars" element={<Webinars />} />
                    <Route path="/resources/infographics" element={<Infographics />} />
                    <Route path="/resources/blogs" element={<Blogs />} />
                    <Route path="/resources/blog" element={<Blogs />} />
                    <Route path="/resources/newsletters" element={<Newsletters />} />
                    <Route path="/resources/newsletter" element={<Newsletters />} />
                    <Route path="/resources/media" element={<Media />} />
                    <Route path="/resources/topics/ai" element={<AI />} />
                    <Route path="/resources/ai" element={<AI />} />
                    <Route path="/resources/topics/digital-finance" element={<DigitalFinanceTopic />} />
                    <Route path="/resources/finance" element={<DigitalFinanceTopic />} />
                    <Route path="/resources/topics/intelligent-automation" element={<IntelligentAutomationTopic />} />
                    <Route path="/resources/automation" element={<IntelligentAutomationTopic />} />
                    <Route path="/resources/topics/ecm" element={<ECMTopic />} />
                    <Route path="/resources/ecm" element={<ECMTopic />} />
                    <Route path="/resources/topics/rpa" element={<RPATopic />} />
                    <Route path="/resources/rpa" element={<RPATopic />} />
                    <Route path="/resources/topics/afc" element={<AFCTopic />} />
                    <Route path="/resources/fare" element={<AFCTopic />} />
                    <Route path="/resources/topics/big-data" element={<BigDataTopic />} />
                    <Route path="/resources/bigdata" element={<BigDataTopic />} />
                    <Route path="/resources/topics/salesforce" element={<SalesforceTopic />} />
                    <Route path="/resources/salesforce" element={<SalesforceTopic />} />
                    <Route path="/resources/topics/product-engineering" element={<ProductEngineeringTopic />} />
                    <Route path="/resources/engineering" element={<ProductEngineeringTopic />} />
                    <Route path="/resources/topics/cx" element={<CXTopic />} />
                    <Route path="/resources/cx" element={<CXTopic />} />
                    <Route path="/resources/topics/research-analytics" element={<ResearchTopic />} />
                    <Route path="/resources/research" element={<ResearchTopic />} />

                    {/* Legal pages */}
                    <Route path="/legal/data-protection" element={<DataProtection />} />
                    <Route path="/legal/privacy" element={<Privacy />} />
                    <Route path="/legal/terms" element={<Terms />} />

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
