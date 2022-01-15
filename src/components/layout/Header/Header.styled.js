import styled from "styled-components"
import { BiMenu } from "react-icons/bi"

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  padding: 8px 50px;
  background-color: ${({theme}) => theme.colors.bgPrimary};

  @media screen and (max-width: 1280px){
    justify-content: space-between;
  }
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

export const StyledMenu = styled(BiMenu)`
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 40px;
`