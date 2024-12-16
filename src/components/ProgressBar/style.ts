import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  height: 8px;
  border-radius: 4px;
`;

export const ProgressBarFill = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  background-color: #ff6f8d;
  height: 100%;
  border-radius: 4px;
`;
