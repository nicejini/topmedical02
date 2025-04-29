import React, { useState, createContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceDetails from './components/ServiceDetails';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import './App.css';

// 모달 상태 컨텍스트 생성
export const ModalContext = createContext({
  isContactModalOpen: false,
  openContactModal: () => {},
  closeContactModal: () => {}
});

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <ModalContext.Provider value={{ isContactModalOpen, openContactModal, closeContactModal }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={
              <main>
                <Hero />
                <Services />
                <Contact />
              </main>
            } />
            <Route path="/services" element={<ServiceDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio/:id" element={<PortfolioItem />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />

          {/* 문의하기 모달 팝업 */}
          {isContactModalOpen && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 10000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflowY: 'auto',
              padding: '2rem 0'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                maxWidth: '800px',
                width: '90%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
              }}>
                <button 
                  onClick={closeContactModal}
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    backgroundColor: 'transparent',
                    border: 'none',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    zIndex: 10001
                  }}
                >
                  ✕
                </button>
                <Contact isModal={true} />
              </div>
            </div>
          )}
        </div>
      </Router>
    </ModalContext.Provider>
  );
}

export default App;
