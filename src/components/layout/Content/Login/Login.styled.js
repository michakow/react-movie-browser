import styled from "styled-components"

export const StyledContent = styled.main`
  flex-grow: 1;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  @media screen and (max-width: 1280px){
    padding: 30px 20px;
  }
`