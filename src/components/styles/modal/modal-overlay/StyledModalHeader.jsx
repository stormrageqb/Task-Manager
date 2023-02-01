import styled from 'styled-components';

export const StyledModalHeader = styled.header`
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;

  grid-column: 1 / -1;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.modalGradient[0]},
    ${props => props.theme.modalGradient[1]}
  );
  padding: 2.4rem;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* For Checkmark within trash icon */
  & div {
    width: max-content;
    height: max-content;
    position: relative;
    line-height: 1.3;
  }
  & span {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);

    appearance: none;
    background-color: #3a7bfd;
    outline: 0.15rem solid ${({ theme }) => theme.fontColorDark};
    /* background-color: ${({ theme }) => theme.primary}; */

    font: inherit;
    color: currentColor;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    display: grid;
    place-content: center;
    @media only screen and (max-width: 47.875em) {
      height: 1.5rem;
      width: 1.5rem;
    }

    transition: all 0.25s;
    &::before {
      content: '';
      width: 1rem;
      height: 1rem;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 14%, 80% 0%, 43% 62%);
      box-shadow: inset 1rem 1rem #fff;
    }
  }
`;
