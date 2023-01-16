import styled from 'styled-components';
import Checkbox from './Checkbox';

const StyledTask = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 10fr 2fr; */
`;

const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 10fr 2fr;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.color.darkTheme.darkBlueDesat};

  border-bottom: 0.1rem solid
    ${({ theme }) => theme.color.darkTheme.darkerGrayBlue};
  list-style: none;
  :first-child {
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
  }
  :last-child {
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }
`;

const Task = ({ text }) => {
  return (
    <StyledListItem key={text}>
      <Checkbox />
      <label htmlFor="">{text}</label>
    </StyledListItem>
  );
};

export default Task;
