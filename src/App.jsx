import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import GridContainer from './components/GridContainer';
import Header from './components/Header';
import GlobalStyles from './components/styles/GlobalStyles';

const theme = {
  // Fix the naming conventions when styles are actually applied
  color: {
    primary: '#3a7bfd',

    trueGradient: ['rgba(87, 221, 255, 0.2)', 'rgba(192, 88, 243, 0.2)'],

    lightTheme: {
      lightGray: '#fafafa',
      lightGrayBlue: '#e4e5f1',
      grayBlue: '#d2d3db',
      darkGrayBlue: '#9394a5',
      darkestGrayBlue: '#484b6a',
    },

    darkTheme: {
      darkBlue: '#161722',
      darkBlueDesat: '#25273c',
      lightGrayBlue: '#cacde8',
      lightGrayBlueHover: '#e4e5f1',
      darkGrayBlue: '#777a92',
      darkerGrayBlue: '#4d5066',
      darkestGrayBlue: '#393a4c',
    },
  },
  font: {
    primary: "'Josefin Sans', sans-serif",
  },
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GridContainer>
          <Header />
          <AppContainer />
        </GridContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
