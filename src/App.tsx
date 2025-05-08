import React, { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import CompanyInfo from './components/CompanyInfo';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import Careers from './components/Careers';
import Partner from './components/Partner';
import './App.css';

// 모달 상태 컨텍스트 생성
export const ModalContext = createContext({
  openContactModal: () => {},
  closeContactModal: () => {},
  openPartnerModal: () => {},
  closePartnerModal: () => {},
});

const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  const openPartnerModal = () => setIsPartnerModalOpen(true);
  const closePartnerModal = () => setIsPartnerModalOpen(false);

  return (
    <ModalContext.Provider value={{ openContactModal, closeContactModal, openPartnerModal, closePartnerModal }}>
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Services />
                <ServiceDetails />
              </>
            } />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/:id" element={<PortfolioItem />} />
            <Route path="/company-info" element={<CompanyInfo />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
          <Footer />
          
          {isContactModalOpen && (
            <div className="modal-overlay" onClick={closeContactModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={closeContactModal}>×</button>
                <Contact />
              </div>
            </div>
          )}
          {isPartnerModalOpen && (
            <div className="modal-overlay" onClick={closePartnerModal}>
              <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-button" onClick={closePartnerModal}>×</button>
                <Partner closePartnerModal={closePartnerModal} />
              </div>
            </div>
          )}
        </div>
      </HashRouter>
    </ModalContext.Provider>
  );
};

export default App;
