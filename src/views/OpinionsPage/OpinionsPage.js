import Header from "../../components/layout/Header/Header.js"
import Footer from "../../components/layout/Footer/Footer.js"
import { StyledWrapper } from "./OpinionsPage.styled.js"
import OpinionList from "../../components/layout/Content/OpinionList/OpinionList.js"

const OpinionsPage = () => {
  return (
    <StyledWrapper>
      <Header />
      <OpinionList />
      <Footer />
    </StyledWrapper>
  )
}

export default OpinionsPage
