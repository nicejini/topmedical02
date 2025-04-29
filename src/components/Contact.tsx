import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ModalContext } from '../App';

interface ContactProps {
  isModal?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isModal = false }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/contact';
  const { closeContactModal } = useContext(ModalContext);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hospitalType: '',
    message: '',
    agreement: false
  });

  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  // 새 페이지에서 열렸을 때 스크롤 맨 위로
  useEffect(() => {
    if (isStandalonePage) {
      window.scrollTo(0, 0);
    }
  }, [isStandalonePage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 여기서 실제 폼 제출 로직이 들어갑니다.
    // 예시로 성공 메시지를 보여줍니다.
    setFormStatus({
      success: true,
      message: '상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.'
    });
    
    // 폼 데이터 초기화
    setFormData({
      name: '',
      email: '',
      phone: '',
      hospitalType: '',
      message: '',
      agreement: false
    });

    // 성공 시 3초 후 모달 닫기 (모달 모드인 경우)
    if (isModal) {
      setTimeout(() => {
        closeContactModal();
      }, 3000);
    }
  };

  return (
    <section id="contact" className="section" style={{ 
      backgroundColor: isModal ? 'transparent' : '#f8f9fa',
      padding: isModal ? '0' : '8rem 0',
      position: 'relative',
      overflow: 'hidden',
      marginTop: isStandalonePage ? '5rem' : '0',
      boxShadow: 'none'
    }}>
      {!isModal && (
        <>
          {/* 배경 요소 - 모달 모드에서는 표시하지 않음 */}
          <div style={{
            position: 'absolute',
            top: '-15%',
            right: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(72, 202, 228, 0.1) 0%, rgba(72, 202, 228, 0) 70%)',
            zIndex: 0
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 119, 182, 0.1) 0%, rgba(0, 119, 182, 0) 70%)',
            zIndex: 0
          }}></div>
        </>
      )}
      
      <div className="container" style={{ 
        position: 'relative', 
        zIndex: 1,
        padding: isModal ? '2rem' : '0',
        maxWidth: isModal ? '100%' : '1200px',
        margin: '0 auto'
      }}>
        <motion.div 
          className="section-header text-center" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: isModal ? '2rem' : '5rem' }}
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
            CONTACT US
          </span>
          <h2 style={{ 
            fontSize: isModal ? '2.5rem' : '3rem', 
            color: 'var(--text-color)',
            marginBottom: '2rem',
            fontWeight: 800
          }}>
            무료 상담 신청
          </h2>
          <p style={{ 
            fontSize: '1.2rem', 
            maxWidth: '700px', 
            margin: '0 auto', 
            color: 'var(--light-text-color)',
            lineHeight: 1.8,
            fontWeight: 300
          }}>
            병원 개원에 대한 전문적인 상담이 필요하신가요? 경험 많은 전문가가 최적의 솔루션을 제안해 드립니다.
          </p>
        </motion.div>
      
        <div className="contact-wrapper" style={{
          display: 'grid',
          gridTemplateColumns: isModal 
            ? '1fr' 
            : 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: isModal ? '2rem' : '4rem',
          alignItems: 'start'
        }}>
          {!isModal && (
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div style={{ 
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', 
                padding: '3rem', 
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                color: 'white'
              }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', fontWeight: 700 }}>
                  연락처 정보
                </h3>
                <p style={{ fontSize: '1.1rem', marginBottom: '3rem', lineHeight: 1.7, opacity: 0.9 }}>
                  궁금한 점이 있으시면 언제든지 문의해 주세요. 전문 상담사가 친절하게 답변해 드립니다.
                </p>
                
                <div className="contact-details" style={{ marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '1.5rem',
                      fontSize: '1.5rem'
                    }}>
                      📞
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>전화 문의</div>
                      <div style={{ fontSize: '1.2rem' }}>02-1234-5678</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '1.5rem',
                      fontSize: '1.5rem'
                    }}>
                      ✉️
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>이메일 문의</div>
                      <div style={{ fontSize: '1.2rem' }}>contact@topmedical.co.kr</div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ 
                      width: '56px', 
                      height: '56px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      marginRight: '1.5rem',
                      fontSize: '1.5rem'
                    }}>
                      🏢
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: '0.3rem' }}>본사 위치</div>
                      <div style={{ fontSize: '1.2rem' }}>서울시 강남구 테헤란로 123</div>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginTop: '3rem' }}>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', fontWeight: 600 }}>소셜 미디어</h4>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'background-color 0.3s ease'
                    }}>
                      📘
                    </a>
                    <a href="#" style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'background-color 0.3s ease'
                    }}>
                      📸
                    </a>
                    <a href="#" style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '50%', 
                      backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '1.5rem',
                      transition: 'background-color 0.3s ease'
                    }}>
                      🎬
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: isModal ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="card" style={{ 
              padding: '3rem', 
              borderRadius: '16px',
              boxShadow: isModal ? 'none' : '0 10px 30px rgba(0, 0, 0, 0.08)',
              backgroundColor: 'white'
            }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontWeight: 700 }}>상담 신청</h3>
              
              {formStatus && (
                <div 
                  style={{ 
                    padding: '1.2rem', 
                    borderRadius: 'var(--border-radius)', 
                    backgroundColor: formStatus.success ? '#e8f5e9' : '#ffebee',
                    color: formStatus.success ? '#2e7d32' : '#c62828',
                    marginBottom: '2rem',
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}
                >
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '1.8rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.05rem' }}>이름 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    placeholder="홍길동"
                  />
                </div>
                
                <div style={{ marginBottom: '1.8rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.05rem' }}>이메일 *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    placeholder="example@email.com"
                  />
                </div>
                
                <div style={{ marginBottom: '1.8rem' }}>
                  <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.05rem' }}>연락처 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    placeholder="010-1234-5678"
                  />
                </div>
                
                <div style={{ marginBottom: '1.8rem' }}>
                  <label htmlFor="hospitalType" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.05rem' }}>개원 예정 병원 *</label>
                  <select
                    id="hospitalType"
                    name="hospitalType"
                    value={formData.hospitalType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: 'white',
                      appearance: 'none',
                      backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      backgroundSize: '1em',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                  >
                    <option value="">병원 종류를 선택해주세요</option>
                    <option value="내과">내과</option>
                    <option value="정형외과">정형외과</option>
                    <option value="피부과">피부과</option>
                    <option value="안과">안과</option>
                    <option value="치과">치과</option>
                    <option value="이비인후과">이비인후과</option>
                    <option value="산부인과">산부인과</option>
                    <option value="소아과">소아과</option>
                    <option value="성형외과">성형외과</option>
                    <option value="한의원">한의원</option>
                    <option value="기타">기타</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '1.8rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.8rem', fontWeight: 600, fontSize: '1.05rem' }}>문의 내용</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '1px solid var(--border-color)',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      resize: 'vertical',
                      transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                    }}
                    placeholder="문의하실 내용을 입력해주세요."
                  />
                </div>
                
                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem', cursor: 'pointer' }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      border: '2px solid var(--border-color)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: formData.agreement ? 'var(--primary-color)' : 'transparent',
                      transition: 'background-color 0.3s ease',
                      marginTop: '2px'
                    }}>
                      {formData.agreement && (
                        <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>✓</span>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleCheckboxChange}
                      required
                      style={{ display: 'none' }}
                    />
                    <div>
                      <span style={{ fontSize: '1rem', color: 'var(--light-text-color)' }}>
                        개인정보 수집 및 이용에 동의합니다. *
                      </span>
                      <button
                        type="button"
                        onClick={() => setShowPrivacyModal(true)}
                        style={{
                          display: 'block',
                          marginTop: '0.5rem',
                          backgroundColor: 'transparent',
                          border: 'none',
                          color: 'var(--primary-color)',
                          fontSize: '0.9rem',
                          padding: 0,
                          cursor: 'pointer',
                          textDecoration: 'underline'
                        }}
                      >
                        약관 자세히 보기
                      </button>
                    </div>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  style={{ 
                    width: '100%', 
                    fontSize: '1.1rem', 
                    fontWeight: 600,
                    padding: '1.2rem',
                    backgroundColor: 'var(--primary-color)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, transform 0.3s ease',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  무료 상담 신청하기
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 개인정보 처리방침 모달 */}
      {showPrivacyModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '2rem',
            maxWidth: '600px',
            width: '100%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 700 }}>개인정보 수집 및 이용 동의</h3>
            <div style={{ marginBottom: '1.5rem', fontSize: '0.9rem', lineHeight: 1.6 }}>
              <p style={{ marginBottom: '1rem' }}>
                탑메디컬('https://topmedical.co.kr'이하 '탑메디컬')은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
              </p>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>1. 개인정보의 처리 목적</h4>
              <p style={{ marginBottom: '1rem' }}>
                회사는 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
                <br />- 상담 문의에 대한 답변 제공
                <br />- 서비스 제공 및 계약 이행
                <br />- 마케팅 및 광고에의 활용
              </p>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>2. 개인정보 수집 항목</h4>
              <p style={{ marginBottom: '1rem' }}>
                회사는 서비스 제공을 위해 아래와 같은 개인정보를 수집합니다.
                <br />- 필수항목: 이름, 연락처, 이메일
                <br />- 선택항목: 개원 예정 병원 종류, 문의 내용
              </p>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>3. 개인정보의 보유 및 이용기간</h4>
              <p style={{ marginBottom: '1rem' }}>
                회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 관계법령에 의해 보존할 필요가 있는 경우 법령에서 정한 일정한 기간 동안 개인정보를 보관합니다.
              </p>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>4. 정보주체의 권리, 의무 및 그 행사방법</h4>
              <p style={{ marginBottom: '1rem' }}>
                이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
                <br />- 개인정보 열람요구
                <br />- 오류 등이 있을 경우 정정 요구
                <br />- 삭제요구
                <br />- 처리정지 요구
              </p>
              <h4 style={{ fontWeight: 600, marginBottom: '0.5rem' }}>5. 개인정보의 안전성 확보 조치</h4>
              <p style={{ marginBottom: '1rem' }}>
                회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다.
                <br />- 개인정보 암호화
                <br />- 해킹 등에 대비한 기술적 대책
                <br />- 개인정보에 대한 접근 제한
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowPrivacyModal(false)}
                style={{
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  border: 'none',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '5px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact; 