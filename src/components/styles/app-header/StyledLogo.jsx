import styled from 'styled-components';

export const StyledLogo = styled.h1`
  text-transform: uppercase;
  letter-spacing: 0.85rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.titleColor};
  line-height: 1;
  padding-top: 0.2rem;
  /* 750px */
  @media only screen and (max-width: 47.875em) {
    font-size: 2.7rem;
  }
`;
