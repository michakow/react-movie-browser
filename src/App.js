import { HashRouter, Switch, Route, Redirect } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "./theme/GlobalStyle.js"
import { theme } from "./theme/theme.js"
import MovieListPage from "./views/MovieListPage/MovieListPage.js"
import OpinionsPage from "./views/OpinionsPage/OpinionsPage.js"
import ContactPage from "./views/ContactPage/ContactPage.js"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HashRouter>
        <Switch>
          <Route path='/movies'>
            <MovieListPage trend={false} />
          </Route>
          <Route path='/trending'>
            <MovieListPage trend={true} />
          </Route>
          <Route path='/opinions'>
            <OpinionsPage />
          </Route>
          <Route path='/contact'>
            <ContactPage />
          </Route>
          <Route exact path='/'>
            <Redirect to='/movies' />
          </Route>
          {/* <Route exact path='*'>
            <Redirect to='/movies' />
          </Route> */}
        </Switch>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
