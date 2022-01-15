import styled from "styled-components"

export const StyledNav = styled.nav`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 45px;

  @media screen and (max-width: 1280px){
    position: absolute;
    top: 50px;
    right: 0;
    background-color: ${({theme}) => theme.colors.bgPrimary};
    z-index: 2;
  }

  @media screen and (max-width: 305px){
    top: 60px;
  }
`

export const StyledList = styled.ul`
  display: flex;
  list-style: none;

  @media screen and (max-width: 1280px){
    flex-direction: column;
  }
`

