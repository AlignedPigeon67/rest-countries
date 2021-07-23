import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import themes from "./ui/themes";
import Header from "./components/Header";
import Home from "./pages/Home";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
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
    <Router>
      <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
        <AppContainer>
          <Header
            themeToggleHandler={themeToggleHandler}
            isDarkMode={isDarkMode}
          />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
