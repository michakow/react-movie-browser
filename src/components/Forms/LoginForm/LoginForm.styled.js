import styled, { css } from "styled-components"

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 30%;
  margin: 60px auto 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 30px;
  background-color: #e6e6e6;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);
  border-radius: 15px;

  @media screen and (max-width: 1024px){
    width: 50%;
  }

  @media screen and (max-width: 500px){
    width: 70%;
    padding: 60px 0px;
  }

  @media screen and (max-width: 300px){
    width: 90%;
  }
`

export const StyledDiv = styled.div`
  display: flex;
  width: 80%;
  margin-bottom: 20px;
`

export const StyledParagraph = styled.p`
  font-size: 14px;
  flex-basis: 50%;
  padding: 0 5px;

  ${(props) => props.loginP && css`
    border-right: 1px solid black;
    text-align: right;
  `} 

  ${(props) => props.registerP && css`
    border-left: 1px solid black;
  `} 

  ${(props) => props.activeL === false && css`
    color: #b6b6b6;
  `} 

  ${(props) => props.activeR === false && css`
    color: #b6b6b6;
  `} 
`

export const StyledSpan = styled.span`
  padding: 5px 5px;
  cursor: pointer;
`

export const StyledInput = styled.input`
  padding: 10px 15px;
  width: 80%;
  font-size: 14px;
  margin-bottom: 10px;
  text-align: center;
`

export const StyledButton = styled.input`
  padding: 10px;
  color: #b6b6b6;
  margin-top: 15px;
  width: 80%;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: .5px;
  background-color: #23232e;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:active{
    color: #ececec;
    background-color: ${({theme}) => theme.colors.bgPrimary}
  }
`

export const StyledSendInfo = styled.p`
  position: absolute;
  width: 60%;
  top: -22px;
  left: 50%;
  padding: 8px 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  background-color: #f54a4a;
  box-shadow: 0 0px 10px 0 rgba(0,0,0,0.5);
  border-radius: 5px;
  transform: translateX(-50%);

  ${(props) => props.sendState && css`
    background-color: #afedc4;
  `} 
`
