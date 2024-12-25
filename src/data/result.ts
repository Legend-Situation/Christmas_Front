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

import resultINFJ from '../assets/image/result/result-infj.png';
import resultINTJ from '../assets/image/result/result-intj.png';
import resultISTP from '../assets/image/result/result-istp.png';
import resultISTJ from '../assets/image/result/result-istj.png';
import resultINTP from '../assets/image/result/result-intp.png';
import resultISFJ from '../assets/image/result/result-isfj.png';
import resultISFP from '../assets/image/result/result-isfp.png';
import resultENFP from '../assets/image/result/result-enfp.png';
import resultENFJ from '../assets/image/result/result-enfj.png';
import resultENTJ from '../assets/image/result/result-entj.png';
import resultESTP from '../assets/image/result/result-estp.png';
import resultESTJ from '../assets/image/result/result-estj.png';
import resultESFJ from '../assets/image/result/result-esfj.png';
import resultESFP from '../assets/image/result/result-esfp.png';
import resultINFP from '../assets/image/result/result-infp.png';
import resultENTP from '../assets/image/result/result-entp.png';

interface ResultType {
  [key: string]: {
    title: string;
    subTitle: string;
    content: string;
    hashTag: string;
    characterSrc: string;
    partnerSrc: string;
    partnerName: string;
    saveImageSrc: string;
  };
}
export const resultData: ResultType = {
  INFJ: {
    title: '따뜻한 선물을 준비하며 감성에 젖는 팬도리',
    subTitle: '“조용히 자신만의 시간과 따뜻한 감성을 나누는 따뜻한 크리스마스”',
    content:
      '팬도리는 조용히 혼자만의 공간에서 연말의 감성을 만끽합니다. 좋아하는 향초를 켜고 잔잔한 음악을 들으며, 크리스마스의 따뜻한 분위기를 즐깁니다. 손편지를 쓰며 소중한 사람들에게 감사의 마음을 전하거나, 올 한 해를 정리하며 자신과의 대화를 나눕니다. 창밖의 반짝이는 조명과 함께 미래에 대한 다짐을 하며 내적 성장을 추구합니다. 크리스마스는 팬도리에게 마음의 여유를 찾고 감정을 충전하는 날입니다.',
    hashTag: '#감성충만 #혼자만의시간 #힐링데이',
    characterSrc: INFJImage,
    partnerSrc: ENFPImage,
    partnerName: '고래둥둥',
    saveImageSrc: resultINFJ
  },
  INTJ: {
    title: '올해를 정리하며 계획을 세우는 호랑이',
    subTitle: '“효율적인 크리스마스로 더 나은 내년을 준비해요”',
    content:
      '호랑이는 크리스마스를 생산적으로 보내며 올해의 성과와 실패를 정리합니다. 다이어리를 꺼내 내년의 목표를 세우며 체계적으로 하루를 계획합니다. 관심 있는 분야의 기술 서적을 읽거나 다큐멘터리를 보며 지적 호기심을 채웁니다. 저녁에는 와인 한 잔을 곁들이며 내면의 여유를 찾고, 내년을 준비하는 자신에게 동기를 부여합니다. 크리스마스는 그들에게 새로운 도약을 준비하는 시간입니다.',
    hashTag: '#계획의달인 #효율적인연말 #미래설계',
    characterSrc: INTJImage,
    partnerSrc: ENTPImage,
    partnerName: '숭숭이',
    saveImageSrc: resultINTJ
  },
  ISTP: {
    title: '혼자서 취미에 몰두하는 마이웨이 곰도리',
    subTitle: '“필요한 일만 하고 자유롭게 보내는 크리스마스”',
    content:
      '곰도리는 크리스마스에도 자기만의 시간과 취미를 즐깁니다. 좋아하는 드라마를 몰아보거나, 간단한 레시피로 요리를 만들어보며 하루를 보냅니다. 복잡한 약속이나 큰 파티 대신 집에서 혼자만의 여유로운 시간을 갖는 것이 곰도리의 스타일입니다. 필요하면 잠깐 산책을 하며 기분을 환기시키지만, 대부분의 시간을 자유롭게 보내는 것이 곰도리에게는 완벽한 크리스마스입니다.',
    hashTag: '#혼자놀기 #자유로운하루 #마이웨이',
    characterSrc: ISTPImage,
    partnerSrc: ESTPImage,
    partnerName: '다라미',
    saveImageSrc: resultISTP
  },
  ISTJ: {
    title: '꼼꼼하고 차분한 크리스마스를 보내는 양양이',
    subTitle: '“안정감 있는 하루로 연말을 마무리해요”',
    content:
      '양양이는 크리스마스에도 철저한 계획과 안정감을 유지합니다. 아침에는 따뜻한 차를 마시며 좋아하는 책을 읽고, 오후에는 집안 정리를 하며 하루를 알차게 보냅니다. 가족이나 친구들과 소소한 대화를 나누며 따뜻한 시간을 보냅니다. 크리스마스 장식을 세심하게 꾸미거나, 다가올 연말을 준비하며 정리된 하루를 완성합니다. 그들에게 크리스마스는 안정감과 균형을 제공하는 특별한 날입니다.',
    hashTag: '#안정적인하루 #디테일중시 #계획적인연말',
    characterSrc: ISTJImage,
    partnerSrc: ESFJImage,
    partnerName: '사슴이',
    saveImageSrc: resultISTJ
  },
  INTP: {
    title: '집에서 몰입하는 시간에 행복한 쿼카',
    subTitle: '“게임과 책 속에서 나만의 크리스마스를 즐겨요”',
    content:
      '쿼카는 크리스마스에도 자신만의 세계에 몰두합니다. 재미있는 게임을 하며 시간을 보내거나, 흥미로운 책을 읽으며 새로운 지식을 얻습니다. 창밖의 반짝이는 조명을 보며 상상력을 자극하거나, 자신만의 프로젝트를 구상하며 알찬 하루를 만듭니다. 대화보다는 혼자만의 시간을 소중히 여기는 쿼카에게 크리스마스는 깊이 있는 몰입의 시간이자 최고의 힐링입니다.',
    hashTag: '#몰입의즐거움 #게임과책 #혼자만의시간',
    characterSrc: INTPImage,
    partnerSrc: INTJImage,
    partnerName: '호랑이',
    saveImageSrc: resultINTP
  },
  ISFJ: {
    title: '가족을 위해 헌신하는 따뜻한 너굴씨',
    subTitle: '“가족과 함께하는 따뜻하고 정성스러운 크리스마스”',
    content:
      '너굴씨는 크리스마스에 가족과의 시간을 가장 소중히 여깁니다. 정성껏 음식을 준비하고, 가족들을 위한 작은 선물을 손수 포장하며 하루를 보냅니다. 모두가 함께 크리스마스 트리 밑에서 이야기를 나누는 시간이 너굴씨에게는 큰 행복입니다. 따뜻한 분위기를 유지하며 주변 사람들에게 웃음을 선사하고, 자신이 준비한 것으로 모두가 즐거워하는 모습을 보며 만족감을 느끼게 합니다.',
    hashTag: '#가족사랑 #헌신과배려 #따뜻한연말',
    characterSrc: ISFJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
    saveImageSrc: resultISFJ
  },
  ISFP: {
    title: '포근한 공간에서 감성을 채우는 코코알라',
    subTitle: '“음악과 차 한잔으로 힐링하는 크리스마스”',
    content:
      '코코알라는 따뜻한 담요 속에서 귤을 까먹으며 캐롤을 들으며 하루를 보냅니다. 자신만의 방에서 촛불을 켜고 감성적인 분위기를 만들며 크리스마스를 특별하게 보냅니다. 소셜미디어에 크리스마스 분위기를 담은 사진을 올리고, 잔잔한 댓글을 읽으며 포근한 시간을 만끽합니다. 감성을 채우는 여유로운 하루는 코코알라에게 크리스마스의 진정한 의미를 깨닫게 합니다.',
    hashTag: '#감성충만 #힐링타임 #포근한하루',
    characterSrc: ISFPImage,
    partnerSrc: INFPImage,
    partnerName: '야옹이',
    saveImageSrc: resultISFP
  },
  ENFP: {
    title: '모두를 웃게 만드는 크리스마스 무드메이커 고래둥둥',
    subTitle: '“행복을 나누고 창의적으로 즐기는 크리스마스”',
    content:
      '고래둥둥은 크리스마스 분위기를 띄우는 전문가입니다. 친구들과 선물 교환 이벤트를 기획하거나, 재미있는 게임을 준비하며 모두를 웃게 만듭니다. 넘치는 에너지와 창의력으로 크리스마스 파티의 중심이 되며, 사진을 찍어 공유하며 추억을 남깁니다. 크리스마스를 더욱 특별하게 만들어 모두에게 행복을 전하는 고래둥둥은 크리스마스의 하이라이트입니다.',
    hashTag: '#행복바이러스 #창의적인하루 #파티스타',
    characterSrc: ENFPImage,
    partnerSrc: INFJImage,
    partnerName: '팬도리',
    saveImageSrc: resultENFP
  },
  ENFJ: {
    title: '사랑과 나눔을 실천하는 크리스마스 댕댕이',
    subTitle: '“이웃과 친구들에게 행복을 전하는 크리스마스”',
    content:
      '댕댕이는 크리스마스에 주변 사람들에게 사랑을 나누는 데 초점을 맞춥니다. 이웃들에게 작은 선물을 나누어 주거나, 친구들과 따뜻한 대화를 나누며 연말의 의미를 되새깁니다. 모임을 주최해 사람들에게 특별한 경험을 제공하고, 긍정적인 에너지를 전파합니다. 그들의 사려 깊은 행동은 주변 사람들에게 크리스마스의 따뜻함을 느끼게 만듭니다.',
    hashTag: '#사랑과나눔 #행복전도사 #크리스마스모임',
    characterSrc: ENFJImage,
    partnerSrc: ISFJImage,
    partnerName: '너굴씨',
    saveImageSrc: resultENFJ
  },
  ENTJ: {
    title: '크리스마스를 주도적으로 이끄는 어흥이',
    subTitle: '“계획과 추진력으로 완벽한 크리스마스를 만들어요”',
    content:
      '어흥이는 크리스마스 이벤트를 기획하고, 모두가 참여할 수 있는 특별한 시간을 준비합니다. 파티의 전반적인 계획을 세우고, 완벽한 실행으로 모두를 놀라게 합니다. 그들의 리더십은 크리스마스를 성공적으로 이끌며, 주변 사람들에게 큰 인상을 남깁니다. 모두가 즐겁게 웃을 수 있는 자리를 만들어, 크리스마스를 완벽하게 설계합니다.',
    hashTag: '#리더십갑 #추진력최고 #파티기획',
    characterSrc: ENTJImage,
    partnerSrc: ESTJImage,
    partnerName: '늑대리',
    saveImageSrc: resultENTJ
  },
  ESTP: {
    title: '에너지 넘치는 파티의 주인공 다라미',
    subTitle: '“친구들과 신나게 즐기는 크리스마스”',
    content:
      '다라미는 크리스마스 파티에서 분위기를 주도하며 모두를 신나게 만듭니다. 흥겨운 음악에 맞춰 춤을 추거나, 친구들과 함께 게임을 하며 즐거운 순간을 만들어냅니다. 즉흥적으로 계획된 활동에도 자신만의 매력을 발휘하며, 크리스마스를 더욱 다채롭게 만듭니다. 그들의 활기찬 에너지는 크리스마스의 하이라이트가 됩니다.',
    hashTag: '#에너지왕 #파티중심 #즉흥천재',
    characterSrc: ESTPImage,
    partnerSrc: ISTPImage,
    partnerName: '곰도리',
    saveImageSrc: resultESTP
  },
  ESTJ: {
    title: '철저하게 크리스마스를 준비하는 늑대리',
    subTitle: '“완벽한 계획과 실행으로 책임지는 크리스마스”',
    content:
      '늑대리는 크리스마스에도 모든 준비를 철저히 합니다. 선물 구매부터 파티 준비까지 체계적으로 진행하며, 모두가 즐길 수 있는 자리를 만듭니다. 리더십을 발휘해 분위기를 조율하고, 크리스마스 만찬을 주도적으로 준비합니다. 빈틈없는 그들의 모습은 주변 사람들에게 신뢰감을 줍니다.',
    hashTag: '#책임감갑 #완벽주의자 #계획의달인',
    characterSrc: ESTJImage,
    partnerSrc: ISFJImage,
    partnerName: '너굴씨',
    saveImageSrc: resultESTJ
  },
  ESFJ: {
    title: '가족과 친구를 챙기는 사슴이',
    subTitle: '“따뜻한 마음으로 모두를 챙기는 크리스마스”',
    content:
      '사슴이는 가족과 친구를 초대해 크리스마스를 따뜻하게 보냅니다. 직접 준비한 음식을 나누고, 선물을 교환하며 연말의 의미를 되새깁니다. 소소한 이야기로 분위기를 밝히고, 모두가 편안하게 즐길 수 있는 시간을 만들어냅니다. 크리스마스의 따뜻함과 행복을 모두에게 전하는 그들의 모습은 주변 사람들에게 감동을 줍니다.',
    hashTag: '#모두의친구 #따뜻한연말 #행복한모임',
    characterSrc: ESFJImage,
    partnerSrc: ISTJImage,
    partnerName: '양양이',
    saveImageSrc: resultESFJ
  },
  ESFP: {
    title: '크리스마스 분위기를 띄우는 파티스타 여우비',
    subTitle: '“모두를 신나게 만드는 크리스마스 스타”',
    content:
      '여우비는 크리스마스 파티에서 춤추고 노래하며 모두를 신나게 만듭니다. 자신만의 밝은 에너지로 분위기를 띄우며, 주변 사람들에게 웃음을 선사합니다. 그들의 유머와 매력은 모두를 즐겁게 하고, 파티를 성공적으로 이끄는 데 큰 역할을 합니다. 크리스마스를 더욱 빛나게 만드는 여우비는 모두에게 잊지 못할 추억을 남깁니다.',
    hashTag: '#분위기메이커 #에너지폭발 #파티주도자',
    characterSrc: ESFPImage,
    partnerSrc: ESTPImage,
    partnerName: '다라미',
    saveImageSrc: resultESFP
  },
  INFP: {
    title: '감성에 푹 빠져 몽환적인 시간을 보내는 야옹이',
    subTitle: '“나만의 세계 속에서 크리스마스를 꿈꿔요”',
    content:
      '야옹이는 크리스마스에 창밖의 눈을 보며 몽환적인 시간을 보냅니다. 잔잔한 음악과 함께 따뜻한 차를 마시며 감성적인 순간을 즐깁니다. 동화 같은 상상을 하며 크리스마스의 특별함을 느끼고, 조용한 방 안에서 자신만의 시간을 만끽합니다. 그들에게 크리스마스는 소소하지만 의미 있는 하루입니다.',
    hashTag: '#감성충만 #몽환적인시간 #나만의세상',
    characterSrc: INFPImage,
    partnerSrc: ISFPImage,
    partnerName: '코코알라',
    saveImageSrc: resultINFP
  },
  ENTP: {
    title: '독창적인 아이디어로 파티를 기획하는 숭숭이',
    subTitle: '“모두를 놀라게 하는 특별한 크리스마스”',
    content:
      '숭숭이는 크리스마스를 남다른 아이디어로 가득 채웁니다. 평범한 파티는 재미없다고 느끼기에, 독특한 게임과 이벤트를 기획하며 친구들에게 색다른 경험을 선사합니다. 모두가 놀랄만한 깜짝 이벤트나 웃음을 자아내는 유머로 파티의 중심이 됩니다. 즉흥적인 아이디어와 창의적인 발상으로 모두를 웃게 만드는 숭숭이는 크리스마스를 잊지 못할 하루로 만듭니다. 그들의 독특함은 모두에게 신선함을 가져다줍니다.',
    hashTag: '#창의력갑 #즉흥천재 #파티메이커',
    characterSrc: ENTPImage,
    partnerSrc: INTJImage,
    partnerName: '호랑이',
    saveImageSrc: resultENTP
  }
};
