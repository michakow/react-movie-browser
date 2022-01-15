import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

export const StyledContent = styled.main`
  flex-grow: 1;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};

  @media screen and (max-width: 1280px){
    padding: 30px 100px;
  }

  @media screen and (max-width: 1024px){
    padding: 30px 50px;
  }
`

export const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${(props) => props.withLink && css`
    margin-bottom: 10px;

    @media screen and (max-width: 720px){
      margin-bottom: 20px;
    }
  `} 

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: flex-start;
  }
`

export const StyledArrow = styled(BsArrowRight)`
  margin: 0 10px;

  @media screen and (max-width: 720px){
    display: none;
  }
`

export const StyledLink = styled(Link)`
  display: block;
  color: ${({theme}) => theme.colors.textPrimary};
  text-decoration: none;
  cursor: pointer;

  &:hover{
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`