import { useState } from "react"
import { serverURL } from "../../../utils/serverURL.js"
import { StyledForm, StyledInput, StyledButton, StyledDiv, StyledParagraph, StyledSpan, StyledSendInfo } from "./LoginForm.styled.js"

const LoginForm = () => {
  const [validateState, setValidateState] = useState("")

  const [login, setLogin] = useState(true)
  const [register, setRegister] = useState(false)

  const [userLogin, setUserLogin] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userRePassword, setUserRePassword] = useState("")

  const createNewUser = (data) => {
    fetch(`${serverURL}/users/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json()).then(data => {
      if(data.code){
        setValidateState("created")
        setUserLogin("")
        setUserPassword("")
        setUserRePassword("")
        setTimeout(() => {
          setValidateState("")
        }, 2000)
      }else{
        setValidateState("nocreated")
        setTimeout(() => {
          setValidateState("")
        }, 2000)
      }
    })
  }

  const loginToAccount = (data) => {
    fetch(`${serverURL}/users/auth`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json"
      }
    }).then(res => res.json()).then(data => {
      if(data.code){
        sessionStorage.setItem("account", JSON.stringify({ logged: true, name: userLogin }))
        setTimeout(() => {
          window.location.reload(true)
        }, 700)
      }else{
        sessionStorage.setItem("account", JSON.stringify({ logged: false }))
        setValidateState("badlogged")
        setTimeout(() => {
          setValidateState("")
        }, 2000)
      }
    })
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const date = new Date().toISOString().split("T")[0]

    login ? loginToAccount({
      name: userLogin,
      password: userPassword
    }) : createNewUser({
      name: userLogin,
      password: userPassword,
      created: date
    })
  }

  return (
    <StyledForm onSubmit={onFormSubmit}>
      {
        validateState ? 
        <StyledSendInfo sendState={validateState === "created"}>
          {validateState === "badlogged" ? "Bad login or password" : validateState === "created" ? "Account created" : "Accout with this login already exist"}
        </StyledSendInfo> : null
      }
      <StyledDiv>
        <StyledParagraph loginP activeL={login}>
          <StyledSpan onClick={() => {
            setLogin(true)
            setRegister(false)
          }}>Login</StyledSpan>
        </StyledParagraph>
        <StyledParagraph registerP activeR={register}>
          <StyledSpan onClick={() => {
            setLogin(false)
            setRegister(true)
          }}>Register</StyledSpan>
        </StyledParagraph>
      </StyledDiv>
      <StyledInput
        type="text"
        placeholder="login"
        required={true}
        pattern=".{3,20}"
        title="5 to 20 characters"
        value={userLogin}
        onChange={(e) => setUserLogin(e.target.value)}
      />
      <StyledInput
        type="password"
        placeholder="password"
        required={true}
        pattern=".{3,}"
        title="3 characters minimum"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      {
        register ? (
          <StyledInput
          type="password"
          placeholder="repeat password"
          required={true}
          pattern={userPassword}
          title="passowrds must be the same"
          value={userRePassword}
          onChange={(e) => setUserRePassword(e.target.value)}
        />
        ) : null
      }
      <StyledButton type="submit" value={register ? "Register" : "Login"} />
    </StyledForm>
  )
}

export default LoginForm
