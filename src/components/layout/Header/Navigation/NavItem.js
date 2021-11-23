import { StyledItem, StyledLink } from "./NavItem.styled.js"

const NavItem = ({ item }) => {
  return (
    <StyledItem>
      <StyledLink to={item.pathName}>
        {item.name.toUpperCase()}
      </StyledLink>
    </StyledItem>
  )
}

export default NavItem
