import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

export const StyledContent = styled.main`
  flex-grow: 1;
  padding: 30px 200px;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
`

export const StyledParagraph = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${(props) => props.withLink && css`
    margin-bottom: 10px;
  `} 
`

export const StyledArrow = styled(BsArrowRight)`
  margin: 0 10px;
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