import { useOpinionsData } from "../../../../utils/useOpinionsData"
import OpinionForm from "../../../Forms/OpinionForm/OpinionForm"
import ListItem from "./ListItem/ListItem"
import { StyledContent, StyledHeading, StyledList, StyledLine} from "./OpinionList.styled"

const OpinionList = () => {
  const opinions = useOpinionsData()
  console.log(opinions)

  return (
    <StyledContent> 
      <OpinionForm serverState={opinions.state} />
      <StyledLine />
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
