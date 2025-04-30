import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">개인정보 처리방침</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">1. 개인정보의 처리 목적</h2>
        <p className="mb-4">
          탑메디컬은 다음의 목적을 위하여 개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>서비스 제공을 위한 계약의 이행</li>
          <li>회원 관리</li>
          <li>마케팅 및 광고에의 활용</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">2. 개인정보의 처리 및 보유 기간</h2>
        <p className="mb-4">
          회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. 정보주체의 권리,의무 및 그 행사방법</h2>
        <p className="mb-4">
          이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>개인정보 열람요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제요구</li>
          <li>처리정지 요구</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">4. 처리하는 개인정보의 항목</h2>
        <p className="mb-4">
          회사는 다음의 개인정보 항목을 처리하고 있습니다.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>필수항목: 이름, 연락처, 이메일</li>
          <li>선택항목: 주소, 직업</li>
        </ul>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 