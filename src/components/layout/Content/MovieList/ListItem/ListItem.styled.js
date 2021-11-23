import styled, { css } from "styled-components"
import { GiRoundStar } from "react-icons/gi"
import { FaInfoCircle } from "react-icons/fa"


export const StyledWrapper = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #eeefef; //#eaeaea;
  /* border: 1px solid #8c8c8c; */
  box-shadow: 0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
  border-radius: 5px;

  &:hover{
    transform: scale(1.03);
  }
`

export const StyledImg = styled.img`
  display: block;
  width: 100%;
`

export const StyledParagraph = styled.p`
  margin: 10px 0;
  padding: 2px;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${(props) => props.movieName && css`
    font-size: 19px;
    font-weight: bold;
  `}  

  ${(props) => props.movieYear && css`
    margin-top: 0;
    color: #585874;
  `}

  ${(props) => props.movieTag && css`
    margin: 0 8px 8px 0;
    padding: 5px 10px;
    font-size: 15px;
    background-color: #d3d3d3;
    /* border: 1px solid #585874; */
    border-radius: 5px;
  `}

  ${(props) => props.movieRating && css`
    flex-grow: 1;
    display: flex;
    margin-bottom: 5px;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
  `} 
`

export const StyledTags = styled.div`
  width: 100%;
  margin: 10px 0 15px;
  display: flex;
  flex-wrap: wrap;
`

export const StyledRating = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
`

export const StyledStar = styled(GiRoundStar)`
  margin-right: 5px;
  align-self: flex-start;
  font-size: 25px;
  color: #fbd400;
`

export const StyledSlash = styled.span`
  font-size: 25px;
`

export const StyledVotes = styled.span`
  margin-left: 15px;
  font-style: italic;
  font-weight: normal;
  color: #585874;
`

export const StyledDetails = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: rgba(0,0,0,0.85);
  transition: 0.4s;
  overflow: hidden;

  ${(props) => props.showDetails && css`
    height: 100%;
  `} 
`

export const StyledDetailsButton = styled(FaInfoCircle)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 25px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;

  ${(props) => props.showDetails && css`
    display: none;
  `} 
`

export const StyledDetailsHeading = styled.h3`
  padding: 15px;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textPrimaryHover};
`

export const StyledDetailsParagraph = styled.p`
  padding: 15px;
  font-size: 18px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.textPrimaryHover};
`