import styled, { css } from "styled-components"
import { ImBin } from "react-icons/im"

export const StyledWrapper = styled.div`
  position: relative;
  width: 99%;
  margin-bottom: 15px;
  padding: 10px 15px;
  background-color: #eeefef;
  box-shadow: 0 1px 10px 0 rgba(0,0,0,0.5);
  border-radius: 5px;
`

export const StyledParagraph = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};

  ${(props) => props.author && css`
    display: flex;
    margin-top: 18px;
    align-items: center;
    font-weight: bold;
  `}  
`

export const StyledSpan = styled.span`
  margin-left: 15px;
  font-size: 12px;
  font-weight: normal;
  color: #585874;
`

export const StyledDeleteButton = styled(ImBin)`
  position: absolute;
  top: 10px;
  right: 15px;
  color: #b60000;
  cursor: pointer;
`