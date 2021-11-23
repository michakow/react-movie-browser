import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 8px 50px;
  background-color: ${({theme}) => theme.colors.bgPrimary}
`
