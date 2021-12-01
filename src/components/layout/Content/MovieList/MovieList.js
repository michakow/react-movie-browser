import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import ListItem from "./ListItem/ListItem.js"
import { useMoviesData } from "../../../../utils/useMoviesData.js"
import { StyledContent, StyledHeading, StyledList, StyledPages, StyledParagraph, StyledButton, StyledSpan } from "./MovieList.styled.js"

const MovieList = ({ trend }) => {
  const [page, setPage] = useState(1)
  const { search } = useLocation();
  const query = (new URLSearchParams(search)).get('search')
  const movies = useMoviesData(query, page, trend)
  useEffect(() => {
    setPage(1)
  }, [query, trend])

  return (
    <StyledContent>
      <StyledHeading>
        {
          movies.state === 'loading' ? (
            'Loading..'
          ) : movies.state === 'error' ? (
            'Something bad happend, please try again later :('
          ) : (
            query ? `Search for "${query}" (${movies.results})` : trend ? 'TOP10 watching movies this week' : 'Popular movies'
          )
        }
      </StyledHeading>
      {
        movies.state === 'loading' || movies.state === 'error' ? (
          null
        ) : (
          <>
            <StyledList>
              {
                (trend ? movies.moviesData.slice(0, 10) : movies.moviesData).map(movie => (
                  <ListItem key={movie.id} movie={movie} />
                ))
              }
            </StyledList>
            {
              trend ? null : (
                <StyledPages>
                  <StyledParagraph>
                    <StyledButton disabled={page === 1} onClick={() => setPage(1)}>First</StyledButton>
                    <StyledButton disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</StyledButton>
                    Page <StyledSpan>{page}</StyledSpan> of <StyledSpan>{movies.pages || 1}</StyledSpan>
                    <StyledButton disabled={page === movies.pages || movies.pages === 0} onClick={() => setPage(page + 1)}>Next</StyledButton>
                    <StyledButton disabled={page === movies.pages || movies.pages === 0} onClick={() => setPage(movies.pages)}>Last</StyledButton>
                  </StyledParagraph>
                </StyledPages>
              )
            }

          </>
        )
      }
    </StyledContent>
  )
}

export default MovieList
