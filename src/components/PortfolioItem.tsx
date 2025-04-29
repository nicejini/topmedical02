import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

// 포트폴리오 데이터
const portfolioData = {
  'location-analysis': {
    id: 'location-analysis',
    title: '병원 입지 분석',
    description: '인구 통계, 유동 인구, 경쟁 환경 등의 데이터를 기반으로 최적의 병원 위치를 분석하고 추천해 드립니다.',
    detailDescription: `의료 환경이 경쟁적으로 변화하는 현대 사회에서, 성공적인 병원 경영의 첫걸음은 최적의 입지 선정입니다. 
    저희 '병원 입지 분석' 서비스는 빅데이터와 GIS 기술을 활용하여 인구 통계, 유동 인구, 경쟁 환경, 접근성 등 다양한 요소를 종합적으로 분석합니다.
    과학적인 데이터를 기반으로 한 저희의 입지 분석은 병원의 장기적인 성장과 수익성을 보장하는 핵심 요소가 될 것입니다.`,
    icon: '📍',
    color: '#0077B6',
    image: 'https://images.pexels.com/photos/3760323/pexels-photo-3760323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '인구 통계 분석',
      '경쟁 의료기관 분석',
      '유동 인구 패턴 분석',
      '입지 적합성 평가',
      '장기적 성장 예측',
      '지역별 의료 수요 분석'
    ],
    caseStudies: [
      { 
        title: '서울 강남구 성형외과 개원',
        result: '주변 경쟁 분석을 통해 최적의 위치 선정, 개원 6개월 만에 손익분기점 달성' 
      },
      { 
        title: '경기도 분당 소아과 개원',
        result: '신도시 인구 유입 패턴 분석으로 최적 입지 선정, 개원 후 지역 내 최고 방문율 달성' 
      },
      { 
        title: '부산 해운대구 피부과 개원',
        result: '관광객 및 지역주민 통합 분석으로 최적 입지 선정, 개원 1년 만에 지점 확장' 
      }
    ]
  },
  'interior-design': {
    id: 'interior-design',
    title: '인테리어 설계 및 시공',
    description: '병원 특성에 맞는 인테리어 설계부터 시공까지 원스톱으로 진행합니다. 환자와 의료진 모두를 위한 최적의 공간을 만듭니다.',
    detailDescription: `병원 인테리어는 단순한 미적 요소를 넘어 환자의 심리적 안정과 치료 효과, 의료진의 업무 효율성에 직접적인 영향을 미칩니다.
    저희 '인테리어 설계 및 시공' 서비스는 진료과의 특성, 동선, 감염 관리, 환자 경험 등을 종합적으로 고려한 맞춤형 설계를 제공합니다.
    의료 환경에 특화된 전문 디자이너와 시공팀이 병원의 가치를 높이는 공간을 만들어 드립니다.`,
    icon: '🏥',
    color: '#00B4D8',
    image: 'https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: [
      '진료과별 맞춤형 설계',
      '효율적인 동선 설계',
      '환자 중심 대기 공간',
      '감염 관리를 고려한 설계',
      '친환경 자재 사용',
      '에너지 효율적 조명 시스템'
    ],
    caseStudies: [
      { 
        title: '서울시 강서구 정형외과 인테리어',
        result: '고령 환자를 위한 무장애 설계로 환자 만족도 95% 달성' 
      },
      { 
        title: '인천시 소아청소년과 인테리어',
        result: '친환경 자재와 놀이 공간 통합 설계로 방문 환자 30% 증가' 
      },
      { 
        title: '대전시 치과 인테리어',
        result: '불안감 감소를 위한 시각적 요소 도입으로 환자 경험 개선' 
      }
    ]
  },
  'medical-equipment': {
    id: 'medical-equipment',
    title: '의료 장비 구매 컨설팅',
    description: '최적의 의료 장비 구성과 구매를 도와드립니다. 병원 규모와 진료 특성에 맞는 맞춤형 추천 서비스를 제공합니다.',
    detailDescription: `의료 장비는 병원의 핵심 자산이자 경쟁력의 원천입니다. 하지만 고가의 장비 구매는 신중한 의사결정이 필요합니다.
    저희 '의료 장비 구매 컨설팅' 서비스는 진료과별 최적의 장비 구성을 제안하고, 비용 효율적인 구매 방법을 제시합니다.
    다양한 제조사와의 협력 관계를 통해 합리적인 가격과 품질, 사후 관리까지 고려한 토탈 솔루션을 제공합니다.`,
    icon: '🩺',
    color: '#48CAE4',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      '진료과별 필수 장비 추천',
      '비용 효율적 구매 전략',
      '장비 비교 분석',
      '가격 협상 대행',
      'A/S 및 유지보수 계약 검토',
      '단계적 장비 도입 계획'
    ],
    caseStudies: [
      { 
        title: '경기도 안양시 영상의학과 장비 구성',
        result: '최적의 장비 조합으로 초기 투자비 15% 절감, 진료 범위 확대' 
      },
      { 
        title: '부산시 성형외과 장비 구매',
        result: '장비 패키지 구성으로 25% 비용 절감 및 효율적 공간 활용' 
      },
      { 
        title: '충청남도 내과 개원 장비 컨설팅',
        result: '단계적 도입 계획으로 초기 부담 감소, 2년내 풀 라인업 구축' 
      }
    ]
  },
  'marketing-solution': {
    id: 'marketing-solution',
    title: '마케팅 솔루션',
    description: '개원 초기부터 안정기까지 필요한 온/오프라인 마케팅 전략을 수립하고 실행합니다. 지역 특성에 맞는 효과적인 홍보를 지원합니다.',
    detailDescription: `성공적인 병원 운영을 위해서는 우수한 의료 서비스뿐만 아니라 효과적인 마케팅 전략이 필수적입니다.
    저희 '마케팅 솔루션'은 지역 특성과 타겟 환자층을 고려한 맞춤형 마케팅 전략을 수립하고 실행합니다.
    디지털 마케팅부터 지역 기반 오프라인 마케팅까지, 병원의 인지도를 높이고 신뢰를 구축하는 통합 마케팅 서비스를 제공합니다.`,
    icon: '📱',
    color: '#90E0EF',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      '지역 타겟 디지털 마케팅',
      '병원 브랜딩 전략',
      '소셜 미디어 마케팅',
      '지역 커뮤니티 연계 프로그램',
      '환자 리뷰 관리',
      '마케팅 효과 분석 및 최적화'
    ],
    caseStudies: [
      { 
        title: '서울 송파구 치과 개원 마케팅',
        result: '타겟 마케팅으로 개원 3개월내 예약률 85% 달성' 
      },
      { 
        title: '경기도 김포시 피부과 브랜딩',
        result: '차별화된 브랜딩으로 지역내 인지도 1위 달성, 타겟 환자층 확보' 
      },
      { 
        title: '인천시 내과 디지털 마케팅',
        result: '지역 기반 검색 최적화로 신규 환자 유입 40% 증가' 
      }
    ]
  },
  'payment-system': {
    id: 'payment-system',
    title: '결제 시스템 구축',
    description: '환자 결제부터 보험 청구까지 효율적인 결제 시스템을 구축합니다. 디지털 결제 솔루션으로 환자 경험을 개선합니다.',
    detailDescription: `현대적인 병원 운영에서 결제 및 청구 시스템의 효율성은 병원 경영과 환자 만족도에 직접적인 영향을 미칩니다.
    저희 '결제 시스템 구축' 서비스는 간편한 환자 결제부터 복잡한 보험 청구 프로세스까지, 병원의 행정 효율을 극대화하는 통합 솔루션을 제공합니다.
    최신 디지털 기술을 활용하여 환자와 의료진 모두에게 편리한 시스템을 구축합니다.`,
    icon: '💳',
    color: '#CAF0F8',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      '통합 결제 시스템',
      '보험 청구 자동화',
      '모바일 결제 솔루션',
      '환자 청구서 관리',
      '정기 결제 시스템',
      '데이터 보안 및 규정 준수'
    ],
    caseStudies: [
      { 
        title: '서울 마포구 한의원 결제 시스템',
        result: '디지털 결제 도입으로 행정 업무 시간 30% 절감, 환자 만족도 증가' 
      },
      { 
        title: '경상남도 종합병원 보험 청구 시스템',
        result: '자동화 시스템 도입으로 청구 오류 90% 감소, 청구 금액 증가' 
      },
      { 
        title: '대구시 네트워크 병원 통합 결제 시스템',
        result: '5개 지점 통합 관리로 운영 효율성 증대 및 환자 편의성 향상' 
      }
    ]
  },
  'administrative-support': {
    id: 'administrative-support',
    title: '인허가 행정 지원',
    description: '복잡한 병원 개원 인허가 절차를 전문가가 대행해 드립니다. 법적 요건을 충족하고 빠른 개원을 지원합니다.',
    detailDescription: `병원 개원 과정에서 가장 복잡하고 시간이 소요되는 단계는 인허가 절차입니다. 의료법, 건축법 등 다양한 법률적 요건을 충족해야 합니다.
    저희 '인허가 행정 지원' 서비스는 병원 개설에 필요한 모든 행정 절차를 전문가가 대행합니다.
    복잡한 서류 작업과 관계 기관 협의를 효율적으로 처리하여, 의료인이 진료 준비에 집중할 수 있도록 지원합니다.`,
    icon: '📋',
    color: '#ADE8F4',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: [
      '의료기관 개설 신고 대행',
      '건축/소방 인허가 지원',
      '의료폐기물 처리 계약',
      '개인정보 보호 규정 준수',
      '의료광고 사전 심의',
      '세무 등록 지원'
    ],
    caseStudies: [
      { 
        title: '서울 강북구 재활의학과 개원',
        result: '인허가 통합 관리로 예상 개원 일정 대비 3주 단축' 
      },
      { 
        title: '제주도 종합병원 증축 인허가',
        result: '복잡한 규제 환경에서 원활한 인허가 획득, 일정 준수' 
      },
      { 
        title: '경기도 의료 클러스터 내 병원 설립',
        result: '다중 이해관계자 조율 및 인허가 일괄 처리로 성공적 개원' 
      }
    ]
  }
};

