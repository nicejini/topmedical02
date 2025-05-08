import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { ModalContext } from '../App';
import emailjs from 'emailjs-com';

interface ContactProps {
  isModal?: boolean;
  closeContactModal: () => void;
}

const Contact: React.FC<ContactProps> = ({ isModal = false, closeContactModal }) => {
  const location = useLocation();
  const isStandalonePage = location.pathname === '/contact';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_oolt2te', // Service ID
        'template_4ywibrs', // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          hospitalType: formData.hospitalType,
          message: formData.message,
        },
        'public_68vJSjlQ5TvY5no8p' // Public Key
      );
      setFormStatus({
        success: true,
        message: '상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        hospitalType: '',
        message: '',
        agreement: false
      });
      if (isModal) {
        setTimeout(() => {
          closeContactModal();
        }, 3000);
      }
    } catch (error) {
      setFormStatus({
        success: false,
        message: '상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">문의하기</h2>
      <div className="w-full h-[800px]">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfeBtjTMA2xtxljWP3Fp3r2BCTkc8LscPgczvWPHtrTwk4Dtg/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          style={{ border: 'none' }}
        >
          로드 중...
        </iframe>
      </div>
    </div>
  );
};

export default Contact; 