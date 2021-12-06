import { useOpinionsData } from "../../../../utils/useOpinionsData"
import ListItem from "./ListItem/ListItem"
import { StyledContent, StyledHeading, StyledList} from "./OpinionList.styled"

const OpinionList = () => {
  const opinions = useOpinionsData()
  console.log(opinions)

  return (
    <StyledContent>
    {
      opinions.state === 'loading' ? (
        <StyledHeading>Loading..</StyledHeading>
      ) : opinions.state === 'error' ? (
        <StyledHeading>Something bad happend, please try again later :(</StyledHeading>
      ) : (
        null
      )
    }
    {
      opinions.state === 'loading' || opinions.state === 'error' ? (
        null
      ) : (
        <StyledList>
          {
            opinions.opinions.map((opinion, index) => (
              <ListItem key={index} opinion={opinion} />
            ))
          }
        </StyledList>
      )
    }
    </StyledContent>
  )
}

export default OpinionList
