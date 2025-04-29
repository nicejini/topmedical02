import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ModalContext } from '../App';

// 서비스 항목 데이터
const serviceItems = [
  {
    id: 1,
    portfolioId: 'location-analysis',
    icon: '📍',
    title: '병원 입지 분석',
    description: '인구 통계, 유동 인구, 경쟁 환경 등의 데이터를 기반으로 최적의 병원 위치를 분석하고 추천해 드립니다.',
    color: '#0077B6',
    image: 'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    portfolioId: 'interior-design',
    icon: '🏥',
    title: '인테리어 설계 및 시공',
    description: '병원 특성에 맞는 인테리어 설계부터 시공까지 원스톱으로 진행합니다. 환자와 의료진 모두를 위한 최적의 공간을 만듭니다.',
    color: '#00B4D8',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    portfolioId: 'medical-equipment',
    icon: '🩺',
    title: '의료 장비 구매 컨설팅',
    description: '최적의 의료 장비 구성과 구매를 도와드립니다. 병원 규모와 진료 특성에 맞는 맞춤형 추천 서비스를 제공합니다.',
    color: '#48CAE4',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    portfolioId: 'marketing-solution',
    icon: '📱',
    title: '마케팅 솔루션',
    description: '개원 초기부터 안정기까지 필요한 온/오프라인 마케팅 전략을 수립하고 실행합니다. 지역 특성에 맞는 효과적인 홍보를 지원합니다.',
    color: '#90E0EF',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    portfolioId: 'payment-system',
    icon: '💳',
    title: '결제 시스템 구축',
    description: '환자 결제부터 보험 청구까지 효율적인 결제 시스템을 구축합니다. 디지털 결제 솔루션으로 환자 경험을 개선합니다.',
    color: '#CAF0F8',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    portfolioId: 'administrative-support',
    icon: '📋',
    title: '인허가 행정 지원',
    description: '복잡한 병원 개원 인허가 절차를 전문가가 대행해 드립니다. 법적 요건을 충족하고 빠른 개원을 지원합니다.',
    color: '#ADE8F4',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
];

// 애니메이션 변수
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Services: React.FC = () => {
  const { openContactModal } = useContext(ModalContext);

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openContactModal();
  };

  return (
    <section id="services" className="section" style={{ 
      backgroundColor: 'var(--background-color)',
      padding: '8rem 0' 
    }}>
      <div className="container">
        <motion.div 
          className="section-header text-center" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '5rem' }}
        >
          <span style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            backgroundColor: 'rgba(0, 119, 182, 0.1)', 
            color: 'var(--primary-color)',
            borderRadius: '50px',
            fontWeight: 600,
            fontSize: '1rem',
            marginBottom: '1.5rem'
          }}>
            SERVICES
          </span>
          <h2 style={{ 
            fontSize: '3rem', 
            color: 'var(--text-color)',
            marginBottom: '2rem',
            fontWeight: 800,
            position: 'relative'
          }}>
            <span style={{ color: 'var(--primary-color)' }}>One-Stop</span> 병원 개원 서비스
            <span style={{ 
              display: 'block', 
              width: '80px', 
              height: '4px', 
              background: 'var(--primary-color)', 
              margin: '1.5rem auto' 
            }}></span>
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '800px', 
            margin: '0 auto', 
            color: 'var(--light-text-color)',
            lineHeight: 1.8,
            fontWeight: 300
          }}>
            병원 개원의 모든 단계를 전문가가 함께합니다. 각 분야별 전문가의 노하우로 성공적인 개원을 지원합니다.
          </p>
        </motion.div>

        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2.5rem'
          }}
        >
          {serviceItems.map((service) => (
            <motion.div
              key={service.id}
              className="card"
              variants={itemVariants}
              style={{ 
                padding: 0, 
                height: '100%', 
                overflow: 'hidden',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              whileHover={{ 
                transform: 'translateY(-10px)',
                boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12)'
              }}
              onClick={() => {
                // This is just for animation purposes, actual navigation is handled by Link
              }}
            >
              <Link to={`/portfolio/${service.portfolioId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="card-image" style={{ 
                  width: '100%', 
                  height: '220px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                  />
                  <div style={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '100%',
                    background: `linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.6) 100%)`
                  }}></div>
                  <div style={{ 
                    position: 'absolute', 
                    top: '1.5rem', 
                    left: '1.5rem', 
                    width: '60px', 
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    fontSize: '2rem',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                  }}>
                    {service.icon}
                  </div>
                </div>
                
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    marginBottom: '1rem', 
                    color: 'var(--text-color)',
                    fontWeight: 700
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    color: 'var(--light-text-color)', 
                    lineHeight: '1.7',
                    marginBottom: '1.5rem',
                    fontSize: '1rem'
                  }}>
                    {service.description}
                  </p>
                  <div style={{ 
                    display: 'inline-block', 
                    marginTop: '1rem',
                    color: 'var(--primary-color)',
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '0.5rem 1.5rem',
                    borderRadius: '50px',
                    backgroundColor: 'rgba(0, 119, 182, 0.1)',
                    transition: 'background-color 0.3s ease'
                  }}>
                    포트폴리오 보기 →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="services-cta" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
            padding: '3rem',
            backgroundColor: 'var(--primary-color)',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
            color: 'white'
          }}
        >
          <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: 700 }}>
            맞춤형 컨설팅이 필요하신가요?
          </h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            병원 개원 전문가가 귀하의 병원에 딱 맞는 솔루션을 제안해 드립니다
          </p>
          <a 
            href="#"
            onClick={handleContactClick} 
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              backgroundColor: 'white',
              color: 'var(--primary-color)',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 700,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
          >
            무료 상담 신청하기
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 