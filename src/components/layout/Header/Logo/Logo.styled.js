import styled from "styled-components"
import { BiCameraMovie } from "react-icons/bi"

export const StyledLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  color: ${({theme}) => theme.colors.textPrimary};
`

export const StyledTitle = styled.h1`
  font-size: 30px;

  @media screen and (max-width: 500px){
    font-size: 20px;
  }
`

export const StyledIcon = styled(BiCameraMovie)`
  font-size: 45px;
  margin-right: 10px;

  @media screen and (max-width: 720px){
    display: none;
  }
`