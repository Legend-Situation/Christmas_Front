import React, { useState } from 'react';
import * as S from './style';
import ProgressBar from 'components/ProgressBar';
import QuestionCard from 'components/QuestionCard';
import { questions } from 'data/questions';

const Question = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleAnswer = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(((currentIndex + 1) / questions.length) * 100);
    } else {
      alert('모든 질문이 완료되었습니다! 🎉');
    }
  };

  return (
    <S.Container>
      <ProgressBar progress={progress} />
      <QuestionCard
        index={currentIndex}
        question={questions[currentIndex].question}
        options={questions[currentIndex].options}
        onAnswer={handleAnswer}
      />
    </S.Container>
  );
};

export default Question;
