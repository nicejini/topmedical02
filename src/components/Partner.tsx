import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Partner: React.FC = () => {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    agreement: false
  });
  const [formStatus, setFormStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ success: true, message: '지원이 접수되었습니다. 검토 후 연락드리겠습니다.' });
    setFormData({
      company: '',
      name: '',
      email: '',
      phone: '',
      businessType: '',
      message: '',
      agreement: false
    });
  };
  return (
    <main className="page-content">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', backgroundColor: 'rgba(0, 119, 182, 0.1)', color: 'var(--primary-color)', borderRadius: '50px', fontWeight: 600, fontSize: '1rem', marginBottom: '1.5rem' }}>
            협력업체 모집
          </span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-color)', marginBottom: '2rem', fontWeight: 800 }}>
            탑메디컬과 함께 성장할 협력업체를 찾습니다
          </h2>
          <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: 'var(--light-text-color)', lineHeight: 1.8, fontWeight: 300 }}>
            탑메디컬은 병원 개원 및 운영을 위한 다양한 분야의 협력업체를 모집합니다.<br />
            의료기기, 인테리어, IT, 마케팅, 소모품 등 다양한 분야의 파트너와 함께 성장하길 희망합니다.<br />
            아래 양식을 작성해 주시면 담당자가 검토 후 연락드리겠습니다.
          </p>
        </motion.div>
        <div style={{ maxWidth: 600, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 10px 30px rgba(0,0,0,0.08)', padding: '2.5rem' }}>
          {formStatus && (
            <div style={{ padding: '1.2rem', borderRadius: 12, backgroundColor: formStatus.success ? '#e8f5e9' : '#ffebee', color: formStatus.success ? '#2e7d32' : '#c62828', marginBottom: '2rem', fontSize: '1.1rem', fontWeight: 500, textAlign: 'center' }}>
              {formStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="company" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>업체명 *</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }} placeholder="업체명을 입력하세요" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>담당자명 *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }} placeholder="담당자명을 입력하세요" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>이메일 *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }} placeholder="이메일 주소를 입력하세요" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>연락처 *</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }} placeholder="연락처를 입력하세요" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="businessType" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>사업 분야 *</label>
              <input type="text" id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8 }} placeholder="예: 의료기기, 인테리어, IT, 마케팅 등" />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.7rem', fontWeight: 600 }}>간단한 소개</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: 8, resize: 'vertical' }} placeholder="귀사 및 서비스에 대해 간단히 소개해 주세요." />
            </div>
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" id="agreement" name="agreement" checked={formData.agreement} onChange={handleCheckboxChange} required style={{ marginRight: '0.5rem' }} />
              <label htmlFor="agreement" style={{ fontSize: '0.95rem' }}>개인정보 수집 및 이용에 동의합니다. *</label>
            </div>
            <button type="submit" style={{ width: '100%', fontSize: '1.1rem', fontWeight: 600, padding: '1.2rem', backgroundColor: 'var(--primary-color)', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
              지원하기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Partner; 