import styled from "styled-components"

export const StyledLink = styled.a`
  display: block;
  padding: 2px;
  color: ${({theme}) => theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: ${({theme}) => theme.colors.textPrimaryHover};
  }
`