import { useState, useRef } from "react"
import emailjs from "emailjs-com";
import { StyledForm, StyledAuthor, StyledLabel, StyledTextarea, StyledInput, StyledButton, StyledSendInfo, StyledParagraph } from "./ContactForm.styled.js"

const ContactForm = () => {
  const [sendingState, setSendingState] = useState(false)
  const form = useRef()

  const onFormSubmit = (event) => {
    event.preventDefault()

    emailjs.sendForm("service_4bgo1h4", "template_x3gsna9", form.current, "user_e27nZeE3w0SHo5M6uMRqJ")
    .then(result => console.log(result.text), error => console.error(error.text))

    event.target.reset()

    setSendingState(true)
    setTimeout(() => {
      setSendingState(false)
    }, 4000)
  }

  return (
    <StyledForm ref={form} onSubmit={onFormSubmit}>
      {
        sendingState ? 
        <StyledSendInfo>
          <StyledParagraph>Thanks for your message!</StyledParagraph>
          <StyledParagraph>I will reply as soon as I can </StyledParagraph>
        </StyledSendInfo> : null
      }
      <StyledAuthor>
        <StyledLabel author>
          <StyledInput
            type="text"
            placeholder="your name.."
            required={true}
            name="name"
          />
        </StyledLabel>
        <StyledLabel author>
          <StyledInput
            type="email"
            placeholder="your email.."
            required={true}
            name="email"
          />
        </StyledLabel>
      </StyledAuthor>
      <StyledLabel message>
        <StyledTextarea
          placeholder="your message.."
          required={true}
          name="message"
        />
      </StyledLabel>
      <StyledButton type="submit" value="Send message" />
    </StyledForm>
  )
}

export default ContactForm
