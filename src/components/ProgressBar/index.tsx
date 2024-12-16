import React from 'react';
import * as S from './style';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <S.ProgressBarContainer>
      <S.ProgressBarFill progress={progress} />
    </S.ProgressBarContainer>
  );
};

export default ProgressBar;
