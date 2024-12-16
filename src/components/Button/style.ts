import styled from 'styled-components';

export const Container = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  padding: 16px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  min-width: 390px;
  min-height: 63px;
`;
