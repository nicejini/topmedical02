import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      backgroundColor: '#212529', 
      color: '#ADB5BD',
      padding: '4rem 0 1.5rem',
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          <div className="footer-brand">
            <h3 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1rem' }}>
              <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>탑메디컬</span>
            </h3>
            <p style={{ lineHeight: 1.7, marginBottom: '1.5rem' }}>
              병원 개원을 위한 통합 서비스 플랫폼입니다. 
              최고의 전문가들과 함께 성공적인 병원 개원을 시작하세요.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                backgroundColor: '#343A40',
                color: 'white',
                textDecoration: 'none'
              }}>
                📱
              </a>
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                backgroundColor: '#343A40',
                color: 'white',
                textDecoration: 'none'
              }}>
                📘
              </a>
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                backgroundColor: '#343A40',
                color: 'white',
                textDecoration: 'none'
              }}>
                📸
              </a>
              <a href="#" style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                width: '36px', 
                height: '36px', 
                borderRadius: '50%', 
                backgroundColor: '#343A40',
                color: 'white',
                textDecoration: 'none'
              }}>
                🎬
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>주요 서비스</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  병원 입지 분석
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  인테리어 설계 및 시공
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  의료 장비 구매 컨설팅
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/services" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  마케팅 솔루션
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  결제 시스템 구축
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>회사 정보</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/company-info" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  회사 소개
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/terms" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  이용 약관
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/privacy" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  개인정보 처리방침
                </Link>
              </li>
              <li style={{ marginBottom: '0.8rem' }}>
                <Link to="/careers" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  채용 정보
                </Link>
              </li>
              <li>
                <Link to="/partner" style={{ color: '#ADB5BD', textDecoration: 'none', transition: 'color 0.3s' }}>
                  협력업체 모집
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 600 }}>뉴스레터 구독</h4>
            <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
              병원 개원 및 운영 관련 최신 정보를 받아보세요.
            </p>
            <form>
              <div style={{ display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="이메일 주소" 
                  style={{
                    flex: 1,
                    padding: '0.75rem',
                    border: 'none',
                    borderRadius: '4px 0 0 4px',
                    backgroundColor: '#343A40',
                    color: 'white'
                  }}
                />
                <button 
                  type="submit" 
                  style={{
                    padding: '0.75rem 1rem',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer'
                  }}
                >
                  구독
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <hr style={{ border: 'none', borderTop: '1px solid #343A40', margin: '2rem 0' }} />
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.9rem' }}>
            &copy; {currentYear} 탑메디컬. 모든 권리 보유.
          </div>
          <div>
            <Link to="/privacy" style={{ color: '#ADB5BD', textDecoration: 'none', margin: '0 0.5rem' }}>개인정보처리방침</Link>
            <Link to="/terms" style={{ color: '#ADB5BD', textDecoration: 'none', margin: '0 0.5rem' }}>이용약관</Link>
            <Link to="/sitemap" style={{ color: '#ADB5BD', textDecoration: 'none', margin: '0 0.5rem' }}>사이트맵</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 