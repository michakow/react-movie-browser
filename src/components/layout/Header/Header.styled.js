import styled from "styled-components"

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 50px;
  background-color: ${({theme}) => theme.colors.bgPrimary};
`

export const StyledLoginInfo = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 5px 10px;
  font-size: 14px;
  transform: translateY(100%);
`

export const StyledName = styled.span`
  margin-right: 12px;
  font-weight: bold;
`

export const StyledLogout = styled.span`
  padding: 0 2px;
  color: #b6b6b6;
  cursor: pointer;
  text-transform: uppercase;

  &:hover{
    color: black;
  }
`