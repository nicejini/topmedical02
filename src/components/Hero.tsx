import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ModalContext } from '../App';

const Hero: React.FC = () => {
  const { openContactModal } = React.useContext(ModalContext);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactModal();
  };

  return (
    <section className="hero" style={{ 
      position: 'relative',
      color: 'white',
      paddingTop: '7rem',
      paddingBottom: '7rem',
      overflow: 'hidden'
    }}>
      {/* 배경 이미지와 오버레이 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: -2
      }}></div>
      
      {/* 어두운 오버레이 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 20, 0.7)',
        zIndex: -1
      }}></div>
      
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem', 
              fontWeight: 800,
              background: 'linear-gradient(to right, #fff, #90E0EF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 1px 3px rgba(0,0,0,0.2)'
            }}
          >
            당신의 병원, <span style={{ color: '#48CAE4' }}>최고의 전문가</span>와 함께 성공적으로 시작하세요
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ 
              fontSize: '1.3rem', 
              maxWidth: '700px', 
              marginBottom: '3rem', 
              lineHeight: 1.8,
              fontWeight: 300,
              letterSpacing: '0.5px'
            }}
          >
            입지 선정부터 인테리어, 의료장비 구매, 마케팅까지 <br />
            병원 개원의 모든 과정을 한번에 해결하는 원스톱 서비스
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hero-cta"
            style={{ display: 'flex', gap: '1.5rem' }}
          >
            <Link to="/services" className="btn" style={{ 
              backgroundColor: 'white', 
              color: 'var(--primary-color)', 
              fontWeight: '600',
              padding: '1rem 2rem',
              borderRadius: '50px',
              fontSize: '1.1rem',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              border: 'none',
              textDecoration: 'none'
            }}>
              서비스 알아보기
            </Link>
            <button 
              onClick={handleContactClick}
              className="btn" 
              style={{ 
                backgroundColor: 'transparent', 
                border: '2px solid white',
                color: 'white',
                fontWeight: '600',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease',
                cursor: 'pointer'
              }}
            >
              무료 상담 신청
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="hero-stats"
            style={{ 
              display: 'flex', 
              gap: window.innerWidth < 768 ? '1rem' : '3.5rem', 
              margin: window.innerWidth < 768 ? '2rem 0 1rem' : '4rem 0 1rem',
              justifyContent: 'center',
              width: '100%',
              flexWrap: 'wrap'
            }}
          >
            <div className="stat-item" style={{ 
              textAlign: 'center', 
              padding: window.innerWidth < 768 ? '1rem' : '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              width: window.innerWidth < 768 ? '100px' : '150px',
              marginBottom: window.innerWidth < 768 ? '0.5rem' : '0'
            }}>
              <div style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '3rem', fontWeight: 'bold', color: '#48CAE4' }}>500+</div>
              <div style={{ fontSize: window.innerWidth < 768 ? '0.9rem' : '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>성공적인개원</div>
            </div>
            <div className="stat-item" style={{ 
              textAlign: 'center', 
              padding: window.innerWidth < 768 ? '1rem' : '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              width: window.innerWidth < 768 ? '100px' : '150px',
              marginBottom: window.innerWidth < 768 ? '0.5rem' : '0'
            }}>
              <div style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '3rem', fontWeight: 'bold', color: '#48CAE4' }}>98%</div>
              <div style={{ fontSize: window.innerWidth < 768 ? '0.9rem' : '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>고객만족도</div>
            </div>
            <div className="stat-item" style={{ 
              textAlign: 'center', 
              padding: window.innerWidth < 768 ? '1rem' : '1.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '15px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              width: window.innerWidth < 768 ? '100px' : '150px',
              marginBottom: window.innerWidth < 768 ? '0.5rem' : '0'
            }}>
              <div style={{ fontSize: window.innerWidth < 768 ? '2.5rem' : '3rem', fontWeight: 'bold', color: '#48CAE4' }}>15+</div>
              <div style={{ fontSize: window.innerWidth < 768 ? '0.9rem' : '1.1rem', color: 'rgba(255, 255, 255, 0.8)' }}>연간경험</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* 하단 웨이브 효과 */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        lineHeight: 0,
        zIndex: 1
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: '60px',
          transform: 'rotateY(180deg)'
        }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8f9fa"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero; 