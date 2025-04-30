import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// 서비스 데이터
const serviceCategories = [
  {
    id: 'core',
    title: '중점 서비스',
    description: '병원의 가치 향상을 위한 서비스',
    items: [
      { id: 'location', name: '병원 입지', icon: '📍' },
      { id: 'interior', name: '인테리어', icon: '🏥' },
      { id: 'signage', name: '간판', icon: '🔠' },
      { id: 'website', name: '홈페이지', icon: '🌐' },
      { id: 'marketing', name: '마케팅', icon: '📱' },
      { id: 'design', name: '디자인', icon: '🎨' }
    ]
  },
  {
    id: 'equipment',
    title: '의료기기',
    description: '진료과별 최적화된 의료장비',
    items: [
      { id: 'family', name: '가정의학과', icon: '👨‍👩‍👧‍👦' },
      { id: 'internal', name: '내과', icon: '🫀' },
      { id: 'urology', name: '비뇨의학과', icon: '🚽' },
      { id: 'obgyn', name: '산부인과', icon: '👶' },
      { id: 'plastic', name: '성형외과', icon: '✂️' },
      { id: 'pediatric', name: '소아청소년과', icon: '👶' },
      { id: 'neurology', name: '신경과', icon: '🧠' },
      { id: 'neurosurgery', name: '신경외과', icon: '🔪' },
      { id: 'ophthalmology', name: '안과', icon: '👁️' },
      { id: 'radiology', name: '영상의학과', icon: '📷' },
      { id: 'surgery', name: '외과', icon: '🔪' },
      { id: 'ent', name: '이비인후과', icon: '👂' },
      { id: 'rehab', name: '재활의학과', icon: '🦮' },
      { id: 'psychiatry', name: '정신과', icon: '🧠' },
      { id: 'orthopedic', name: '정형외과', icon: '🦴' },
      { id: 'pain', name: '통증의학과', icon: '💉' },
      { id: 'dermatology', name: '피부과', icon: '🧴' },
      { id: 'dental', name: '치과', icon: '🦷' },
      { id: 'oriental', name: '한의원', icon: '🧉' },
      { id: 'hospital', name: '병원', icon: '🏥' }
    ]
  },
  {
    id: 'supplies',
    title: '의료 용품/비품',
    description: '병원 운영에 필요한 모든 용품',
    items: [
      { id: 'medical-supplies', name: '의료용품', icon: '🧰' },
      { id: 'management', name: '관리 용품', icon: '🧹' },
      { id: 'uniform', name: '유니폼', icon: '👚' },
      { id: 'electronics', name: '가전/IT', icon: '💻' },
      { id: 'rental', name: '렌탈', icon: '🔄' },
      { id: 'furniture', name: '가구', icon: '🪑' },
      { id: 'security', name: '통신/보안', icon: '🔒' },
      { id: 'printing', name: '인쇄물', icon: '🖨️' },
      { id: 'promotional', name: '판촉물', icon: '🎁' },
      { id: 'interior-supplies', name: '인테리어용품', icon: '🪟' },
      { id: 'office', name: '사무소모품', icon: '📎' }
    ]
  },
  {
    id: 'operation',
    title: '운영 서비스',
    description: '효율적인 병원 운영을 위한 서비스',
    items: [
      { id: 'tax-labor', name: '세무/노무/특허', icon: '📊' },
      { id: 'emr', name: 'EMR/카드단말기', icon: '💳' },
      { id: 'cleaning', name: '병원 정기 청소', icon: '🧹' },
      { id: 'meals', name: '직원식사', icon: '🍱' },
      { id: 'snacks', name: '직원간식', icon: '🍪' },
      { id: 'birthday', name: '생일 서비스', icon: '🎂' },
      { id: 'welfare', name: '복지몰', icon: '🛒' }
    ]
  }
];

