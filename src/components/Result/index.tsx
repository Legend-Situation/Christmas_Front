import React from 'react';
import { useNavigate } from 'react-router-dom';
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
  saveImageSrc: string;
}

const Result = ({
  title,
  subTitle,
  content,
  hashTag,
  characterSrc,
  partnerSrc,
  partnerName,
  saveImageSrc
}: ResultProps) => {
  const history = useNavigate();

  const handleReplay = () => {
    history('/');
  };

  const handleImageSave = () => {
    const link = document.createElement('a');
    link.href = saveImageSrc;
    link.download = `${title}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    const shareUrl = window.location.href;

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          alert('URL이 복사되었습니다!');
        })
        .catch((err) => {
          console.error('클립보드 복사 실패:', err);
        });
    } else {
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);

      alert('URL이 복사되었습니다!');
    }
  };

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
        <Button title="이미지 저장하기" onClickMethod={handleImageSave} />
        <Button title="친구들에게 공유하기" onClickMethod={handleShare} />
      </S.ButtonGap>
      <S.Replay onClick={handleReplay}>테스트 다시하기 &gt;</S.Replay>
    </S.Layout>
  );
};

export default Result;
