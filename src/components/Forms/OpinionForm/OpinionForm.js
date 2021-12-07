import uuid from "react-uuid"
import { useState } from "react"
import { StyledForm, StyledLabel, StyledTextarea, StyledInput, StyledButton, StyledSendInfo, StyledSignatureInfo, StyledSpan } from "./OpinionForm.styled"

const OpinionForm = ({serverState}) => {
  const [sendingState, setSendingState] = useState(false)
  const [opinion, setOpinion] = useState("")
  const [author, setAuthor] = useState("")

  const sendOpinionToServer = (item) => {
    fetch("http://127.0.0.1:8888/opinions", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json"
      }
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const date = new Date().toISOString().split("T")[0];

    sendOpinionToServer({
      id: uuid(),
      text: opinion,
      date: date,
      author: author
    })

    setSendingState(true)
    setOpinion("")
    setAuthor("")

    if(serverState === "success"){
      setTimeout(() => {
        window.location.reload(true)
      }, 2000)
    } else {
      setTimeout(() => {
        setSendingState(false)
      }, 2000)
    }
    
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {
        sendingState ? 
        <StyledSendInfo sendState={serverState === "success"}>
          {serverState === "success" ? "Opinion has been sent" : "Opinion has not been sent (server problem)"}
        </StyledSendInfo> : null
      }
      <StyledLabel opinion>
        <StyledTextarea
          placeholder="your opinion.."
          required={true}
          value={opinion}
          onChange={(e) => setOpinion(e.target.value)}
        />
      </StyledLabel>
      <StyledLabel author>
        <StyledInput
          type="email"
          placeholder="*your email.."
          required={true}
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </StyledLabel>
      <StyledSignatureInfo><StyledSpan>*</StyledSpan>Your email address will act as a signature for your opinion.</StyledSignatureInfo>
      <StyledButton type="submit" value="Send opinion" />
    </StyledForm>
  )
}

export default OpinionForm
