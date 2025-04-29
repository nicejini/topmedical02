import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ModalContext } from '../App';
import logoSvg from '../assets/images/logo.svg';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactModal } = useContext(ModalContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactModal();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/">
            <img src={logoSvg} alt="탑메디컬 로고" className="logo" />
          </Link>
        </motion.div>

        <nav className="nav">
          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </button>
          
          <motion.ul 
            className={`nav-list ${isMenuOpen ? 'visible' : ''}`}
            initial={{ opacity: 0, y: -10 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li className="nav-item">
              <Link to="/services" className="nav-link">서비스</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">소개</Link>
            </li>
            <li className="nav-item">
              <a href="#process" className="nav-link">진행 과정</a>
            </li>
          </motion.ul>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#" 
              className="cta-button"
              onClick={handleContactClick}
            >
              무료 상담 신청
            </a>
          </motion.div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 