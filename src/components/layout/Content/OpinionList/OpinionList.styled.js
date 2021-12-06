import styled from "styled-components"

export const StyledContent = styled.main`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`

export const StyledHeading = styled.h2`
  /* margin-top: 25px; */
  font-size: 26px;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const StyledList = styled.section`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  max-height: 70vh;
  overflow-y: scroll;
`
export const StyledLine = styled.div`
  width: 100%;
  height: 1px;
  margin: 25px auto 15px;
  background-color: ${({ theme }) => theme.colors.textPrimary};
`