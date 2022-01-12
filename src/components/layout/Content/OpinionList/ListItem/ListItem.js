import { StyledDeleteButton, StyledParagraph, StyledSpan, StyledWrapper } from "./ListItem.styled"

const ListItem = ({opinion, onDeleteOpinion}) => {
  return (
    <StyledWrapper>
      <StyledParagraph onDoubleClick={() => {console.log(opinion)}}>{opinion.text}</StyledParagraph>
      <StyledParagraph author>
        {opinion.author}
        <StyledSpan>{opinion.date}</StyledSpan>
      </StyledParagraph>
      <StyledDeleteButton onClick={() => onDeleteOpinion(opinion._id, opinion.text, opinion.author)} />
    </StyledWrapper>
  )
}

export default ListItem
