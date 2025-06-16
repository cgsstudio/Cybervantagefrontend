import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/services/Services';
import IndustriesSection from './components/IndustriesSection/IndustriesSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ApplicationSecurityAssessment from './components/applicationSecurityAssessment';
import NetworkPenetrationTesting from './components/NetworkPenetrationTesting';
import RedTeaming from './components/RedTeaming';
import CloudsecurityAssesment from './components/CloudsecurityAssesment';
import TermsAndConditions from './components/TermsAndConditions';
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from './components/PrivacyPolicy';
import DigitalFinanceHero from './components/digitalFinanceBanking';


function App() {
  return (
    <div className="scrollbar">
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Stats />
                <Services />
                <IndustriesSection />
                <CallToAction />
              </>
            }
          />
          <Route
            path="/application-security-assessment"
            element={<ApplicationSecurityAssessment />}
          />
          <Route
            path="/network-penetration-testing"
            element={<NetworkPenetrationTesting />}
          />
          <Route
            path="/red-teaming"
            element={<RedTeaming />}
          />
          <Route
            path="/cloud-security-assesment"
            element={<CloudsecurityAssesment />}
          />
            <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          
          />
          <Route
            path="/digital-finance-banking"
            element={<DigitalFinanceHero />}
          />
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy />}
          />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;