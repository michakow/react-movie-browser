import { useOpinionsData } from "../../../../utils/useOpinionsData"
import OpinionForm from "../../../Forms/OpinionForm/OpinionForm"
import ListItem from "./ListItem/ListItem"
import { StyledContent, StyledHeading, StyledList, StyledLine} from "./OpinionList.styled"

const OpinionList = () => {
  const opinions = useOpinionsData()

  const deleteOpinion = (id, txt, author) => {
    fetch(`http://127.0.0.1:8888/opinions/${id}`, {
      method: "DELETE"
    })
    const deleteInfo = `${author}'s opinion has been deleted.\nOpinion: ${txt}`
    console.log(deleteInfo)

    setTimeout(() => {
      window.location.reload(true)
    }, 2000)
  }

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
        ) : opinions.opinions.length === 0 ? <StyledHeading>No opinions yet</StyledHeading> : (
          <StyledList>
            {
              opinions.opinions.slice(0).reverse().map(opinion => (
                <ListItem key={opinion.id} opinion={opinion} onDeleteOpinion={deleteOpinion} />
              ))
            }
          </StyledList>
        )
      }
    </StyledContent>
  )
}

export default OpinionList