// 인기 서비스 아이템
const popularServices = [
  {
    id: 1,
    title: '개원 입지 컨설팅',
    description: '빅데이터 기반 최적의 병원 입지 분석',
    image: 'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    title: '의료기기 패키지',
    description: '진료과별 최적의 의료장비 구성',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: '병원 인테리어',
    description: '공간 효율성과 환자 경험을 고려한 설계',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    title: '온라인 마케팅',
    description: '지역 타겟 맞춤형 디지털 마케팅',
    image: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

const ServiceDetails: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('core');
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // 반응형 디자인을 위한 창 크기 감지
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const getActiveCategory = () => {
    return serviceCategories.find(category => category.id === activeCategory);
  };

  // 화면 크기에 따른 스타일 변수
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 992;

  return (
    <section className="service-details" style={{ 
      padding: isMobile ? '6rem 0 3rem' : '8rem 0 5rem', 
      backgroundColor: '#f8f9fa' 
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}
        >
          <h1 style={{ 
            fontSize: isMobile ? '2rem' : '2.5rem', 
            marginBottom: isMobile ? '0.8rem' : '1rem', 
            color: 'var(--text-color)', 
            fontWeight: 700 
          }}>
            병원 개원 <span style={{ color: 'var(--primary-color)' }}>원스톱 서비스</span>
          </h1>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            color: 'var(--light-text-color)', 
            maxWidth: '700px', 
            margin: '0 auto',
            padding: isMobile ? '0 10px' : '0'
          }}>
            개원 초기부터 운영 단계까지 필요한 모든 서비스를 한곳에서 제공합니다
          </p>
        </motion.div>

        {/* 서비스 카테고리 탭 */}
        <div className="service-tabs" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: isMobile ? '2rem' : '3rem', 
          flexWrap: 'wrap', 
          gap: isMobile ? '0.5rem' : '1rem' 
        }}>
          {serviceCategories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              style={{
                padding: isMobile ? '0.7rem 1rem' : '1rem 1.5rem',
                backgroundColor: activeCategory === category.id ? 'var(--primary-color)' : '#fff',
                color: activeCategory === category.id ? '#fff' : 'var(--text-color)',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: isMobile ? '0.9rem' : '1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCategory === category.id ? '0 4px 12px rgba(0, 119, 182, 0.2)' : 'none'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* 선택된 카테고리의 서비스 아이템 */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginBottom: isMobile ? '3rem' : '4rem' }}
        >
          <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
            <h2 style={{ 
              fontSize: isMobile ? '1.6rem' : '1.8rem', 
              marginBottom: isMobile ? '0.8rem' : '1rem', 
              color: 'var(--text-color)', 
              fontWeight: 600 
            }}>
              {getActiveCategory()?.title}
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              color: 'var(--light-text-color)' 
            }}>
              {getActiveCategory()?.description}
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile 
              ? 'repeat(2, 1fr)' 
              : isTablet
                ? 'repeat(3, 1fr)'
                : 'repeat(auto-fill, minmax(200px, 1fr))', 
            gap: isMobile ? '0.8rem' : '1.5rem' 
          }}>
            {getActiveCategory()?.items.map(item => (
              <motion.div
                key={item.id}
                whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                style={{
                  padding: isMobile ? '1rem' : '1.5rem',
                  borderRadius: '10px',
                  backgroundColor: '#fff',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{ 
                  fontSize: isMobile ? '2rem' : '2.5rem', 
                  marginBottom: isMobile ? '0.5rem' : '1rem' 
                }}>
                  {item.icon}
                </div>
                <h3 style={{ 
                  fontSize: isMobile ? '0.9rem' : '1.1rem', 
                  fontWeight: 600, 
                  color: 'var(--text-color)' 
                }}>
                  {item.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 인기 서비스 */}
        <div style={{ marginTop: isMobile ? '3rem' : '5rem' }}>
          <h2 style={{ 
            fontSize: isMobile ? '1.6rem' : '1.8rem', 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            color: 'var(--text-color)', 
            fontWeight: 600, 
            textAlign: 'center' 
          }}>
            지금 <span style={{ color: 'var(--primary-color)' }}>인기있는</span> 서비스
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile 
              ? '1fr' 
              : isTablet
                ? 'repeat(2, 1fr)'
                : 'repeat(auto-fill, minmax(280px, 1fr))', 
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {popularServices.map(service => (
              <motion.div
                key={service.id}
                whileHover={{ y: -10 }}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#fff',
                  cursor: 'pointer'
                }}
              >
                <div style={{ height: isMobile ? '180px' : '200px', overflow: 'hidden' }}>
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
                </div>
                <div style={{ padding: isMobile ? '1.2rem' : '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: isMobile ? '1.2rem' : '1.3rem', 
                    marginBottom: '0.5rem', 
                    fontWeight: 600, 
                    color: 'var(--text-color)' 
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    fontSize: isMobile ? '0.9rem' : '1rem', 
                    color: 'var(--light-text-color)' 
                  }}>
                    {service.description}
                  </p>
                  <a 
                    href="#contact" 
                    style={{
                      display: 'inline-block',
                      marginTop: '1rem',
                      padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                      backgroundColor: 'var(--primary-color)',
                      color: '#fff',
                      borderRadius: '6px',
                      fontWeight: 500,
                      fontSize: isMobile ? '0.8rem' : '0.9rem',
                      textDecoration: 'none'
                    }}
                  >
                    상담 신청하기
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 고객 지원 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            marginTop: isMobile ? '3rem' : '5rem',
            padding: isMobile ? '2rem' : '3rem',
            borderRadius: '15px',
            backgroundColor: 'var(--primary-color)',
            color: '#fff',
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)'
          }}
        >
          <h2 style={{ 
            fontSize: isMobile ? '1.6rem' : '2rem', 
            marginBottom: isMobile ? '0.8rem' : '1rem', 
            fontWeight: 700 
          }}>
            맞춤형 상담이 필요하신가요?
          </h2>
          <p style={{ 
            fontSize: isMobile ? '1rem' : '1.2rem', 
            marginBottom: isMobile ? '1.5rem' : '2rem', 
            maxWidth: '700px', 
            margin: `0 auto ${isMobile ? '1.5rem' : '2rem'}` 
          }}>
            전문 컨설턴트가 빅데이터 기반으로 최적의 개원 솔루션을 제공해드립니다
          </p>
          <a 
            href="#contact" 
            style={{
              display: 'inline-block',
              padding: isMobile ? '0.8rem 2rem' : '1rem 2.5rem',
              backgroundColor: '#fff',
              color: 'var(--primary-color)',
              borderRadius: '50px',
              fontWeight: 600,
              fontSize: isMobile ? '1rem' : '1.1rem',
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

export default ServiceDetails; 