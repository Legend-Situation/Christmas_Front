import styled from 'styled-components';

export const Container = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl}) no-repeat  center;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 16px 148px;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
