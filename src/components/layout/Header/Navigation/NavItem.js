import { StyledItem, StyledLink } from "./NavItem.styled.js"

const NavItem = ({ item }) => {
  return (
    <StyledItem active={item.active}>
      <StyledLink to={item.pathName} >
        {item.name.toUpperCase()}
      </StyledLink>
    </StyledItem>
  )
}

export default NavItem
