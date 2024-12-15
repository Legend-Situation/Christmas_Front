import styled from 'styled-components';

export const Container = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl}) no-repeat  center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 16px 148px;
  max-height: 52px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 50px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
