import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import ProgressBar from 'components/ProgressBar';
import QuestionCard from 'components/QuestionCard';
import { questions } from 'data/questions';

const Question = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer]; // 새로운 answers 배열 업데이트
    setAnswers(newAnswers);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setProgress(((currentIndex + 1) / questions.length) * 100);
    } else {
      console.log('Final Answers:', newAnswers);
      navigate('/result', { state: { answers: newAnswers } }); // 최종 answers 전달
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