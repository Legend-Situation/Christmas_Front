import React from 'react';
import PinkBackground from 'assets/image/PinkBackground.png';
import Tree from 'assets/image/Tree.png';
import * as S from './style';

interface Option {
  text: string;
  value: string;
}

interface QuestionCardProps {
  index: number;
  question: string;
  options: Option[];
  onAnswer: (answer: string) => void;
}

const QuestionCard = ({ index, question, options, onAnswer }: QuestionCardProps) => {
  return (
    <S.QuestionContainer>
      <S.Title>Q{index + 1}. </S.Title>
      <S.QuestionText>{question}</S.QuestionText>
      <S.Buttons>
        {options.map((option, optionIndex) => (
          <S.AnswerButton
            key={optionIndex}
            onClick={() => onAnswer(option.value)}
            imgUrl={PinkBackground}
          >
            {option.text}
          </S.AnswerButton>
        ))}
      </S.Buttons>
      <S.TreeImg src={Tree} alt="트리 이미지" />
    </S.QuestionContainer>
  );
};

export default QuestionCard;