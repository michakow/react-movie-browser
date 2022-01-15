import { useState } from "react"
import nonePoster from "../../../../../assets/nonePoster.jpg"
import { genres } from "../../../../../utils/genres.js"
import { StyledParagraph, StyledImg, StyledWrapper, StyledTags, StyledVotes, StyledStar, StyledSlash, StyledRating, StyledDetails, StyledDetailsButton, StyledDetailsParagraph, StyledDetailsHeading } from "./ListItem.styled.js"

const ListItem = ({ movie }) => {
  const img = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : nonePoster
  const [showDetails, setShowDetails] = useState(false)

  return (
    <StyledWrapper onMouseLeave={() => setShowDetails(false)}>
      <StyledImg src={img} alt="movie poster" />
      
      <StyledParagraph movieName>{movie.title}</StyledParagraph>
      <StyledParagraph movieYear>{movie.release_date ? (movie.release_date).substr(0, 4) : null}</StyledParagraph>
      <StyledTags>
        {
          movie.genre_ids.map(element => (
            <StyledParagraph key={element} movieTag>
              {genres.find(({ id }) => id === element).name}
            </StyledParagraph>
          ))
        }
      </StyledTags>
      <StyledRating>
        <StyledParagraph movieRating>
          <StyledStar />
          {movie.vote_average}
          <StyledSlash>/</StyledSlash>
          10
          <StyledVotes>
            {movie.vote_count} votes
          </StyledVotes>
        </StyledParagraph>
      </StyledRating>
      <StyledDetailsButton showDetails={showDetails} onClick={() => setShowDetails(true)} />
      <StyledDetails showDetails={showDetails} onClick={() => setShowDetails(false)}>
        <StyledDetailsHeading>{movie.title}</StyledDetailsHeading>
        <StyledDetailsParagraph>{movie.overview}</StyledDetailsParagraph>
        <StyledDetailsParagraph>{movie.release_date ? movie.release_date : null}</StyledDetailsParagraph>
      </StyledDetails>
    </StyledWrapper>
  )
}

export default ListItem
