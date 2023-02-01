import { StyledHeader } from './styles/base/StyledHeader';

const Header = ({ userTheme }) => {
  return (
    <StyledHeader
      userTheme={userTheme}
      theme={{
        headerGradient: ['rgba(87, 221, 255, 0.2)', 'rgba(192, 88, 243, 0.2)'],
      }}
    ></StyledHeader>
  );
};

export default Header;
