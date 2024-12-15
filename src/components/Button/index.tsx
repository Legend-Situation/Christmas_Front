import React from 'react';
import * as S from './style';
import PinkBackground from 'assets/image/PinkBackground.png';

interface ButtonProps {
  title: string;
  onClickMethod: () => void;
}

const Button = ({ title, onClickMethod }: ButtonProps) => {
  return (
    <S.Container imgUrl={PinkBackground} onClick={onClickMethod}>
      {title}
    </S.Container>
  );
};

export default Button;
