import styled from 'styled-components';

export const QuestionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
`;

export const Title = styled.h1`
  color: #ff6f8d;
  font-size: 24px;
`;

export const QuestionText = styled.h2`
  color: #5b4248;
  font-size: 20px;
  font-weight: 400;
  height: 80px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 80px;
`;

export const AnswerButton = styled.div<{ imgUrl: string }>`
  background: url(${(props) => props.imgUrl}) no-repeat;
  padding: 20px 12px;
  height: 68px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TreeImg = styled.img`
  margin-top: 80px;
  width: 159px;
  height: 176px;
  align-self: flex-end;

`;
