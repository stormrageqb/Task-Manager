import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import AppContainer from './components/AppContainer';
import EmptySection from './components/EmptySection';
import GridContainer from './components/GridContainer';
import Header from './components/Header';
import GlobalStyles from './components/styles/GlobalStyles';
import { theme } from './themes';

function App() {
  const [userTheme, setUserTheme] = useState('dark');
  console.log(setUserTheme);
  return (
    <>
      <ThemeProvider
        theme={
          userTheme === 'dark' ? theme.color.darkTheme : theme.color.lightTheme
        }
      >
        <GlobalStyles />
        <GridContainer>
          <Header userTheme={userTheme} />
          <EmptySection />
          <AppContainer userTheme={userTheme} setUserTheme={setUserTheme} />
        </GridContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
