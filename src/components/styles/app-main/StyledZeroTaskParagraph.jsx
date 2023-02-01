import styled from 'styled-components';

export const StyledZeroTaskParagraph = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.fontColorDark};
  background-color: ${({ theme }) => theme.appBgMain};
  font-weight: 500;
  padding: 3rem;
  text-align: center;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0.1rem solid ${({ theme }) => theme.fontColorDarkMd};
  transition: background-color 0.3s;
`;
