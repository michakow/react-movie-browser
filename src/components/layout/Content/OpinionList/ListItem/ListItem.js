import { StyledParagraph, StyledSpan, StyledWrapper } from "./ListItem.styled"

const ListItem = ({opinion}) => {
  return (
    <StyledWrapper>
      <StyledParagraph>{opinion.text}</StyledParagraph>
      <StyledParagraph author>
        {opinion.author}
        <StyledSpan>{opinion.date}</StyledSpan>
      </StyledParagraph>
    </StyledWrapper>
  )
}

export default ListItem
