import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import EmptySection from './components/EmptySection';
import GridContainer from './components/GridContainer';
import Header from './components/Header';
import GlobalStyles from './components/styles/GlobalStyles';
import { theme } from './themes';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <GridContainer>
          <Header />
          <EmptySection />
          <AppContainer />
        </GridContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
