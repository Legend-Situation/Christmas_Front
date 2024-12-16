import INFJImage from '../assets/image/INFJ.png';
import INTJImage from '../assets/image/INTJ.png';
import ISTPImage from '../assets/image/ISTP.png';
import ISTJImage from '../assets/image/ISTJ.png';
import INTPImage from '../assets/image/INTP.png';
import ISFJImage from '../assets/image/ISFJ.png';
import ISFPImage from '../assets/image/ISFP.png';
import INFPImage from '../assets/image/INFP.png';
import ENFPImage from '../assets/image/ENFP.png';
import ENFJImage from '../assets/image/ENFJ.png';
import ENTJImage from '../assets/image/ENTJ.png';
import ENTPImage from '../assets/image/ENTP.png';
import ESTJImage from '../assets/image/ESTJ.png';
import ESTPImage from '../assets/image/ESTP.png';
import ESFJImage from '../assets/image/ESFJ.png';
import ESFPImage from '../assets/image/ESFP.png';

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
    title: '따뜻한 선물을 준비하며 한 해를 돌아보는 팬도리',
    subTitle: '“혼자만의 시간도 소중히, 조용하고 따뜻한 크리스마스”',
    content: '팬도리는 조용히 선물을 준비하며 올해를 마무리해요. 따뜻한 차 한잔과 함께 감성 폭발!',
    hashTag: '#감성충만 #혼자만의시간 #따뜻한연말',
    characterSrc: INFJImage,
    partnerSrc: ENFPImage,
    partnerName: '고래둥둥',
  },
  INTJ: {
    title: '한 해를 정리하며 조용히 자기계발하는 호랑이',
    subTitle: '“효율적으로 보내는 계획적인 크리스마스”',
    content: '호랑이는 차분하게 자기계발을 하며 크리스마스를 계획적으로 보냅니다.',
    hashTag: '#계획중독 #자기계발러 #효율적인연말',
    characterSrc: INTJImage,
    partnerSrc: ENTPImage,
    partnerName: '숭숭이',
  },
  ISTP: {
    title: '즉흥적으로 겨울 여행이나 활동을 떠나는 곰도리',
    subTitle: '“새로운 모험을 즐기는 실용적인 크리스마스”',
    content: '곰도리는 겨울 스포츠나 여행을 떠나 자유를 만끽합니다.',
    hashTag: '#즉흥여행 #겨울스포츠 #모험왕',
    characterSrc: ISTPImage,
    partnerSrc: ESTPImage,
    partnerName: '다람쥐',
  },
  ISTJ: {
    title: '전통적인 가족 모임과 트리 장식을 챙기는 양양이',
    subTitle: '“계획적이고 안정적인 크리스마스 분위기”',
    content: '양양이는 철저한 계획 아래 가족과 전통을 지키며 크리스마스를 준비합니다.',
    hashTag: '#크리스마스전통 #안정감 #가족모임',
    characterSrc: ISTJImage,
    partnerSrc: ESFJImage,
    partnerName: '사슴이',
  },
  INTP: {
    title: '크리스마스에도 게임과 독서에 몰두하는 쿼카',
    subTitle: '“조용히 자기만의 시간을 즐기는 크리스마스”',
    content: '쿼카는 게임과 책 속에서 크리스마스를 보내며 만족스러워합니다.',
    hashTag: '#게임은생명 #책속세상 #조용한연말',
    characterSrc: INTPImage,
    partnerSrc: INTJImage,
    partnerName: '호랑이',
  },
  ISFJ: {
    title: '가족과 함께 따뜻한 크리스마스 저녁을 준비하는 너굴씨',
    subTitle: '“배려와 헌신으로 채워지는 크리스마스”',
    content: '너굴씨는 정성스럽게 크리스마스 만찬을 준비하며 사랑을 나눕니다.',
    hashTag: '#따뜻한가족 #정성가득 #헌신적인연말',
    characterSrc: ISFJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
  },
  ISFP: {
    title: '느긋하게 크리스마스 음악을 들으며 쉬는 코코알라',
    subTitle: '“잔잔하고 감성적인 크리스마스”',
    content: '코코알라는 따뜻한 캐롤과 함께 힐링의 크리스마스를 보냅니다.',
    hashTag: '#감성가득 #포근한연말 #힐링타임',
    characterSrc: ISFPImage,
    partnerSrc: INFPImage,
    partnerName: '야옹이',
  },
  ENFP: {
    title: '크리스마스 분위기를 물들이며 주변을 웃게 만드는 고래둥둥',
    subTitle: '“창의적이고 에너지 넘치는 크리스마스”',
    content: '고래둥둥은 모두를 웃게 만들며 알록달록한 크리스마스를 만듭니다.',
    hashTag: '#행복바이러스 #크리스마스무드메이커 #에너지뿜뿜',
    characterSrc: ENFPImage,
    partnerSrc: INFJImage,
    partnerName: '팬도리',
  },
  ENFJ: {
    title: '크리스마스 봉사활동과 선물 나눔을 실천하는 댕댕이',
    subTitle: '“사랑과 따뜻함을 전하는 크리스마스”',
    content: '댕댕이는 사랑을 나누며 진정한 크리스마스의 의미를 실천합니다.',
    hashTag: '#사랑나눔 #따뜻한연말 #주변행복전도사',
    characterSrc: ENFJImage,
    partnerSrc: ISFJImage,
    partnerName: '너굴씨',
  },
  ENTJ: {
    title: '대규모 크리스마스 이벤트를 주최하는 사자냥',
    subTitle: '“화려하고 주도적인 크리스마스”',
    content: '사자냥은 빅 이벤트를 준비하며 모두에게 잊지 못할 크리스마스를 선사합니다.',
    hashTag: '#크리스마스리더 #파티기획자 #완벽추진력',
    characterSrc: ENTJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
  },
  ESTP: {
    title: '친구들과 신나는 크리스마스 파티를 여는 다람쥐',
    subTitle: '“활기차고 다이내믹한 크리스마스”',
    content: '다람쥐는 크리스마스를 가장 신나게 보내며 분위기를 띄우는 주인공이 됩니다.',
    hashTag: '#파티스타 #즉흥의달인 #크리스마스흥부자',
    characterSrc: ESTPImage,
    partnerSrc: ISTPImage,
    partnerName: '곰도리',
  },
};