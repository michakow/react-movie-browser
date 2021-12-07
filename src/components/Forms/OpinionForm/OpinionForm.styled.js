import styled, { css } from "styled-components"

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  background-color: #e6e6e6;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);
  border-radius: 15px;
`

export const StyledLabel = styled.label`
  ${(props) => props.author && css`
    margin: 5px 0;
  `}
`

export const StyledTextarea = styled.textarea`
  padding: 10px 15px;
  width: 100%;
  height: 100px;
  font-size: 14px;
`

export const StyledInput = styled.input`
  padding: 10px 15px;
  width: 100%;
  font-size: 14px;
`

export const StyledButton = styled.input`
  padding: 10px;
  color: #b6b6b6;
  font-weight: bold;
  font-size: 15px;
  letter-spacing: .5px;
  background-color: #23232e;
  border: none;
  border-radius: 15px;

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

export const StyledSignatureInfo = styled.p`
  margin-bottom: 20px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledSpan = styled.span`
  font-weight: bold;
`