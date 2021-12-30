import Header from "../../components/layout/Header/Header.js"
import Footer from "../../components/layout/Footer/Footer.js"
import Login from "../../components/layout/Content/Login/Login.js"
import { StyledWrapper } from "./LoginPage.styled.js"

const LoginPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <Login />
      <Footer />
    </StyledWrapper>
  )
}

export default LoginPage
