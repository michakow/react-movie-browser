import { StyledHeader } from "./Header.styled.js"
import Logo from "./Logo/Logo.js"
import Nav from "./Navigation/Nav.js"
import Search from "./Search/Search.js"

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Nav />
      <Search />
    </StyledHeader>
  )
}

export default Header
