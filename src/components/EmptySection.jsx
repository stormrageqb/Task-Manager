import styled from 'styled-components';

const StyledEmptySection = styled.div`
  grid-column: full-start / full-end;
  grid-row: 4 / -1;

  background-color: ${({ theme }) => theme.emptySectionBg};
  height: 100%;
  transition: background-color 0.3s;
`;

const EmptySection = () => {
  return <StyledEmptySection />;
};

export default EmptySection;
