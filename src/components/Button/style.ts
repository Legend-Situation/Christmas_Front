import styled from 'styled-components';

export const Container = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  padding: 16px 148px;
  position: absolute;
  bottom: 30px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
