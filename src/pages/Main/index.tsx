import React from 'react';
import * as S from './style';
import Snowflake from 'assets/image/Snowflake';
import TreeImg from 'assets/image/Tree.png';
import Button from 'components/Button';

const Main = () => {
  return (
    <S.Container>
      <S.FirstSnows>
        <Snowflake />
        <Snowflake />
        <Snowflake />
      </S.FirstSnows>
      <S.SecondSnows>
        <Snowflake />
        <Snowflake />
      </S.SecondSnows>
      <S.Texts>
        <S.Title>크리스마스 유형 테스트</S.Title>
        <S.SubTitle>나의 크리스마스는 어떨까?</S.SubTitle>
      </S.Texts>
      <S.TreeImage src={TreeImg} />
      <Button
        title="시작하기"
        onClickMethod={() => {
          return;
        }}
      />
    </S.Container>
  );
};

export default Main;