type RouteParams = {
  id: string;
};

const PortfolioItem: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const portfolio = id ? portfolioData[id as keyof typeof portfolioData] : null;

  if (!portfolio) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem' 
      }}>
        <h1>포트폴리오를 찾을 수 없습니다</h1>
        <Link to="/" style={{
          display: 'inline-block',
          marginTop: '2rem',
          padding: '0.75rem 2rem',
          backgroundColor: 'var(--primary-color)',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 600
        }}>
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '5rem', paddingBottom: '5rem' }}>
      {/* 히어로 섹션 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${portfolio.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '8rem 2rem',
          color: 'white',
          textAlign: 'center',
          marginBottom: '4rem'
        }}
      >
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ 
              fontSize: '3rem', 
              fontWeight: 800, 
              marginBottom: '1.5rem' 
            }}
          >
            {portfolio.title}
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{
              fontSize: '1.25rem',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: 1.8
            }}
          >
            {portfolio.description}
          </motion.p>
        </div>
      </motion.div>

      {/* 상세 정보 */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {/* 서비스 소개 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 700, 
              marginBottom: '2rem',
              color: portfolio.color
            }}>
              서비스 소개
            </h2>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#555',
              marginBottom: '2rem'
            }}>
              {portfolio.detailDescription}
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}>
              {portfolio.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{
                    padding: '1.5rem',
                    background: '#f8f9fa',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: portfolio.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold'
                    }}>
                      {index + 1}
                    </div>
                    <h3 style={{ fontWeight: 600, color: '#333' }}>{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 사례 연구 */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ 
              fontSize: '2.2rem', 
              fontWeight: 700, 
              marginBottom: '2rem',
              color: portfolio.color
            }}>
              성공 사례
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {portfolio.caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  style={{
                    padding: '2rem',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    border: `1px solid ${portfolio.color}20`
                  }}
                >
                  <h3 style={{ 
                    fontWeight: 700,
                    fontSize: '1.3rem',
                    marginBottom: '1rem',
                    color: '#333'
                  }}>
                    {study.title}
                  </h3>
                  <div style={{
                    height: '2px',
                    width: '50px',
                    background: portfolio.color,
                    marginBottom: '1.5rem'
                  }}></div>
                  <p style={{
                    fontSize: '1.05rem',
                    color: '#555',
                    lineHeight: 1.7
                  }}>
                    {study.result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              padding: '3rem',
              background: `linear-gradient(to right, ${portfolio.color}, ${portfolio.color}DD)`,
              borderRadius: '16px',
              color: 'white',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              지금 상담 신청하기
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
              저희 전문가가 귀하의 병원에 최적화된 맞춤형 솔루션을 제공해 드립니다.
            </p>
            <Link to="/contact" style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'white',
              color: portfolio.color,
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1.1rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
            }}>
              무료 상담 신청
            </Link>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem; 