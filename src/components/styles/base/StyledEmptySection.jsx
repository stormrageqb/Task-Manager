import styled from 'styled-components';

export const StyledEmptySection = styled.div`
  grid-column: full-start / full-end;
  grid-row: 4 / -1;

  background-color: ${({ theme }) => theme.emptySectionBg};

  transition: background-color 0.3s;
`;
