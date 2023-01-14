import styled from 'styled-components';

const StyledParagraph = styled.p`
  color: blue;
  font-family: ${({ theme }) => theme.font.primary};
`;

const Test = () => {
  return (
    <>
      <StyledParagraph>Test</StyledParagraph>
    </>
  );
};

export default Test;
