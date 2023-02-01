import styled from 'styled-components';

export const StyledModalFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / -1;
  background-color: ${({ theme }) => theme.fontColorDarkLg};
  /* padding: 2.4rem 0; */
  border-top: 0.135rem solid ${({ theme }) => theme.fontColorDarkMd};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  width: 100%;
`;
