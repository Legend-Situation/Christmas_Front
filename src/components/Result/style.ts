import styled from 'styled-components';

export const Layout = styled.div`
  background: #ffedf0;
  padding: 30px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100vw;
  overflow: visible;
`;
export const Ribbon = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;

export const Result_Box = styled.div`
  position: relative;
  border-radius: 8px;
  border: 3px dashed #ff6f8d;
  background: #fff;
  padding: 50px 20px 40px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
align-items: center;
`;

export const Title = styled.div`
  color: #5b4248;
  font-family: 'UhBee Se_hyun', sans-serif;
  font-size: 17px;
  font-weight: 400;
  width: 230px;
`;

export const BackgroundWrapper = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  margin: 0 auto;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 1000px;
  background: linear-gradient(
    180deg,
    rgba(254, 111, 139, 0.16) 0%,
    rgba(254, 111, 139, 0.03) 100%
  );
  filter: blur(2px);
  z-index: 1;
`;

export const Character = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  img {
    width: 110px;
    height: auto;
  }
`;

export const SubTitle = styled.div`
  color: #5b4248;
  text-align: center;
  font-family: 'UhBee Se_hyun';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 180.153%; /* 23.42px */
`;

export const Content = styled.div`
  color: #5b4248;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 22.4px */
`;

export const HashTag = styled.div`
  color: #ff6f8d;
  text-align: center;
  font-family: 'UhBee Se_hyun';
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 180%; /* 23.4px */
`;

export const PartnerBox = styled.div`
  position: relative;
  border-radius: 8px;
  border: 3px dashed #ff6f8d;
  background: #fff;
  padding: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const PartnerTitle = styled.div`
  color: #5b4248;
  text-align: center;
  font-family: 'UhBee Se_hyun';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
`;

export const PartnerBackgroundWrapper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto;
`;

export const PartnerCharacter = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  img {
    width: 90px;
    height: auto;
  }
`;

export const PartnerName = styled.div`
  color: #ff6f8d;
  text-align: center;
  font-family: 'UhBee Se_hyun';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const ButtonGap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Replay = styled.div`
  color: #ff6f8d;
  text-align: center;
  font-family: 'UhBee Se_hyun';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
