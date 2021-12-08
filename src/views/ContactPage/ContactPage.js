import Header from "../../components/layout/Header/Header.js"
import Footer from "../../components/layout/Footer/Footer.js"
import Contact from "../../components/layout/Content/Contact/Contact.js"
import { StyledWrapper } from "./ContactPage.styled.js"

const ContactPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <Contact />
      <Footer />
    </StyledWrapper>
  )
}

export default ContactPage
