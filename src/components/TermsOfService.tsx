import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">이용약관</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">제1조 (목적)</h2>
        <p className="mb-4">
          이 약관은 탑메디컬(이하 "회사")이 제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제2조 (정의)</h2>
        <p className="mb-4">
          이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>"서비스"라 함은 회사가 제공하는 모든 서비스를 의미합니다.</li>
          <li>"이용자"라 함은 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">제3조 (약관의 효력 및 변경)</h2>
        <p className="mb-4">
          이 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
          회사는 필요한 경우 약관을 변경할 수 있으며, 변경된 약관은 서비스 화면에 공지함으로써 효력을 발생합니다.
        </p>

        <h2 className="text-2xl font-semibold mb-4">제4조 (서비스 이용)</h2>
        <p className="mb-4">
          서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간을 원칙으로 합니다.
        </p>
      </div>
    </div>
  );
};

export default TermsOfService; 