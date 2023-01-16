import styled from 'styled-components';

const StyledButton = styled.button`
  color: ${({ theme }) => theme.color.lightTheme.lightGray};
  display: inline-block;
  border: none;
  font-size: 1rem;
  padding: 0.2rem 0.2rem;
  background-color: transparent;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease-out;
  width: fit-content;
  place-self: center;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
