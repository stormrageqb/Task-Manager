import styled from 'styled-components';

export const StyledModalSection = styled.section`
  grid-column: 1 / -1;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  color: ${({ theme }) => theme.fontColorPrimary};

  & h2 {
    font-size: 3.2rem;
    @media only screen and (max-width: 47.875em) {
      font-size: 2.4rem;
    }
  }

  & p {
    font-size: 1.8rem;
    text-align: center;
    @media only screen and (max-width: 47.875em) {
      font-size: 1.5rem;
    }
  }
  background-color: ${({ theme }) => theme.fontColorDarkLg};
  padding: 2.4rem;
`;
