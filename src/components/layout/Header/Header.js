import { useState } from "react"
import { StyledHeader, StyledLoginInfo, StyledLogout, StyledMenu, StyledName } from "./Header.styled.js"
import Logo from "./Logo/Logo.js"
import Nav from "./Navigation/Nav.js"
import Search from "./Search/Search.js"

const Header = () => {
  const [mobile, setMobile] = useState(() =>{
    if(window.innerWidth <= 1280) return true
    else return false
  })
  const [navActive, setNavActive] = useState(false)
  const logOut = () => {
    sessionStorage.setItem("account", JSON.stringify({ logged: false }))
    setTimeout(() => {
      window.location.reload(true)
    }, 700)
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth <= 1280) setMobile(true)
    else setMobile(false)
  })

  return (
    <StyledHeader>
      <Logo />
      {
        
        mobile ? (
          <StyledMenu onClick={() => setNavActive(!navActive)} />
        ) : (
          <>
            <Nav />
            <Search />
          </>
        )
      }
      {
        navActive ? <Nav /> : null
      }
      {
        (sessionStorage.getItem('account') ? JSON.parse(sessionStorage.getItem('account')).logged : false) ? (
        <StyledLoginInfo>Logged as: <StyledName>{JSON.parse(sessionStorage.getItem('account')).name}</StyledName>[<StyledLogout onClick={logOut}>log out</StyledLogout>]</StyledLoginInfo>) : null
      }
    </StyledHeader>
  )
}

export default Header
