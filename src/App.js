import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import themes from './ui/themes';
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.background};
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeToggleHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
        <GlobalStyle />
        <AppContainer>
          <Header
            themeToggleHandler={themeToggleHandler}
            isDarkMode={isDarkMode}
          />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/:id" children={<Details />} />
          </Switch>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
