import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./theme/GlobalStyle.js"
import { theme } from "./theme/theme.js"
import MovieListPage from "./views/MovieListPage/MovieListPage.js"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route path='/movies'>
            <MovieListPage />
          </Route>
          <Route exact path='/'>
            <Redirect to='/movies' />
          </Route>
          {/* <Route exact path='*'>
            <Redirect to='/movies' />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
