import ContactLink from "./ContactLink/ContactLink.js"
import Copyright from "./Copyright/Copyright.js"
import { StyledFooter } from "./Footer.styled.js"
import GithubLink from "./GithubLink/GithubLink.js"

const Footer = () => {
  return (
    <StyledFooter>
      <GithubLink />
      <ContactLink />
      <Copyright />
    </StyledFooter>
  )
}

export default Footer
