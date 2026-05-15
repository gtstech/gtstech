import { Helmet } from 'react-helmet';
import HeroSlider from '../components/sections/HeroSlider';
import CompanyDescStrip from '../components/sections/CompanyDescStrip';
import LogoCarousel from '../components/sections/LogoCarousel';
import AgenticAISection from '../components/sections/AgenticAISection';
import CoreSolutionsSection from '../components/sections/CoreSolutionsSection';
import ConnectBannerSection from '../components/sections/ConnectBannerSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>GTS Techs - Enterprise Digital Transformation & AI Solutions</title>
        <meta name="description" content="Transform your enterprise with cutting-edge digital solutions, AI automation, and intelligent technology from GTS Techs." />
      </Helmet>

      {/* Section 1 & 2: Header is fixed above */}
      {/* Add top padding to account for fixed header (40px utility bar + 60px nav = 100px) */}
      <div className="pt-16">
        {/* Section 3: Hero Slider */}
        <HeroSlider />

        {/* Section 4: Company Description Strip */}
        <CompanyDescStrip />

        {/* Section 5: Logo Carousel */}
        <LogoCarousel />

        {/* Section 6: Agentic AI Section */}
        <AgenticAISection />

        {/* Section 7: Core Solutions */}
        <CoreSolutionsSection />

        {/* Section 8: Connect Banner */}
        <ConnectBannerSection />
      </div>

      {/* Section 11: Footer - Handled in App.jsx layout */}
    </>
  );
}
