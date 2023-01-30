import styled from 'styled-components';

const StyledNote = styled.p`
  font-size: 1.4rem;
  grid-column: 1 / -1;
  justify-self: center;
  align-self: center;
  color: ${({ theme }) => theme.fontColorPrimary};
  font-weight: 300;
  letter-spacing: 0.05rem;
`;

const DnDNote = () => {
  return <StyledNote>Drag and drop to reorder list</StyledNote>;
};

export default DnDNote;
