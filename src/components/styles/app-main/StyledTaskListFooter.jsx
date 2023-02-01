import styled from 'styled-components';

export const StyledTaskListFooter = styled.footer`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.appBgMain};
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  transition: background-color 0.3s;

  @media only screen and (max-width: 47.875em) {
    position: relative;
  }

  & article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 1rem 1.5rem;
    /* 750px */
    @media only screen and (max-width: 47.875em) {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    & span {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.fontColorDark};
      font-weight: 400;
    }
  }
`;
