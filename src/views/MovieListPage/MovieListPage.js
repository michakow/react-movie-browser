import Header from "../../components/layout/Header/Header.js"
import Footer from "../../components/layout/Footer/Footer.js"
import MovieList from "../../components/layout/Content/MovieList/MovieList.js"
import { StyledWrapper } from "./MovieListPage.styled.js"

const MovieListPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <MovieList />
      <Footer />
    </StyledWrapper>
  )
}

export default MovieListPage
