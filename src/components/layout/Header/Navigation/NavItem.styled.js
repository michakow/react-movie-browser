import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const StyledItem = styled.li`
  padding: 20px;

  ${(props) => props.active === false && css`
    display: none
  `}  
`

export const StyledLink = styled(Link)`
  display: block;
  padding: 2px;
  font-size: 18px;
  color: ${({theme}) => theme.colors.textPrimary};
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;

  &:hover{
    color: ${({theme}) => theme.colors.textPrimaryHover};
  }
`