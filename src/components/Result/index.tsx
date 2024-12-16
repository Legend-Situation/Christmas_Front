import React from 'react';
import * as S from './style';
import Ribbon from '../../assets/image/리본.png';
import Button from 'components/Button';

interface ResultProps {
  title: string;
  subTitle: string;
  content: string;
  hashTag: string;
  characterSrc: string;
  partnerSrc: string;
  partnerName: string;
}

const Result = ({
  title,
  subTitle,
  content,
  hashTag,
  characterSrc,
  partnerSrc,
  partnerName
}: ResultProps) => {
  return (
    <S.Layout>
      <S.Result_Box>
        <S.Ribbon>
          <img
            src={Ribbon}
            alt="리본"
            style={{ width: '50px', height: '50px' }}
          />
        </S.Ribbon>
        <S.Title>{title}</S.Title>
        <S.BackgroundWrapper>
          <S.Background />
          <S.Character>
            <img src={characterSrc} />
          </S.Character>
        </S.BackgroundWrapper>
        <S.SubTitle>{subTitle}</S.SubTitle>
        <S.Content>{content}</S.Content>
        <S.HashTag>{hashTag}</S.HashTag>
      </S.Result_Box>
      <S.PartnerBox>
        <S.PartnerTitle>나와 크리스마스를 보낼 환상의 짝꿍</S.PartnerTitle>
        <S.PartnerBackgroundWrapper>
          <S.Background />
          <S.PartnerCharacter>
            <img src={partnerSrc} />
          </S.PartnerCharacter>
        </S.PartnerBackgroundWrapper>
        <S.PartnerName>{partnerName}</S.PartnerName>
      </S.PartnerBox>
      <S.ButtonGap>
        <Button
          title="이미지 저장하기"
          onClickMethod={() => alert('이미지 저장하기 클릭됨!')}
        />
        <Button
          title="친구들에게 공유하기"
          onClickMethod={() => alert('친구들에게 공유하기 클릭됨!')}
        />
      </S.ButtonGap>
      <S.Replay>테스트 다시하기 &gt;</S.Replay>
    </S.Layout>
  );
};

export default Result;
