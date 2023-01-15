import styled from 'styled-components';
import CheckMarkIcon from '/src/assets/icon-check.svg';

const StyledArticle = styled.article`
  grid-column: 1 / -1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  border-radius: 0.4rem;
`;

const StyledCheckMarkIcon = styled(CheckMarkIcon)`
  cursor: pointer;
`;

const StyledInput = styled.input`
  border: none;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.3rem 0;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  color: ${({ theme }) => theme.color.lightTheme.lightGray};

  &:focus {
    border: none;
    outline: none;
  }
`;

const AddTask = () => {
  return (
    <StyledArticle>
      <StyledCheckMarkIcon />
      <StyledInput placeholder="Create a new todo..." />
    </StyledArticle>
  );
};

export default AddTask;
