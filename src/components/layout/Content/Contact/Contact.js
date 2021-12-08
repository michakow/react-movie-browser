import ContactForm from "../../../Forms/ContactForm/ContactForm"
import { StyledArrow, StyledContent, StyledParagraph, StyledLink } from "./Contact.styled"

const Contact = () => {
  return (
    <StyledContent>
      <StyledParagraph withLink>You can express your opinion about this application here <StyledArrow /> <StyledLink to="/opinions">/opinions</StyledLink></StyledParagraph>
      <StyledParagraph>However, if you have a question or would like to cooperate, feel free to contact me via the form below</StyledParagraph>
      <ContactForm />
    </StyledContent>
  )
}

export default Contact
