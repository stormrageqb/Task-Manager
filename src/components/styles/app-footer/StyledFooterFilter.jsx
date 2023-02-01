import styled from 'styled-components';

export const StyledFooterFilter = styled.div`
  display: flex;
  gap: 1.2rem;
  transition: background-color 0.3s;

  /* 750px */
  @media only screen and (max-width: 47.875em) {
    position: absolute;
    bottom: -4.5rem;
    left: 0;
    background-color: ${({ theme }) => theme.appBgMain};
    padding: 1rem 0;
    width: 100%;
    justify-content: center;
    border-radius: 0.4rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;
  }
`;
