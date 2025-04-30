import React from 'react';

const CompanyInfo: React.FC = () => {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="text-3xl font-bold mb-6">회사 소개</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">탑메디컬 소개</h2>
          <p className="mb-4">
            탑메디컬은 병원 개원을 위한 통합 서비스 플랫폼으로, 의료기관의 성공적인 개원과 운영을 지원합니다.
          </p>
          <h3 className="text-xl font-semibold mb-3">주요 서비스</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>병원 입지 분석 및 컨설팅</li>
            <li>인테리어 설계 및 시공</li>
            <li>의료 장비 구매 컨설팅</li>
            <li>마케팅 솔루션</li>
            <li>결제 시스템 구축</li>
          </ul>
          <h3 className="text-xl font-semibold mb-3">회사 연혁</h3>
          <div className="space-y-2">
            <p>2023년: 탑메디컬 설립</p>
            <p>2024년: 플랫폼 서비스 런칭</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CompanyInfo; 