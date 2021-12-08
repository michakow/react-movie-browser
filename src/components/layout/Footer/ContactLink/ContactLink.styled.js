import styled from "styled-components"
import { Link } from "react-router-dom"

export const StyledLink = styled(Link)`
  display: block;
  margin: 0 30px;
  padding: 2px;
  color: ${({theme}) => theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: ${({theme}) => theme.colors.textPrimaryHover};
  }
`