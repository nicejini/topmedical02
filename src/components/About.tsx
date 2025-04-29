import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // 반응형 스타일을 위한 미디어 쿼리 함수
  const getResponsiveStyle = () => {
    return {
      container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
      },
      heading: {
        fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem',
        marginBottom: '1.5rem',
        color: 'var(--text-color)',
        fontWeight: 700,
        textAlign: 'center' as const,
      },
      paragraph: {
        fontSize: window.innerWidth < 768 ? '1.1rem' : '1.4rem',
        lineHeight: '1.8',
        marginBottom: '2rem',
        color: 'var(--text-color)',
        fontWeight: 400,
        textAlign: window.innerWidth < 768 ? 'left' as const : 'center' as const,
      },
      grid: {
        display: 'grid',
        gridTemplateColumns: window.innerWidth < 768 
          ? '1fr' 
          : window.innerWidth < 992 
            ? 'repeat(auto-fill, minmax(250px, 1fr))' 
            : 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: window.innerWidth < 768 ? '1.5rem' : '2rem',
      }
    };
  };

  return (
    <section className="about-section" style={{ 
      padding: window.innerWidth < 768 ? '6rem 0 3rem' : '8rem 0 5rem', 
      backgroundColor: '#f8f9fa' 
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h1 style={{ 
            fontSize: window.innerWidth < 768 ? '2rem' : '2.5rem', 
            marginBottom: '1.5rem', 
            color: 'var(--text-color)', 
            fontWeight: 700 
          }}>
            회사 <span style={{ color: 'var(--primary-color)' }}>소개</span>
          </h1>
        </motion.div>

        <div className="about-content" style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          marginBottom: window.innerWidth < 768 ? '3rem' : '5rem',
          padding: window.innerWidth < 768 ? '0 10px' : '0'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              maxWidth: '800px', 
              textAlign: window.innerWidth < 768 ? 'left' : 'center' 
            }}
          >
            <p style={{ 
              fontSize: window.innerWidth < 768 ? '1.1rem' : '1.4rem', 
              lineHeight: '1.8', 
              marginBottom: '2rem',
              color: 'var(--text-color)',
              fontWeight: 400
            }}>
              탑메디컬은 병원 개원의 A부터 Z까지 모든 것을 한 곳에서 해결하는 원스톱 통합 솔루션을 제공합니다. 최적의 입지 분석부터 세련된 인테리어 디자인, 효과적인 마케팅 전략, 의료 장비 및 소모품 구매, 그리고 편리한 결제 시스템까지. 10년 이상의 의료 산업 경험을 바탕으로 의료진의 꿈을 현실로 만들어 드립니다. 병원 개원의 모든 복잡한 과정, 탑메디컬과 함께라면 간편해집니다.
            </p>
          </motion.div>
        </div>

        {/* 회사 강점 */}
        <div className="about-features" style={{ 
          marginBottom: window.innerWidth < 768 ? '3rem' : '5rem' 
        }}>
          <h2 style={{ 
            fontSize: window.innerWidth < 768 ? '1.8rem' : '2rem', 
            marginBottom: window.innerWidth < 768 ? '2rem' : '3rem', 
            color: 'var(--text-color)', 
            fontWeight: 600, 
            textAlign: 'center' 
          }}>
            탑메디컬의 <span style={{ color: 'var(--primary-color)' }}>강점</span>
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: window.innerWidth < 768 
              ? '1fr' 
              : window.innerWidth < 992 
                ? 'repeat(auto-fill, minmax(250px, 1fr))' 
                : 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: window.innerWidth < 768 ? '1.5rem' : '2rem'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                padding: window.innerWidth < 768 ? '1.5rem' : '2rem',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                ⏱️
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-color)' }}>
                10년 이상의 경험
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--light-text-color)', lineHeight: '1.6' }}>
                의료 산업에서의 풍부한 경험을 바탕으로 신뢰할 수 있는 서비스를 제공합니다.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{
                padding: window.innerWidth < 768 ? '1.5rem' : '2rem',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                🧠
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-color)' }}>
                전문 컨설팅 팀
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--light-text-color)', lineHeight: '1.6' }}>
                각 분야 전문가들로 구성된 팀이 최적의 개원 솔루션을 제공합니다.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                padding: window.innerWidth < 768 ? '1.5rem' : '2rem',
                borderRadius: '12px',
                backgroundColor: '#fff',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
                📈
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-color)' }}>
                데이터 기반 의사결정
              </h3>
              <p style={{ fontSize: '1.1rem', color: 'var(--light-text-color)', lineHeight: '1.6' }}>
                빅데이터 분석을 통해 최적의 위치와 마케팅 전략을 제안합니다.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CEO 메시지 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: window.innerWidth < 768 ? '2rem' : '3rem',
            padding: window.innerWidth < 768 ? '2rem' : '3rem',
            borderRadius: '15px',
            backgroundColor: '#fff',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}
        >
          <h2 style={{ 
            fontSize: window.innerWidth < 768 ? '1.8rem' : '2rem', 
            marginBottom: window.innerWidth < 768 ? '1.5rem' : '2rem', 
            color: 'var(--text-color)', 
            fontWeight: 600 
          }}>
            대표 메시지
          </h2>
          <p style={{ 
            fontSize: window.innerWidth < 768 ? '1.1rem' : '1.2rem', 
            lineHeight: '1.8', 
            color: 'var(--light-text-color)',
            maxWidth: '800px',
            margin: '0 auto 2rem',
            fontStyle: 'italic'
          }}>
            "탑메디컬은 의사 선생님들의 성공적인 개원을 위해 끊임없이 노력합니다. 우리의 목표는 의료진이 환자 진료에만 집중할 수 있도록 개원의 모든 복잡한 과정을 간소화하는 것입니다. 탑메디컬과 함께라면 여러분의 꿈꾸는 병원이 현실이 됩니다."
          </p>
          <div style={{ marginTop: '1rem', fontWeight: 600, color: 'var(--primary-color)' }}>
            이성훈 대표
          </div>
        </motion.div>

        {/* 상담 신청 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: window.innerWidth < 768 ? '3rem' : '5rem',
            padding: window.innerWidth < 768 ? '2rem' : '3rem',
            borderRadius: '15px',
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)'
          }}
        >
          <h2 style={{ 
            fontSize: window.innerWidth < 768 ? '1.6rem' : '2rem', 
            marginBottom: '1rem', 
            fontWeight: 700 
          }}>
            개원 컨설팅이 필요하신가요?
          </h2>
          <p style={{ 
            fontSize: window.innerWidth < 768 ? '1rem' : '1.2rem', 
            marginBottom: '2rem', 
            maxWidth: '700px', 
            margin: '0 auto 2rem' 
          }}>
            탑메디컬의 전문가와 상담을 통해 성공적인 개원을 시작하세요
          </p>
          <a 
            href="#contact" 
            style={{
              display: 'inline-block',
              padding: window.innerWidth < 768 ? '0.8rem 2rem' : '1rem 2.5rem',
              backgroundColor: '#fff',
              color: 'var(--primary-color)',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: window.innerWidth < 768 ? '1rem' : '1.1rem',
              textDecoration: 'none',
              boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)'
            }}
          >
            무료 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 