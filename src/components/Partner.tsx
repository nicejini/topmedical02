import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

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
    try {
      await emailjs.send(
        'service_oolt2te', // Service ID
        'template_4ywibrs', // Template ID
        {
          company: formData.company,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          message: formData.message,
        },
        'public_68vJSjlQ5TvY5no8p' // Public Key
      );
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
    } catch (error) {
      setFormStatus({ success: false, message: '지원 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' });
    }
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">협력업체 등록</h2>
      <div className="w-full h-[800px]">
        <iframe 
          src="https://docs.google.com/forms/d/1GixJ_XzwtUkX73CrFnYfrLoqUYFWzrytKqL9w9S6CKk/viewform?embedded=true" 
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

export default Partner; 