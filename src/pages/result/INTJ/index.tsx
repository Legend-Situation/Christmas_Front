import React from 'react';
import Result from 'components/Result';
import IntjImage from '../../../assets/image/INTJ.png';
import PartnerImage from '../../../assets/image/ENTP.png';

const Intj = () => {
  return (
    <Result
      title="한 해를 정리하며 조용히 자기계발하는 어흥이"
      characterSrc={IntjImage}
      subTitle='"효율적으로 보내는 계획적인 크리스마스"'
      content="호랑이는 크리스마스에도 차분하게 올해를 돌아보고 새로운 계획을 세워요. 노트북을 켜고 “내년 목표는 더 디테일하게!” 하며 계획표를 정리하죠. 자기계발 책이나 강의를 틀어놓으며 한 치의 흐트러짐 없는 모습에 주변 사람들은 놀라요. “이 맛에 크리스마스지!” 라며 스스로에게 뿌듯함을 느끼는 호랑이입니다."
      hashTag="#계획중독 #자기계발러 #효율적인연말"
      partnerSrc={PartnerImage}
      partnerName="오숭이"
    />
  );
};

export default Intj;
