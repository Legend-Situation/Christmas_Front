import React from 'react';
import PinkBackground from 'assets/image/PinkBackground.png';
import Tree from 'assets/image/Tree.png';
import * as S from './style';

interface QuestionCardProps {
  index: number;
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const QuestionCard = ({
  index,
  question,
  options,
  onAnswer
}: QuestionCardProps) => {
  return (
    <S.QuestionContainer>
      <S.Title>Q{index + 1}. </S.Title>
      <S.QuestionText>{question}</S.QuestionText>
      <S.Buttons>
        {options.map((option, optionIndex) => (
          <S.AnswerButton
            key={optionIndex}
            onClick={() => onAnswer(option)}
            imgUrl={PinkBackground}
          >
            {option}
          </S.AnswerButton>
        ))}
      </S.Buttons>
      <S.TreeImg src={Tree} />
    </S.QuestionContainer>
  );
};

export default QuestionCard;
