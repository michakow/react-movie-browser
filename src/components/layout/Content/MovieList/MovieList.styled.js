import styled, { css } from "styled-components"

export const StyledContent = styled.main`
  flex-grow: 1;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  @media screen and (max-width: 1280px){
    padding: 30px 100px;
  }

  @media screen and (max-width: 1380px){
    padding: 30px 50px;
  }
`

export const StyledHeading = styled.h2`
  margin-bottom: 30px;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media screen and (max-width: 720px){
    text-align: center;
  }
`

export const StyledList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 40px;
`

export const StyledPages = styled.div`
  display: flex;
  margin-top: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`

export const StyledParagraph = styled.p`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #585874;
`

export const StyledButton = styled.button`
  margin: 0 10px;
  padding: 10px;
  font-size: 15px;
  background-color: #d3d3d3;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  ${(props) => props.disabled && css`
    background-color: #d1d8dd;
    cursor: not-allowed;
  `} 
`

export const StyledSpan = styled.span`
  margin: 0 5px;
  font-weight: bold;
`