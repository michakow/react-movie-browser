import { useState } from "react"
import { serverURL } from "../../../utils/serverURL.js"
import { StyledForm, StyledLabel, StyledTextarea, StyledButton, StyledSendInfo } from "./OpinionForm.styled.js"

const OpinionForm = ({serverState}) => {
  const [sendingState, setSendingState] = useState(false)
  const [sendOpinion, setSendOpinion] = useState(0)
  const [opinion, setOpinion] = useState("")

  const sendOpinionToServer = (item) => {
    fetch(`${serverURL}/opinions`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json",
        "Authorization": JSON.parse(sessionStorage.getItem('account')).token
      }
    }).then(res => res.json()).then(data => {
      if(data.code){
        setSendingState(true)
        setSendOpinion(1)
        setTimeout(() => {
          window.location.reload(true)
        }, 2000)
      }else{
        setSendingState(true)
        setSendOpinion(0)
        setTimeout(() => {
          setSendingState(false)
        }, 2000)
      }
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const date = new Date().toISOString().split("T")[0];

    sendOpinionToServer({
      text: opinion,
      date: date,
      author: JSON.parse(sessionStorage.getItem('account')).name
    })

    setOpinion("")
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {
        sendingState ? 
        <StyledSendInfo sendState={serverState === "success" && sendOpinion === 1}>
          {serverState === "success" && sendOpinion === 1 ? "Opinion has been sent" : "Opinion has not been sent (server or authorization problem)"}
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
      <StyledButton type="submit" value="Send opinion" />
    </StyledForm>
  )
}

export default OpinionForm
