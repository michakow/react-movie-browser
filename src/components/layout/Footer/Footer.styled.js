import styled from "styled-components"

export const StyledFooter = styled.footer`
  display: flex;
  min-height: 50px;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 50px;
  background-color: #141418;

  @media screen and (max-width: 360px){
    flex-direction: column;
  }
`