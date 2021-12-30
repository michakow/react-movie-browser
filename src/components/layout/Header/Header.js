import { StyledHeader, StyledLoginInfo, StyledLogout, StyledName } from "./Header.styled.js"
import Logo from "./Logo/Logo.js"
import Nav from "./Navigation/Nav.js"
import Search from "./Search/Search.js"

const Header = () => {
  const logOut = () => {
    sessionStorage.setItem("account", JSON.stringify({ logged: false }))
    setTimeout(() => {
      window.location.reload(true)
    }, 700)
  }
  return (
    <StyledHeader>
      <Logo />
      <Nav />
      <Search />
      {
        (sessionStorage.getItem('account') ? JSON.parse(sessionStorage.getItem('account')).logged : false) ? (
        <StyledLoginInfo>Logged as: <StyledName>{JSON.parse(sessionStorage.getItem('account')).name}</StyledName>[<StyledLogout onClick={logOut}>log out</StyledLogout>]</StyledLoginInfo>) : null
      }
    </StyledHeader>
  )
}

export default Header
