import styled from 'styled-components';

export const StyledCheckbox = styled.input`
  appearance: none;
  background-color: transparent;
  outline: 0.13rem solid ${({ theme }) => theme.fontColorDark};
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  transform: translateY(-0.085rem);
  display: grid;
  place-content: center;
  cursor: pointer;
  transition: all 0.25s;

  &::before {
    content: '';
    width: 1rem;
    height: 1rem;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 14%, 80% 0%, 43% 62%);
    /* clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%); */

    transform: scale(0);
    transform-origin: bottom left;
    transition: 0.25s transform ease-in-out;
    box-shadow: inset 1rem 1rem #fff;
  }

  &:checked {
    background-color: ${({ theme }) => theme.primary};
  }

  &:checked::before {
    transform: scale(0.95);
  }
`;

const Checkbox = ({ task, onChange }) => {
  return (
    // Add 'checked={task.completed}' later when JS is added
    <StyledCheckbox
      checked={task.complete}
      type="checkbox"
      name="checkbox"
      onChange={e => {
        onChange({
          ...task,
          complete: e.target.checked,
        });
      }}
    />
  );
};

export default Checkbox;
