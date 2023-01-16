import styled from 'styled-components';
import Checkbox from './Checkbox';

const StyledForm = styled.form`
  grid-column: 1 / -1;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 10fr 2fr;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  border-radius: 0.4rem;
  /* box-shadow: rgba(0, 0, 0, 0.2) 0.8rem 0.4rem 1.2rem; */
  box-shadow: rgba(0, 0, 0, 0.35) 0 2rem 3rem -1rem;

  /* & div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.color.primary};
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    outline: 0.13rem solid ${({ theme }) => theme.color.darkTheme.darkGrayBlue};

    background-color: transparent;
  } */
`;

// const StyledCheckMarkIcon = styled(CheckMarkIcon)`
// cursor: pointer;
/* background-color: ${({ theme }) => theme.color.primary}; */
/* width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%; */
/* outline: ${({ theme }) =>
    theme.color.darkTheme.darkGrayBlue} solid 0.1rem; */
/* transform: scale(0.8); */
// `;

const StyledInput = styled.input`
  border: none;
  display: block;
  font-family: inherit;
  font-size: 1.6rem;
  padding: 0.2rem 0;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};
  color: ${({ theme }) => theme.color.lightTheme.lightGray};

  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    font-weight: 500;
  }
`;

const AddTask = () => {
  return (
    <StyledForm>
      {/* <div><StyledCheckMarkIcon /></div> */}

      <Checkbox />
      <StyledInput
        placeholder="Create a new todo..."
        aria-label="Create a new todo..."
      />
    </StyledForm>
  );
};

export default AddTask;
