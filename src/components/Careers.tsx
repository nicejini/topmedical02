import React from 'react';

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">채용정보</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">채용 안내</h2>
        <p className="mb-4">
          탑메디컬은 의료 서비스 혁신을 이끌어갈 인재를 모집합니다.
          함께 성장하고 발전할 수 있는 기회를 제공합니다.
        </p>

        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">프론트엔드 개발자</h3>
            <p className="text-gray-600 mb-2">정규직 | 서울</p>
            <ul className="list-disc pl-6 mb-4">
              <li>React, TypeScript 경험자</li>
              <li>웹 표준 및 웹 접근성 이해</li>
              <li>협업 경험 우대</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              지원하기
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">백엔드 개발자</h3>
            <p className="text-gray-600 mb-2">정규직 | 서울</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Node.js, Express 경험자</li>
              <li>MongoDB 또는 관계형 DB 경험</li>
              <li>RESTful API 설계 경험</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              지원하기
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">UI/UX 디자이너</h3>
            <p className="text-gray-600 mb-2">정규직 | 서울</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Figma, Adobe XD 등 툴 활용 능력</li>
              <li>반응형 디자인 경험</li>
              <li>사용자 중심 디자인 이해</li>
            </ul>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              지원하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers; 