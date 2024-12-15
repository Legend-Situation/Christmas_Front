import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: #ffedf0;
  align-items: center;
  position: absolute;
`;

export const FirstSnows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 22px 34px;
`;

export const SecondSnows = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 8px 106px 0;
`;

export const Texts = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Title = styled.p`
  color: #ff6f8d;
  font-size: 24px;
  font-weight: 700;
  line-height: 160%;
`;

export const SubTitle = styled.div`
  color: #5b4248;
  text-align: center;
  -webkit-text-stroke-width: 0.30000001192092896;
  -webkit-text-stroke-color: #fff7ee;
  font-size: 18px;
  font-weight: 400;
  line-height: 160%;
`;

export const TreeImage = styled.img`
  margin-top: 50px;
`;
