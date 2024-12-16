import INFJImage from '../assets/image/INFJ.png';
import INTJImage from '../assets/image/INTJ.png';
import ISTPImage from '../assets/image/ISTP.png';
import ISTJImage from '../assets/image/ISTJ.png';
import INTPImage from '../assets/image/INTP.png';
import ISFJImage from '../assets/image/ISFJ.png';
import ISFPImage from '../assets/image/ISFP.png';
import ENFPImage from '../assets/image/ENFP.png';
import ENFJImage from '../assets/image/ENFJ.png';
import ENTJImage from '../assets/image/ENTJ.png';
import ESTPImage from '../assets/image/ESTP.png';
import ESTJImage from '../assets/image/ESTJ.png';
import ESFJImage from '../assets/image/ESFJ.png';
import ESFPImage from '../assets/image/ESFP.png';
import INFPImage from '../assets/image/INFP.png';
import ENTPImage from '../assets/image/ENTP.png';

interface ResultType {
  [key: string]: {
    title: string;
    subTitle: string;
    content: string;
    hashTag: string;
    characterSrc: string;
    partnerSrc: string;
    partnerName: string;
  };
}

export const resultData: ResultType = {
  INFJ: {
    title: '따뜻한 선물을 준비하며 감성에 젖는 팬도리',
    subTitle: '“혼자만의 시간과 따뜻한 감성을 나누는 크리스마스”',
    content:
      '팬도리는 조용히 선물을 준비하고, 올해의 추억을 떠올리며 감성에 젖습니다. 따뜻한 차 한잔과 함께 손편지를 쓰며, 혼자만의 시간 속에서 크리스마스의 의미를 되새깁니다.',
    hashTag: '#감성충만 #혼자만의시간 #따뜻한연말',
    characterSrc: INFJImage,
    partnerSrc: ENFPImage,
    partnerName: '고래둥둥',
  },
  INTJ: {
    title: '올해를 정리하며 계획을 세우는 호랑이',
    subTitle: '“효율적인 크리스마스로 더 나은 내년을 준비해요”',
    content:
      '호랑이는 조용히 올해를 돌아보고 내년 계획을 철저히 세웁니다. 차분한 시간 속에서 목표를 설정하고 자기계발을 실천하며 완벽한 크리스마스를 보냅니다.',
    hashTag: '#계획형인간 #자기계발 #효율적인연말',
    characterSrc: INTJImage,
    partnerSrc: ENTPImage,
    partnerName: '숭숭이',
  },
  ISTP: {
    title: '혼자서 취미에 몰두하는 마이웨이 곰도리',
    subTitle: '“필요한 일만 하고 자유롭게 보내는 크리스마스”',
    content:
      '곰도리는 집에서 혼자 영화를 보거나 취미를 즐기며 시간을 보냅니다. 필요하면 나가서 산책하지만, 대체로 혼자 있는 게 가장 행복한 크리스마스입니다.',
    hashTag: '#혼자놀기 #마이웨이 #자유시간',
    characterSrc: ISTPImage,
    partnerSrc: ESTPImage,
    partnerName: '다람쥐',
  },
  ISTJ: {
    title: '전통과 가족을 챙기는 양양이',
    subTitle: '“안정감 있는 전통 크리스마스를 준비해요”',
    content:
      '양양이는 크리스마스에 가족과 함께 전통을 지킵니다. 완벽한 트리 장식과 가족 식사를 준비하며 따뜻하고 계획적인 연말을 보냅니다.',
    hashTag: '#전통중시 #안정감 #가족모임',
    characterSrc: ISTJImage,
    partnerSrc: ESFJImage,
    partnerName: '사슴이',
  },
  INTP: {
    title: '집에서 몰입하는 시간에 행복한 쿼카',
    subTitle: '“게임과 책 속에서 나만의 크리스마스를 즐겨요”',
    content:
      '쿼카는 크리스마스에도 게임 레벨을 올리거나 책을 읽으며 몰입합니다. 혼자만의 공간에서 무언가에 집중하며 만족스러운 시간을 보냅니다.',
    hashTag: '#집돌이 #몰입형 #책과게임',
    characterSrc: INTPImage,
    partnerSrc: INTJImage,
    partnerName: '호랑이',
  },
  ISFJ: {
    title: '가족을 위해 헌신하는 따뜻한 너굴씨',
    subTitle: '“가족과 함께하는 따뜻하고 정성스러운 크리스마스”',
    content:
      '너굴씨는 가족을 위해 정성껏 식사를 준비하고 크리스마스를 따뜻하게 만듭니다. 모두를 챙기며 행복한 순간을 함께합니다.',
    hashTag: '#헌신의아이콘 #따뜻한연말 #가족사랑',
    characterSrc: ISFJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
  },
  ISFP: {
    title: '포근한 공간에서 감성을 채우는 코코알라',
    subTitle: '“음악과 차 한잔으로 힐링하는 크리스마스”',
    content:
      '코코알라는 따뜻한 공간에서 캐롤을 들으며 귤을 까먹고 차를 마십니다. 느긋하게 감성을 채우며 행복한 하루를 보냅니다.',
    hashTag: '#힐링타임 #감성충만 #포근한시간',
    characterSrc: ISFPImage,
    partnerSrc: INFPImage,
    partnerName: '야옹이',
  },
  ENFP: {
    title: '모두를 웃게 만드는 크리스마스 무드메이커 고래둥둥',
    subTitle: '“행복을 나누고 창의적으로 즐기는 크리스마스”',
    content:
      '고래둥둥은 친구들과 게임을 기획하고 모두를 웃게 만듭니다. 넘치는 에너지와 창의력으로 크리스마스를 특별하게 만듭니다.',
    hashTag: '#행복바이러스 #에너지충만 #파티왕',
    characterSrc: ENFPImage,
    partnerSrc: INFJImage,
    partnerName: '팬도리',
  },
  ENFJ: {
    title: '사랑과 나눔을 실천하는 크리스마스 댕댕이',
    subTitle: '“이웃과 친구들에게 행복을 전하는 크리스마스”',
    content:
      '댕댕이는 봉사활동이나 선물 나눔을 실천하며 크리스마스를 따뜻하게 만듭니다. 주변 사람들에게 긍정적인 에너지를 나눕니다.',
    hashTag: '#사랑과헌신 #따뜻한나눔 #행복전도사',
    characterSrc: ENFJImage,
    partnerSrc: ISFJImage,
    partnerName: '너굴씨',
  },
  ENTJ: {
    title: '크리스마스를 주도적으로 이끄는 사자냥',
    subTitle: '“계획과 추진력으로 완벽한 크리스마스를 만들어요”',
    content:
      '사자냥은 크리스마스 이벤트를 주최하며 모두를 이끌어갑니다. 완벽한 계획으로 최고의 연말을 준비합니다.',
    hashTag: '#추진력갑 #리더십 #파티기획',
    characterSrc: ENTJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
  },
  ESTP: {
    title: '에너지 넘치는 파티의 주인공 다람쥐',
    subTitle: '“친구들과 신나게 즐기는 크리스마스”',
    content:
      '다람쥐는 크리스마스에도 친구들과 파티를 열어 에너지를 발산합니다. 즐겁고 다이내믹한 순간을 만들어내며 모두를 웃게 만듭니다.',
    hashTag: '#파티의주인공 #즉흥의달인 #에너지왕',
    characterSrc: ESTPImage,
    partnerSrc: ISTPImage,
    partnerName: '곰도리',
  },
  ESTJ: {
    title: '철저하게 크리스마스를 준비하는 늑대리',
    subTitle: '“완벽한 계획과 실행으로 책임지는 크리스마스”',
    content:
      '늑대리는 크리스마스 만찬과 이벤트를 철저히 준비하며 모두를 이끕니다. 빈틈없는 준비로 모두가 만족하는 크리스마스를 만듭니다.',
    hashTag: '#책임감 #완벽주의 #계획형인간',
    characterSrc: ESTJImage,
    partnerSrc: ISFJImage,
    partnerName: '너굴씨',
  },
  ESFJ: {
    title: '가족과 친구를 챙기는 사슴이',
    subTitle: '“함께하면 더 행복한 따뜻한 크리스마스”',
    content:
      '사슴이는 가족과 친구들을 초대해 따뜻한 식사와 선물을 나눕니다. 모두를 챙기며 행복한 순간을 함께합니다.',
    hashTag: '#모두의친구 #따뜻한식사 #연말인싸',
    characterSrc: ESFJImage,
    partnerSrc: ISTJImage,
    partnerName: '양양이',
  },
  ESFP: {
    title: '크리스마스 분위기를 띄우는 파티스타 여우비',
    subTitle: '“모두를 신나게 만드는 크리스마스 스타”',
    content:
      '여우비는 크리스마스 파티에서 모두를 신나게 만듭니다. 춤추고 노래하며 분위기를 띄우는 데 누구보다도 능숙합니다.',
    hashTag: '#파티스타 #분위기메이커 #에너지폭발',
    characterSrc: ESFPImage,
    partnerSrc: ESTPImage,
    partnerName: '다람쥐',
  },
  INFP: {
    title: '감성에 푹 빠져 몽환적인 시간을 보내는 야옹이',
    subTitle: '“동화 같은 상상에 빠져드는 감성 크리스마스”',
    content:
      '야옹이는 크리스마스에 창밖을 보며 동화 같은 상상을 합니다. 조용하고 감성적인 시간을 보내며 행복을 느낍니다.',
    hashTag: '#감성충만 #몽환적인시간 #나만의세상',
    characterSrc: INFPImage,
    partnerSrc: ISFPImage,
    partnerName: '코코알라',
  },
  ENTP: {
    title: '독특한 아이디어로 이벤트를 기획하는 숭숭이',
    subTitle: '“모두를 놀라게 하는 창의적인 크리스마스”',
    content:
      '숭숭이는 크리스마스에 남다른 아이디어로 모두를 놀라게 합니다. 창의적이고 즉흥적인 이벤트로 잊지 못할 순간을 만듭니다.',
    hashTag: '#창의력폭발 #즉흥천재 #파티아이디어왕',
    characterSrc: ENTPImage,
    partnerSrc: INTJImage,
    partnerName: '호랑이',
  },
};