import {
  StyledDeleteButton,
  StyledParagraph,
  StyledSpan,
  StyledWrapper,
} from "./ListItem.styled";

const ListItem = ({ opinion, onDeleteOpinion }) => {
  const userName = sessionStorage.getItem("account")
    ? JSON.parse(sessionStorage.getItem("account")).name
    : "";
  return (
    <StyledWrapper>
      <StyledParagraph
        onDoubleClick={() => {
          console.log(opinion);
        }}
      >
        {opinion.text}
      </StyledParagraph>
      <StyledParagraph author>
        {opinion.author}
        <StyledSpan>{opinion.date}</StyledSpan>
      </StyledParagraph>
      {userName === "admin" ? (
        <StyledDeleteButton
          onClick={() =>
            onDeleteOpinion(opinion._id, opinion.text, opinion.author)
          }
        />
      ) : null}
    </StyledWrapper>
  );
};

export default ListItem;
