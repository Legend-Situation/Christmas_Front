import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result from 'components/Result';
import { resultData } from 'data/result';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const answers: string[] = location.state?.answers || [];
  const [resultType, setResultType] = useState('');

  useEffect(() => {
    if (answers.length === 0) {
      console.warn('Answers are empty, redirecting to home.');
      navigate('/');
      return;
    }

    const calculateResult = () => {
      const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, P: 0, J: 0 };

      answers.forEach((answer) => {
        if (answer) scores[answer as keyof typeof scores] += 1;
      });

      const result =
        (scores['E'] >= scores['I'] ? 'E' : 'I') +
        (scores['S'] >= scores['N'] ? 'S' : 'N') +
        (scores['T'] >= scores['F'] ? 'T' : 'F') +
        (scores['P'] >= scores['J'] ? 'P' : 'J');

      console.log('Calculated resultType:', result);
      setResultType(result);
    };

    calculateResult();
  }, [answers, navigate]);

  const resultInfo = resultData[resultType];

  if (!resultInfo) {
    console.warn(`Invalid resultType: ${resultType}, defaulting to ESTJ.`);
    return <div>결과를 계산할 수 없습니다. 다시 테스트를 진행해주세요.</div>;
  }

  return (
    <Result
      title={resultInfo.title}
      subTitle={resultInfo.subTitle}
      content={resultInfo.content}
      hashTag={resultInfo.hashTag}
      characterSrc={resultInfo.characterSrc}
      partnerSrc={resultInfo.partnerSrc}
      partnerName={resultInfo.partnerName}
      saveImageSrc={resultInfo.saveImageSrc}
    />
  );
};

export default ResultPage;
