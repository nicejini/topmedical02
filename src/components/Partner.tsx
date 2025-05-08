import React, { useEffect, useRef } from 'react';

interface PartnerProps {
  closePartnerModal?: () => void;
}

const Partner: React.FC<PartnerProps> = ({ closePartnerModal }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc && doc.body && doc.body.innerText.includes('응답이 기록되었습니다')) {
            if (closePartnerModal) closePartnerModal();
          }
        } catch (e) {
          // cross-origin 에러 무시
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [closePartnerModal]);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">협력업체 등록</h2>
      <div className="w-full" style={{ height: '90vh' }}>
        <iframe 
          ref={iframeRef}
          src="https://docs.google.com/forms/d/1GixJ_XzwtUkX73CrFnYfrLoqUYFWzrytKqL9w9S6CKk/viewform?embedded=true" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          style={{ border: 'none' }}
          title="협력업체 등록"
        >
          로드 중...
        </iframe>
      </div>
    </div>
  );
};

export default Partner; 