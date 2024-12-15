import React from 'react';
import * as S from './style';
import Ribbon from '../../assets/image/크리스마스리본.png';

interface ButtonProps {
  title: string;
}

const Result = ({ title }: ButtonProps) => {
  return (
    <S.Result_Box>
      <S.Ribbon>
        <img src={Ribbon} alt="리본" style={{ width: '40px', height: '40px' }} />
      </S.Ribbon>
      <S.Title>{title}</S.Title>
      <S.Background>
        이미지 앱솔루트로 띄우기
      </S.Background>
    </S.Result_Box>
  );
};

export default Result;
