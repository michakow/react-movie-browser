import styled from "styled-components"

export const StyledContent = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`

export const StyledHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledList = styled.section`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  flex-grow: 1;
  max-height: 100vh;
  overflow-y: scroll;
`